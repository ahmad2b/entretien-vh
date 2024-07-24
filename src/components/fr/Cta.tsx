import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full bg-[#065D98] py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-50 md:text-4xl/tight">
          Demander un devis
          </h2>
          <p className="max-w-[1000px] text-white md:text-xl/relaxed lg:text-lg/relaxed">
          Prêt à expérimenter la différence Entretien VH Pro? Contactez-nous dès aujourd'hui pour demander un devis. Notre équipe travaillera avec vous pour comprendre vos besoins de nettoyage et vous fournira un devis détaillé et sans engagement. Que vous ayez besoin d'un service ponctuel ou d'un plan de nettoyage récurrent, nous sommes là pour vous aider.
          </p>
        </div>
        <Link
          href="/book-now"
          className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#065D98] shadow transition-colors hover:bg-[#56BA40] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Reserve maintenant
        </Link>
      </div>
    </section>
  );
}
