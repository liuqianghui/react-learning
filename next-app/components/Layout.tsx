import Link from "next/link";
export default function Layout({ children }) {
  return (
    <>
      <header style={{ height: 64 }}>
        <Link href="/">
          <a style={{ marginRight: 20 }}>About me</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </header>
      {children}
      <p>footer</p>
    </>
  )
}