import * as sec from "../";

export function Gallery() {
  return (
    <div className="container py-5 px-0 h-100 d-flex align-items-center justify-content-center">
      {/* <div className="container-fluid px-0 d-flex flex-column justify-content-center"> */}
      <sec.GetPosts/>
      {/* </div> */}
    </div>
  );
}
