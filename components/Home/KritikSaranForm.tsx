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
import { NoWa } from "@/data/NoWa";
import { toast } from "sonner";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus lebih dari 2 karakter.",
  }),
  message: z.string().min(10, {
    message: "Pesan harus lebih dari 10 karakter.",
  }),
});

export function KritikSaranForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const message = `Halo, saya ${data.name}, ingin memberikan testimoni: ${data.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${NoWa}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    toast.success("Terima kasih atas ulasan Anda!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Anda</FormLabel>
              <FormControl>
                <Input placeholder="Contoh: Budi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ulasan Anda</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Bagaimana pendapat Anda tentang produk dan layanan kami?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Kirim Testimoni
        </Button>
      </form>
    </Form>
  );
}
