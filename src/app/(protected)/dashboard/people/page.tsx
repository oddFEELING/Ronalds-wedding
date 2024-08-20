import React, { FC } from "react";
import AddPeopleDialog from "@/components/modules/dialogs/add_people_dialog";
import { delete_person, get_people } from "@/app/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import DeletePersonDialog from "@/components/modules/dialogs/delete_person";

type ComponentProps = {};

const DashBoardPeoplePage: FC<ComponentProps> = async ({}) => {
  const people = await get_people();
  return (
    <div className="dash-page">
      {/* ####################################### */}
      {/* -- header section */}
      {/* ####################################### */}
      <header>
        <h3 className="font-text3 text-3xl font-bold">People</h3>
        <p className="text-muted-foreground font-text1">
          Manage guests and people here.
        </p>
      </header>

      {/* ####################################### */}
      {/* -- content */}
      {/* ####################################### */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-5">
        {people &&
          people.map((person: any, idx: number) => (
            <Card>
              <CardHeader>
                <CardDescription className="flex items-center gap-3">
                  ID &middot; {person.id} &nbsp;&nbsp;{person.group}{" "}
                  <DeletePersonDialog id={person.id} />
                </CardDescription>
                <CardTitle className="text-lg font-text1">
                  {person.first_name} {person.last_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col w-full gap-3">
                <div className="w-full flex flex-wrap items-center gap-1">
                  {person.invites.map((inv: string) => (
                    <span
                      key={inv}
                      className="font-text1 text-xs py-1 px-2 rounded-md border bg-background flex items-center justify-center line-clamp-1"
                    >
                      {inv}
                    </span>
                  ))}
                </div>
                <p className="text-sm">
                  RSVP: {person.responded ? "Yes" : "Not response yet"}
                </p>
              </CardContent>
            </Card>
          ))}
        <AddPeopleDialog />
      </section>
    </div>
  );
};

export default DashBoardPeoplePage;
