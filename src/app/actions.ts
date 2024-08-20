"use server";

import { Supabase } from "@/utils/supabase/server";
import { redirect, RedirectType } from "next/navigation";

// ~ =============================================>
// ~ ======= upload photos  -->
// ~ =============================================>
const upload_photo = async (file_path: string, full_path: string) => {
  const client = new Supabase().ssr_client();

  const { data, error } = await client
    .from("site_photos")
    .insert({ url: file_path, full_path })
    .select();

  if (error) {
    console.log(error);
    return null;
  }
  return data;
};

// ~ =============================================>
// ~ ======= get photo list  -->
// ~ =============================================>
const get_photos = async () => {
  const client = new Supabase().ssr_client();

  const { data: photos, error } = await client.from("site_photos").select();
  if (error) throw new Error("Error getting photos");

  return photos;
};

// ~ =============================================>
// ~ ======= login user  -->
// ~ =============================================>
const login = async (email: string, password: string) => {
  const client = new Supabase().ssr_client();
  const { error } = await client.auth.signInWithPassword({ email, password });

  if (error) throw new Error("Error Logging in");
  return redirect("/dashboard", RedirectType.replace);
};

// ~ =============================================>
// ~ ======= Add a person  -->
// ~ =============================================>
const add_person = async (person_data: any) => {
  const client = new Supabase().ssr_client();
  const { data: person, error } = await client
    .from("people")
    .insert(person_data)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Error adding person");
  }

  return person;
};

// ~ =============================================>
// ~ ======= get people list  -->
// ~ =============================================>
const get_people = async () => {
  const client = new Supabase().ssr_client();

  const { data: people, error } = await client.from("people").select();
  if (error) {
    console.log(error);
    throw new Error("Error getting people list");
  }
  return people;
};

// ~ =============================================>
// ~ ======= delete a person  -->
// ~ =============================================>
const delete_person = async (id: string) => {
  const client = new Supabase().ssr_client();

  const { data, error } = await client.from("people").delete().eq("id", id);

  return data;
};

export {
  upload_photo,
  get_photos,
  login,
  add_person,
  get_people,
  delete_person,
};
