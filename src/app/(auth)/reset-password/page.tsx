'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster, toast } from 'sonner';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { ResetPasswordSchema, resetPasswordSchema } from "@/lib/schemas/resetPasswordSchema";


export default function ResetPasswordPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordSchema) => {
    toast.loading("Updating password...");
    
    // update password
    const { error } = await supabase.auth.updateUser({ password: data.password });
  
    toast.dismiss();
  
    if (error) {
      console.error("Error updating password:", error);
      toast.error(error.message);
    } else {
      toast.success("Password updated successfully! Redirecting...");
      // After a successful password update, redirect the user back to the login page
      router.push("/auth/login");
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
      
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-[350px] max-w-md p-8 space-y-8 bg-theme-blue rounded-[32px] shadow-xl">
          <h2 className="text-3xl font-bold text-center text-white">
            Update Password
          </h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="font-poppins text-white">
                New Password
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="font-poppins text-white">
                Confirm New Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...form.register("confirmPassword")}
                className="border-white focus-visible:ring-white focus-visible:ring-2 text-white text-md bg-white/20"
              />
              {form.formState.errors.confirmPassword && (
                <p className="text-red-500 text-sm font-poppins">
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full font-poppins bg-white text-gray-900 rounded-full shadow-lg cursor-pointer hover:bg-white/90 active:bg-white/70 active:ring-1 active:ring-white transition-colors duration-100 py-5"
            >
              {form.formState.isSubmitting ? "Updating..." : "Update Password"}
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}