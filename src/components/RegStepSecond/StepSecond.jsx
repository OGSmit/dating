import { useState } from 'react';
import './StepSecond.css';

export default function StepSecond({ changeStep, changeFormData }) {
    const [name, setName] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleNext = () => {
        // Действия для перехода к следующему шагу или сохранения данных
        changeFormData('name', name);
        changeStep(3);
    };

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
            <button onClick={handleNext}>Далее</button>
        </div>
    );
}
