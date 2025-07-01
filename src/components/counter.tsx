"use client";
import { useState } from "react";
import { useUser, useAuth } from "@clerk/nextjs";

export default function Counter() {
  const [count, setCount] = useState(0);
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  //   const {isLoaded,isSignedIn,user} = useUser()

  if (!isLoaded || !userId) {
    return null;
  }
  return (
    <div>
      <p>Count :{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
