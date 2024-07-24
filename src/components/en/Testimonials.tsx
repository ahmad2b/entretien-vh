const testimonials = [
  {
    image: "/avatar-1.jpg",
    quote:
      "The surface cleaning service was top-notch. Our office space has never looked cleaner and more inviting. Highly recommend!",
    name: "Alice Johnson",
  },
  {
    image: "/avatar-2.jpg",
    quote:
      "We regularly use their fleet cleaning service for our company vehicles. The team is professional and ensures our fleet is always spotless and presentable.",
    name: "Michael Brown",
  },
  {
    image: "/avatar-3.jpg",
    quote:
      "Their graffiti removal service was incredibly efficient. They removed all traces of graffiti from our building, making it look brand new again.",
    name: "Joshua",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
      <section className="px-4 md:px-6">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from the businesses we&apos;ve helped transform their
              cleanliness and maintenance.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="mx-auto flex w-full flex-col items-center justify-center space-y-4 p-8"
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
