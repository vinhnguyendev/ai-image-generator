import { useNavigate } from "react-router-dom";

export function Hero({
  title,
  subtitle,
  hasButtons,
  button1Text,
  button2Text,
  button1Link,
  button2Link,
}) {
  const navigate = useNavigate()
  return (
    <section className="container my-5 flex-col justify-content-center" id="hero">
      <div className="row">
        <div className="fs-1 fw-bold">{title}</div>
        {subtitle? (
        <p>{subtitle}</p>
        ) : null }
        {hasButtons? (
          <div>
            {button1Text && button2Text ? (
              <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column justify-content-center gap-3 my-5">
                <button className="btn btn-primary" onClick={() => navigate(button1Link)}>{button1Text}</button>
                <button className="btn btn-outline-primary" onClick={() => navigate(button2Link)}>{button2Text}</button>
              </div>
            ) : (
              <button>{button1Text}</button>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
