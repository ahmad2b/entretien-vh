import Link from "next/link";

export default function Success() {
  return (
    <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-[#065D98]">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <div className="inline-block rounded-full bg-green-100 p-4 text-[#56BA40] ">
          <CircleCheckIcon className="h-12 w-12" />
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-5xl xl:text-6xl/none">
          Rendez-vous réussi!
          </h1>
          <p className="max-w-[1000px] text-white md:text-xl">
          Notre approche globale garantit que chaque détail est pris en compte,
            et notre engagement envers un service de qualité garantit que vous serez
            satisfait des résultats.
          </p>
          {/* <blockquote className="mt-6 border-l-2 pl-6 italic text-white">
            Experience the difference with Entretien VH Pro – your trusted
            partner in commercial cleaning.
          </blockquote> */}
        </div>
      </div>
    </section>
  );
}

function CircleCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
