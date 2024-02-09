import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
	const { dispatch, currency } = useContext(AppContext);

	const increaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: "ADD_EXPENSE",
			payload: expense,
		});
	};

	
	const decreaseAllocation = (name) => {
		const expense = {
			name: name,
			cost: 10,
		};

		dispatch({
			type: "RED_EXPENSE",
			payload: expense,
		});
	};

	return (
		<tr>
			<td>{props.name}</td>
			<td>
				{currency}
				{props.cost}
			</td>
			<td>
				<button
					style={{
						borderRadius: "50%",
						backgroundColor: "green",
						width: "34px",
						height: "34px",
						border: "none",
						paddingLeft: "3px",
					}}
					onClick={(event) => increaseAllocation(props.name)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="30"
						fill="#fff"
						class="bi bi-plus-circle"
						viewBox="0 0 16 16">
						<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
					</svg>
				</button>
			</td>
			<td>
				<button
					class="btn btn-danger"
					onClick={(event) => decreaseAllocation(props.name)}
					style=
					{{
						borderRadius: "50%",
						width: "30px",
						height: "30px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					>
					<span
						class="btn-close btn-close-white"
						style={{ opacity: "1" }}></span>
				</button>
			</td>
		</tr>
	);
};

export default ExpenseItem;
