import { Select } from "@/shared/ui";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { FilterOptions, filterMap } from "../../model/consts";
import { setTypeFilter, setIsArchive } from "../../api/filterApiSlice";
import "./FilterEmployees.scss";

export const FilterEmployees = () => {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(
    (state) => state.filter.categoriesFilter.typeFilter
  );
  const statusCheckbox = useAppSelector(
    (state) => state.filter.categoriesFilter.isArchive
  );

  const onClickCategory = (val: string) => {
    const param = filterMap.get(val);
    dispatch(setTypeFilter(param));
  };

  const onClickCheckbox = () => {
    dispatch(setIsArchive(!statusCheckbox));
  };

  return (
    <>
      <form className="filter-form">
        <h2 className="filter-form__title">Фильтр сотрудников</h2>
        <fieldset>
          <legend className="filter-form__legend">Должность</legend>
          <Select
            selected={sortType}
            setSelected={onClickCategory}
            options={FilterOptions}
          />
        </fieldset>
        <fieldset>
          <legend className="filter-form__legend">В архиве</legend>
          <input
            className="filter-form__checkbox"
            type="checkbox"
            onClick={onClickCheckbox}
          />
        </fieldset>
      </form>
    </>
  );
};
