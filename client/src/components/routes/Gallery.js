import * as sec from "../";

export function Gallery() {
  return (
    <div className="container py-5 px-0">
      <h2>Gallery</h2>
      <div className="container-fluid px-0">
      <sec.GetPosts/>
      </div>
    </div>
  );
}
