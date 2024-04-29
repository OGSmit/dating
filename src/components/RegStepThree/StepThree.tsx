import React, { useState } from 'react';
import './StepThree.css';

interface StepThreeProps {
    changeStep: (step: number) => void;
    changeFormData: (key: string, value: any) => void;
    formData: { [key: string]: any };
}

const StepThree: React.FC<StepThreeProps> = ({ changeStep, changeFormData, formData }) => {
    const [day, setDay] = useState<number | ''>('');
    const [month, setMonth] = useState<number | ''>('');
    const [year, setYear] = useState<number | ''>('');

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setDay(value ? parseInt(value) : '');
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMonth(value ? parseInt(value) : '');
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setYear(value ? parseInt(value) : '');
    };

    async function handleNext() {

        if (month !== '' && day !== '') {
            getHoroscope(month, day);
        }
        // Получение знака зодиака
        getAge();
    };

   
    function  getAge() {
        if (!day || !month || !year) {
            alert('Пожалуйста, заполните все поля даты рождения.');
            return;
        }

        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const birthday = `${day}-${month}-${year}`;

        return changeFormData('birthday', birthday);
    }

    function getHoroscope(month: number, day: number) {
        // Проверяем входные данные на корректность
        if (month < 1 || month > 12 || day < 1 || day > 31) {
            return changeFormData('horoscope', "Некорректная дата") ;
        }

        // Массив данных о знаках зодиака и их соответствующие даты
        const zodiacSigns = [
            { sign: "Козерог", startMonth: 1, startDay: 1, endMonth: 1, endDay: 19 },
            { sign: "Водолей", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
            { sign: "Рыбы", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
            { sign: "Овен", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
            { sign: "Телец", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
            { sign: "Близнецы", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
            { sign: "Рак", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
            { sign: "Лев", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
            { sign: "Дева", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
            { sign: "Весы", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
            { sign: "Скорпион", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
            { sign: "Стрелец", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
            { sign: "Козерог", startMonth: 12, startDay: 22, endMonth: 12, endDay: 31 }
        ];

        for (const sign of zodiacSigns) {
            if ((month === sign.startMonth && day >= sign.startDay) || (month === sign.endMonth && day <= sign.endDay)) {
                return changeFormData('horoscope', sign.sign);
            }
        }
        return changeFormData('horoscope', 'Неизвестно'); // Если не найден ни один знак зодиака, по умолчанию возвращаем Козерог
    }

    return (
        <div className='step'>
            <h3>{formData.name}, когда у вас день рождения?</h3>
            <p>Вам должно быть больше 18 лет</p>
            <form className='step'>
                <label>
                    День
                    <input type="number" value={day} onChange={handleDayChange} />
                </label>
                <label>
                    Месяц
                    <input type="number" value={month} onChange={handleMonthChange} />
                </label>
                <label>
                    Год
                    <input type="number" value={year} onChange={handleYearChange} />
                </label>
            </form>
            <button onClick={handleNext}>Далее</button>
        </div>
    );
};

export default StepThree;
