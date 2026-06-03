import { useState, useMemo } from "react";
import { FaGithub } from "react-icons/fa";

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
import { useRecentSearches } from "../hooks/useRecentSearches";

import { sortRepos } from "../utils/sortRepos";
import { getLanguageData } from "../utils/languageStats";

function Home() {
  const [username, setUsername] = useState("");
  const [searchedUser, setSearchedUser] = useState("");
  const [sortBy, setSortBy] = useState("stars");

  const { searches, addSearch } = useRecentSearches();

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGithubUser(searchedUser);

  const showWelcome = searchedUser === "";

  /*
   * User profile comes from first page
   */
  const user = data?.pages?.[0]?.user || null;

  /*
   * Merge all repo pages together
   */
  const allRepos = useMemo(() => {
    if (
      !data ||
      !Array.isArray(data.pages)
    ) {
      return [];
    }

    return data.pages.flatMap(
      (page) =>
        Array.isArray(page?.repos)
          ? page.repos
          : []
    );
  }, [data]);

  /*
   * Sorting
   */
  const sortedRepos = useMemo(() => {
    return sortRepos(
      allRepos,
      sortBy
    );
  }, [
    allRepos,
    sortBy,
  ]);

  /*
   * Language Chart Data
   */
  const languageData = useMemo(() => {
    return getLanguageData(
      allRepos
    );
  }, [allRepos]);

  const handleSearch = () => {
    const trimmed =
      username.trim();

    if (trimmed.length < 3) {
      alert(
        "Please enter at least 3 characters"
      );
      return;
    }

    addSearch(trimmed);

    setSearchedUser(trimmed);
  };

  const handleSearchChange = (
    value
  ) => {
    setUsername(value);
  };

  const handleRecentSearch =
    (value) => {
      setUsername(value);
      setSearchedUser(value);
    };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-blue-50
      to-indigo-100
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
        {/* HERO */}

        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <FaGithub
              size={70}
              className="text-slate-900"
            />
          </div>
          <h1
            className="
            text-4xl
            md:text-5xl
            font-extrabold
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            bg-clip-text
            text-transparent
            "
          >
            GitHub Repo Explorer
          </h1>

          <p
            className="
            mt-3
            text-gray-600
            "
          >
            Search GitHub users and
            explore repositories
          </p>
        </div>

        {/* SEARCH */}

        <div className="max-w-4xl mx-auto">
          <SearchBar
            value={username}
            onChange={handleSearchChange}
            onSearch={handleSearch}
          />

          <RecentSearches
            searches={searches}
            onSelect={
              handleRecentSearch
            }
          />
        </div>

        {/* INITIAL LOADING */}

        {isLoading && (
          <div className="mt-12">
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

        {/* NO USER YET */}

        {!isLoading &&
          !error &&
          !user &&
          !username && (
            <div className="mt-16">
              {showWelcome && (
                <EmptyState />
              )}
            </div>
          )}

        {/* CONTENT */}

        {!isLoading &&
          !error &&
          user && (
            <div
              className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-8
              mt-10
              "
            >
              {/* LEFT SIDEBAR */}

              <aside className="space-y-6">
                <UserProfileCard
                  user={user}
                />

                <LanguageChart
                 data={
                  languageData
                  }
                /> 
              </aside>

              {/* RIGHT SECTION */}

              <main className="lg:col-span-2">
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
                  <div>
                    <h2
                      className="
                      text-2xl
                      font-bold
                      "
                    >
                      Repositories
                    </h2>

                    <p className="text-gray-500">
                      {
                        allRepos.length
                      }{" "}
                      loaded
                    </p>
                  </div>

                  <SortDropdown
                    value={sortBy}
                    onChange={
                      setSortBy
                    }
                  />
                </div>

                {sortedRepos.length ===
                  0 ? (
                  <EmptyState />
                ) : (
                  <>
                    <RepoList
                      repos={
                        sortedRepos
                      }
                    />

                    {hasNextPage && (
                      <LoadMoreButton
                        onClick={
                          fetchNextPage
                        }
                        loading={
                          isFetchingNextPage
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