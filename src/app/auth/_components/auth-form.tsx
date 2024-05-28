'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

export function AuthForm() {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);

    await signIn('email', { email: data.email });
  });

  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign in </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to receive a sign-in link.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            {...form.register('email')}
          />
        </div>
        <Button className="w-full" type="submit">
          Enviar email
        </Button>
      </form>
    </div>
  );
}
