import React from 'react';
import styles from './SavingsTable.module.css';

const SavingsTable = (props) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
	return (
		<table className={styles.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			{props.data.map((year) => {
				return (
					<tbody key={year.year}>
						<tr>
							<td>{year.year}</td>
							<td>{formatter.format(year.savingsEndOfYear)}</td>
							<td>{parseFloat(year.yearlyInterest).toFixed(2)}</td>
							<td>
								{formatter.format(
									year.savingsEndOfYear -
										props.initialInvestment -
										year.yearlyContribution * year.year
								)}
							</td>
							<td>
								{formatter.format(
									props.initialInvestment + year.yearlyContribution * year.year
								)}
							</td>
						</tr>
					</tbody>
				);
			})}
		</table>
	);
};

export default SavingsTable;
