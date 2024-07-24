"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const services = [
  {
    title: "Nettoyage de bureaux",
    description:
      "Un environnement de bureau propre est crucial pour la productivité et la santé de vos employés. Nous proposons des services complets de nettoyage de bureaux, notamment le dépoussiérage, l’aspiration, l’enlèvement des déchets, l’assainissement des toilettes, etc.",
    image: "/office-cleaning.jpg",
    alt: "Nettoyage de bureaux",
    category: "Nettoyage intérieur",
  },
  {
    title: "Nettoyage des espaces communs",
    description:
      "Les espaces partagés nécessitent une attention méticuleuse pour maintenir la propreté et l’hygiène. Nos services de nettoyage des espaces communs garantissent que les halls, couloirs et autres espaces communs sont impeccables.",
    image: "/common-areas-cleaning.jpg",
    alt: "Nettoyage des espaces communs",
    category: "Nettoyage intérieur",
  },
  {
    title: "Entretien de tout le bâtiment",
    description:
      "Nos services d’entretien de l’ensemble de votre bâtiment comprennent le nettoyage et l’entretien complets de l’ensemble de votre installation. Des routines de nettoyage quotidiennes aux nettoyages périodiques en profondeur, nous veillons à ce que votre bâtiment reste en parfait état.",
    image: "/whole-building-maintenance.jpg",
    alt: "Entretien de tout le bâtiment",
    category: "Nettoyage intérieur",
  },
  {
    title: "Nettoyage après construction",
    description:
      "Les projets de construction laissent derrière eux de la poussière et des débris. Nos services de nettoyage après construction garantissent que votre nouvel espace est impeccable et prêt à être utilisé.",
    image: "/after-construction-cleaning.jpg",
    alt: "Nettoyage après construction",
    category: "Nettoyage intérieur",
  },
  {
    title: "Nettoyage des bennes à ordures",
    description:
      "Garder vos bennes propres et sans odeurs est essentiel au maintien d’un environnement sanitaire. Nos services de nettoyage de bennes veillent à ce que ces zones soient soigneusement nettoyées et désinfectées.",
    image: "/dumpster-cleaning.jpg",
    alt: "Nettoyage des bennes à ordures",
    category: "Services extérieurs",
  },
  {
    title: "Suppression des graffitis",
    description:
      "Les graffitis peuvent être une nuisance visuelle et nuire à l’image de votre entreprise. Nos services d’élimination des graffitis redonnent rapidement et efficacement à votre propriété son état d’origine.",
    image: "/graffiti-removal.jpg",
    alt: "Suppression des graffitis",
    category: "Services extérieurs",
  },
  {
    title: "Garages intérieurs et terrains de stationnement",
    description:
      "Nous fournissons des services de nettoyage approfondis des garages intérieurs, des stationnements et des trottoirs, garantissant que ces zones à fort trafic restent propres et sécuritaires pour les utilisateurs.",
    image: "/indoor-garages-parking-lots.jpg",
    alt: "Garages intérieurs et terrains de stationnement",
    category: "Services extérieurs",
  },
  {
    title: "Services de lavage sous pression d’équipements industriels",
    description:
      "Nos services spécialisés de lavage sous pression pour équipements industriels aident à maintenir les machines en parfait état, prolongeant leur durée de vie et garantissant des performances optimales.",
    image: "/truck-cleaning.jpeg",
    alt: "Industrial Equipment Pressure Washing Services",
    category: "Nettoyage de l'équipement",
  },
];

// Special service available in all categories
const specialService = {
  title: "Services sur mesure à la demande",
  description:
    "Nous comprenons que chaque client a des besoins spécifiques. Nos services sur mesure à la demande garantissent que nous répondons exactement à vos exigences, en vous proposant des plans de nettoyage personnalisés adaptés à votre entreprise. Nous travaillons en étroite collaboration avec vous pour créer un programme et un plan de nettoyage adaptés à vos besoins et à votre budget.",
  image: "/tailored-services.jpg",
  alt: "Services sur mesure à la demande",
  category: "All",
};

export default function Services() {
  const params = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Nettoyage intérieur");

  const filteredServices = [
    ...services.filter((service) => service.category === selectedCategory),
    specialService, // Adding the special service at the end
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Nos services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nous proposons une large gamme de services pour aider votre entreprise à réussir.
            Du nettoyage des surfaces à l’élimination des graffitis, nous avons ce qu’il vous faut.
            </p>
          </div>
          <div className="flex space-x-4">
            {["Nettoyage intérieur", "Services extérieurs", "Nettoyage de l'équipement"].map(
              (category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full ${
                    selectedCategory === category
                      ? "bg-[#065D98] text-white"
                      : "bg-white text-[#065D98]"
                  } hover:bg-[#065D98] hover:text-white transition-colors duration-200 ease-in-out`}
                >
                  {category}
                </Button>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 rounded-lg p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative w-full h-60 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
              <Button className="rounded-full bg-[#065D98] hover:bg-[#56BA40]">
              Reserve maintenant
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
