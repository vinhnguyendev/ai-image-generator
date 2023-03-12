import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import preview from "../../assets/preview.png";
import Cookies from "universal-cookie";


const cookies = new Cookies();

export function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: cookies.get("id"),
    name: cookies.get("name"),
    prompt: "",
    size: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageSize, setImageSize] = useState("large");
  const [checked, setChecked] = useState(true)
  
  useEffect(() => {
  }, [form]);

  useEffect(() => {
    const pixelSize =
      imageSize === "small"
        ? "256x256"
        : imageSize === "medium"
        ? "512x512"
        : imageSize === "large"
        ? "1024x1024"
        : "Error with a image size";
    setForm({ ...form, size: pixelSize });
  }, [imageSize]);


  const generateImage = async (e) => {
    e.preventDefault();
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`http://localhost:5050/api/v1/dalle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ size: form.size, prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const handleAddPost = async (event) => {
    event.preventDefault();
    if(form.prompt && form.photo && cookies.get("name")) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5050/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        });
        await response.json();
        navigate("/gallery");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      } 
    }else{
      navigate('/login')
    }
};


  const handleFormOnChange = (event) => {
    setForm({ ...form, prompt: event.target.value });
  };

  const handleChange = (event) => {
    setImageSize(event.target.value);
  };

  return (
    <section className="container d-flex flex-column justify-content-evenly">
      <div className="row mb-3">
        <div className="col">
          <div
            className="btn-group w-100"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              value="small"
              onChange={handleChange}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              Small
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
              value="medium"
              onChange={handleChange}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              Medium
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
              value="large"
              onChange={handleChange}
              defaultChecked = {imageSize == 'large'? checked : ''}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              Large
            </label>
          </div>
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your promt here"
          aria-label="prompt request"
          aria-describedby="button-addon2"
          onChange={(event) => handleFormOnChange(event)}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={generateImage}
        >
          {generatingImg ? "Generating..." : "Generate"}
        </button>
      </div>

      <div className="row my-2 d-flex flex-column align-items-center">
        <div
          id="img-div"
          className="position-relative d-flex flex-column justify-content-center border border-light-subtle my-4 p-0 mx-0"
          style={
            imageSize === "small"
              ? { height: "auto", width: "25%" }
              : imageSize === "medium"
              ? { height: "auto", width: "50%" }
              : imageSize === "large"
              ? { height: "auto", width: "100%" }
              : ""
          }
        >
          {form.photo ? (
            <>
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-100 h-auto"
              />
            </>
          ) : (
            <img
              src={preview}
              alt="preview"
              className="w-100 h-auto mx-auto d-block"
            />
          )}

          {generatingImg && (
            <div className="position-absolute top-50 start-50 translate-middle bg-dark z-1 bg-opacity-50 h-100 w-100 d-flex flex-column justify-content-center">
              <div className="align-middle">
                <Spinner animation="border" variant="primary" />
              </div>
            </div>
          )}
        </div>
        {/* buttons */}
        {form.photo? (
        <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row mt-2 my-2 justify-content-center">
          <button
            className="btn btn-success m-1"
            type="button"
            onClick={handleAddPost}
          >
            {loading ? (
              "Adding to Gallery..."
            ) : (
              <i className="bi bi-plus-square">
                <i className="mx-1">Add to Gallery</i>
              </i>
            )}
          </button>
        </div>
        )
      : ''}
      </div>
    </section>
  );
}
