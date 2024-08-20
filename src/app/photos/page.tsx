import React, { FC } from "react";
import Image from "next/image";
import Particles from "@/components/modules/magic/particles";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TopAppNav from "@/components/modules/navigation/top_nav";
import { LayoutGrid } from "@/components/modules/layout-grid";

type ComponentProps = {};

const PhotosPage: FC<ComponentProps> = ({}) => {
  return (
    <div className="w-full flex flex-col h-max min-h-screen relative bg-background">
      {/* -- particle component */}
      <Particles
        ease={80}
        quantity={500}
        color="#000"
        className="absolute inset-0"
      />
      {/* -- flower image */}
      <div className="w-[450px] lg:w-[550px] xl:w-[600px]">
        <AspectRatio ratio={16 / 10}>
          <Image
            src="/images/bg-image-1.png"
            alt="hero img"
            fill
            className="object-center object-cver"
          />
        </AspectRatio>
      </div>

      <TopAppNav />
      <main className="w-full flex flex-col items-center gap-5 mt-10 lg:py-20 relative px-5 md:px-10 lg:px-20"></main>
    </div>
  );
};

export default PhotosPage;
