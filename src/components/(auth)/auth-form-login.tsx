"use client";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  // FormDescription,
} from "../ui/form";
import { z } from "zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { loginAction } from "@/actions/login-action";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AuthFormLogin() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      loginAction(values).then((data) => {
        if (data?.error) toast.error(data.error);
        if (data?.success)
          toast.success(data.success, {
            action: {
              label: "Go to active",
              onClick() {
                if (data.link) router.push(data.link);
              },
            },
          });
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled={isPending} type="email" placeholder="m@example.com" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input disabled={isPending} type="password" {...field} />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center space-x-3">
          <Checkbox disabled={isPending} id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>

        <Button disabled={isPending} className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
    // <form onSubmit={handleSubmit} className="space-y-5">
    //   <div className="space-y-2">
    //     <Label htmlFor="email">Email</Label>
    //     <Input
    //       id="email"
    //       type="email"
    //       placeholder="m@example.com"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div className="space-y-2">
    //     <Label htmlFor="password">Password</Label>
    //     <Input
    //       id="password"
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div className="flex items-center space-x-3">
    //     <Checkbox id="terms" />
    //     <label
    //       htmlFor="terms"
    //       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    //       Accept terms and conditions
    //     </label>
    //   </div>
    //   <Button type="submit" className="w-full">
    //     Sign In
    //   </Button>
    // </form>
  );
}
