import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { UserType } from "@/types";
import { supabase } from "@/utils";

export const useUser = () => {
  const navigate = useNavigate();

  const getUserId = async () => {
    const { data } = await supabase.auth.getUser();

    return data.user?.id;
  };

  const getQuery = async () => {
    const user = getUserId().then(async id => {
      if (!id) {
        navigate("/");
        return null;
      }
      const { data: _data, error } = await supabase
        .from("profile")
        .select(
          `
          id,
          username,
          avatar
        `,
        )
        .eq("id", id)
        .single();

      const userData = _data as UserType;

      if (error) {
        toast.error("Error fetching user");
        throw new Error(error.message);
      }

      if (!userData) {
        toast.error("User not Found");
        throw new Error("User not Found");
      }

      return userData;
    });

    return user;
  };

  return useQuery({ queryKey: ["user"], queryFn: () => getQuery() });
};
