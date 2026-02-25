"use client";

import { useUserStore } from "@/zustand/useUserStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import LoadingScreen from "../dashboard/LoadingScreen";

const AdminChecker = () => {
  const { user, error, loading } = useUserStore();
  const pathname = usePathname();

  const router = useRouter();
  useEffect(() => {
    if (user && !loading) {
      if (!["ADMIN", "SUPERADMIN"].includes(user.role) || (error && !loading)) {
        return router.push(`/login?cb_pathname=${pathname}`);
      }
    }
  }, [user, router, error, loading, pathname]);

  return <></>;
};

export default AdminChecker;
