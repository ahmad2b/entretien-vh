import React from "react";

import EnBookNow from "@/components/en/Book-Now";
import FrBookNow from "@/components/fr/Book-Now";


interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function page({ params }: HomePageProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-12 md:py-24 lg:py-32">
      {params.locale === "fr" ? <FrBookNow /> : <EnBookNow />}
    </div>
  );
}
