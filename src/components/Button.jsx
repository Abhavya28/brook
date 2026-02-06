const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-10 py-4
        text-sm
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
