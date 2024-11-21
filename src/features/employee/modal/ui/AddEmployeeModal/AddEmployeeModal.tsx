import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Employee } from "@/entities/employee/model/consts";

export const AddEmployee = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>();
  return <div></div>;
};
