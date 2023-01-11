import React from "react";
import styles from "./Portfolio.module.scss";

import { useAppDispatch, useAppSelector } from "../../redux/slices/hooks";
import { getExperience, IExperience } from "../../redux/slices/experienceSlice";
import { setTitle } from "../../redux/slices/filterSlice";

const Portfolio = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.experience);
  const search = useAppSelector((state) => state.filterSlice.title);

  React.useEffect(() => {
    const fetchExperience = () => {
      dispatch(getExperience());
    };
    fetchExperience();
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <h1>Мои проекты:</h1>
        <input
          onChange={(e) => dispatch(setTitle(e.target.value))}
          value={search}
          type="text"
          placeholder="Поиск проектов ..."
        />
      </div>
      <div className={styles.wrapper}>
        <ol>
          {data &&
            data
              .filter((data) => {
                if (data.title.toLowerCase().includes(search.toLowerCase()))
                  return true;
                return false;
              })
              .map((obj: IExperience) => (
                <li key={obj.id}>
                  <h3>{obj.title}</h3>
                  <p>
                    Технологии которые были использлованны:
                    <span> {obj.stack}</span>
                  </p>
                </li>
              ))}
        </ol>
      </div>
    </div>
  );
};

export default Portfolio;
