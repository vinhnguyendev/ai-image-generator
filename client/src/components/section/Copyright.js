import { Link } from 'react-router-dom';


export function Copyright() {
  return (
    <div className="text-center p-3 w-100">
      &copy; {new Date().getFullYear()} Copyright:
      <Link className='text-dark px-2 text-decoration-none' to={`/`}>ImageAlchemy.com</Link>
    </div>
  );
}
