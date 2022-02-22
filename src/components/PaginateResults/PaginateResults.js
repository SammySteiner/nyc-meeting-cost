import React from "react";
import { fetchData } from "../../api";

export default function PaginateResults({searchResults, setSearchResults}) {
  if (parseInt(searchResults?.count[0].count_base_salary) <= 10) return null
  const totalResults = parseInt(searchResults?.count[0].count_base_salary);

  const fetchPaginatedDate = page => {
    page === 0
			? fetchData({ ...searchResults.query, page }).then(data =>
					setSearchResults(data)
			  )
			: fetchData({ ...searchResults.query, page }).then(data =>
					{
            setSearchResults({
						data,
						count: [
							{ count_base_salary: searchResults.count[0].count_base_salary },
						],
						query: { ...searchResults.query, page },
					})}
			  );
  }

  const handleClick = event => {
    let page;
    switch (event.target.name) {
			case "prev":
        page = searchResults.query.page - 1
				break;
			case "next":
        page = searchResults.query.page + 1;
				break;
			case "first":
        page = 0;
				break;
			case "last":
        page = Math.ceil(totalResults / 10) - 1;
				break;
			default:
        page = 0
				break;
		}
    fetchPaginatedDate(page);
  }

  const prev = searchResults?.query?.page === 0 ? "" : <button type="buton" onClick={handleClick} name='prev'>Previous</button>
  const first = searchResults?.query?.page === 0 ? "" : <button type="buton" onClick={handleClick} name='first'>First</button>
  const last =
		searchResults?.query?.page === Math.ceil(totalResults / 10) - 1 ? (
			''
		) : (
			<button type='buton' onClick={handleClick} name='last'>
				Last
			</button>
		);
  const next =
		totalResults / 10 > searchResults?.query?.page &&
		searchResults?.query?.page !== Math.ceil(totalResults / 10) - 1 ? (
			<button type='buton' onClick={handleClick} name='next'>
				Next
			</button>
		) : (
			''
		);

    return (
			<div>
				{searchResults.query.page * 10} -{' '}
				{searchResults.query.page === Math.ceil(totalResults / 10) -1 ? totalResults : searchResults.query.page * 10 + 10} of{' '}
				{totalResults} results. {first}
				{prev}
				{next}
				{last}
			</div>
		);

}