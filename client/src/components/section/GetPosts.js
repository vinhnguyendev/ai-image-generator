import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import * as sec from "../";

export function GetPosts() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => <sec.Card key={post._id} {...post} saveAs={saveAs}/>);
    }
    return <h2 className="mt-5 font-bold text-xl uppercase">{title}</h2>;
  };

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://pixolabai-server.onrender.com/api/v1/post", {
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
