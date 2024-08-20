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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { upload_photo } from "@/app/actions";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

type ComponentProps = {};

const AddPhotoDialog: FC<ComponentProps> = ({}) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const handle_upload = async () => {
    if (files) {
      const client = createClient();
      const { data, error } = await client.storage
        .from("photos")
        .upload(files[0].name, files[0]);

      if (error) return console.log(error);

      if (data) {
        const { data: pub_url } = await client.storage
          .from("photos")
          .getPublicUrl(data.path);

        if (pub_url) {
          const response = await upload_photo(pub_url.publicUrl, data.fullPath);
          console.log(response);
          setOpen(false);
          router.replace("/dashboard/photos");
        }
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="border-2 w-full h-44 rounded-lg col-span-1 border-dashed flex items-center justify-center gap-2
        flex-col transit cursor-pointer hover:shadow-lg"
      >
        <PlusCircle size={25} strokeWidth={1} />
        <p>Add a photo</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload an image</DialogTitle>
          <DialogDescription>
            Sel a span and select a file to upload
          </DialogDescription>
        </DialogHeader>

        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setFiles(e.target.files)}
        />

        <Button onClick={handle_upload}> Upload image</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddPhotoDialog;
