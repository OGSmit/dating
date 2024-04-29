// стр Регистрации в несколько шагов +/- 5 (линки на MainPage, Login)
'use client'
import { useEffect, useState } from 'react';


async function appendUser(data) {
  const res = await fetch('api/registration', {
    method: 'POST',
		headers: {
      'Content-Type': 'application/json',
		},
    body: JSON.stringify(data)
	})
}

const step = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
}

const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: ''
  });

  const changeStep = (direction) => {
    if(direction === 'forward') {
      setActiveStep((prevState) => {
        prevState + 1
      })
    } else {
      setActiveStep((prevState) => {
        prevState - 1
      })
    }
  }

  const changeKey = (key, value) => {
    setFormData({ ...formData, [key]: value });
  }

  useEffect(() => {
    console.log(formData)
    changeKey('gender', 'male')

    console.log(formData)
  }, [])
  
  async function handleJWTCheck () {
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

  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
};

export default RegisterForm;