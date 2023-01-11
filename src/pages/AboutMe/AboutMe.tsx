import React, { FC } from "react";
import style from "./AboutMe.module.scss";
import avatar from "../../assets/avatar.jpg";

const AboutMe: FC = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.main}>
          <img src={avatar} alt="Avatar" />
          <div>
            <h1>Тролль Михаил Максимович</h1>
            <p>Возраст : 23 года</p>
            <p>
              Образование : Среднее-Специальное и Высшее (2курс, Прикладная
              информатика)
            </p>
            <p>
              Мой стек : HTML CSS JS REACT TypeScript Redux toolkit SCSS
              material ui Node js express js Angular.
            </p>
          </div>
        </div>
      </div>

      <div className={style.wrapper}>
        <div className={style.experience}>
          <h1>Опыт работы</h1>
          <p>
            В самом начале своей карьеры разработчика разрабатывал свои
            пет-проекты.Дальше смог устроится на работу в компании которой
            работал специлистом тех. поддержки, где на данный момент и
            работаю(9месяц). Паралельно работал по ГПХ в компании Wildberries ,
            строил графики с использование Chart js с фреймворком Angular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
