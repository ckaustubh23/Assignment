import React, { useState } from 'react';
import '../style/PollVote.css';

const PollVote = ({ poll, onBack }) => {
    const [voteSubmitted, setVoteSubmitted] = useState(false);

    const submitVote = async (option) => {
        const response = await fetch('http://localhost:3001/submit-vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pollId: poll.id, option })
        });
        if (response.ok) {
            setVoteSubmitted(true);
        }
    };

    if (voteSubmitted) {
        return (
            <div>
                <h1>Vote Confirmation</h1>
                <h3>Thank you for voting!</h3>
                <h3>Your Vote has been Successfully submitted.</h3>
                <button onClick={onBack}>Back to Poll List</button>
            </div>
        );
    }

    return (
        <div>
            <h3>{poll.title}</h3>
            <p>{poll.description}</p>
            <button onClick={() => submitVote('option1')}>{poll.option1}</button>
            <button onClick={() => submitVote('option2')}>{poll.option2}</button>
        </div>
    );
};

export default PollVote;
