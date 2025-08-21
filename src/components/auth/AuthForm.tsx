'use client';

import { useState } from 'react';
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
  const [resetEmailSent, setResetEmailSent] = useState(false);

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
      router.push("/admin");
    }
  };

  const handleForgotPassword = async () => {
    const email = form.getValues('email');
    if (!email) {
      toast.error('Please enter your email address to reset your password.');
      return;
    }
  
    toast.loading("Sending password reset email...");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/auth/reset-password`,
    });
  
    toast.dismiss();
  
    if (error) {
      console.error("Error sending password reset email:", error);
      toast.error(error.message);
    } else {
      setResetEmailSent(true);
      toast.success("Password reset link sent to your email!");
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
        {resetEmailSent ? (
          <p className="text-center text-sm text-white/70">
            A password reset link has been sent to your email. 
            Please check your inbox to continue.
          </p>
        ) : (
          <>
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
                <p className="text-center text-sm">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-gray-400 hover:text-white hover:underline transition-colors duration-200"
                  >
                    Forgot password?
                  </button>
                </p>
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
          </>
        )}
      </div>
    </>
  );
}
