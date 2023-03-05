export function Hero({
  title,
  subtitle,
  hasButtons,
  button1Text,
  button2Text,
}) {
  return (
    <section className="container my-5" id="hero">
      <div className="row">
        <div className="fs-1 fw-bold">{title}</div>
        {subtitle? (
        <p>{subtitle}</p>
        ) : null }
        {hasButtons? (
          <div>
            {button1Text && button2Text ? (
              <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-column justify-content-center gap-3 my-5">
                <button className="btn btn-primary">{button1Text}</button>
                <button className="btn btn-outline-primary">{button2Text}</button>
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
