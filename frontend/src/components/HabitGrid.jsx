import React, { useState } from 'react';
import InCompleted from '../assets/incomplete.png';
import Completed from '../assets/completed.png';
import { useParams } from 'react-router-dom';
const HabitGrid = ({ arr, onChangeStatus }) => {

    const{id} = useParams();
    const handleCellClick = (index) =>{
        let newValue;
        const confirmed = window.confirm("Click ok for completed and cancel for Not completed");
        if(confirmed){
            newValue = 'Y'   
        }else{
            newValue = 'N'
        }
        onChangeStatus(id,index, newValue);
    }
    return (
        <div className="grid grid-cols-5 gap-0 px-2 mt-10 p-2 ">
            {arr.flat().map((current, index) => {
                return (
                    <div className="border h-20 w-full p-5 relative " onClick={()=> handleCellClick(index)} key={index}>
                        <span className="absolute top-0 left-1">
                            {index + 1}
                        </span>
                        {current === 'Y' ? (
                            <img src={Completed} alt="Completed" />
                        ) : current === 'N' ? (
                            <img src={InCompleted} alt="Completed" />
                        ) : (
                            ''
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default HabitGrid;
