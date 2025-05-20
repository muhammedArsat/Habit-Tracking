import React, { useEffect, useState } from 'react';
import HabitGrid from '../components/HabitGrid';
import { getHabitById, updateHabitById } from '../apis/Api';
import { useParams } from 'react-router-dom';

const HabitTrackingPage = () => {
    const { id } = useParams();
    const [habitArray, setHabitArray] = useState([]);
    const [totalDaysCompleted, setTotalDaysCompleted] = useState(0);
    useEffect(() => {
        fetchHabitById();
    }, [id]);

    const fetchHabitById = async () => {
        const response = await getHabitById(id);
        setHabitArray(response.data.days);
    };

    useEffect(() => {
        const total = habitArray.filter((day) => day === 'Y').length;
        setTotalDaysCompleted(total);
    }, [habitArray]);

    const changeState = async (id,index, value) => {
        try {
            
            const response = await updateHabitById(id, index, value);
            const updatedArray = response.data.days;
            setHabitArray(updatedArray);
        
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="mt-[10px]">
            <div>
                <h1 className="text-lg tracking-wider text-center m-4 ">
                    Number of Days Completed : {totalDaysCompleted}/21
                </h1>
                <HabitGrid
                    arr={habitArray}
                    completedDays={totalDaysCompleted}
                    onChangeStatus={changeState}
                />
            </div>
        </div>
    );
};

export default HabitTrackingPage;
