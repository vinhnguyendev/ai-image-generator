import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function BlogCard({ 
  title, 
  subtitle, 
  image, 
  reverse, 
  preview,
  // columnView
 }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="card container mb-3" style={{backgroundColor: "rgba(0, 143, 239, 0.035)"}}>
      {reverse? (
        <div className="row gap-0">
            <div className="col-md-6 align-self-center text-start">
            <div className="card-body">
              <h5 className="card-title fs-2">{title}</h5>
              <p className="card-text fs-4 fw-light">{subtitle}</p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <img
              src={image ? image : preview}
              className="img-fluid rounded-start"
              alt={image}
            />
          </div>
        </div>
      ) : (
        <div className="row g-0">
          <div className="col-md-6" data-aos="fade-up">
            <img
              src={image ? image : preview}
              className="img-fluid rounded-start"
              alt={image}
            />
          </div>
          <div className="col-md-6 align-self-center text-start">
            <div className="card-body">
            <h5 className="card-title fs-2">{title}</h5>
              <p className="card-text fs-4 fw-light">{subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
