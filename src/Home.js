import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My first blog", body: "lorem ipsum...", author: "babs", id: 1 },
    { title: "My second blog", body: "lorem ipsum...", author: "babs", id: 2 },
    { title: "My third blog", body: "lorem ipsum...", author: "larry", id: 3 },
  ]);

  const deleteHandler = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
} 

  return (
    <div>
      <BlogList blogs={blogs} title={"All recent blogs"} deleteHandler={deleteHandler}/>
    </div>
  );
};

export default Home;
