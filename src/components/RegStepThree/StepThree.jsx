export default function StepThree(changeStep, changeFormData, formData) {
    return (
        <div>
            <h3>{formData.name} когда у вас день рождения?</h3>
            <p>Вам должно быть больше 18-ти лет</p>
            <form>
                <label>
                    День
                    <input type="number" />
                </label>
                <label>
                    Месяц
                    <input type="number" />
                </label>
                <label>
                    Год
                    <input type="number" />
                </label>
            </form>
            <button>Далее</button>
        </div>
    )
}

function getAgeAndHoroscope(birthDate) {
    const birthday = new Date(birthDate);
    const today = new Date();
  
    const age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
  
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
  
    const birthdayString = `${birthday.getMonth() + 1}-${birthday.getDate()}`;
    const horoscope = horoscopes.find(({ start, end }) => {
      return birthdayString >= start && birthdayString <= end;
    }).sign;
  
    return { age, horoscope };
}