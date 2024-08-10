import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'; // Import the CSS file
import PollCreator from './components/PollCreator';
import PollList from './components/PollList';

function App() {
    return (
        <Router>
                <h1>Welcome to Online Polling Systems</h1>
                <nav>
                    <Link to="/create">Create Poll</Link>
                    <Link to="/polls">Poll List</Link>
                </nav>
                <p>Manage and Participate in Polls with ease. Use the navigation links to create new polls or view and vote in existing polls.</p>
                <Routes>
                    <Route path="/create" element={<PollCreator />} />
                    <Route path="/polls" element={<PollList />} />
                </Routes>
        </Router>
    );
}

export default App;
