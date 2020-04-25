import React from 'react';
import ProjectSummary from './FarmSummary';

const ProjectList = ({games}) => {
	return (
		<div className="game-list section">
			{games &&
				games.map(game => {
					return (
						<ProjectSummary
							game={game}
							key={game.id}
						/>
					);
				})}
		</div>
	);
};

export default ProjectList;
