import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from 'sonner';
import { contactFormSchema, type ContactFormSchema } from "@/lib/schemas/contactFormSchema";
import { supabase } from '@/lib/supabase/client';


interface ContactFormProps {
  formType: "inquiry" | "quote";
}

function ContactForm({ formType }: ContactFormProps) {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    toast.loading("Sending your message..."); // toast load message
  
    const { error } = await supabase
      .from('contact_forms')
      .insert([
        {
          ...data,
          form_type: formType,
        }
      ]);
  
    toast.dismiss(); // dismissing toast message
  
    if (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } else {
      toast.success("Your message has been sent successfully!");
      form.reset();
    }
  };

  return (
    <>
      <Toaster 
        richColors 
        position="top-center" 
        toastOptions={{
          className: "bg-white border border-none",
        }}
      />
      <form onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 bg-theme-blue/80 p-6 rounded-[32px]"
        >
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-poppins text-white">
            Full Name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            {...form.register("fullName")}
            className="
            border-white
            focus-visible:ring-white
            focus-visible:ring-2
            text-white text-md
            bg-white/20
            "
          />
          {form.formState.errors.fullName && (
              <p className="text-red-500 text-sm font-poppins">
                  {form.formState.errors.fullName.message}
              </p>
          )}
        </div>

        {/* Email */} 
        <div className="space-y-2">
          <Label htmlFor="email" className="font-poppins text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...form.register("email")}
            className="
            border-white
            focus-visible:ring-white
            focus-visible:ring-2
            text-white text-md
            bg-white/20
            "
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm font-poppins">
                {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <Label htmlFor="subject" className="font-poppins text-white">
            Subject
          </Label>
          <Input
            id="subject"
            type="text"
            placeholder="What is your message about?"
            {...form.register("subject")}
            className="
            border-white
            focus-visible:ring-white
            focus-visible:ring-2
            text-white text-md
            bg-white/20
            "
          />
          {form.formState.errors.subject && (
              <p className="text-red-500 text-sm font-poppins">
                  {form.formState.errors.subject.message}
              </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-poppins text-white">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your message here..."
            {...form.register("message")}
            className="
            border-white
            focus-visible:ring-white
            focus-visible:ring-2
            text-white text-md
            bg-white/20
            "
          />
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm font-poppins">
                {form.formState.errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center mx-auto">
          <Button 
            type="submit" 
            className="
              w-[50%] font-poppins bg-white text-theme-blue
              rounded-full shadow-lg cursor-pointer 
              hover:bg-white/70 hover:text-black/70
              active:bg-theme-blue/70 active:text-white 
              active:ring-1 active:ring-white
              transition-colors duration-100 py-5
            ">
            Send Message
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
