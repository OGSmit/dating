import { useState } from 'react';
import './StepFour.css';

const StepFour = ({changeStep, changeFormData, formData, onStepBack }) => {
    const [purposeOfDating, setPurposeOfDating] = useState('');

    const handlePurposeChange = (event) => {
        const { value } = event.target;
        setPurposeOfDating(value);
    };

    const handleNext = () => {
        if (!purposeOfDating) {
            alert('Пожалуйста, выберите цель знакомства.');
            return;
        }

        changeFormData('purposeOfDating', purposeOfDating);
        changeStep(5)
    };

    function handleStepBack() {
      onStepBack()
  }

    return (
      <div className='step'>
          <h3>{formData.name}, выберите вашу цель знакомства:</h3>
          <select value={purposeOfDating} onChange={handlePurposeChange}>
              <option value="">Выберите цель знакомства</option>
              <option value="Серьезные отношения">Серьезные отношения</option>
              <option value="Свидания и флирт">Свидания и флирт</option>
              <option value="Общение и дружба">Общение и дружба</option>
          </select>
          <button onClick={handleNext}>Далее</button>
          <button type='button' onClick={handleStepBack}>Назад</button>
      </div>
  );
};

export default StepFour;