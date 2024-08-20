import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";

type ComponentProps = {};

const TopAppNav: FC<ComponentProps> = ({}) => {
  return (
    <nav className="w-full flex items-center justify-between px-5 lg:px-28 lg:mt-20 py-1.5 z-50">
      <h3 className="font-text2 font-bold text-sm md:text-lg lg:text-xl">
        R &middot; &nbsp;& &middot; &nbsp;V
      </h3>

      <div className="hidden lg:flex items-center justify-center gap-8">
        {nav_links.map((item: { title: string; href: string }, idx: number) => (
          <Link href={item.href} className="text-lg">
            {item.title}
          </Link>
        ))}
      </div>

      <Button variant="outline" className="px-10 hidden lg:inline-block">
        RSVP
      </Button>

      <Popover>
        <PopoverTrigger className="p-1 lg:hidden rounded-md border border-gray-300 flex items-center justify-center gap-2">
          <Menu size={18} strokeWidth={1.5} /> Menu
        </PopoverTrigger>
        <PopoverContent className="bg-background w-44">
          <div className="flex flex-col justify-center gap-3">
            {nav_links.map(
              (item: { title: string; href: string }, idx: number) => (
                <Link href={item.href} className="font-text1">
                  {item.title}
                </Link>
              ),
            )}
          </div>
          <Button variant="outline" className="h-8 mt-5 w-full">
            RSVP
          </Button>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default TopAppNav;

// ~ =============================================>
// ~ ======= nav data  -->
// ~ =============================================>
const nav_links: { title: string; href: string }[] = [
  { title: "Photos", href: "/photos" },
  { title: "Wedding party", href: "/wedding" },
  { title: "Q & A", href: "/q_and_a" },
  { title: "Registry", href: "https://monzo.me/vanessastewart2" },
];
