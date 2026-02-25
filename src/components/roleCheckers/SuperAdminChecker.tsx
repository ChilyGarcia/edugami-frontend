"use client";

import { useUserStore } from "@/zustand/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import LoadingScreen from "../dashboard/LoadingScreen";

const SuperAdminChecker = () => {
  const { user, loading, error } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user && !loading) {
      if (user.role !== "SUPERADMIN" || (error && !loading)) {
        return router.push(`/login?cb_pathname=${pathname}`);
      }
    }
  }, [router, user, loading, error, pathname]);

  return <></>;
};

export default SuperAdminChecker;
