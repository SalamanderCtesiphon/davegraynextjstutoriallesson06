import Link from "next/link"


export default function Footer() {
  const currentYear =  new Date().getFullYear();
  return (
    <footer className="object-position: bottom">
      <Link href="https://github.com/SalamanderCtesiphon">SeamusQuixote &copy;{currentYear}</Link>
    </footer>
  )
}
