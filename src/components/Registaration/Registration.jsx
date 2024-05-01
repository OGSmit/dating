// стр Регистрации в несколько шагов +/- 5 (линки на MainPage, Login)
'use client'
import StepFour from '@/components/Registaration//RegStepFour/StepFour';
import StepFive from '@/components/Registaration/RegStepFive/StepFive';
import StepOne from '@/components/Registaration/RegStepOne/StepOne';
import StepSecond from '@/components/Registaration/RegStepSecond/StepSecond';
import StepSix from '@/components/Registaration/RegStepSix/StepSix';
import StepThree from '@/components/Registaration/RegStepThree/StepThree';
import { useState } from 'react';
import './Registration.css';

// async function appendUser(data) {
//   const res = await fetch('api/registration', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data)
//   })
// }

const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: ''
  });

  const changeFormData = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value
    }))
  };

  function changeStep(count) {
    setActiveStep(count)
  }

  function handleStepBack() {
    setActiveStep((prevState) => {
      if (prevState >= 1) {
        return prevState - 1
      } else return
    })
  }


  // async function handleJWTCheck() {
  //   await fetch('http://localhost:3000/api/login', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then(res => console.log(res))
  // }

  /*useEffect(() => {
    handleJWTCheck()
  }, []);*/

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const login = async () => {
  //   const res = await fetch('api/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData)
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Здесь можно добавить логику для отправки данных на сервер
  //   appendUser(formData)
  //   // После отправки формы, можно очистить поля
  //   setFormData({ name: '', email: '', password: '' });
  // };

  function step(count) {
    switch (count) {
      case 1:
        return <StepOne changeStep={changeStep} changeFormData={changeFormData} />;
      case 2:
        return <StepSecond changeStep={changeStep} changeFormData={changeFormData} onStepBack={handleStepBack} />;
      case 3:
        return <StepThree changeStep={changeStep} changeFormData={changeFormData} formData={formData} onStepBack={handleStepBack} />;
      case 4:
        return <StepFour changeStep={changeStep} changeFormData={changeFormData} formData={formData} onStepBack={handleStepBack} />;
      case 5:
        return <StepFive changeStep={changeStep} changeFormData={changeFormData} formData={formData} onStepBack={handleStepBack} />;
        case 6:
        return <StepSix changeStep={changeStep} changeFormData={changeFormData} formData={formData} onStepBack={handleStepBack} />;

      default:
        return null;
    }
  }


  return (
    <section className='registration'>
      {/* <form onSubmit={handleSubmit} className='registration__form'>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
        <button type='button' onClick={() => console.log(formData)}>Войти</button>
      </form> */}
      {step(activeStep)}
    </section>
  );
};

export default RegisterForm;