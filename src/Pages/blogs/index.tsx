import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, HeaderPages } from "../../components";
import { blogsData } from "../../constants";
import BlogBox from "./blog-box";
import { ContextGlobal } from "../../ContextStore";

function Blogs() {
  const navigate = useNavigate();
  const Context = React.useContext(ContextGlobal);
  const lan = Context.Lan;
  const [blogs, setBlogs] = React.useState([]);

  // get all blogs
  const getSocialMediaLinks = async () => {
    await axios("https://myawesomehost.com/api/blog-posts")
      .then((res: any) => {
        console.log(res);
        setBlogs(res);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  React.useEffect(() => {
    getSocialMediaLinks();
  }, []);
  return (
    <div
      className={` pt-0 ${lan ? "font-primaryA" : "font-erasITC"}`}
      dir={lan ? "rtl" : "ltr"}
    >
      <HeaderPages title={lan ? "المقالات" : "Our Blogs"} />
      <div className="md:container md:mx-auto my-10 md:my-14 px-4">
        <h1 className="text-3xl md:text-[46px] mb-5 ">
          {lan ? "المقالات" : "Our Blogs"}
        </h1>
        <div className=" items-center grid md:grid-cols-12 bg-transparent gap-10">
          {blogsData.map((blog) => {
            return (
              <BlogBox
                key={blog.id}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                style="cols-span-1"
                title={!lan ? blog.title : blog.titleA}
                img={blog?.image && require(`../../assets/imgs/${blog?.image}`)}
                dateAt={blog.createAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
