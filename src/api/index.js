export const fetchData = ({first_name, last_name, agency, fiscal_year = "2021"}) => {
  const endpoint = 'https://data.cityofnewyork.us/resource/k397-673e.json';
  const year = `?fiscal_year=${fiscal_year}`;
  const first = first_name ? `&first_name=${first_name.toUpperCase()}` : ""
  const last = last_name ? `&last_name=${last_name.toUpperCase()}` : '';
  const a = agency ? `&agency_name=${agency.toUpperCase()}` : '';
  return fetch(`${endpoint}${year}${first}${last}${a}&$limit=10`)
		.then(response => response.json())
		.then(data => data);
}


