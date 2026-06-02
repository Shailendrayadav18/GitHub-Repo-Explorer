import { useState, useMemo, useEffect } from "react";

import SearchBar from "../components/search/SearchBar";
import RecentSearches from "../components/search/RecentSearches";

import UserProfileCard from "../components/profile/UserProfileCard";
import LanguageChart from "../components/profile/LanguageChart";

import RepoList from "../components/repository/RepoList";
import SortDropdown from "../components/repository/SortDropdown";
import LoadMoreButton from "../components/repository/LoadMoreButton";

import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import EmptyState from "../components/common/EmptyState";

import { useGithubUser } from "../hooks/useGithubUser";
import { useDebounce } from "../hooks/useDebounce";
import { useRecentSearches } from "../hooks/useRecentSearches";

import { sortRepos } from "../utils/sortRepos";
import { getLanguageData } from "../utils/languageStats";

function Home() {
  const [username, setUsername] = useState("");
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("stars");

  const debouncedUsername = useDebounce(username, 500);

  const { searches, addSearch } = useRecentSearches();

  const {
    data,
    isLoading,
    error,
  } = useGithubUser(
    debouncedUsername,
    page
  );

  useEffect(() => {
    if (
      data?.user &&
      debouncedUsername.trim()
    ) {
      addSearch(debouncedUsername);
    }
  }, [
    data,
    debouncedUsername,
  ]);

  const sortedRepos = useMemo(() => {
    return sortRepos(
      data?.repos || [],
      sortBy
    );
  }, [
    data?.repos,
    sortBy,
  ]);

  const languageData =
    useMemo(() => {
      return getLanguageData(
        data?.repos || []
      );
    }, [data?.repos]);

  const handleRecentSearch =
    (value) => {
      setUsername(value);
      setPage(1);
    };

  const handleSearchChange =
    (value) => {
      setUsername(value);
      setPage(1);
    };

  const handleLoadMore = () => {
    if (
      data?.pagination?.hasMore
    ) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-100
      via-white
      to-blue-100
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        py-8
        "
      >
        {/* HEADER */}

        <div className="text-center mb-10">
          <h1
            className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-slate-900
            "
          >
            GitHub Repo Explorer
          </h1>

          <p
            className="
            text-slate-500
            mt-3
            "
          >
            Search GitHub users and
            explore repositories
          </p>
        </div>

        {/* SEARCH */}

        <SearchBar
          value={username}
          onChange={
            handleSearchChange
          }
        />

        <RecentSearches
          searches={searches}
          onSelect={
            handleRecentSearch
          }
        />

        {/* LOADING */}

        {isLoading && (
          <div className="mt-10">
            <Loader />
          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="mt-8">
            <ErrorMessage
              message={
                error.response?.data
                  ?.message ||
                "Something went wrong"
              }
            />
          </div>
        )}

        {/* EMPTY */}

        {!isLoading &&
          !error &&
          !data &&
          username && (
            <EmptyState />
          )}

        {/* CONTENT */}

        {!isLoading &&
          !error &&
          data && (
            <div
              className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-6
              mt-8
              "
            >
              {/* SIDEBAR */}

              <aside
                className="
                space-y-6
                "
              >
                <UserProfileCard
                  user={
                    data.user
                  }
                />

                <LanguageChart
                  data={
                    languageData
                  }
                />
              </aside>

              {/* REPOS */}

              <main
                className="
                lg:col-span-2
                "
              >
                <div
                  className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-4
                  mb-6
                  "
                >
                  <h2
                    className="
                    text-2xl
                    font-bold
                    "
                  >
                    Repositories
                  </h2>

                  <SortDropdown
                    value={
                      sortBy
                    }
                    onChange={
                      setSortBy
                    }
                  />
                </div>

                {sortedRepos
                  .length ===
                0 ? (
                  <EmptyState />
                ) : (
                  <>
                    <RepoList
                      repos={
                        sortedRepos
                      }
                    />

                    {data
                      ?.pagination
                      ?.hasMore && (
                      <LoadMoreButton
                        onClick={
                          handleLoadMore
                        }
                      />
                    )}
                  </>
                )}
              </main>
            </div>
          )}
      </div>
    </div>
  );
}

export default Home;