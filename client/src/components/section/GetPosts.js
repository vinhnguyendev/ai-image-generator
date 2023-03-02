import { useEffect, useState } from "react";


export function GetPosts() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const styles = {
    pin_container: {
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
    }
}
  const Card = ({ prompt, photo }) => {
    return (
      <div  className="">
        <div className="card" id="card">
        <img className="w-auto h-auto rounded-4 img-fluid" src={photo} alt={prompt} />
        <div className="card-detail">{prompt}</div>
        </div>
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
        console.log(result);
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
    <div className="grid d-flex flex-wrap flex-row justify-content-center w-100 p-0 m-0" style={styles.pin_container}>
      <RenderCards data={allPosts} title="No Post yet" />
    </div>
  );
}
