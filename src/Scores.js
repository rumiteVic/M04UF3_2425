//import './Scores.css';
import ScoreItem from './ScoreItem.js';

import { useState, useRef, useEffect } from 'react';





function Scores(props) {
	const [scores, setScores] = useState([]);

	const last_score = useRef({});

	useEffect ( () => {
		if (props.add_score.nombre === null){
			return;
		}

		if (props.add_score.nombre === last_score.current.nombre
			&& props.add_score.score === last_score.current.score){
			return;
		}

		let score_list = [];
		if (localStorage.getItem("scores") !== null){
			score_list = JSON.parse(localStorage.getItem("scores"));
		}

		score_list.push(props.add_score);

		last_score.current = props.add_score;

		localStorage.setItem("scores", JSON.stringify(score_list));

		setScores(score_list);
	});


	let scores_json = localStorage.getItem("scores");

	let scores_parsed = JSON.parse(scores_json);
	if (scores_parsed === null){
		scores_parsed = [];
	}

	let score_list = [];

	for (let i = 0; i < scores_parsed.length; i++){
		let name = scores_parsed[i].nombre;
		let score = scores_parsed[i].score;

		score_list.push(<ScoreItem player_name={name} player_score={score} key={i} />);

	}
  return (
    <section className="Scores">
			<h2>Scores</h2>

			<ol>
				{score_list}
			</ol>
    </section>
  );
}

export default Scores;
