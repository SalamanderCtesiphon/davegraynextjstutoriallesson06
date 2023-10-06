import Link from "next/link"


export default function Footer() {
  const currentYear =  new Date().getFullYear();
  return (
    <footer className="h-10 text-center dark:text-white">
      <Link href="https://github.com/SalamanderCtesiphon">Copyright &copy; {currentYear}</Link>
    </footer>
  )
}
