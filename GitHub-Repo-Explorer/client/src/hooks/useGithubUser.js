import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchGithubProfile } from "../api/githubApi";

export const useGithubUser = (username) => {
  return useInfiniteQuery({
    queryKey: ["github-user", username],

    enabled: !!username,

    initialPageParam: 1,

    queryFn: ({ pageParam }) =>
      fetchGithubProfile(username, pageParam),

    getNextPageParam: (lastPage) => {
      if (!lastPage?.pagination) {
        return undefined;
      }

      return lastPage.pagination.hasMore
        ? lastPage.pagination.page + 1
        : undefined;
    },

    retry: 1,
    staleTime: 60000,
  });
};