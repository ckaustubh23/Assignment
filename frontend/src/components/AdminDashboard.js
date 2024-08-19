// components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import '../style/AdminDashboard.css';

const AdminDashboard = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        const fetchPolls = async () => {
            const response = await fetch('http://localhost:5001/admin-polls');
            const data = await response.json();
            setPolls(data);
        };

        fetchPolls();
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Admin Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Option 1</th>
                        <th>Option 2</th>
                        <th>Votes Opt 1</th>
                        <th>Votes Opt 2</th>
                    </tr>
                </thead>
                <tbody>
                    {polls.map((poll) => (
                        <tr key={poll.id}>
                            <td>{poll.id}</td>
                            <td>{poll.title}</td>
                            <td>{poll.description}</td>
                            <td>{poll.option1}</td>
                            <td>{poll.option2}</td>
                            <td>{poll.votes1}</td>
                            <td>{poll.votes2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
