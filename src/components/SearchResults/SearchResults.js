export default function SearchResults({searchResults, setSearchResults, meeting, setMeeting}) {

	const AddToMeeting = ({index}) => {
		const handleClick = () => {
			const selectedPerson = searchResults[index]
			const newResults = [...searchResults]
			newResults.splice(index, 1);
			setSearchResults(newResults)
			setMeeting([...meeting, selectedPerson])
		}

		return( <button type="button" name="addToMeeting" onClick={handleClick} >+</button>)
	}

	return searchResults.length > 0 ? (
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
				{searchResults.map((person, index) => {
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
		</div>
	) : null;
}
