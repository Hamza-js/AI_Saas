"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("65a36846-f3d2-4b6a-b461-106caafa4130");
  }, []);

  return null;
};
