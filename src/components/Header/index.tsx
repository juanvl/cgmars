import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export function Header() {
  return (
    <nav className="flex h-[60px] w-full items-center border-b-4 border-secondary bg-primary px-12 py-4">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="CG Mars Logo" width={32} height={32} />

        <div className="p-2"></div>

        <h1 className="text-xl font-bold text-white">CG Mars!</h1>
      </Link>
    </nav>
  );
}
