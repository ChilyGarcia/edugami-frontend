"use client";

import { useUserStore } from "@/zustand/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import LoadingScreen from "../dashboard/LoadingScreen";

const ModeratorChecker = () => {
  const { user, error, loading } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (user && !loading) {
      if (user!.role === "STUDENT" || (error && !loading)) {
        return router.push("/");
      }
    }
  }, [user, router, error, loading]);

  return <></>;
};

export default ModeratorChecker;
