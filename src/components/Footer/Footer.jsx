import { useEffect, useState } from 'react';
import styled from 'styled-components';
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather`;
const FooterContainer = ({ className }) => {
  const [city, setCityName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [weather, setWeather] = useState('');
  useEffect(() => {
    fetch(`${WEATHER_API}?q=London&appid=${WEATHER_API_KEY}&units=metric&lang=ru`)
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCityName(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);
  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>
          {city}{' '}
          {new Date().toLocaleDateString('ru', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
        <div>
          {temperature}°C {weather}
        </div>
      </div>
    </div>
  );
};
export const Footer = styled(FooterContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
