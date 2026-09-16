import UserCard from "../../components/UserCard";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  role: string;
}

export default async function UsersPage() {
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
    <div className="min-h-screen">
      <header className="flex h-14 items-center gap-4 border-b bg-card px-4">
        <h1 className="text-lg font-semibold">
          Users
        </h1>
      </header>

      <main className="p-4 sm:p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">
            All Users
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage and view all users in the system.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      </main>
    </div>
  );
}