import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './StepThree.css';
const StepThree = ({ changeStep, changeFormData, formData, onStepBack }) => {
    // const [day, setDay] = useState('');
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState('');

    // const handleDayChange = (event) => {
    //     const { value } = event.target;
    //     setDay(value ? parseInt(value) : '');
    // };

    // const handleMonthChange = (event) => {
    //     const { value } = event.target;
    //     setMonth(value ? parseInt(value) : '');
    // };

    // const handleYearChange = (event) => {
    //     const { value } = event.target;
    //     setYear(value ? parseInt(value) : '');
    // };
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

   const handleNext = async () => {
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();

        if (month !== '' && day !== '') {
            getHoroscope(month, day);
        }
        getAge(day, month, year);
        changeStep(4);
    };

    function handleStepBack() {
        onStepBack()
    }

    const getAge = (day, month, year) => {
        if (!day || !month || !year) {
            alert('Пожалуйста, заполните все поля даты рождения.');
            return;
        }

        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const birthday = `${day}-${month}-${year}`;

        return changeFormData('birthday', birthday);
    };

    const zodiacForecasts = {
        "Овен": "Сегодня ваша энергия на высоте! Возможно, вы найдете новый источник вдохновения.",
        "Телец": "Сегодня ваша целеустремленность принесет вам успех. Держите курс и не отвлекайтесь.",
        "Близнецы": "Сегодня откройте новые горизонты! Возможно, это будет день для путешествий или обучения.",
        "Рак": "Сегодня ваша интуиция будет вашим лучшим советчиком. Доверьтесь своим чувствам.",
        "Лев": "Сегодня вы будете замечены! Возможно, это день, когда вы блеснете на общественном мероприятии.",
        "Дева": "Сегодня пора обратить внимание на свое здоровье. Заботьтесь о себе и своем теле.",
        "Весы": "Сегодня у вас будет особенно хорошее чувство стиля. Позвольте себе выглядеть и чувствовать себя на высоте.",
        "Скорпион": "Сегодня ваша стратегия и умение проникать в суть дела помогут вам преодолеть любые препятствия.",
        "Стрелец": "Сегодня время веселиться и наслаждаться жизнью! Не забудьте позволить себе немного развлечения.",
        "Козерог": "Сегодня кто-то попытается украсть ваше сердце. Будьте начеку!",
        "Водолей": "Сегодня ваше воображение и оригинальность могут привести к удивительным открытиям и идеям.",
        "Рыбы": "Сегодня время проявить сострадание и заботу к окружающим. Возможно, кому-то нужна ваша поддержка."
    };


    const getHoroscope = (month, day) => {
        if (month < 1 || month > 12 || day < 1 || day > 31) {
            return changeFormData('horoscope', "Некорректная дата");
        }

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
        return changeFormData('horoscope', 'Неизвестно');
    };

    const currentDate = new Date();
    const maxDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    return (
        <div className='step'>

            {typeof formData.horoscope === 'string' && zodiacForecasts[formData.horoscope] && (
                <div className='step__zodiac-container'>
                    <span>Прогноз для {formData.horoscope}!</span>
                    <span className='step__zodiac'>{zodiacForecasts[formData.horoscope]}</span>
                </div>
            )}

            <h3>{formData.name}, когда у вас день рождения?</h3>
            <p>Вам должно быть больше 18 лет</p>
            {/* <form className='step'>
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
            </form> */}
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                maxDate={maxDate}
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
            />
            <button onClick={handleNext}>Далее</button>
            <button type='button' onClick={handleStepBack}>Назад</button>

        </div>
    );
};

export default StepThree;
