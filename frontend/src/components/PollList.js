import React, { useEffect, useState } from 'react';
import '../style/PollList.css';
import PollVote from './PollVote';

const PollList = () => {
    const [polls, setPolls] = useState([]);
    const [selectedPoll, setSelectedPoll] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/polls')
            .then(res => res.json())
            .then(data => setPolls(data));
    }, []);

    if (selectedPoll) {
        return <PollVote poll={selectedPoll} onBack={() => setSelectedPoll(null)} />;
    }

    return (
        <div>
            <h2>Poll List</h2>
            {polls.map(poll => (
                <div key={poll.id} onClick={() => setSelectedPoll(poll)}>
                    <h3>{poll.title}</h3>
                    <p>{poll.description}</p>
                </div>
            ))}
        </div>
    );
};

export default PollList;
