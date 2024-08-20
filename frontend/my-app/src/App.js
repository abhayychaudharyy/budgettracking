import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Auth/register';
import Login from './components/Auth/login';
import Home from './components/Dashboard/Home';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(response => {
                setMessage(response.data); // Assuming the response has a message
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Router>
            <div className="App">
                <h1>{message}</h1> {/* Displaying the fetched message */}

                {/* Define routes for different components */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
