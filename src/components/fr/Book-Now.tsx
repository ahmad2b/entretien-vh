'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { z } from "zod";
import { useRouter } from 'next/navigation';

// Define the schema using Zod
const appointmentSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  phone: z.string().regex(/^\d{10}$/, "Le téléphone doit comporter 10 chiffres"),
  email: z.string().email("Adresse e-mail invalide"),
  address: z.string().min(1, "L'adresse est requise"),
});

// Define the types for form data and errors
type FormData = z.infer<typeof appointmentSchema>;
type Errors = Partial<Record<keyof FormData, { _errors: string[] }>>;

export default function BookNow() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

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
      console.log("Les données du formulaire sont valides:", validation.data);
      router.push('/success'); // Navigate to success page
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
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input id="name" placeholder="Entrez votre nom" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-xs py-2">{errors.name._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input id="phone" type="tel" placeholder="Entrez votre numéro de téléphone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500 text-xs py-2">{errors.phone._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Entrez votre email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-xs py-2">{errors.email._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="address">Adresse</Label>
            <Input id="address" placeholder="Entrez votre adresse" value={formData.address} onChange={handleChange} />
            {errors.address && <p className="text-red-500 text-xs py-2">{errors.address._errors[0]}</p>}
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#065D98] hover:bg-[#56BA40]">
            Prendre rendez-vous
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

