/* eslint-disable react/prop-types */
function Buttons({ onButtonClick }) {
  const buttons = [
    "C",
    "-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    ".",
    "0",
    "Del",
  ];
  return (
    <div className="flex text-white m-2 flex-wrap gap-2 justify-center">
      {buttons.map((buttons) => (
        <button
          key={buttons}
          onClick={() => onButtonClick(buttons)}
          className="w-16 h-16 hover:bg-white hover:text-black transition duration-500 ease-in-out  border-2 rounded-3xl"
        >
          {buttons}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
