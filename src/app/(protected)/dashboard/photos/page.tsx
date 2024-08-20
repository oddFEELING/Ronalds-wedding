import React, { FC } from "react";
import { get_photos } from "@/app/actions";
import AddPhotoDialog from "@/components/modules/dialogs/add_photo_dialog";
import { LayoutGrid } from "@/components/modules/layout-grid";
import Image from "next/image";

type ComponentProps = {};

const DashboardPhotosPage: FC<ComponentProps> = async ({}) => {
  const photos = await get_photos();
  console.log(photos);

  return (
    <div className="dash-page">
      {/* ####################################### */}
      {/* -- header section */}
      {/* ####################################### */}
      <header>
        <h3 className="font-text3 text-3xl font-bold">Photos</h3>
        <p className="text-muted-foreground font-text1">
          Add and remove photos from your gallery here.
        </p>
      </header>

      {/* ####################################### */}
      {/* -- content */}
      {/* ####################################### */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        {photos &&
          photos.map((photo) => (
            <div
              key={photo.id}
              className="col-span-1 relative rounded-md cursor-pointer overflow-hidden group"
            >
              <Image
                src={photo.url}
                alt={photo.full_path}
                fill
                className="object-cover group-hover:scale-105 transit"
              />
            </div>
          ))}
        <AddPhotoDialog />
      </section>
    </div>
  );
};

export default DashboardPhotosPage;
