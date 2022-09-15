import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Blogs from "./Blogs";

function Home() {
  let history = useNavigate();
  var removeBlog = (id) => {
    var index = Blogs.map(function (e) {
      return e.id;
    }).indexOf(id);
    Blogs.splice(index, 1);
    history("/");
  };

  const editBlog = (id, title, desc, url) => {
    localStorage.setItem("Title", title);
    localStorage.setItem("Description", desc);
    localStorage.setItem("url", url);
    localStorage.setItem("id", id);
  };

  return (
    <Fragment>
      <div>
        {Blogs && Blogs.length > 0
          ? Blogs.map((show) => {
              return (
                <div className=" flex justify-center items-center">
                  <div className="max-w-xl rounded overflow-hidden shadow-xl">
                    <div className="flex justify-center items-center">
                      <img
                        className=" h-50 w-50 px-20 pt-5 "
                        src={show.url}
                        alt="Sunset in the mountains"
                      />
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{show.Title}</div>
                      <p className="text-gray-700 text-lg">
                        {show.Description}
                      </p>
                      <Link to={`/edit`}>
                        <button
                          class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded-xl mx-10"
                          onClick={() =>
                            editBlog(
                              show.id,
                              show.Title,
                              show.Description,
                              show.url
                            )
                          }
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        class="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded-xl mx-10"
                        onClick={() => removeBlog(show.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}
        <Link to={`/create`}>
          <button className=" bg-cyan-700 hover:bg-slate-500 text-white font-bold py-2 px-60 mt-4 rounded-lg mx-10">
            Create
          </button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
