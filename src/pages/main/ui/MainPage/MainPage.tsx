import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { fetchStaff } from "@/app/appSlice";
import { EmployeeCard } from "@/entities/employee";
import { SortEmployees } from "@/features/employee/sort/index";
import { FilterEmployees } from "@/features/employee/filter";
import "./mainPage.scss";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const staff = useAppSelector((state) => state.staff.list);
  const status = useAppSelector((state) => state.staff.status);
  const filterBy = useAppSelector(
    (state) => state.filter.categoriesFilter.typeFilter
  );
  const archiveStatus = useAppSelector(
    (state) => state.filter.categoriesFilter.isArchive
  );
  const sortType = useAppSelector((state) => state.sort.categorySort);

  const getStaff = async () => {
    const sort = sortType;
    const filter = filterBy;
    const isArchive = archiveStatus;
    dispatch(fetchStaff({ sort, filter, isArchive }));
  };

  useEffect(() => {
    getStaff();
  }, []);

  useEffect(() => {
    getStaff();
  }, [sortType, filterBy, archiveStatus]);

  return (
    <main className="main-page">
      <h1 className="main-page__title">Справочник сотрудников</h1>
      <div className="container">
        <section className="filter">
          <FilterEmployees />
        </section>
        <section className="employees-list">
          <SortEmployees />
          <div className="employees-list__wrapper">
            <h2 className="employees-list__title">Список сотрудников</h2>
            {staff.length !== 0
              ? staff.map((el) => (
                  <EmployeeCard
                    key={el.id + el.name}
                    id={el.id}
                    name={el.name}
                    position={el.role}
                    phone={el.phone}
                  />
                ))
              : null}
          </div>
        </section>
      </div>
      <Outlet />
    </main>
  );
};
