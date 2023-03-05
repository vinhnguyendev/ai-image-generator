export function ContactForm() {
  return (
    <form className="form card bg-light p-5 my-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="please enter your email"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Message
        </label>
        <textarea
          class="form-control"
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
