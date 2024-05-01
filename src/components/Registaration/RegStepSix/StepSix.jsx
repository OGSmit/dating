import { useState } from 'react';
import './StepSix.css';

const StepSix = ({ changeStep, changeFormData, formData, onStepBack, onSubmit }) => {
    const [maritalStatus, setMaritalStatus] = useState('');
    const [alcohol, setAlcohol] = useState(false);
    const [smoking, setSmoking] = useState(false);
    const [pets, setPets] = useState(false);
    const [children, setChildren] = useState(false);
    const [car, setCar] = useState(false);

    const handleMaritalStatusChange = (status) => {
        setMaritalStatus(status);
    };

    const handleAlcoholChange = () => {
        setAlcohol(!alcohol);
    };

    const handleSmokingChange = () => {
        setSmoking(!smoking);
    };

    const handlePetsChange = () => {
        setPets(!pets);
    };

    const handleChildrenChange = () => {
        setChildren(!children);
    };

    const handleCarChange = () => {
        setCar(!car);
    };

    const handleNext = async () => {
        const aboutMe = {
            maritalStatus,
            alcohol,
            smoking,
            pets,
            children,
            car
        };
        changeFormData('aboutMe', aboutMe);
        onSubmit(aboutMe)
    };

    const handleStepBack = () => {
        onStepBack();
    };

    return (
        <div className='step'>
            <h3>Выберите семейное положение:</h3>
            <div className="marital-status-options">
                <div className={`option ${maritalStatus === 'single' ? 'selected' : ''}`} onClick={() => handleMaritalStatusChange('single')}>
                    <span>Холост/Не замужем</span>
                </div>
                <div className={`option ${maritalStatus === 'married' ? 'selected' : ''}`} onClick={() => handleMaritalStatusChange('married')}>
                    <span>Женат/Замужем</span>
                </div>
                <div className={`option ${maritalStatus === 'divorced' ? 'selected' : ''}`} onClick={() => handleMaritalStatusChange('divorced')}>
                    <span>Разведен/Разведена</span>
                </div>
            </div>
            <h3>Ваши привычки:</h3>
            <div className="habit-options">
                <div className={`option ${alcohol ? 'selected' : ''}`} onClick={handleAlcoholChange}>
                    <span>Алкоголь</span>
                </div>
                <div className={`option ${smoking ? 'selected' : ''}`} onClick={handleSmokingChange}>
                    <span>Сигареты</span>
                </div>
                <div className={`option ${pets ? 'selected' : ''}`} onClick={handlePetsChange}>
                    <span>Животные</span>
                </div>
                <div className={`option ${children ? 'selected' : ''}`} onClick={handleChildrenChange}>
                    <span>Дети</span>
                </div>
                <div className={`option ${car ? 'selected' : ''}`} onClick={handleCarChange}>
                    <span>Машина</span>
                </div>
            </div>
            <button onClick={handleNext}>Далее</button>
            <button type='button' onClick={handleStepBack}>Назад</button>
        </div>
    );
};

export default StepSix;
