import { Link } from 'react-router-dom';


export function Copyright() {
  return (
    <div className="text-center p-3 w-100 text-light">
      &copy; {new Date().getFullYear()} 
      <a className='text-light px-1' href='http://127.0.0.1:5500/client/public/policy.html'>Copyright:</a>
      <Link className='text-light text-decoration-none' to={`/`}>pixolabai.com</Link>
    </div>
  );
}
