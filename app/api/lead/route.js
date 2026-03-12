import { appendFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request) {
  try {
    const body = await request.json()
    const required = ['name', 'email', 'company', 'leadVolume', 'problem']
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === '') {
        return Response.json({ error: `Missing field: ${field}` }, { status: 400 })
      }
    }

    const payload = {
      ...body,
      submittedAt: new Date().toISOString(),
      source: 'resultestate.com',
    }

    if (process.env.SALES_WEBHOOK_URL) {
      const webhookRes = await fetch(process.env.SALES_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!webhookRes.ok) {
        return Response.json({ error: 'Lead webhook failed' }, { status: 502 })
      }
    } else {
      const dir = path.join(process.cwd(), 'data')
      await mkdir(dir, { recursive: true })
      await appendFile(path.join(dir, 'leads.ndjson'), JSON.stringify(payload) + '\n')
    }

    return Response.json({
      ok: true,
      message: process.env.SALES_WEBHOOK_URL
        ? 'Thanks — your pilot inquiry was sent.'
        : 'Thanks — your pilot inquiry was captured. Add SALES_WEBHOOK_URL to forward submissions automatically.'
    })
  } catch (error) {
    return Response.json({ error: 'Could not process inquiry' }, { status: 500 })
  }
}
