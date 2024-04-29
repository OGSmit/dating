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

    const handleNext = () => {
        if (!day || !month || !year) {
            alert('Пожалуйста, заполните все поля даты рождения.');
            return;
        }

        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        const birthday = `${day}-${month}-${year}`;

        const horoscope = getHoroscope(month, day); // Получение знака зодиака

        if (age < 18) {
            alert('Вы должны быть старше 18 лет для регистрации');
            return;
        }

        changeFormData('horoscope', horoscope);
        changeFormData('birthday', birthday);
    };

    function getHoroscope(month: number, day: number): string {

        const horoscopes = [
            { sign: 'Овен', start: '03-21', end: '04-19' },
            { sign: 'Телец', start: '04-20', end: '05-20' },
            { sign: 'Близнецы', start: '05-21', end: '06-20' },
            { sign: 'Рак', start: '06-21', end: '07-22' },
            { sign: 'Лев', start: '07-23', end: '08-22' },
            { sign: 'Дева', start: '08-23', end: '09-22' },
            { sign: 'Весы', start: '09-23', end: '10-22' },
            { sign: 'Скорпион', start: '10-23', end: '11-21' },
            { sign: 'Стрелец', start: '11-22', end: '12-21' },
            { sign: 'Козерог', start: '12-22', end: '01-19' },
            { sign: 'Водолей', start: '01-20', end: '02-18' },
            { sign: 'Рыбы', start: '02-19', end: '03-20' },
        ];

        const matchingHoroscope = horoscopes.find(({ start, end }) => {
            const [startMonth, startDay] = start.split('-').map(Number);
            const [endMonth, endDay] = end.split('-').map(Number);
            console.log('popali', month, startMonth)
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return true;
            }

            if ((month === 12 && day >= startDay) || (month === 1 && day <= endDay)) {
                return true;
            }

            return false;
        });

        return matchingHoroscope ? matchingHoroscope.sign : 'Неизвестно';
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
