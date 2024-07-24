import React from "react";

import EnSuccess from "@/components/en/Success";
import FrSuccess from "@/components/fr/Success";


interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function page({ params }: HomePageProps) {
  return (
    <div className="flex min-h-screen">
      {params.locale === "fr" ? <FrSuccess /> : <EnSuccess />}
    </div>
  );
}
