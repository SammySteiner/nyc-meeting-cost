import React, {useState} from "react";
import { fetchData } from "../../api";
import { agencyList } from "../../data/agencies";

export default function SearchForm({setSearchResults}) {

  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [agency, setAgency] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    return fetchData({first_name, last_name, agency}).then( data => {
      setSearchResults(data)
    })
  }

  const handleChange = event => {
    switch (event.target.name) {
      case "first_name":
        return setFirstName(event.target.value)
      case "last_name":
        return setLastName(event.target.value)
      case "agency":
        return setAgency(event.target.value);
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
					<select name="agency" value={agency} onChange={handleChange}>{agencyList.map( a => <option key={a} value={a}>{a}</option>)}</select>
				</label>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}