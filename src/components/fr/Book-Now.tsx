import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";

// Define the schema using Zod
const appointmentSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Adresse email invalide"),
  téléphone: z.string().regex(/^\d{10}$/, "Le téléphone doit comporter 10 chiffres"),
});

type FormData = z.infer<typeof appointmentSchema>;
type Errors = Partial<Record<keyof FormData, { _errors: string[] }>>;

export default function BookNow() {
  const [formData, setFormData] = useState<FormData>({
    nom: "",
    email: "",
    téléphone: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = appointmentSchema.safeParse(formData);
    if (!validation.success) {
      const errorMessages = validation.error.format();
      setErrors(errorMessages);
    } else {
      setErrors({});
      // Handle successful form submission
      console.log("Données du formulaire valides:", validation.data);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Prenez votre rendez-vous</CardTitle>
        <CardDescription>Sélectionnez une date et une heure pour planifier votre rendez-vous.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex-col items-start w-full h-auto">
                  <span className="font-semibold uppercase text-[0.65rem]">Date</span>
                  <span className="font-normal">Sélectionnez une date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex-col items-start w-full h-auto">
                  <span className="font-semibold uppercase text-[0.65rem]">Temps</span>
                  <span className="font-normal">Sélectionnez une heure</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <div className="grid grid-cols-3 gap-2 p-4">
                  <Button variant="ghost" size="sm">
                    9:00 AM
                  </Button>
                  <Button variant="ghost" size="sm">
                    10:00 AM
                  </Button>
                  <Button variant="ghost" size="sm">
                    11:00 AM
                  </Button>
                  <Button variant="ghost" size="sm">
                    1:00 PM
                  </Button>
                  <Button variant="ghost" size="sm">
                    2:00 PM
                  </Button>
                  <Button variant="ghost" size="sm">
                    3:00 PM
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor="nom">Nom</Label>
            <Input id="nom" placeholder="Entrez votre nom" value={formData.nom} onChange={handleChange} />
            {errors.nom && <p className="text-red-500">{errors.nom._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Entrer votre Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500">{errors.email._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="téléphone">Téléphone</Label>
            <Input id="téléphone" type="tel" placeholder="Entrez votre numéro de téléphone" value={formData.téléphone} onChange={handleChange} />
            {errors.téléphone && <p className="text-red-500">{errors.téléphone._errors[0]}</p>}
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#065D98] hover:bg-[#56BA40]">
            Prendre rendez-vous
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
