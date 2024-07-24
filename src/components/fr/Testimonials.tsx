import Link from "next/link";

const testimonials = [
  {
    image: "/avatar-1.jpg",
    quote:
      "Le service de nettoyage des surfaces était excellent. Notre espace de bureau n’a jamais été aussi propre et accueillant. Recommande fortement!",
    name: "Alice Johnson",
  },
  {
    image: "/avatar-2.jpg",
    quote:
      "Nous utilisons régulièrement leur service de nettoyage de flotte pour nos véhicules de société. L'équipe est professionnelle et veille à ce que notre flotte soit toujours impeccable et présentable.",
    name: "Michael Brown",
  },
  {
    image: "/avatar-3.jpg",
    quote:
      "Leur service d’élimination des graffitis était incroyablement efficace. Ils ont enlevé toute trace de graffiti de notre bâtiment, lui redonnant ainsi son aspect neuf.",
    name: "Joshua",
  },
];

export default function Testimonials() {
  return (
    <div className="py-12 md:py-24 lg:py-32 w-full">
      <section className="px-4 md:px-6">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ce que disent nos clients
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Écoutez les entreprises que nous avons aidées à transformer leur propreté
              et l'entretien.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="mx-auto flex w-full flex-col items-center justify-center p-8 space-y-4"
                >
                  <img
                    src={testimonial.image}
                    width="64"
                    height="64"
                    alt="Avatar"
                    className="rounded-full"
                  />
                  <blockquote className="text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.quote}
                    </p>
                    <cite className="mt-4 block text-sm font-semibold not-italic">
                      - {testimonial.name}
                    </cite>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
