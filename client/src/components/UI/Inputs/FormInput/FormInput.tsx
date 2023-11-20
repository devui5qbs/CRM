import { InputHTMLAttributes } from "react";
import InputErrorMessage from "./InputErrorMessage";
import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { IAuth } from "../../Forms/Auth/AuthFrom";

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  label: string;
  errorMessage: string | undefined;
  register: UseFormRegister<IAuth>;
  inputType: Path<IAuth>;
  rules: RegisterOptions;
}
const FormInput = ({
  error,
  label,
  register,
  inputType,
  errorMessage,
  rules,
  ...props
}: FormInput) => {
  return (
    <label className="flex-col flex gap-[8x]">
      <p className="text-[#8A92A6] text-[16px]">{label}</p>
      <input
        {...register(inputType, rules)}
        {...props}
        className={`rounded-[4px] px-[16px] py-[8px] w-full h-[44px] border-[#8A92A6] border-solid border-[2px] focus:outline-none focus:border-[#3A57E8]
        ${error && "border-[#e83a3a]"} transition-all`}
      />
      <InputErrorMessage error={error} errorMessage={errorMessage} />
    </label>
  );
};

export default FormInput;
