import Link from "next/link";

interface UpperNavbarProps {
  label: string;
  value: string;
}

const NavItem: React.FC<UpperNavbarProps> = ({ label, value }) => {
  return (
    <Link
      href={value}
      className="group rounded-md border border-transparent transition duration-200 px-4 py-2  hover:bg-transparent hover:shadow-lg"
      target="_blank"
    >
      <p
        className={`text-white text-base font-semibold leading-tight opacity-80`}
      >
        {label}
      </p>
    </Link>
  );
};

export default NavItem;
