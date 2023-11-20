import {
  UseFormRegister,
  FieldErrors,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { IAuth } from "../AuthFrom";
import FormInput from "../../../Inputs/FormInput/FormInput";
import { useEffect } from "react";

interface ISignUpProps {
  register: UseFormRegister<IAuth>;
  errors: FieldErrors<IAuth>;
}
interface IAllInputs {
  label: string;
  inputType: Path<IAuth>;
  rules: RegisterOptions;
  type: string;
  name: string;
}
const SignUp = ({ errors, register }: ISignUpProps) => {
  const rulesForName = {
    minLength: { message: "Min 4 symbols", value: 4 },
    required: "Is required",
  };
  const rulesForPassword = {
    minLength: { message: "Min 6 symbols", value: 6 },
    required: "Is required",
  };
  
  const allInputs: IAllInputs[] = [
    {
      rules: rulesForName,
      inputType: "firstName",
      label: "First Name",
      type: "text",
      name: "firstName",
    },
    {
      rules: rulesForName,
      inputType: "lastName",
      label: "Last Name",
      type: "text",
      name: "lastName",
    },
    {
      rules: rulesForName,
      inputType: "username",
      label: "Username",
      type: "text",
      name: "username",
    },
    {
      rules: rulesForName,
      inputType: "signEmail",
      label: "Email",
      type: "email",
      name: "signEmail",
    },
    {
      rules: rulesForPassword,
      inputType: "signPassword",
      label: "Password",
      type: "password",
      name: "signPassword",
    },
    {
      rules: rulesForPassword,
      inputType: "confirmPas",
      label: "Confirm password",
      type: "password",
      name: "confirmPas",
    },
  ];
  useEffect(() => { 
  }, [errors]);
  return (
    <div className="grid grid-cols-2 w-full gap-[16px]">
      {allInputs.map((i, index) => {
        return (
          <FormInput
            key={index.toString()}
            rules={i.rules}
            inputType={i.inputType}
            register={register}
            error={!!errors[i.inputType]?.message}
            errorMessage={errors[i.inputType]?.message}
            label={i.label}
            type={i.type}
            name={i.name}
          />
        );
      })}
    </div>
  );
};

export default SignUp;
