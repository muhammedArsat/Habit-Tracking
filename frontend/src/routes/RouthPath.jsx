import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import HabitTrackingPage from '../pages/HabitTrackingPage';
import NewHabit from '../pages/NewHabit';
const RouthPath = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/habit/:id" element={<HabitTrackingPage />} />
                    <Route path="/habit" element={<NewHabit/>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default RouthPath;
