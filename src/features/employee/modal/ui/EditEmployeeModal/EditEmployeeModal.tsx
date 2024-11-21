import { useState } from "react";
import { Select } from "@/shared/ui";
import { FilterOptions } from "../../../filter";
import "./editEmployeeModal.scss";

export const EditEmployeeModal = () => {
  const [role, setRole] = useState(FilterOptions[0]);

  const onClickCategory = (val: string) => {
    setRole(val);
  };
  return (
    <div className="edit-employee-modal">
      <form className="form" method="post" action="#">
        <label className="form__label">
          Имя сотрудника:
          <input className="form__input" name="name" type="text" required />
        </label>

        <label className="form__label">
          Дата рождения в формате ДД/ММ/ГГГГ
          <input
            className="form__input"
            name="birthdate"
            type="text"
            required
          />
        </label>

        <label className="form__label tel">
          Номер телефона:
          <input
            className="form__input phone"
            name="tel"
            type="tel"
            pattern="^[ 0-9]+$"
            // minlength="9"
            // maxlength="9"
            value=""
            required
          />
        </label>

        <Select
          selected={role}
          setSelected={onClickCategory}
          options={FilterOptions}
        />

        <button className="form__button-submit" type="submit">
          Сохранить
        </button>
      </form>
    </div>
  );
};
