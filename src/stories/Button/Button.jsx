import "../../index.css";
import PropTypes from "prop-types";
export default function Button({ size, label, type }) {
  return (
    <button
      className={
        type === "primary"
          ? `bg-primary text-white h-14  w-${size} rounded-3xl text-2xl`
          : `bg-transparent border-primary border-2 text-gray-900 h-14 w-${size} rounded-3xl text-2xl	`
      }
    >
      {label}
    </button>
  );
}
Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
