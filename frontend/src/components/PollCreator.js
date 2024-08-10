import React, { useState } from 'react';
import '../style/PollCreator.css';


const PollCreator = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');

    const createPoll = async () => {
        const response = await fetch('http://localhost:3001/create-poll', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, option1, option2 })
        });
        if (response.ok) {
            alert('Poll Created Successfully!');
        }
    };

    return (
        <div className='container'>
            <h2>Create a New Poll</h2>
            <div>Poll Title:
            <input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>Description:
            <textarea value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div>Option 1:
            <input value={option1} onChange={e => setOption1(e.target.value)} />
            </div>
            <div>Option 2:
            <input value={option2} onChange={e => setOption2(e.target.value)} />
            </div>
            <button onClick={createPoll}>Create Poll</button>
        </div>
    );
};

export default PollCreator;
