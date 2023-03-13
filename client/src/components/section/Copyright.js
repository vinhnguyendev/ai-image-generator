import { Link } from 'react-router-dom';


export function Copyright() {
  return (
    <div className="text-center p-3 w-100 text-light">
      &copy; {new Date().getFullYear()} 
      <Link className='text-light px-1'  to={`/ServerError`}>Copyright:</Link>
      <Link className='text-light text-decoration-none' to={`/`}>pixolabai.com</Link>
    </div>
  );
}
