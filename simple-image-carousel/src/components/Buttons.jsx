import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Buttons = ({ onClickedPrev, onClickedNext }) => {
  return (
    <div class="button-container">
      <Button onClick={onClickedPrev}>
        <FaArrowLeft />
      </Button>

      <Button onClick={onClickedNext}>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default Buttons;
