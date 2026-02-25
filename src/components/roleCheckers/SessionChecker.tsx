"use client";

import { useUserStore } from "@/zustand/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import LoadingScreen from "../dashboard/LoadingScreen";

const SessionChecker = () => {
  const { user, loading, error } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && (!user || error)) {
      return router.push(`/login?cb_pathname=${pathname}`);
    }
  }, [user, loading, error, router, pathname]);

  if (loading) {
    return <LoadingScreen />;
  }

  return <></>;
};

export default SessionChecker;
