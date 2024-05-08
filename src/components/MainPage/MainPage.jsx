'use client'
import { useEffect } from 'react';
import Rain from './Rain'
import Link from 'next/link';
import './MainPage.css';

export default function MainPage() {
    useEffect(() => {
      const parallax = document.querySelector('.parallax-container');
      const layers = parallax.querySelectorAll('.parallax-layer');

      document.addEventListener('mousemove', e => {
        parallax.style.setProperty(`transform`, `rotateX(${(e.clientX - window.innerWidth / 2) * 0.009}deg) rotateY(${(e.clientY - window.innerWidth / 2) * 0.009}deg) translateZ(-55px) scale(1.12)`);
          layers.forEach((layer, index) => {
            let speedX;
            let speedY;
            let translateZ;
            let scale;

            switch (index) {
              //Палка
              case 0: {
                speedX = 0.02 * 0.3;
                speedY = 0.02 * 0.3;
                translateZ = 80;
                scale = 1.2

                break
              }
              //Пыль
              case 2: {
                speedX = 0.02 * 0.9;
                speedY = 0.02 * 0.9;
                translateZ = 380;
                scale = 1.45;

                break
              }
              //Листва
              default: {
                speedX = 0.02 * 0.6;
                speedY = 0.02 * 0.6;
                translateZ = 300;
                scale = 1;
              }
            }

            layer.style.setProperty(`transform`, `rotateX(${(e.clientX - window.innerWidth / 2) * -speedX}deg) rotateY(${(e.clientY - window.innerWidth / 2) * -speedY}deg) translateZ(${translateZ}px) scale(${scale})`);
          });
      });
    }, []);
      
    return (
        <div className="container">
            <div className='parallax-container'>
                <div className='parallax-layer-first parallax-layer' />
                <div className='parallax-layer-second parallax-layer'>
                  <div className='parallax-content'>
                    <h1 className='parallax-title'>Сайт знакомств</h1>
                      <p>Для тех кто хочет все и сразу</p>
                      <Link className='link' href="/registration">
                          Зарегистрироваться
                      </Link>
                    <p>Политика</p>
                  </div>
                </div>
                <div className='parallax-layer-three parallax-layer'>
                  <Rain />
                </div>
            </div>
        </div>
    )
}