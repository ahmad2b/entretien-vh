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
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(1, "Address is required"),
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
      console.log("Form data is valid:", validation.data);
      router.push('/success'); // Navigate to success page after validation
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Book Your Appointment</CardTitle>
        <CardDescription>Select a date and time to schedule your appointment.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            {errors.name && <p className="text-red-500 text-xs py-2">{errors.name._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="text-red-500 text-xs py-2">{errors.phone._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-xs py-2">{errors.email._errors[0]}</p>}
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your Address" value={formData.address} onChange={handleChange} />
            {errors.address && <p className="text-red-500 text-xs py-2">{errors.address._errors[0]}</p>}
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#065D98] hover:bg-[#56BA40]">
            Book Appointment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
