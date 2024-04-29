// стр Регистрации в несколько шагов +/- 5 (линки на MainPage, Login)
'use client'
import StepFour from '@/components/RegStepFour/StepFour';
import StepOne from '@/components/RegStepOne/StepOne';
import StepSecond from '@/components/RegStepSecond/StepSecond';
import StepThree from '@/components/RegStepThree/StepThree';
import { useState } from 'react';
import './Registration.css';
async function appendUser(data) {
  const res = await fetch('api/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}



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
    }))};

    // useEffect(() => {
    //   console.log(formData)
    //   changeKey('gender', 'male')

    //   console.log(formData)
    // }, [])

    function changeStep(count) {
      console.log('tyt')
      setActiveStep(count)
    }

    async function handleJWTCheck() {
      await fetch('http://localhost:3000/api/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => console.log(res))
    }

    /*useEffect(() => {
      handleJWTCheck()
    }, []);*/

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const login = async () => {
      const res = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // Здесь можно добавить логику для отправки данных на сервер
      appendUser(formData)
      // После отправки формы, можно очистить поля
      setFormData({ name: '', email: '', password: '' });
    };

    // const step = {
    //   1: <StepOne changeStep={changeStep} changeFormData={changeFormData} />,
    //   2: <StepSecond />,
    //   3: <StepThree />,
    //   4: <StepFour />,
    // }

    function step(count) {
      switch (count) {
        case 1:
          return <StepOne changeStep={changeStep} changeFormData={changeFormData} />;
        case 2:
          return <StepSecond changeStep={changeStep} changeFormData={changeFormData} />;
        case 3:
          return <StepThree changeStep={changeStep} changeFormData={changeFormData} formData={formData} />;
        case 4:
          return <StepFour />;
          // шаг 5 : цель знакомств 
          // семейное положение

          // образование

          // Иконки : алкоголь, сигареты, животные, дети, машина,


          // увлечение

          // последний шаг email password
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