import Link from 'next/link';
import './MainPage.css';

export default function MainPage() {
    return (
        <div className="container">
            <h1>Сайт знакомств</h1>
            <p>Для тех кто хочет все и сразу</p>
            <Link className='link' href="/registration">
                Зарегистрироваться
            </Link>
            <p>Политика</p>
        </div>
    )
}