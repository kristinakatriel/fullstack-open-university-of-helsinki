const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      find countries &nbsp;
      <input
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search
