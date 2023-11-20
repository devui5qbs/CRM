import { motion } from "framer-motion";
import useTheme from "../../../../hooks/useTheme";
import Logo from "../../../../images/Logo.svg";
import { IAuthType } from "../../../../interfaces/IAuthType";
import FormHeader from "../../Headers/FormHeader/FormHeader";
import { Form, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthButton from "../../Buttons/AuthButton/AuthButton";
import AuthFooter from "../../Footers/AuthFooter/AuthFooter";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import { SignInCtrl, SignUpCtrl } from "../../../../controllers/AuthCtrl";
import { UserStore } from "../../../../zustand/User";
import { IUser } from "../../../../interfaces/IUser";
import { ROUTES } from "../../../../constants/ROUTES";

interface IAuthFromProps {
  type: IAuthType;
  redirectClick: () => void;
}
export interface IAuth {
  password: string;
  email: string;
  signEmail: string;
  signPassword: string;
  firstName: string;
  lastName: string;
  username: string;
  confirmPas: string;
}

const AuthFrom = ({ type, redirectClick }: IAuthFromProps) => {
  const { theme } = useTheme();
  const { setUser } = UserStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuth>({
    mode: "all",
  });

  const getUserRole = (role: string) => {
    if (role === "client") return navigate(ROUTES.MAIN);
    return navigate(ROUTES.MAIN);
  };
  const setUserOnzustand = (user: IUser | string) => {
    if (typeof user === "string") return;
    setUser(user);
    return getUserRole(user.role);
  };

  const signIn = async (data: IAuth) => {
    const { email, password } = data;
    const user = await SignInCtrl(email, password);
    setUserOnzustand(user);
  };

  const signUp = async (data: IAuth) => {
    const { signEmail, signPassword, username, firstName, lastName } = data;
    const user: IUser | string = await SignUpCtrl(
      signEmail,
      signPassword,
      username,
      firstName,
      lastName
    );
    setUserOnzustand(user);
  };

  const onSubmit: SubmitHandler<IAuth> = (data) => {
    if (type === "Sign In") return signIn(data);
    return signUp(data);
  };

  return (
    <motion.div
      initial={{
        y: "-50%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="flex flex-col w-[70%] gap-[40px]"
    >
      <div className="flex gap-[8px] items-center">
        <img src={Logo} alt="logo" />
        <h1
          className={`${
            theme ? "text-dark-mainFont" : "text-light-mainFont"
          } text-[33px]`}
        >
          Hope Ui
        </h1>
      </div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-[16px]"
      >
        <FormHeader type={type} />
        <div className="flex flex-col gap-[24px] w-full">
          {type === "Sign In" ? (
            <SignIn register={register} errors={errors} />
          ) : (
            <SignUp register={register} errors={errors} />
          )}

          <div className="w-full flex justify-center ">
            <AuthButton>{type}</AuthButton>
          </div>
          <div>
            <AuthFooter
              text={
                type === "Sign In"
                  ? "Don’t have an account?"
                  : "Already have an Account"
              }
              redirectClick={redirectClick}
              linkText={
                type === "Sign In" ? "Click here to sign up." : "Sign in"
              }
            />
          </div>
        </div>
      </Form>
    </motion.div>
  );
};

export default AuthFrom;
