import Button from "./Button";

const buttonRows = [
  [
    { label: "C", value: "clear", type: "action" },
    { label: "()", value: "parentheses", type: "action" },
    { label: "%", value: "%", type: "operator" },
    { label: "÷", value: "/", type: "operator" },
  ],
  [
    { label: "1", value: "1", type: "number" },
    { label: "2", value: "2", type: "number" },
    { label: "3", value: "3", type: "number" },
    { label: "×", value: "*", type: "operator" },
  ],
  [
    { label: "4", value: "4", type: "number" },
    { label: "5", value: "5", type: "number" },
    { label: "6", value: "6", type: "number" },
    { label: "+", value: "+", type: "operator" },
  ],
  [
    { label: "7", value: "7", type: "number" },
    { label: "8", value: "8", type: "number" },
    { label: "9", value: "9", type: "number" },
    { label: "-", value: "-", type: "operator" },
  ],
  [
    { label: ".", value: ".", type: "number" },
    { label: "0", value: "0", type: "number" },
    { label: "000", value: "000", type: "number" },
    { label: "=", value: "equals", type: "action" },
  ],
];

const ButtonGrid = () => {
  return (
    <div className="buttons">
      {buttonRows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((btn, btnIndex) => (
            <Button
              key={btnIndex}
              type={btn.type}
              value={btn.value}
              label={btn.label}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonGrid;
