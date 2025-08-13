const Button = ({ type, value, label, ...props }) => {
  return (
    <button className={`btn ${type} ${value}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
