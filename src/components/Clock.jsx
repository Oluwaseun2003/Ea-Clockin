import React, { useEffect } from "react";
import '../styles/Clock.css';

function Clock() {
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourHand = document.querySelector(".hours-hand");
      const minuteHand = document.querySelector(".minutes-hand");
      const secondHand = document.querySelector(".seconds-hand");

      const hourAngle = 30 * ((hours % 12) + minutes / 60);
      const minuteAngle = 6 * minutes;
      const secondAngle = 6 * seconds;

      if (hourHand && minuteHand && secondHand) {
        hourHand.style.transform = `rotate(${hourAngle}deg)`;
        minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
        secondHand.style.transform = `rotate(${secondAngle}deg)`;
      }
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    
<section className="sec-clock">
            <h2>Welcome Royalty!</h2>
       <div className="clock">
      <div class="frame-face"></div>
      <ul class="minute-marks">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
     
      <ul class="digits">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
      </ul>
      <div class="hours-hand"></div>
      <div class="minutes-hand"></div>
      <div class="seconds-hand"></div>
    </div>
    </section>
  );
}

export default Clock;

