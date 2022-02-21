import PaginateResults from "../PaginateResults/PaginateResults"

export default function SearchResults({searchResults, setSearchResults, meeting, setMeeting}) {
	// because of pagination, instead of removing from list, we should disable any rows/buttons for folks who math people in the meeting

	const AddToMeeting = ({index}) => {
		const handleClick = () => {
			const selectedPerson = searchResults.data[index]
			const newResults = [...searchResults.data]
			newResults.splice(index, 1);
			setSearchResults({...searchResults, data: newResults });
			setMeeting([...meeting, selectedPerson])
		}

		return( <button type="button" name="addToMeeting" onClick={handleClick} >+</button>)
	}

	return searchResults?.data?.length > 0 ? (
		<div>
			<h2>Search Results</h2>
			<table>
				<thead>
					<tr>
						<th>Add to Meeting</th>
						<th>Name</th>
						<th>Agnecy</th>
						<th>Role</th>
						<th>Salary</th>
					</tr>
				</thead>
				{searchResults.data.map((person, index) => {
					return (
						<tbody key={person.first_name + index}>
							<tr>
								<td>
									<AddToMeeting index={index} />
								</td>
								<td>
									{person.first_name} {person.last_name}
								</td>
								<td>{person.agency_name}</td>
								<td>{person.title_description}</td>
								<td>
									{person.base_salary} - {person.pay_basis}
								</td>
							</tr>
						</tbody>
					);
				})}
			</table>
			<PaginateResults searchResults={searchResults} setSearchResults={setSearchResults} />
		</div>
	) :
		searchResults?.count ? <p>Your search returned 0 results. Try a different search.</p> : null
	;
}
