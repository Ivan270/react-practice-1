import React, { useState } from 'react';
import styles from './SavingsForm.module.css';

const initialUserInput = {
	'current-savings': 10000,
	'yearly-contribution': 1200,
	'expected-return': 7,
	duration: 10,
};

const SavingsForm = (props) => {
	const [userInput, setUserInput] = useState(initialUserInput);

	// Reset form function
	const resetFormHandler = () => {
		setUserInput(initialUserInput);
	};

	// Managing changing inputs
	const inputChangeHandler = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				// dynamically accessing a property, + transforms it into a number
				[input]: +value,
			};
		});
	};

	// Submits data in an object and passes it to parent component
	const submitHandler = (event) => {
		event.preventDefault();
		props.onSubmitSavings(userInput);
		event.target.reset();
	};

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						onChange={(event) =>
							inputChangeHandler('current-savings', event.target.value)
						}
						value={userInput['current-savings']}
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
						value={userInput['yearly-contribution']}
						type="number"
						id="yearly-contribution"
					/>
				</p>
			</div>
			<div className={styles['input-group']}>
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						onChange={(event) =>
							inputChangeHandler('expected-return', event.target.value)
						}
						value={userInput['expected-return']}
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
						value={userInput.duration}
						type="number"
						id="duration"
					/>
				</p>
			</div>
			<p className={styles.actions}>
				<button
					onClick={resetFormHandler}
					type="reset"
					className={styles.buttonAlt}
				>
					Reset
				</button>
				<button type="submit" className={styles.button}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default SavingsForm;
