<<<<<<< HEAD
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import PollCreator from "./components/PollCreator";
import PollList from "./components/PollList";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <h1>Welcome to Online Polling Systems</h1>
      <nav>
        <Link to="/login">Admin Login</Link>
        <Link to="/polls">View Polls</Link>
        {isAdmin && (
          <>
            <Link to="/create">Create Poll</Link>
            <Link to="/admin-dashboard">Admin Dashboard</Link>{" "}
          </>
        )}
      </nav>
      <p>
        Manage and Participate in Polls with ease. Use the navigation links to
        create new polls or view and vote in existing polls.
      </p>
      <Routes>
        <Route path="/login" element={<AdminLogin onLogin={setIsAdmin} />} />
        <Route
          path="/create"
          element={
            isAdmin ? (
              <PollCreator />
            ) : (
              <p>Please log in as admin to create a poll.</p>
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            isAdmin ? (
              <AdminDashboard />
            ) : (
              <p>Unauthorized access. Please log in as admin.</p>
            )
          }
        />
        <Route path="/polls" element={<PollList />} />
      </Routes>
    </Router>
  );
=======
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
>>>>>>> origin/main
}

export default App;
