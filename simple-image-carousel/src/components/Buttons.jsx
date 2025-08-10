const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Buttons = ({ onClickedPrev, onClickedNext }) => {
  return (
    <div class="button-container">
      <Button onClick={onClickedPrev}>Prev</Button>
      <Button onClick={onClickedNext}>Next</Button>
    </div>
  );
};

export default Buttons;
