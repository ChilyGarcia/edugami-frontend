"use client";

import handleGetSession from "@/handlers/auth/handleGetSession";
import { useUserStore } from "@/zustand/useUserStore";
import React, { useCallback, useEffect } from "react";

const CheckActiveSession = () => {
  const { user, loading, error, setUser, setError, setLoading } =
    useUserStore();

    console.log(loading)

  const checkSession = useCallback(async () => {
    console.log("Recovering session...");

    try {
      const session = await handleGetSession();

      if (session.error) {
        return setError(session.message || "Unknown error");
      }

      console.log("I found it");

      setUser(session.data);
    } catch (error) {
      console.log(error);
      return setError((error as Error).message || "Unknown error");
    }
  }, [setError, setUser]);

  useEffect(() => {
    setLoading();

    checkSession();
  }, [checkSession, setLoading]);

  return <></>;
};

export default CheckActiveSession;
