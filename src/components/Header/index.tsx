import logo from '../../assets/images/logo.png';

export function Header() {
  return (
    <nav className="flex items-center bg-primary w-full h-[60px] px-12 py-4 border-b-4 border-secondary">
      <img src={logo} alt="CG Mars Logo" width={32} height={32} />

      <div className="p-2"></div>

      <h1 className="text-white text-xl font-bold">CG Mars!</h1>
    </nav>
  );
}
