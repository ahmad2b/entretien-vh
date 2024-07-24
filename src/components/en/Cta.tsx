import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full bg-[#065D98] py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-50 md:text-4xl/tight">
          Request a Quote
          </h2>
          <p className="max-w-[1000px] text-white md:text-xl/relaxed lg:text-lg/relaxed">
          Ready to experience the Entretien VH Pro difference? Contact us today to request a quote. Our team will work with you to understand your cleaning needs and provide a detailed, no-obligation quote. Whether you need a one-time service or a recurring cleaning plan, we are here to help.
          </p>
        </div>
        <Link
          href="/book-now"
          className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#065D98] shadow transition-colors hover:bg-[#56BA40] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
