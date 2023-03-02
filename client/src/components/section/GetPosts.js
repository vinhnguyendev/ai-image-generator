import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

export function GetPosts() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const Card = ({ prompt, photo }) => {
    const downloadImage = (prompt, photo, e) => {
      e.preventDefault();
      console.log(photo);
      saveAs(photo, `${prompt}.png`);
    };

    return (
      <div className="">
        <div className="card" id="card">
          <img
            id="image-container"
            className="w-auto h-auto rounded-4 img-fluid"
            src={photo}
            alt={prompt}
          />
          <button
            className="position-absolute bottom-0 end-0 m-3 rounded-5 bg-primary border-0"
            id="download-btn"
            onClick={(e) => downloadImage(prompt, photo, e)}
          >
            <i className="bi bi-download p-2 text-light fs-5"></i>
          </button>

          <div
            className="container position-absolute top-0 start-0 text-start m-3 text-light border-0 bg-primary rounded-3"
            id="card-detail"
          >
            <div className="d-flex flex-column">
              <span>
                By <i className="bi bi-person-circle"></i> @username
              </span>
              <span>"{prompt}"</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => <Card key={post._id} {...post} />);
    }
    return <h2 className="mt-5 font-bold text-xl uppercase">{title}</h2>;
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5050/api/v1/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return loading ? (
    <h2>No Posts yet</h2>
  ) : (
    <div className="grid d-flex flex-wrap flex-row justify-content-center w-100 p-0 m-0">
      <RenderCards data={allPosts} title="No Post yet" />
    </div>
  );
}
