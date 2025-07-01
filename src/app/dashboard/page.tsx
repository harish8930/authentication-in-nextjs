import { auth, currentUser } from "@clerk/nextjs/server";

export default async function dashboard() {
  const authObj = await auth();
  const currentUserObj = await currentUser();

  console.log(authObj, "AUTH OBJ");
  console.log(currentUserObj, "CURRENT USER OBJ");
  return <h1>Dashboard!</h1>;
}
