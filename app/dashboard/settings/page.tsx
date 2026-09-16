import {
  User,
  Bell,
  Lock,
  Palette,
  Save,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="min-h-screen">

      <header className="flex h-14 items-center border-b bg-card px-4">
        <h1 className="text-lg font-semibold">
          Settings
        </h1>
      </header>

      <main className="p-4 sm:p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Settings
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your dashboard preferences and account settings.
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />

                <div>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Manage your account information.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3">
              <Button variant="outline">
                Edit Profile
              </Button>

              <Button variant="outline">
                Change Password
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />

                <div>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Choose how you receive notifications.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3">
              <Button variant="outline">
                Email Notifications
              </Button>

              <Button variant="outline">
                Push Notifications
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Palette className="h-5 w-5 text-muted-foreground" />

                <div>
                  <CardTitle>Appearance</CardTitle>
                  <CardDescription>
                    Customize how the dashboard looks.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3">
              <Button variant="outline">
                Light Mode
              </Button>

              <Button variant="outline">
                Dark Mode
              </Button>

              <Button variant="outline">
                System Default
              </Button>
            </CardContent>
          </Card>

      
          <div className="flex justify-end">
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}