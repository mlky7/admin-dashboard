"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Toaster, toast } from "sonner";

import StatsCard from "../components/StatsCard";
import UsersTable from "../components/UsersTable";
import AddUserDialog from "../components/AddUserDialog";
import ThemeToggle from "../components/ThemeToggle";

export default function DashboardClient({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("users");

    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  const saveUsers = (list) => {
    setUsers(list);

    localStorage.setItem(
      "users",
      JSON.stringify(list)
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesRole =   roleFilter === "All" ||user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const handleAddUser = (name, email, role) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      role,
    };

    saveUsers([...users, newUser]);

    setDialogOpen(false);

    toast.success("User added");
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    saveUsers(updatedUsers);

    toast.success("User deleted");
  };

  return (
    <div className="min-h-screen">

      <header className="flex h-14 items-center gap-4 border-b bg-card px-4">
        <h1 className="text-lg font-semibold">
          Dashboard
        </h1>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </header>

      <main className="grid gap-4 p-4 sm:p-6">

        <StatsCard users={users} />

        <div className="flex flex-col gap-2 sm:flex-row">

          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            className="sm:w-56"
          />

          <Select
            value={roleFilter}
            onValueChange={(value) =>
              setRoleFilter(value ?? "All")
            }
          >
            <SelectTrigger className="sm:w-40">
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="All">
                All Roles
              </SelectItem>

              <SelectItem value="Admin">
                Admin
              </SelectItem>

              <SelectItem value="Editor">
                Editor
              </SelectItem>

              <SelectItem value="Viewer">
                Viewer
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            className="sm:ml-auto"
            onClick={() =>
              setDialogOpen(true)
            }
          >
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>

        </div>

        <UsersTable
          users={filteredUsers}
          onDelete={handleDeleteUser}
        />

      </main>

      <AddUserDialog
        open={dialogOpen}
        onClose={() =>
          setDialogOpen(false)
        }
        onSave={handleAddUser}
      />

      <Toaster />

    </div>
  );
}
