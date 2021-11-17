import React from 'react';
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/')
    }

    return (
        <div>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, cupiditate voluptates exercitationem assumenda dolor consectetur! Ducimus quos, doloribus porro voluptates recusandae consequatur ipsa harum mollitia dolore, minus tempore, nesciunt placeat.
                </p>
            </div>
        </div>
    )
};

export default TaskDetails;