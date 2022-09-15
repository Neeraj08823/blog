import React, { useState } from "react";
import Blogs from "./Blogs";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = title,
      b = desc,
      c = url;

    Blogs.push({ id: uniqueId, Title: a, Description: b, url: c });
    history("/");
  };

  return (
    <div>
      <div className="flex justify-center align-center">
        <form className="p-4 w-full max-w-6xl h-20xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <input
            className="bg-gray-200 border border-slate-600 text-slate-900 text-lg rounded-lg block w-full p-2.5"
            type="text"
            name="Title"
            placeholder="Enter Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="bg-gray-200 border border-slate-600 text-slate-900 text-lg rounded-lg block w-full p-2.5 mt-5 "
            rows="10"
            name="Description"
            placeholder="Enter Description"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            className="bg-gray-200 border border-slate-600 text-slate-900 text-lg rounded-lg block w-full p-2.5 mt-5 "
            type="url"
            name="url"
            placeholder="Image url"
            required
            onChange={(e) => setUrl(e.target.value)}
          />
          <br />
          <button
            className=" bg-cyan-700 hover:bg-slate-500 text-white font-bold py-2 px-60 mt-4 rounded-lg mx-10"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Add;
