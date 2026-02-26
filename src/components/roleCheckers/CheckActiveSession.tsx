"use client";

import handleGetSession from "@/handlers/auth/handleGetSession";
import { useUserStore } from "@/zustand/useUserStore";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect } from "react";

const RUTAS_SIN_CHECK_SESSION = ["/login"];

const CheckActiveSession = () => {
  const pathname = usePathname();
  const { user, loading, error, setUser, setError, setLoading } =
    useUserStore();

  const checkSession = useCallback(async () => {
    try {
      const session = await handleGetSession();

      if (session.error) {
        return setError(session.message || "Unknown error");
      }

      setUser(session.data);
    } catch (error) {
      return setError((error as Error).message || "Unknown error");
    }
  }, [setError, setUser]);

  useEffect(() => {
    if (RUTAS_SIN_CHECK_SESSION.some((ruta) => pathname?.startsWith(ruta))) {
      return;
    }
    setLoading();
    checkSession();
  }, [pathname, checkSession, setLoading]);

  return <></>;
};

export default CheckActiveSession;
