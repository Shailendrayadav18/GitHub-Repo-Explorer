import api from "./axios";

export const fetchGithubProfile = async (
  username,
  page = 1
) => {
  const { data } = await api.get(
    `/api/github/${username}`,
    {
      params: {
        page,
        perPage: 10,
      },
    }
  );

  return data.data;
};