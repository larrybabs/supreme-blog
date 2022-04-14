import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import './App.css';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


useEffect(( )=> {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setBlogs(data);
        setIsLoading(false);
    }
    )}

,[]);

  return (
    <div>
        {isLoading && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title={"All recent blogs"}/>}
    </div>
  );
};

export default Home;
