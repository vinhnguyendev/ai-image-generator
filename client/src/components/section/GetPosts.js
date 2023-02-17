import { useEffect, useState } from "react";

export function GetPosts() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const Card = ({ prompt, photo }) => {
    return (
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
          className="w-full h-auto object-cover rounded-xl"
          src={photo}
          alt={prompt}
        />
      </div>
    );
  };

  const RenderCards = ({ data, title }) => {
    console.log(data, title);
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

  return (
    <>
      <RenderCards data={allPosts} title="No Post yet" />
    </>
  );
}
