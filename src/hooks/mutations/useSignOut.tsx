import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { supabase } from "utils";

export const useSignOut = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Error signing out");
      throw new Error(error.message);
    }
  };

  return useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/");
    },
  });
};
