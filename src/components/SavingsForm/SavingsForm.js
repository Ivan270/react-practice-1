import React, { useState } from 'react';

const SavingsForm = (props) => {
	const [currentSavings, setCurrentSavings] = useState('');
	const [yearlyContribution, setYearlyContribution] = useState('');
	const [expectedReturn, setExpectedReturn] = useState('');
	const [duration, setDuration] = useState('');

	// Reset form function
	const resetFormHandler = (event) => {
		setCurrentSavings('');
		setYearlyContribution('');
		setExpectedReturn('');
		setDuration('');
	};

	// Managing changing inputs
	const currentChangeHandler = (event) => {
		setCurrentSavings(event.target.value);
	};
	const yearlyContributionChangeHandler = (event) => {
		setYearlyContribution(event.target.value);
	};
	const expectedReturnChangeHandler = (event) => {
		setExpectedReturn(event.target.value);
	};
	const durationChangeHandler = (event) => {
		setDuration(event.target.value);
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
						onChange={currentChangeHandler}
						type="number"
						id="current-savings"
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						onChange={yearlyContributionChangeHandler}
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
						onChange={expectedReturnChangeHandler}
						type="number"
						id="expected-return"
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input onChange={durationChangeHandler} type="number" id="duration" />
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
