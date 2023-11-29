import { Link } from "react-router-dom";

export const Button = ({
  children,
  variant = "yellow",
  className,
  onClick,
  href,
}) => {
  function buttonVariant(payload) {
    switch (payload) {
      case "white":
        return "btn bg-white hover:bg-aquamarine border-2 border-aquamarine hover:text-white text-blue";

      case "secondary":
        return "btn bg-[#EFEFEF] hover:bg-gray-100";

      case "dark":
        return "btn bg-darkblue hover:bg-slate-700";

      case "blue":
        return "btn bg-blue hover:bg-white text-white hover:text-blue border-blue border-2";

      default:
        return "btn bg-white hover:bg-aquamarine border-2 border-aquamarine hover:text-white text-blue";
    }
  }
  return (
    <Link
      className={`${buttonVariant(variant)} ${variant} ${className}`}
      onClick={onClick}
      to={href}
    >
      {children}
    </Link>
  );
};

export default Button;
