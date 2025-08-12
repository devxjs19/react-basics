const UserControlBtn = ({ children, onClick }) => {
  return (
    <button className="btn__share" onClick={onClick}>
      {children}
    </button>
  );
};

export default UserControlBtn;
