"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const services = [
  {
    title: "Office Cleaning",
    description:
      "A clean office environment is crucial for the productivity and health of your employees. We offer comprehensive office cleaning services, including dusting, vacuuming, trash removal, restroom sanitation, and more.",
    image: "/office-cleaning.jpg",
    alt: "Office Cleaning",
    category: "Indoor Cleaning",
  },
  {
    title: "Common Areas Cleaning",
    description:
      "Shared spaces require meticulous attention to maintain cleanliness and hygiene. Our common areas cleaning services ensure that lobbies, hallways, and other communal areas are spotless.",
    image: "/common-areas-cleaning.jpg",
    alt: "Common Areas Cleaning",
    category: "Indoor Cleaning",
  },
  {
    title: "Whole Building Maintenance",
    description:
      "Our whole building maintenance services encompass comprehensive cleaning and upkeep of your entire facility. From daily cleaning routines to periodic deep cleans, we ensure your building remains in pristine condition.",
    image: "/whole-building-maintenance.jpg",
    alt: "Whole Building Maintenance",
    category: "Indoor Cleaning",
  },
  {
    title: "After Construction Cleaning",
    description:
      "Construction projects leave behind dust and debris. Our after construction cleaning services ensure that your new space is spotless and ready for use.",
    image: "/after-construction-cleaning.jpg",
    alt: "After Construction Cleaning",
    category: "Indoor Cleaning",
  },
  {
    title: "Dumpster Cleaning",
    description:
      "Keeping your dumpsters clean and odor-free is essential for maintaining a sanitary environment. Our dumpster cleaning services ensure that these areas are thoroughly cleaned and disinfected.",
    image: "/dumpster-cleaning.jpg",
    alt: "Dumpster Cleaning",
    category: "Outside Services",
  },
  {
    title: "Graffiti Removal",
    description:
      "Graffiti can be an eyesore and affect your business’s image. Our graffiti removal services quickly and efficiently restore your property to its original condition.",
    image: "/graffiti-removal.jpg",
    alt: "Graffiti Removal",
    category: "Outside Services",
  },
  {
    title: "Indoor Garages and Parking Lots",
    description:
      "We provide thorough cleaning services for indoor garages and parking lots, sidewalks, ensuring these high-traffic areas remain clean and safe for users.",
    image: "/indoor-garages-parking-lots.jpg",
    alt: "Indoor Garages and Parking Lots",
    category: "Outside Services",
  },
  {
    title: "Industrial Equipment Pressure Washing Services",
    description:
      "Our specialized pressure washing services for industrial equipment help maintain machinery in top condition, extending its lifespan and ensuring optimal performance.",
    image: "/truck-cleaning.jpeg",
    alt: "Industrial Equipment Pressure Washing Services",
    category: "Equipment Cleaning",
  },
];

// Special service available in all categories
const specialService = {
  title: "Tailored Services on Demand",
  description:
    "We understand that each client has specific needs. Our tailored services on demand ensure that we meet your exact requirements, delivering personalized cleaning plans that suit your business. We work closely with you to create a cleaning schedule and plan that fits your needs and budget.",
  image: "/tailored-services.jpg",
  alt: "Tailored Services",
  category: "All",
};

export default function Services() {
  const params = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Indoor Cleaning");

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
              Our Services
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services to help your business succeed.
              From surface cleaning to graffiti removal, we've got you covered.
            </p>
          </div>
          <div className="flex space-x-4">
            {["Indoor Cleaning", "Outside Services", "Equipment Cleaning"].map(
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
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
