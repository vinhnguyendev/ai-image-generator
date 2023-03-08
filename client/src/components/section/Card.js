import * as sec from "../";

export const Card = ({ prompt, photo, username, saveAs }) => {

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
          style={{ borderTopLeftRadius: '4%', borderTopRightRadius: '4%'}}
        />
        {saveAs? (
        <button
          className="position-absolute bottom-0 end-0 m-3 rounded-5 bg-primary border-0"
          id="download-btn"
          onClick={(e) => downloadImage(prompt, photo, e)}
        >
          <i className="bi bi-download p-2 text-light fs-5"></i>
        </button>
        ) : null
        }
        </div>

        <div
        //   className="container position-absolute top-0 start-0 text-start m-3 text-light border-0 bg-primary rounded-3"
          id="card-detail"
          className="w-100 border bg-body"
          style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px'}}
        >
          <div className="container flex-column w-100 p-3 text-start">
            <span className="fw-bold d-flex gap-2">
            <sec.Avatar username={username}/><span className='d-flex flex-column justify-content-center'>{username}</span>
            </span>
            <span className='ps-3 ms-3'>"{prompt}"</span>
          </div>
        </div>
      </div>
   
  );
};
