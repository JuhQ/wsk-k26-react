import { useFile, useMedia } from "../hooks/apiHooks";

import { useNavigate } from "react-router";
import { useState } from "react";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const { postFile } = useFile();
  const { postMedia } = useMedia(false);
  const navigate = useNavigate();

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      setFile(evt.target.files[0]);
    }
  };

  const doUpload = async () => {
    try {
      const token = localStorage.getItem("token");
      const postResult = await postFile(file, token);
      await postMedia(postResult.data, inputs, token);

      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file && inputs.title.length) {
      doUpload();
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : "https://placehold.co/200?text=Choose+image"
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title?.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
