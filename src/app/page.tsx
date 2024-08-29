import React, { FC } from "react";
import Image from "next/image";
import Particles from "@/components/modules/magic/particles";
import WordRotate from "@/components/modules/magic/word-rotate";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TopAppNav from "@/components/modules/navigation/top_nav";
import { Separator } from "@/components/ui/separator";
import Marquee from "@/components/modules/magic/marquee";
import ContentSection from "@/components/content";

type ComponentProps = {};
const rotating_words = ["Hello", "world"];
const images = [
  "/images/image-1.jpeg",
  "/images/image-2.jpeg",
  "/images/image-3.jpeg",
  "/images/image-4.jpeg",
];

const RootPage: FC<ComponentProps> = ({}) => {
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
      {/*<div className="w-[450px] lg:w-[550px] xl:w-[600px]">*/}
      {/*  <AspectRatio ratio={16 / 10}>*/}
      {/*    <Image*/}
      {/*      src="/images/bg-image-1.png"*/}
      {/*      alt="hero img"*/}
      {/*      fill*/}
      {/*      className="object-center object-cver"*/}
      {/*    />*/}
      {/*  </AspectRatio>*/}
      {/*</div>*/}

      {/* ####################################### */}
      {/* -- Header */}
      {/* ####################################### */}
      {/*<header className="w-full h-max min-h-[300px] flex flex-col gap-2 items-center relative -mt-20 lg:-mt-40 text-center">*/}
      {/*  <p className="font-text1 text-lg lg:text-xl">We are getting married</p>*/}
      {/*  <h1 className="font-text3 font-semibold text-5xl lg:text-7xl">*/}
      {/*    Ronald & Vanessa*/}
      {/*  </h1>*/}

      {/*  /!* -- navbar *!/*/}
      {/*  <TopAppNav />*/}

      {/*  /!* -- hero image *!/*/}
      {/*  <div*/}
      {/*    className=" w-full max-w-7xl flex mt-5 items-center justify-center relative rounded-lg md:rounded-xl overflow-hidden*/}
      {/*   shadow-xl"*/}
      {/*  >*/}
      {/*    <div className="w-[95%] h-[93%] rounded-lg border-2 border-white bg-transparent absolute z-10" />*/}
      {/*    <AspectRatio ratio={16 / 9}>*/}
      {/*      <Image*/}
      {/*        src="/images/image-1.jpeg"*/}
      {/*        alt=""*/}
      {/*        fill*/}
      {/*        className="object-cover"*/}
      {/*      />*/}
      {/*    </AspectRatio>*/}
      {/*  </div>*/}
      {/*</header>*/}
      <header className="w-full h-[100dvh] flex relative items-center justify-center">
        <Image
          src="/images/image-4.jpeg"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative h-full w-full flex items-center justify-center gap-12 flex-col bg-black/60">
          <h1 className="font-text1 font-semibold text-white">
            Ronald & Vanessa
          </h1>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white px-20"
          >
            RSVP
          </Button>
        </div>
      </header>
      <TopAppNav />

      <main className="w-full flex flex-col items-center gap-5 mt-10 lg:py-20 relative px-5 md:px-10 lg:px-20">
        {/*<div className="w-32 xl:w-60 absolute right-0 top-10">*/}
        {/*  <AspectRatio ratio={8 / 16}>*/}
        {/*    <Image src="/images/bg-image-2.png" alt="bg-image-2" fill />*/}
        {/*  </AspectRatio>*/}
        {/*</div>*/}

        {/* ####################################### */}
        {/* -- stats data section */}
        {/* ####################################### */}
        <section className="w-full py-10 grid grid-cols-3 gap-5 px-3 max-w-7xl divide-y lg:divide-y-0 lg:divide-x z-10 relative">
          {/* -- wedding day */}
          <div className="w-full flex items-center col-span-3 lg:col-span-1 justify-start flex-col px-2 text-center py-4">
            <h3 className="font-text3 font-bold text-3xl">
              18th October, 2024
            </h3>
            <p className="font-text1">Wedding day</p>
          </div>

          {/* -- venue */}
          <div className="w-full flex items-center col-span-3 lg:col-span-1 justify-start flex-col px-2 text-center py-4">
            <h3 className="font-text3 font-bold text-3xl">
              Newthorpe, Nottingham, NG16 3PR
            </h3>
            <p className="font-text1">Church</p>
          </div>

          {/* -- wedding day */}
          <div className="w-full flex items-center col-span-3 lg:col-span-1 justify-start flex-col px-2 text-center py-4">
            <h3 className="font-text3 font-bold text-3xl">
              The Great Northern Cl, Nottingham, NG2 3JL
            </h3>
            <p className="font-text1">Reception</p>
          </div>
        </section>

        <Separator className="w-full max-w-7xl" />

        {/* ####################################### */}
        {/* -- Our story */}
        {/* ####################################### */}
        <section className="w-full max-w-7xl prose-xl flex items-center text-center flex-col py-10">
          <h1 className="font-text3">Our Story</h1>

          <p className="font-text1">
            It all started with a simple hello. From that moment, our journey
            together began—filled with laughter, adventures, and endless love.
            We met [X] years ago, and from the very first date, we knew
            something special was unfolding. As time passed, our bond grew
            stronger, turning into a beautiful love story that we cherish every
            day. We've shared countless memories, from [mention a special trip
            or moment] to [another special memory], each bringing us closer
            together.
          </p>

          <p className="font-text2 text-lg">
            Now, we're excited to begin the next chapter of our lives as we say
            "I do" and continue writing our story, hand in hand, forever.
          </p>
        </section>
        {/* ####################################### */}
        {/* -- Image marquee section */}
        {/* ####################################### */}
        <h1 className="font-text3 text-center mb-7 mt-10">Gallery</h1>
        <section className="w-full max-w-7xl grid grid-cols-3 relative h-[500px] md:h-[800px] lg:h-[1000px]">
          {/* -- column 1 */}
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:120s] rounded-t-2xl rounded-n-2xl"
          >
            {images.map((item: string, idx: number) => (
              <div className="w-full" key={idx}>
                <AspectRatio
                  ratio={12 / 16}
                  className="border border-gray-300 rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={item}
                    alt="marquee imag"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </Marquee>

          {/* -- column 2 */}
          <Marquee reverse pauseOnHover vertical className="[--duration:150s]">
            {images.map((item: string, idx: number) => (
              <div className="w-full" key={idx}>
                <AspectRatio
                  ratio={13 / 16}
                  className="border border-gray-300 rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={item}
                    alt="marquee imag"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </Marquee>

          {/* -- column 3 */}
          <Marquee pauseOnHover vertical className="[--duration:100s]">
            {images.map((item: string, idx: number) => (
              <div className="w-full" key={idx}>
                <AspectRatio
                  ratio={13 / 16}
                  className="border border-gray-300 rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={item}
                    alt="marquee imag"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-background/50  dark:from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-background/50 dark:from-background"></div>

          <div className="flex col-span-3  items-center justify-center mt-5">
            <Button variant="outline" className="border-gray-600 w-max">
              View Photos
            </Button>
          </div>
        </section>

        {/* ####################################### */}
        {/* -- content section */}
        {/* ####################################### */}
        <ContentSection />

        <Separator orientation="vertical" className="h-32 lg:h-40" />
        <h3 className="font-text3">Let us know you&apos;d be there</h3>

        {/* -- rsvp special */}
        <Button className="w-max px-12" size="lg">
          RSVP
        </Button>
      </main>

      {/*<div className="w-[450px] lg:w-[550px] xl:w-[550px] mt-5">*/}
      {/*  <AspectRatio ratio={16 / 10}>*/}
      {/*    <Image*/}
      {/*      src="/images/bg-image-3.png"*/}
      {/*      alt="footer img"*/}
      {/*      fill*/}
      {/*      className="object-center object-cver"*/}
      {/*    />*/}
      {/*  </AspectRatio>*/}
      {/*</div>*/}
    </div>
  );
};

export default RootPage;
