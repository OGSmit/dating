import { useState } from 'react';
import './StepSecond.css';

export default function StepSecond({ changeStep, changeFormData, onStepBack }) {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNext = () => {
        // Действия для перехода к следующему шагу или сохранения данных
        changeFormData('name', name);
        changeStep(3);
    };

    function handleStepBack() {
        onStepBack()
    }

    return (
        <div className='step'>
            <h3>Как вас зовут?</h3>
            <p>Никого не бойся и пиши свое настоящее имя</p>
            <input 
                type="text" 
                value={name} 
                onChange={handleNameChange} 
                placeholder="Введите ваше имя" 
            />
            <button type='button' onClick={handleNext}>Далее</button>
            <button type='button' onClick={handleStepBack}>Назад</button>
        </div>
    );
}
