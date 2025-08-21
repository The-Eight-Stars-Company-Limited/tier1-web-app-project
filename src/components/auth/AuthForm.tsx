'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from 'sonner';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import { AuthFormSchema, authFormSchema } from "@/lib/schemas/authFormSchema";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const form = useForm<AuthFormSchema>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: AuthFormSchema) => {
    toast.loading("Signing in...");
    
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    
    toast.dismiss();

    if (error) {
      console.error("Error signing in:", error);
      toast.error(error.message);
    } else {
      toast.success("Signed in successfully! Redirecting...");
      router.refresh();
    }
  };

  const handleGoogleSignIn = async () => {
    toast.loading("Redirecting to Google...");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.dismiss();
      console.error("Error with Google sign-in:", error);
      toast.error("Failed to sign in with Google. Please try again.");
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
      
      <div className="w-[350px] max-w-md p-8 space-y-8 bg-theme-blue rounded-[32px] shadow-xl">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-poppins text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...form.register("email")}
              className="border-white focus-visible:ring-white focus-visible:ring-2 text-white text-md bg-white/20"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm font-poppins">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="font-poppins text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...form.register("password")}
              className="border-white focus-visible:ring-white focus-visible:ring-2 text-white text-md bg-white/20"
            />
            {form.formState.errors.password && (
              <p className="text-red-500 text-sm font-poppins">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full font-poppins bg-white text-gray-900 rounded-full shadow-lg cursor-pointer hover:bg-white/90 active:bg-white/70 active:ring-1 active:ring-white transition-colors duration-100 py-5"
          >
            {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t text-white/50"></span>
          </div>
          <div className="relative flex justify-center font-poppins text-xs uppercase">
            <span className="bg-theme-blue px-2 text-white/70">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          onClick={handleGoogleSignIn}
          className="
            w-full font-poppins bg-white text-gray-900 rounded-full shadow-lg cursor-pointer 
            hover:bg-white/70 hover:text-black/70 transition-colors duration-100 py-5
          ">
          Sign In with Google
        </Button>
      </div>
    </>
  );
}