import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData) {
  "use server";
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not Authorised");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;
  const role = formData.get("role") as Roles;
  try {
    await client.users.updateUser(id, {
      publicMetadata: { role },
    });
    revalidatePath("/admin");
  } catch {
    throw new Error("failed to set error");
  }
}

export async function removeRole(formData: FormData) {
  "use server";
  const { sessionClaims } = await auth();
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Not Authorised");
  }

  const client = await clerkClient();
  const id = formData.get("id") as string;
  try {
    await client.users.updateUser(id, {
      publicMetadata: { role: null },
    });
    revalidatePath("/admin");
  } catch {
    throw new Error("failed to remove role");
  }
}
