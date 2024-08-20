"use client";

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Particles from "@/components/modules/magic/particles";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { login } from "@/app/actions";

type ComponentProps = {};
const login_schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const LoginPage: FC<ComponentProps> = ({}) => {
  const form = useForm<z.infer<typeof login_schema>>({
    resolver: zodResolver(login_schema),
  });

  const on_submit = async (data: z.infer<typeof login_schema>) => {
    await login(data.email, data.password);
  };

  return (
    <div className="w-full bg-background flex items-center h-dvh justify-center relative">
      <Particles
        quantity={100}
        ease={80}
        color="#000"
        className="absolute inset-0"
      />
      <Link href="/" className="absolute top-10 text-lg font-semibold">
        Home
      </Link>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(on_submit)}
          className="w-full max-w-xl shadow-lg bg-neutral-100 z-10 rounded-xl py-16 px-10 border border-gray-300 grid gap-5"
        >
          <p className="font-text2 w-full text-center">R & V</p>
          <h1 className="text-center font-text3">Ronald & Vanessa</h1>
          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="email"
          />

          <FormField
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="'password"
                    placeholder="* * * * * * * * *"
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            name="password"
          />

          <Button type="submit" className="mt-5">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
