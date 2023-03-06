export function ContactForm() {
  return (
    <form className="form card bg-light p-3 my-5 text-start">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="please enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="write your message here"
        ></textarea>
      </div>
      <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column justify-content-end">
        <button className="btn btn-primary">SUBMIT</button>
      </div>
    </form>
  );
}
