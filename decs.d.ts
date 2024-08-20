type Person = {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  group: string | null;
  invites: "church" | "private-dining" | "reception"[];
  responded: boolean;
};
