import * as sec from "../";

export function Gallery() {
  return (
    <>
      <h2>Gallery</h2>
      <div className="container-fluid">
      <sec.GetPosts/>
      </div>
    </>
  );
}
