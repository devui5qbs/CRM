import FormInput from "../../../Inputs/FormInput/FormInput";
import { Link } from "react-router-dom";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IAuth } from "../AuthFrom";
interface ISignInProps {
  register: UseFormRegister<IAuth>;
  errors: FieldErrors<IAuth>;
}
const SignIn = ({ register, errors }: ISignInProps) => {
  const rulesForEmail = {
    minLength: { message: "Min 6 symbols", value: 6 },
    required: 'Is required',
  };
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <FormInput
        rules={rulesForEmail}
        inputType="email"
        register={register}
        error={!!errors?.email?.message}
        errorMessage={errors?.email?.message}
        label="Email"
        type="email"
        name="email"
      />
      <FormInput
        rules={rulesForEmail}
        inputType="password"
        register={register}
        error={!!errors?.password?.message}
        errorMessage={errors?.password?.message}
        label="Password"
        type="password"
        name="password"
      />
      <Link className="text-dark-authLink text-[16px] text-right" to={"/"}>
        Forgot Password
      </Link>
    </div>
  );
};

export default SignIn;
