import React, { useState, useEffect } from "react";
import Blogs from "./Blogs";
import { useNavigate } from "react-router-dom";

function Update() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  var index = Blogs.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleUpdate = (e) => {
    e.preventDefault();

    let a = Blogs[index];
    a.Title = title;
    a.Description = desc;
    a.url = url;

    history("/");
  };

  useEffect(() => {
    setTitle(localStorage.getItem("Title"));
    setDesc(localStorage.getItem("Description"));
    setUrl(localStorage.getItem("url"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <div className="flex justify-center align-center">
        <form className="p-4 w-full max-w-6xl h-20xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <input
            className="bg-gray-200 border border-slate-600 text-slate-900 text-lg rounded-lg block w-full p-2.5"
            value={title}
            type="text"
            name="Title"
            placeholder="Enter Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-gray-200 border border-slate-600 text-slate-900 text-lg rounded-lg block w-full p-2.5 mt-5 "
            value={desc}
            rows="10"
            name="Description"
            placeholder="Enter Description"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            className="bg-gray-200 border border-slate-600 text-slate-900 text-lg rounded-lg block w-full p-2.5 mt-5 "
            // value={url}
            name="url"
            placeholder="Image url"
            required
            onChange={(e) => setUrl(e.target.value)}
          />
          <br />
          <button
            className=" bg-cyan-700 hover:bg-slate-500 text-white font-bold py-2 px-60 mt-4 rounded-lg mx-10"
            type="submit"
            onClick={(e) => handleUpdate(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Update;
