import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { CiTrash } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { deleteById } from '../apis/Api';
const HabitTitleCard = ({ HabitName, _id, onDelete }) => {
    const navigate = useNavigate();
    const handleDelete= async()=>{
        try{
            const response = await deleteById(_id);


        }catch(error){
            console.error(error);
        }
    }
    return (
        <div className="flex justify-between items-center shadow-custom-light dark:shadow-custom-dark p-5 mx-2 rounded-md">
            <h1 className="text-xl tracking-wider">{HabitName}</h1>
            <div className='flex justify-center items-center gap-4'>
                <button
                    className="border border-gray-600  dark:border-white shadow-md rounded-full p-1 active:bg-slate-500 transition-all active:opacity-5"
                   
                     onClick={()=>onDelete(_id)}
                >
                    <CiTrash />
                </button>
                <button
                    className="border border-gray-600  dark:border-white shadow-md rounded-full p-1 active:bg-slate-500 transition-all active:opacity-5"
                    onClick={() => navigate(`habit/${_id}`)}
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default HabitTitleCard;
