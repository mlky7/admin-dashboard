import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
}

interface Params {
  id: string;
}

interface UserPageProps {
  params: Promise<Params>;
}

export default async function UserDetailsPage({
  params,
}: UserPageProps) {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:3000/api/users/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen p-6">
        <h1 className="text-2xl font-bold">
          User Not Found
        </h1>

        <p className="mt-2 text-muted-foreground">
          The user you are looking for does not exist.
        </p>

        <Link
          href="/dashboard/users"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Users
        </Link>
      </div>
    );
  }

  const user: User = await res.json();

  return (
    <div className="min-h-screen">
      <header className="flex h-14 items-center gap-4 border-b bg-card px-4">
        <Link
          href="/dashboard/users"
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <h1 className="text-lg font-semibold">
          User Details
        </h1>
      </header>

      <main className="p-4 sm:p-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">
              {user.name}
            </h2>

            <p className="mt-1 text-muted-foreground">
              @{user.email.split("@")[0]}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                User Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />

                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>

                  <p className="font-medium">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />

                <div>
                  <p className="text-sm text-muted-foreground">
                    Phone
                  </p>

                  <p className="font-medium">
                    {user.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Role
                  </p>

                  <p className="font-medium">
                    {user.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}