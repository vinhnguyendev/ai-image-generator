import Avvvatars from "avvvatars-react";

export function Avatar(username) {
  console.log(username);
  return (
    <div className="d-flex flex-row p-1 px-2 rounded-5" style={{backgroundColor: "rgba(0, 143, 239, 0.06)"}}>
      <Avvvatars value={username.username} />
      <span className="d-flex flex-column justify-content-center ps-2">{username.username}</span>
    </div>
  );
}
