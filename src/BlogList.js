const BlogList = ({blogs, title}) => {


  return (
    <div className="blog-list">
        <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          {/* <h3>{blog.body}</h3> */}
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
