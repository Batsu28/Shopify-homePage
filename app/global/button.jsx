import Link from "next/link";

const Button = ({ url, name, style, icon }) => {
  return (
    <Link href={url}>
      <div className={`${style}`}>
        {name}
        {icon}
      </div>
    </Link>
  );
};

export default Button;
