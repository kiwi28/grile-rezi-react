export const Question: React.FC<QuestionProps> = ({ grila }) => {
	return (
		<div>
			<h3>{grila.text}</h3>
			<ol>
				{grila.answers.map((answer: string, idx: number) => (
					<div
						key={idx}
						style={{ display: "flex" }}
					>
						<input
							type="checkbox"
							style={{ marginRight: "10px" }}
						/>
						<li>{answer}</li>
					</div>
				))}
			</ol>
		</div>
	);
};

type QuestionProps = {
	grila: Grila;
};

export type Grila = {
	pages: number[];
	answersCount: number;
	correctAnswersCount: number;
	correct: string;
	explanationExists: boolean;
	questionIndex: number;
	answersOrder: string;
	chapterId: string;
	text: string;
	answers: string[];
};
