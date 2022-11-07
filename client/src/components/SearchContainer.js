import { FormRow, FormRowSelect } from ".";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useState } from "react";
export default function SearchContainer() {
  const [searchText, setSearchText] = useState("");

  const {
    isLoading,
    search,
    searchType,
    searchStatus,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    statusOptions,
    jobTypeOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;
    handleChange({ name: "search", value: searchText });
  };

  return (
    <Wrapper>
      <form
        className="form"
        onSubmit={handleSearchSubmit}
        style={{  }}
      >
        <div className="form-center">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="form-input"
            style={{}}
          />
          <button
            className="btn"
            disabled={isLoading}
            onClick={handleSearchSubmit}
          >
            search
          </button>
          <button
            className="btn btn-danger"
            disabled={isLoading}
            onClick={() => {setSearchText('')}}
          >
            clear
          </button>
        </div>
      </form>
      <form className="form">
        <div className="form-center">
          {/* search position */}

          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />

          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />

          {/* sort*/}
          <FormRowSelect
            labelText="sort"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
