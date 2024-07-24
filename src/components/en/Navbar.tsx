import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

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
          prefetch={false}
        >
          Services
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
        >
          Reviews
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          prefetch={false}
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
        <div className="flex h-7 items-center gap-x-1.5 rounded-full bg-[#065D98] p-4 text-xs text-white hover:bg-[#035186] sm:h-8">
          <PhoneCall size={14} /> 5142746654
        </div>
      </div>
    </div>
  );
}
