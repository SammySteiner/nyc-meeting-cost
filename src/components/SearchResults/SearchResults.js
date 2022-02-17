export default function SearchResults({searchResults, setMeeting}) {
	// output search results to table (limit 10 rows)
	// select person from table with button to add data to meeting
	// show first name, last name, agency, salary (maybe job title)

	return searchResults.length > 0 ? (
		<div>
			<h2>Search Results</h2>
		</div>
	) : null;
}
