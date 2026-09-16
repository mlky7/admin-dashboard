import {
  Users,
  ShieldCheck,
  Pencil,
  Eye,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface User {
  role?: string;
}

interface StatsCardsProps {
  users: User[];
}

export default function StatsCards({
  users,
}: StatsCardsProps) {
  const totalUsers = users.length;

  const admins = users.filter(
    (user) => user.role === "Admin"
  ).length;

  const editors = users.filter(
    (user) => user.role === "Editor"
  ).length;

  const viewers = users.filter(
    (user) => user.role === "Viewer"
  ).length;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Users
          </CardTitle>

          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">
            {totalUsers}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Admins
          </CardTitle>

          <ShieldCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">
            {admins}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Editors
          </CardTitle>

          <Pencil className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">
            {editors}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Viewers
          </CardTitle>

          <Eye className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">
            {viewers}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}