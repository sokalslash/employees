import { useState } from "react";

import "./Select.scss";

interface ISelectProps {
  selected: string;
  setSelected: (option: string) => void;
  options: Array<string>;
}

export const Select = ({ selected, setSelected, options }: ISelectProps) => {
  const [isActive, setIsActive] = useState(false);
  const [currentSelect, setICurrentSelect] = useState(selected);

  return (
    <div
      className="select"
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className="select__summary">{currentSelect}</div>

      {isActive && (
        <ul className="select__menu">
          {options.map((option, index) => (
            <li key={option[0] + index}>
              <p
                className="select__option"
                onClick={() => {
                  setICurrentSelect(option);
                  setSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
