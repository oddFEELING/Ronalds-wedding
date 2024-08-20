import React, { FC } from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect, RedirectType } from "next/navigation";

type ComponentProps = {
  children: React.ReactNode;
};

const DashLayout: FC<ComponentProps> = async ({ children }) => {
  const client = createClient();
  const {
    data: { user },
    error,
  } = await client.auth.getUser();

  if (!user || error) redirect("/login", RedirectType.replace);

  return <React.Fragment>{children}</React.Fragment>;
};

export default DashLayout;
