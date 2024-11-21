import { Link } from "react-router-dom";
import "./employeeCard.scss";

interface IEmployeeCardProps {
  id: number;
  name: string;
  position: string;
  phone: string;
}

export const filterMap = new Map([
  ["cook", "Повар"],
  ["waiter", "Официант"],
  ["driver", "Водитель"],
]);

export const EmployeeCard = ({
  id,
  name,
  position,
  phone,
}: IEmployeeCardProps) => {
  return (
    <div className="employee-card">
      <Link to={`/staff/${id}`} className="employee-card__link" />
      <p className="employee-card__name">{name}</p>
      <p className="employee-card__position">{filterMap.get(position)}</p>
      <p className="employee-card__phone">{phone}</p>
      <Link to={`tel:${phone}`} className="employee-card__phone-link" />
    </div>
  );
};
