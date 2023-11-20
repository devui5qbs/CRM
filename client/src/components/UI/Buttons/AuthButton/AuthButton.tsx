import { ButtonHTMLAttributes, ReactNode } from "react";

interface IAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const AuthButton = ({ children, ...props }: IAuthButtonProps) => {
  return (
    <button
      {...props}
      className="px-[70px] py-[8px] rounded-[4px] bg-dark-authLink flex justify-center items-center"
    >
      <p className="text-white text-[16px]">{children}</p>
    </button>
  );
};

export default AuthButton;
