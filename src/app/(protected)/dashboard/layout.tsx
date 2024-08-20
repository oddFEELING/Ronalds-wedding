"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { ChevronLeft, House, LayoutPanelLeft, Users } from "lucide-react";

import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/modules/navigation/sidebar";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

type ComponentProps = {
  children: React.ReactNode;
};

const DashClientLayout: FC<ComponentProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? (
              <p className="font-text3 font-semibold text-xl line-clamp-1">
                Ronald & Vanessa
              </p>
            ) : (
              <p className="text-lg font-bold font-text2">RV</p>
            )}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Admin user",
                href: "#",
                icon: (
                  <Image
                    src="/images/image-1.jpeg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard children={children} />
    </div>
  );
};

export default DashClientLayout;

// ~ =============================================>
// ~ ======= sidebar links  -->

// ~ =============================================>
const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <House className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "People",
    href: "/dashboard/people",
    icon: (
      <Users className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Photos",
    href: "/dashboard/photos",
    icon: (
      <LayoutPanelLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <ChevronLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

// Dummy dashboard component with content
const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1">
      <ScrollArea className="w-full h-full rounded-tl-2xl border border-neutral-200">
        <div className="dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full items-center">
          {children}
        </div>
      </ScrollArea>
    </div>
  );
};
