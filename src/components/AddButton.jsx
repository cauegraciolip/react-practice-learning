import React, { useState } from 'react';
import Button from './Button';

import "./AddButton.css"
const AddButton = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("")
    }

    return ( 
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
            <div onClick={handleAddTaskClick} className="add-task-button-container">
            <Button>Adicionar</Button>

            </div>
        </div>
     );
}
 
export default AddButton;