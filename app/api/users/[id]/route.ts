import { NextResponse } from "next/server";
import users from "../data.json";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserWithRole extends User {
  role: string;
}

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Props
) {
  const { id } = await params;

  const user = users.find(
    (user) => user.id === Number(id)
  );

  if (!user) {
    return NextResponse.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  let role = "Admin";

  if (user.id <= 1) {
    role = "Viewer";
  } else if (user.id <= 2) {
    role = "Editor";
  }

  const userWithRole: UserWithRole = {
    ...user,
    role,
  };

  return NextResponse.json(userWithRole);
}