"use client";

import React, { FC } from "react";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { delete_person } from "@/app/actions";

type ComponentProps = {
  id: string;
};

const DeletePersonDialog: FC<ComponentProps> = ({ id }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2
          size={16}
          strokeWidth={1.5}
          className="text-rose-600 cursor-pointer"
        />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this Person</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this person from the list?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              await delete_person(id);
              window.location.reload();
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePersonDialog;
