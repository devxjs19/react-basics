const Button = ({ children }) => {
  return <button>{children}</button>;
};

const Buttons = () => {
  return (
    <div class="button-container">
      <Button>Prev</Button>
      <Button>Next</Button>
    </div>
  );
};

export default Buttons;
