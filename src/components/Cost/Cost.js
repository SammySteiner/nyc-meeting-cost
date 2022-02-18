import React, {useState, useEffect} from "react";

export default function MeetingTable({ meeting }) {
	// select length of meeting
	// Cost of meeting
  const [cost, setCost] = useState(0)

  useEffect( ()=> {
    const workHoursPerDay = 7
    const workDaysPerYear = 365 - (2*52) - (3*5) - 5 - 8
    const workHoursPerYear = workDaysPerYear * workHoursPerDay
    let hourlyCost = meeting.reduce( (acc, person) => {
      switch (person.pay_basis) {
				case 'per Annum':
					return acc + (parseFloat(person.base_salary, 10) / workHoursPerYear);
				case 'per Day':
					return acc + (parseFloat(person.base_salary, 10) / workHoursPerDay);
				case 'per Hour':
					return acc + parseFloat(person.base_salary, 10);
				default:
					return 0
			}
    }, 0)
    setCost(hourlyCost)
  }, [meeting])

	return meeting.length > 0 ? (
		<div>
			<h2>Cost</h2>
      <p>This meeting costs NYC taxpayers {"$"}{cost.toFixed(2)} per hour.</p>
		</div>
	) : null;
}
