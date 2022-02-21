import React from "react";
import { fetchData } from "../../api";

export default function PaginateResults({searchResults, setSearchResults}) {
  if (parseInt(searchResults?.count[0].count_base_salary) <= 10) return null

  // should also show page # of total pages on left side
  // on right side advanced pagination 1... 5,6,7...500 ; 123...500 ; 1...458,459,500

  const handleClick = event => {
    let page;
    switch (event.target.name) {
			case "prev":
        page = searchResults.query.page - 1
        console.log("prev", {...searchResults.query, page})
        fetchData({ ...searchResults.query, page }).then(data =>
					setSearchResults(page === 0 ? data : {
						data,
						count: [
							{ count_base_salary: searchResults.count[0].count_base_salary },
						],
						query: { ...searchResults.query, page },
					})
				);
				break;
			case "next":
        page = searchResults.query.page + 1;
                console.log('next', { ...searchResults.query, page });
        fetchData({ ...searchResults.query, page }).then(data =>
					setSearchResults({
						data,
						count: [
							{ count_base_salary: searchResults.count[0].count_base_salary },
						],
						query: { ...searchResults.query, page },
					})
				);
				break;
			default:
				break;
		}
  }

  const prev = searchResults?.query?.page === 0 ? "" : <button type="buton" onClick={handleClick} name='prev'>Previous</button>
  const next =
		parseInt(searchResults?.count[0].count_base_salary) / 10 >
		searchResults?.query?.page ? <button type="buton" onClick={handleClick} name='next'>Next</button> : "";

    return (<div>{prev}{next}</div>)




}