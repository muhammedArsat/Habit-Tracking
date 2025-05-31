import React, { useEffect, useState } from 'react';
import HabitTitleCard from '../components/HabitTitleCard';
import { getAllHabit,deleteById } from '../apis/Api';
const Home = () => {
    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await getAllHabit();
            setHabits(response.data);
        } catch (error) {
            console.error("Failed to fetch habits:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteById(id);
            setHabits((prev) => prev.filter((habit) => habit._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return <h1 className="text-center text-xl">Loading...</h1>;
    }

    return (
        <>
            {habits.length === 0 ? (
                <p className='w-full text-2xl text-center'>No Habits</p>
            ) : (
                <div className="h-[690px] py-2 flex flex-col gap-3 overflow-auto">
                    {habits.map((habit, index) => (
                        <HabitTitleCard
                            key={index}
                            HabitName={habit.name}
                            _id={habit._id}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Home;
