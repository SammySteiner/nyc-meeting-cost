export const fetchData = ({first_name, last_name, agency, fiscal_year = "2021"}) => {
  const endpoint = 'https://data.cityofnewyork.us/resource/k397-673e.json';
  const year = `?fiscal_year=${fiscal_year}`;
  const first = first_name ? `&first_name=${first_name.toUpperCase()}` : ""
  const last = last_name ? `&last_name=${last_name.toUpperCase()}` : '';
  const a = agency !== "undefined"
			? `&agency_name=${agency.toUpperCase()}`
			: '';
  return fetch(
		`${endpoint}${year}${first}${last}${a}&$limit=10&$select=first_name,last_name,agency_name,title_description,base_salary,pay_basis`
	)
		.then(response => response.json())
		.then(data => data);
}

// first request query with just $select=count(pay_basis), if count is 0, tell user there are no results. If count is 10 or less, run the normal query, if count is greater than 10 run query with offset. If fetch data has a page # param, skip the count step and run query with limit and offset. Add pagination to results.




