import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between bg-white px-4 dark:bg-gray-800 lg:px-24">
      <div>
        <Link href="#" className="flex items-center" prefetch={false}>
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
      </div>
      <nav className="hidden space-x-8 lg:flex">
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          
        >
          Reviews
        </Link>
        <Link
          href="/book-now"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/fr">
          <Button
            variant="link"
            className="hidden text-sm text-[#065D98] md:block"
          >
            French
          </Button>
        </Link>
        <Link href="tel:5142746654" className="flex h-7 items-center rounded-full bg-[#065D98] p-4 text-sm text-white hover:bg-[#035186] sm:h-8">
        <PhoneCall className="size-4 mr-2" /> 
        <span>

        5142746654
        </span>

        </Link>
        
      </div>
    </div>
  );
}
