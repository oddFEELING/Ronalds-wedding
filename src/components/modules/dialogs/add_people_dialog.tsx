"use client";

import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import { add_person } from "@/app/actions";
import { useRouter } from "next/navigation";

type ComponentProps = {};

const input_schema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  gender: z.string(),
  group: z.string(),
  invites: z.string().array(),
});

const AddPeopleDialog: FC<ComponentProps> = ({}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof input_schema>>({
    resolver: zodResolver(input_schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "male",
      email: "",
      group: "",
      invites: [],
    },
  });

  // ~ ======= handle submit -->
  const on_submit = async (data: z.infer<typeof input_schema>) => {
    const response = await add_person(data);
    if (response) {
      setOpen(false);
      router.replace("/dashboard/people");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="border-2 w-full h-44 rounded-lg col-span-1 border-dashed flex items-center justify-center gap-2
        flex-col transit cursor-pointer hover:shadow-lg"
      >
        <PlusCircle size={25} strokeWidth={1} />
        <p>Add a person</p>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Add a person</DialogTitle>{" "}
          <DialogDescription>
            Complete fields to activate persons RSVP profile.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(on_submit)}
            className="grid grid-cols-4 gap-4 gap-y-6"
          >
            {/* -- first name */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input required {...field} placeholder="John" />
                  </FormControl>
                </FormItem>
              )}
              name="first_name"
            />

            {/* -- last name */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input required {...field} placeholder="Doe" />
                  </FormControl>
                </FormItem>
              )}
              name="last_name"
            />

            {/* -- email */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input required {...field} placeholder="them@example.com" />
                  </FormControl>
                </FormItem>
              )}
              name="email"
            />

            {/* -- group */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel>
                    Group{" "}
                    <em className="text-muted-foreground text-xs">(Opt)</em>
                  </FormLabel>
                  <FormControl>
                    <Input required {...field} placeholder="Family name..." />
                  </FormControl>
                </FormItem>
              )}
              name="group"
            />

            {/* -- gender */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="select gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
              name="gender"
            />

            {/* -- invites */}
            <FormField
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-4">
                  <FormLabel>Invites</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      variant="outline"
                      type="multiple"
                      className="grid grid-cols-3 gap-3 w-full"
                      onValueChange={(value) => form.setValue("invites", value)}
                    >
                      <ToggleGroupItem value="church">Church</ToggleGroupItem>
                      <ToggleGroupItem value="private-dining">
                        Private dining
                      </ToggleGroupItem>
                      <ToggleGroupItem value="reception">
                        Reception
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>
                </FormItem>
              )}
              name="invites"
            />

            {/* -- submit */}
            <Button className="col-span-4 w-full mt-10">Add person</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPeopleDialog;
