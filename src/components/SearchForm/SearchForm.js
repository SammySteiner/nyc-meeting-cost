import React, {useState} from "react";
import { fetchData } from "../../api";

export default function SearchForm({setSearchResults}) {

  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    return fetchData({first_name, last_name}).then( data => {
      setSearchResults(data)
    })
  }

  const handleChange = event => {
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
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
}