import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="flex h-14 items-center border-b bg-card px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center">
          <span className="text-lg font-bold">
            Admin Dashboard
          </span>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-6xl items-center px-6 py-12">
        <div className="w-full">
   
          <div className="mb-10">
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Admin Portal
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to your dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Manage users, roles, and platform activity from one simple
              dashboard.
            </p>

            <div className="mt-6">
              <Link href="/dashboard">
                <Button>
                  Go to Dashboard
                  <span aria-hidden="true" className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}