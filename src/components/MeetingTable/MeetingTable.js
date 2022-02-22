export default function MeetingTable({meeting, setMeeting}) {
		const RemoveFromMeeting = ({ index }) => {
			const handleClick = () => {
				const newMeeting = [...meeting];
				newMeeting.splice(index, 1);
				setMeeting(newMeeting);
			};

			return (
				<button type='button' name='addToMeeting' onClick={handleClick}>
					-
				</button>
			);
		};

	return meeting.length > 0 ? (
		<div>
			<h2>MeetingTable</h2>
			<p>There are {meeting.length} peope in this meting.</p>
			<table>
				<thead>
					<tr>
						<th>Remove From Meeting</th>
						<th>Name</th>
						<th>Agency</th>
						<th>Role</th>
						<th>Salary</th>
					</tr>
				</thead>
				{meeting.map((person, index) => {
					return (
						<tbody key={person.first_name + index}>
							<tr>
								<td>
									<RemoveFromMeeting index={index} />
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
	) : (
		<p>
			There are 0 people in this meeting. Add people the meeting to see the
			cost.
		</p>
	);
}
