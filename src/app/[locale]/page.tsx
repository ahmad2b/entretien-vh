import EnCta from "@/components/en/Cta";
import EnHero from "@/components/en/Hero";
import EnHowItWorks from "@/components/en/How-it-works";
import EnServices from "@/components/en/Services";
import EnTestimonials from "@/components/en/Testimonials";
import FrCta from "@/components/fr/Cta";
import FrHero from "@/components/fr/Hero";
import FrHowItWorks from "@/components/fr/How-it-works";
import FrServices from "@/components/fr/Services";
import FrTestimonials from "@/components/fr/Testimonials";

interface HomePageProps {
  params: {
    locale: string;
  };
}

export default function Home({ params }: HomePageProps) {
  console.log("Page Locale", params.locale);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {params.locale === "fr" ? <FrHero /> : <EnHero />}
      {params.locale === "fr" ? <FrServices /> : <EnServices />}
      {params.locale === "fr" ? <FrHowItWorks /> : <EnHowItWorks />}
      {params.locale === "fr" ? <FrTestimonials /> : <EnTestimonials />}
      {params.locale === "fr" ? <FrCta /> : <EnCta />}
    </main>
  );
}
