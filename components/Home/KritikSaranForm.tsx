"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NoWa1 } from "data/NoWa";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama wajib diisi",
  }),
  review: z.string().min(10, {
    message: "Ulasan minimal 10 karakter",
  }),
});

const KritikSaranForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      review: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `Halo, saya *${values.name}* ingin memberikan testimoni:\n\n${values.review}`;
    const whatsappUrl = `https://wa.me/${NoWa1}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Anda</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="review"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ulasan Anda</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Berikan ulasan Anda di sini..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Kirim Testimoni</Button>
      </form>
    </Form>
  );
};

export default KritikSaranForm;
