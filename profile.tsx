import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (!user) router.push("/login");
  });
  return () => unsubscribe();
}, []);
