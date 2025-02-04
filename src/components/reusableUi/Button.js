import { clsx } from "clsx";

const Button = (props) => {
  const { bgColor, hoverBgColor, name } = props;
  return (
    <div>
      <button
        className={clsx(
          "border border-solid px-4 py-[5px] text-gray-100 rounded-md ",
          {
            "bg-blue-800": bgColor === "blue",
            "bg-primary": bgColor === "primary",
          },
          {
            "hover:bg-blue-700": hoverBgColor === "lightBlue",
            "hover:bg-orange-600": hoverBgColor === "lightOrange",
          }
        )}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
