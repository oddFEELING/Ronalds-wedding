import React, { FC } from "react";
import { get_people, get_photos } from "@/app/actions";
import { Section } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ComponentProps = {};

const DashboardPage: FC<ComponentProps> = async ({}) => {
  const photos = await get_photos();
  const people = await get_people();

  return (
    <div className="dash-page">
      {/* ####################################### */}
      {/* -- header section */}
      {/* ####################################### */}
      <header>
        <h3 className="font-text3 text-3xl font-bold">Dashboard</h3>
        <p className="text-muted-foreground font-text1">
          Just quick stats and stuff..
        </p>
      </header>

      {/* ####################################### */}
      {/* -- stats cards */}
      {/* ####################################### */}
      <section className="w-full grid grid-cols-3 gap-6 mt-10">
        <Card>
          <CardHeader>
            <CardTitle>{people?.length}</CardTitle>{" "}
            <CardDescription>People</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {people?.filter((person) => person.responded && person).length}
            </CardTitle>
            <CardDescription>People responded</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{photos?.length}</CardTitle>{" "}
            <CardDescription>Photos</CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
  );
};

export default DashboardPage;
