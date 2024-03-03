import Link from "next/link";

interface UpperNavbarProps {
  label: string;
  value: string;
  onChange?: any;
}

const NavItem: React.FC<UpperNavbarProps> = ({ label, value, onChange }) => {
  return (
    <Link
      href={value}
      onClick={onChange}
      className="group rounded-md border border-transparent transition duration-200 px-4 py-2  text-slate-300 hover:text-white text-base font-semibold leading-tight"
    >
      {label}
    </Link>
  );
};

export default NavItem;
