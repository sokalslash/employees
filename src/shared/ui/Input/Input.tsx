interface IInputProps {
  title: string;
  name: string;
  type: string;
  value?: string;
}

export const Input = ({ title, name, type, value }: IInputProps) => {
  <label className="form__label">
    {`${title}:`}
    <input
      className="form__input"
      name={name}
      type={type}
      value={value ? value : ""}
      required
    />
  </label>;
};
