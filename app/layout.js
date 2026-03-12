import './globals.css'

export const metadata = {
  title: 'ResultEstate',
  description: 'AI appointment engine for real estate teams',
  metadataBase: new URL('https://resultestate.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
