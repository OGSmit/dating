'use client'
import React, { useRef, useEffect } from 'react';

const Rain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext('2d');

    const randomNum = (max, min) => {
      return Math.floor(Math.random() * max) + min;
    };

    function RainDrops(x, y, endy, velocity, opacity) {
      this.x = x;
      this.y = y;
      this.endy = endy;
      this.velocity = velocity;
      this.opacity = opacity;

      this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x, this.y - this.endy);
        c.lineWidth = 1;
        c.strokeStyle = "rgba(255, 255, 255, " + this.opacity + ")";
        c.stroke();
      };

      this.update = function () {
        let rainEnd = window.innerHeight + 100;
        if (this.y >= rainEnd) {
          this.y = this.endy - 100;
        } else {
          this.y = this.y + this.velocity;
        }
        this.draw();
      };
    }

    let rainArray = [];

    for (let i = 0; i < 140; i++) {
      let rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
      let rainYLocation = Math.random() * -500;
      let randomRainHeight = randomNum(10, 2);
      let randomSpeed = randomNum(20, 0.2);
      let randomOpacity = Math.random() * 0.55;
      rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
    }

    const animateRain = () => {
      requestAnimationFrame(animateRain);
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < rainArray.length; i++) {
        rainArray[i].update();
      }
    };

    animateRain();

  }, []);

  return (
    <canvas ref={canvasRef} className="rain" style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
  );
};

export default Rain;