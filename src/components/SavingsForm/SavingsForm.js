import React, { useState } from 'react';

const SavingsForm = (props) => {
	const [currentSavings, setCurrentSavings] = useState('');
	const [yearlyContribution, setYearlyContribution] = useState('');
	const [expectedReturn, setExpectedReturn] = useState('');
	const [duration, setDuration] = useState('');

	const [userInput, setUserInput] = useState({
		'current-savings': 10000,
		'yearly-contribution': 1200,
		'expected-return': 7,
		duration: 10,
	});

	// Reset form function
	const resetFormHandler = () => {
		setUserInput({
			'current-savings': 10000,
			'yearly-contribution': 1200,
			'expected-return': 7,
			duration: 10,
		});
	};

	// Managing changing inputs
	const inputChangeHandler = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				// dynamically accessing a property
				[input]: value,
			};
		});
	};

	// Submits data in an object and passes it to parent component
	const submitHandler = (event) => {
		event.preventDefault();
		const userInput = {
			'current-savings': Number(currentSavings),
			'yearly-contribution': Number(yearlyContribution),
			'expected-return': Number(expectedReturn),
			duration: Number(duration),
		};
		props.onSubmitSavings(userInput);
		event.target.reset();
	};

	return (
		<form onSubmit={submitHandler} className="form">
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						onChange={(event) =>
							inputChangeHandler('current-savings', event.target.value)
						}
						type="number"
						id="current-savings"
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						onChange={(event) =>
							inputChangeHandler('yearly-contribution', event.target.value)
						}
						type="number"
						id="yearly-contribution"
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						onChange={(event) =>
							inputChangeHandler('expected-return', event.target.value)
						}
						type="number"
						id="expected-return"
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						onChange={(event) =>
							inputChangeHandler('duration', event.target.value)
						}
						type="number"
						id="duration"
					/>
				</p>
			</div>
			<p className="actions">
				<button onClick={resetFormHandler} type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	);
};

export default SavingsForm;
