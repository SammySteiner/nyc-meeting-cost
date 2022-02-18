import React, { useState} from 'react';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import MeetingTable from './components/MeetingTable/MeetingTable';
import Cost from './components/Cost/Cost';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [meeting, setMeeting] = useState([])

	return (
		<div className='App'>
			<h1>NYC Meeting Cost Calculator</h1>
			<SearchForm setSearchResults={setSearchResults} />
			<SearchResults
				searchResults={searchResults}
				setSearchResults={setSearchResults}
				meeting={meeting}
				setMeeting={setMeeting}
			/>
			<MeetingTable meeting={meeting} setMeeting={setMeeting} />
			<Cost meeting={meeting} />
		</div>
	);
}

export default App;
