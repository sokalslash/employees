import { Select } from "@/shared/ui";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { SortTypes, sortMap } from "../../model/consts";
import { setCategorySort } from "../../api/sortApiSlice";
import "./SortEmployees.scss";

export const SortEmployees = () => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sort.categorySort);

  const onClickSort = (val: string) => {
    const param = sortMap.get(val);
    dispatch(setCategorySort(param));
  };

  return (
    <div className="sort-employees">
      <h3 className="sort-employees__title">Сортировка сотрудников</h3>
      <Select
        selected={sortType}
        setSelected={onClickSort}
        options={SortTypes}
      />
    </div>
  );
};
