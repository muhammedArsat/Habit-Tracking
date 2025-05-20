import React, { useState } from 'react';
import { addNewHabit } from '../apis/Api';
import { useNavigate } from 'react-router-dom';
const NewHabit = () => {
    const [name, setname] = useState('');
    const navigate = useNavigate();
    const handleNewHabit = async () => {
        try {
            const response = await addNewHabit(name);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col gap-4 justify-start items-center min-h-screen">
            <h1>Create A New Habit</h1>

            <input
                type="text"
                placeholder="E.g Cold Shower"
                className="border border-gray-500 p-2 rounded-md outline-none focus:shadow-custom-light dark:focus:shadow-custom-dark dark:bg-black"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <button
                className="border border-black px-3 py-2 rounded-md active:opacity-5 active:bg-gray-400 transition-all dark:border-white"
                onClick={handleNewHabit}
            >
                Add New
            </button>
        </div>
    );
};

export default NewHabit;
