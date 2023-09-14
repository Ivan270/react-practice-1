import React, { useState } from 'react';
import Header from './components/Header/Header';
import SavingsForm from './components/SavingsForm/SavingsForm';
import SavingsTable from './components/SavingsTable/SavingsTable';

function App() {
	const [results, setResults] = useState([]);
	const [userInput, setUserInput] = useState(null);

	const calculateHandler = (userInput) => {
		// triggered when form is submitted
		const yearlyData = []; // per-year results
		setUserInput(userInput);

		let currentSavings = +userInput['current-savings'];
		const yearlyContribution = +userInput['yearly-contribution'];
		const expectedReturn = +userInput['expected-return'] / 100;
		const duration = +userInput['duration'];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}

		setResults(yearlyData);
	};
	// fallback text if no data
	let content = <p style={{ textAlign: 'center' }}>No information found.</p>;
	if (results.length > 0) {
		content = (
			<SavingsTable
				data={results}
				initialInvestment={userInput['current-savings']}
			/>
		);
	}

	return (
		<div>
			<Header />
			<SavingsForm onSubmitSavings={calculateHandler} />
			{content}
		</div>
	);
}

export default App;
