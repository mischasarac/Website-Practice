import { useState } from "react";

function Button() {
  let ButtonTypes = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];

  const increment = (index: number) => {
    return (index + 1) % ButtonTypes.length;
  };

  const simplify = (txt: string) => {
    return txt.toLowerCase();
  };

  const [SelectedIndex, SetSelectedIndex] = useState(0);

  return (
    <button
      type="button"
      className={`btn btn-${simplify(ButtonTypes[SelectedIndex])}`}
      onClick={() => SetSelectedIndex(increment(SelectedIndex))}
    >
      {ButtonTypes[SelectedIndex]}
    </button>
  );
}

export default Button;
