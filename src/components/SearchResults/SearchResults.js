import PaginateResults from "../PaginateResults/PaginateResults"

export default function SearchResults({searchResults, setSearchResults, meeting, setMeeting}) {

	const AddToMeeting = ({ index, inMeeting }) => {
		const handleClick = () => {
			const selectedPerson = searchResults.data[index];
			setMeeting([...meeting, selectedPerson]);
		};

		return (
			<button type='button' name='addToMeeting' disabled={inMeeting} onClick={handleClick}>
				+
			</button>
		);
	};

	return searchResults?.data?.length > 0 ? (
		<div>
			<h2>Search Results</h2>
			<table>
				<thead>
					<tr>
						<th>Add to Meeting</th>
						<th>Name</th>
						<th>Agency</th>
						<th>Role</th>
						<th>Salary</th>
					</tr>
				</thead>
				{searchResults.data.map((person, index) => {
					const inMeeting = meeting.some(personInMeeting => JSON.stringify(personInMeeting) === JSON.stringify(person))
					return (
						<tbody key={person.first_name + index}>
							<tr className={inMeeting ? 'disabled' : ''}>
								<td>
									<AddToMeeting index={index} inMeeting={inMeeting} />
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
