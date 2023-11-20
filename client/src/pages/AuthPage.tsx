import { useState } from "react";
import MainContainer from "../components/UI/Container/MainContainer";
import { IAuthType } from "../interfaces/IAuthType";
import AuthFrom from "../components/UI/Forms/Auth/AuthFrom";
import AuthCard from "../components/UI/Cards/AuthCard/AuthCard";

const AuthPage = () => {
  const [authType, setAuthType] = useState<IAuthType>("Sign In");
  const cnahgeType = () => {
    if (authType === "Sign In") return setAuthType("Sign Up");
    return setAuthType("Sign In");
  };
  return (
    <MainContainer>
      <AuthCard type={authType}>
        <AuthFrom redirectClick={cnahgeType} type={authType} />
      </AuthCard>
    </MainContainer>
  );
};

export default AuthPage;
