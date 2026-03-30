import React from 'react';
import { useSelector } from 'react-redux';

const StatisticsPhase = () => {
    // Accessing statistics state from Redux
    const statistics = useSelector(state => state.statistics);

    // Destructuring the needed data
    const { finalScores, achievements, performanceAnalytics } = statistics;

    return (
        <div>
            <h1>Final Scores</h1>
            <p>{finalScores}</p>
            <h2>Achievements</h2>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
            <h2>Performance Analytics</h2>
            <p>{performanceAnalytics}</p>
        </div>
    );
};

export default StatisticsPhase;