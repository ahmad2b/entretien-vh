import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 px-4 lg:px-24 bg-white dark:bg-gray-800">
      <div>
        <Link href="#" className="flex items-center" prefetch={false}>
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
      </div>
      <nav className="lg:flex hidden space-x-8">
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Prestations de service hmhm
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          À propos
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Commentaires
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
      <Link href="/en">
          <Button variant="link" className="text-sm text-[#065D98] hidden md:block">
            English
          </Button>
        </Link>
        <div className="h-7 gap-x-1.5 text-xs sm:h-8 flex text-white items-center bg-[#065D98] hover:bg-[#035186] p-4 rounded-full">
          <PhoneCall size={14} /> 5142746654
        </div>
      </div>

 
    </div>
  );
}
