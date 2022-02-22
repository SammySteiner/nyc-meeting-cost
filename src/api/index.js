export const fetchData = ({first_name, last_name, agency, fiscal_year = "2021", page = false}) => {
  const endpoint = 'https://data.cityofnewyork.us/resource/k397-673e.json';
  const year = `?fiscal_year=${fiscal_year}`;
  const first = first_name ? `&first_name=${first_name.toUpperCase()}` : ""
  const last = last_name ? `&last_name=${last_name.toUpperCase()}` : '';
  const a = agency !== "undefined" && agency !== "null" && agency !== ""
			? `&agency_name=${agency.toUpperCase()}`
			: '';
  const p = page ? `&$limit=10&$offset=${page * 10}` : '';
  if (p) {
    return fetch(
		`${endpoint}${year}${first}${last}${a}${p}&$select=first_name,last_name,agency_name,title_description,base_salary,pay_basis`
	)
  .then(response => response.json())
  .then(data => data)
} else {
  return fetch(
    `${endpoint}${year}${first}${last}${a}&$select=count(base_salary)`
  )
    .then(response => response.json())
    .then(count => {
      if (count[0].count_base_salary === '0') return { data: [], count };
      return fetch(
        `${endpoint}${year}${first}${last}${a}&$limit=10&$select=first_name,last_name,agency_name,title_description,base_salary,pay_basis`
      )
        .then(response => response.json())
        .then(data => {
          return { data, count, query:  {first_name, last_name, agency, page: 0}};
        });
    });
  }
}




