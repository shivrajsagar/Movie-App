const Search = () => {
  return (
    <div className="p-32 items-center justify-center text-center from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-r w-full h-64 block ">
      <h1>Search</h1>
      <form class="relative mr-6 my-2">
        <input
          type="search"
          class="bg-purple-white shadow rounded border-0 p-3"
          placeholder="Search by name..."
        />
      </form>
    </div>
  );
};
export default Search;
