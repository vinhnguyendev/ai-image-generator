import sad from "../../assets/sad.png";
import preview from "../../assets/preview.png";
import { Link } from "react-router-dom";

export function ServerError() {
  return (
    <div className="d-flex py-5 justify-content-center">
    <div className="row d-flex  justify-content-center">
      <div className="col-10 pt-4 col-sm-9 col-lg-8 col-xl-6">
        <h2>500</h2>
        <h4>Internal Server Error</h4>
        <img
          src={sad ? sad : preview}
          className="img-fluid rounded-start h-auto w-100 h"
          alt={sad}
        />
        <span className="px-2 fs-4">Please come back later or</span>
        <Link className="fs-4" to={`/about`}>return back to homepage</Link>
        </div>
      </div>
    </div>
  );
}
