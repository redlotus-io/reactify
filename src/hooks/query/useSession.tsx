import { useQuery } from "@tanstack/react-query";

import { supabase } from "utils";

export const useSession = () => {
  const getQuery = async () => {
    const { data } = await supabase.auth.getSession();

    return data.session;
  };

  return useQuery({ queryKey: ["session"], queryFn: () => getQuery() });
};
