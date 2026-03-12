import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">Result<span>Estate</span></Link>
      <nav>
        <a href="/#offer">Offer</a>
        <a href="/#system">System</a>
        <a href="/#agents">Agents</a>
        <a href="/#faq">FAQ</a>
        <a href="/#contact">Contact</a>
      </nav>
      <a className="header-cta" href="/#contact">Book pilot</a>
    </header>
  )
}
