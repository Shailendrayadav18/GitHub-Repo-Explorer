import { useQuery } from "@tanstack/react-query";

import { fetchGithubProfile } from "../api/githubApi";

export const useGithubUser = (
  username,
  page
) => {
  return useQuery({
    queryKey: [
      "github-user",
      username,
      page,
    ],

    queryFn: () =>
      fetchGithubProfile(
        username,
        page
      ),

    enabled: !!username,

    staleTime: 60000,

    retry: 1,
  });
};