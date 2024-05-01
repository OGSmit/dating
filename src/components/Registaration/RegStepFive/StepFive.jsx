import React, { useState } from 'react';

const StepFive = ({ changeStep, changeFormData, formData, onStepBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNext = () => {
        // Сохраняем email и пароль в formData
        changeFormData('email', email);
        changeFormData('password', password);
        changeStep(6); // Переходим к следующему шагу
    };

    const handleStepBack = () => {
        onStepBack(); // Возвращаемся на предыдущий шаг
    };

    return (
        <div className='step'>
            <h3>Введите ваш email и пароль</h3>
            <form className='step'>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    Пароль:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
            </form>
            <button onClick={handleNext}>Далее</button>
            <button type='button' onClick={handleStepBack}>Назад</button>
        </div>
    );
};

export default StepFive;
