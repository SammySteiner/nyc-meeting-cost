import React, {useState} from "react";
import Select from 'react-select';
import { fetchData } from "../../api";
import { agencyList } from "../../data/agencies";

export default function SearchForm({setSearchResults}) {

  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [agency, setAgency] = useState("")

	const options = agencyList.map(a => ({ value: a, label: a }));

  const handleSubmit = event => {
    event.preventDefault()
    return fetchData({
			first_name,
			last_name,
			agency: agency === null ? '' : encodeURIComponent(agency.value),
		}).then(data => {
			setSearchResults(data);
		});
  }

  const handleChange = event => {
		if (event === null) return setAgency({label: "", value: ""});
		if (event.label) return setAgency(event)

    switch (event.target.name) {
      case "first_name":
        return setFirstName(event.target.value)
      case "last_name":
        return setLastName(event.target.value)
      default:
        return;
    }
  }

	return (
		<div>
			<h2>Search Form</h2>
			<form onSubmit={handleSubmit}>
				<label>
					First Name:
					<input
						type='text'
						name='first_name'
						value={first_name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Last Name:
					<input
						type='text'
						name='last_name'
						value={last_name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Agency:
					<Select
						name='agency'
						value={agency}
						onChange={handleChange}
						options={options}
						isClearable
					/>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}