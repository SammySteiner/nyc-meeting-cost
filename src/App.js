import React, {useEffect, useState} from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import MeetingTable from './components/MeetingTable/MeetingTable';
import Cost from './components/Cost/Cost';
import { fetchData } from './api';
import './App.css';

function App() {
	const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [meeting, setMeeting] = useState([])

	useEffect(() => {
		fetchData({ first_name: 'SAMUEL', last_name: 'STEINER' }).then(d => {
			setData(d);
		});
	}, []);

	console.log(data);
	// mobile first

	return (
		<div className='App'>
			<h1>NYC Meeting Cost Calculator</h1>
			<SearchForm setSearchResults={setSearchResults}/>
      <SearchResults searchResults={searchResults} setMeeting={setMeeting}/>
      <MeetingTable meeting={meeting} setMeeting={setMeeting} />
      <Cost meeting={meeting} />
		</div>
	);
}

export default App;
