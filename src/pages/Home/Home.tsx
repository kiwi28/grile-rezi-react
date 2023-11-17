import { Grila, Question } from "./Component";

import grile from "../../../json/grile.json";

export const Home: React.FC = () => {
	console.log(grile);
	const grileArr = grile.data.exam.questions;

	const parsedArr = grileArr.map((grila: Grila) => {
		const number = grila.text.match(/^\d+/)?.[0];
		console.log(number);
		return number;
	});

	console.log(parsedArr);

	return (
		<div style={{ textAlign: "left" }}>
			<h1>Home</h1>
			{grileArr.map((grila: Grila, idx: number) => (
				<Question
					key={idx}
					grila={grila}
				/>
			))}
		</div>
	);
};
