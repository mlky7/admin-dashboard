import { NextResponse } from "next/server";
import users from "./data.json";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserWithRole extends User {
  role: string;
}

interface CreateUserBody {
  name: string;
  email: string;
  role: string;
}

export async function GET() {
  const withRole: UserWithRole[] = users.map((user) => {
    let role = "Admin";

    if (user.id <= 1) {
      role = "Viewer";
    } else if (user.id <= 2) {
      role = "Editor";
    }

    return {
      ...user,
      role,
    };
  });

  return NextResponse.json(withRole);
}

export async function POST(request: Request) {
  const body: CreateUserBody = await request.json();

  const newUser: UserWithRole = {
    id: Date.now(),
    name: body.name,
    email: body.email,
    role: body.role,
  };

  return NextResponse.json(newUser, {
    status: 201,
  });
}