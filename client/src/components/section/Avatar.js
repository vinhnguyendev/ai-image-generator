import Avvvatars from "avvvatars-react";

export function Avatar({username}) {
  return (
    <div className="d-flex flex-row p-1 px-2 rounded-5">
      <Avvvatars value={username} />
      <span className="d-flex flex-column justify-content-center ps-2 ">{username}</span>
    </div>
  );
}
