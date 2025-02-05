import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[70vh] w-full items-center justify-center px-4 md:h-[100vh] lg:px-24">
      <img
        src="/washing.jpg"
        alt="Pressure Washing"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 max-w-3xl space-y-6 px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold text-white drop-shadow-md md:text-6xl">
        Bienvenue chez Entretien VH Pro
        </h1>
        <p className="text-lg text-white drop-shadow-md md:text-xl">
        Bienvenue chez Entretien VH Pro, votre partenaire privilégié en solutions de nettoyage commercial. Nous sommes spécialisés dans la fourniture de services de nettoyage de haut niveau, adaptés pour répondre aux besoins uniques des entreprises de divers secteurs.

        </p>
        <Link
          href="/book-now"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#065D98] px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#035186] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
