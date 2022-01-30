import { useState } from "react";

export const useAuth = () => {
  return useState<{ accessToken: string | null }>({ accessToken: null });
};
