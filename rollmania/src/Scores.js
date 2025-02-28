import './Scores.css';
import ScoreItem from './ScoreItem.js';




function Scores(props) {
  let score_list = [
		<ScoreItem player_name="Jacinto" player_score="44" key="0" />,
		<ScoreItem player_name="Jawsfsn" player_score="3" key="1" />
	]

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
