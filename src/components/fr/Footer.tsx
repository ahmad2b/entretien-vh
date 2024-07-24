import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 py-4 lg:px-24">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 sm:flex-row sm:gap-0">
        <Link href="#" className="flex items-center" prefetch={false}>
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
        <nav className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Maison
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            À propos
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Prestations de service
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:items-end">
          <p>entretien@vhpro.ca</p>
          <p>514 2746 654</p>
        </div>
      </div>
    </footer>
  );
}
