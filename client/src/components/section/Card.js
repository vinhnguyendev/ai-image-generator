import * as sec from "../";
import { FcLike } from "react-icons/fc";
import { RxDownload } from "react-icons/rx"
import { FcLikePlaceholder } from "react-icons/fc"
import { useState } from "react";

export const Card = ({ prompt, photo, name, saveAs }) => {
  const [like, setLike] = useState(false)
  //downloadBtnEvent
  const downloadImage = (prompt, photo, e) => {
    e.preventDefault();
    saveAs(photo, `${prompt}.png`);
  };

  return (
    <div className="card d-inline-flex align-items-start" id="card">
      <div className="position-relative">
        <img
          id="image-container"
          className="w-auto h-auto img-fluid"
          src={photo}
          alt={prompt}
          style={{ borderTopLeftRadius: "4%", borderTopRightRadius: "4%" }}
        />
      </div>

      <div
        //   className="container position-absolute top-0 start-0 text-start m-3 text-light border-0 bg-primary rounded-3"
        id="card-detail"
        className="w-100 border bg-body"
        style={{
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <div className="container flex-column w-100 p-3 text-start">
          <div className="row fw-bold d-flex justify-content-between">
            <div className="col-8" id="card_username">
            <sec.Avatar username={name} />
            </div>
            {saveAs ? (
            <div className="col-4 d-flex flex-row justify-content-end">
            <button
              className="bg-body p-1 border-0 "
              onClick={(e) => downloadImage(prompt, photo, e)}
            >
              <i className="p-2 text-primary fs-5"><RxDownload/></i>
            </button>

          {like?(
            <button
              className= " bg-body border-0"
              onClick={() =>setLike(false)}
            >
              <i className="bi p-2 fs-5 "><FcLike /></i>
            </button>
          ) : 
          <button
          className= " bg-body border-0"
          onClick={() => setLike(true)}
        >
          <i className="bi p-2 fs-5 "><FcLikePlaceholder /></i>
        </button>
          }
            </div>
            ): null}
          </div>
          <span className="ms-3 text-secondary">{prompt}</span>
        </div>
      </div>
    </div>
  );
};
