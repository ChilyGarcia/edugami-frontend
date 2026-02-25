import { Form } from "formik";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const CustomForm = ({ children }: IProps) => {
  return <Form className="w-full p-8 flex flex-col gap-5 items-center max-w-md">{children}</Form>;
};

export default CustomForm;
