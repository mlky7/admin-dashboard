import DashboardClient from "../components/DashboardClient";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default async function DashboardPage() {
  const res = await fetch(
    "http://localhost:3000/api/users",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await res.json();

  return (
    <DashboardClient
      initialUsers={users}
    />
  );
}