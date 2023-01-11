import React from "react";
import styles from "./Blog.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/slices/hooks";
import { getBlogs } from "../../redux/slices/blogsSlice";

const Blog = () => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.blogsSlice);

  React.useEffect(() => {
    const fetchBlogs = () => {
      dispatch(getBlogs());
    };
    fetchBlogs();
  }, [dispatch]);

  return (
    <div className={styles.header}>
      <h1>Список постов:</h1>
      <div className={styles.wrapper}>
        {posts &&
          posts.map((obj) => (
            <div key={obj.title} className={styles.main}>
              <h3>{obj.title}</h3>
              <img src={obj.photo} alt={obj.title} />
              <p>{obj.text}</p>
              <span>{obj.time}г.</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
