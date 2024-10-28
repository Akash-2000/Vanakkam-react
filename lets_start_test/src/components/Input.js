import { Field, ErrorMessage } from "formik";

const Input = (props) => {
  console.log(props, "my props");
  const { name, placeholder, displayName, type } = props;
  return (
    <div className="form-group">
      <div>
        <label htmlFor={name} className="text-lg font-semibold ">
          {displayName}
        </label>
      </div>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className="border p-2 rounded-md my-2"
      />
      <ErrorMessage
        component="div"
        className="text-red-500 font-medium text-sm"
        name={name}
      />
    </div>
  );
};

export default Input;
