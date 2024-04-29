import { useState } from 'react';
import './StepOne.css';

export default function StepOne({ changeStep, changeFormData }) {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleNext = () => {
        // Действия для перехода к следующему шагу или сохранения данных

        changeFormData('gender', selectedGender)
        changeStep(2)
    };

    return (
        <div className='step'>
            <h3>Здравствуйте! Укажите ваш пол</h3>
            <p>Это займет всего пару минут!</p>
            <label>
                Мужчина
                <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    checked={selectedGender === "male"} 
                    onChange={handleGenderChange} 
                />
            </label>
            <label>
                Женщина
                <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    checked={selectedGender === "female"} 
                    onChange={handleGenderChange} 
                />
            </label>
            <button onClick={handleNext}>Далее</button>
        </div>
    );
}
