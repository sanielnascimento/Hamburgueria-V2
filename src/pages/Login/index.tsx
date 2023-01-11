import { useForm } from "react-hook-form";
import { BrandBox } from "../../components/BrandBox";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/components/Button/style";
import { StyledForm } from "../../styles/components/Form/style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { LoginS, MainContent } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iLoginData } from "./types";

export const Login = () => {
  const { submitLogin, toRegister } = useContext(UserContext);

  const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório!"),
    password: yup.string().required("Senha obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <LoginS>
      <MainContent>
        <BrandBox />
        <StyledForm onSubmit={handleSubmit(submitLogin)} noValidate>
          <StyledTitle
            className=""
            lineHeight=""
            tag="h3"
            heading="3"
            color="--grey6"
          >
            Login
          </StyledTitle>
          <Input
            id="#email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          >
            Email
          </Input>
          {errors.email?.message && (
            <StyledText
              tag="span"
              body="2"
              color="--negative"
              className="error"
              lineHeight=""
              id=""
            >
              {errors.email.message}
            </StyledText>
          )}
          <Input
            type="password"
            id={"name"}
            placeholder="Senha"
            {...register("password")}
          >
            Senha
          </Input>
          {errors.password?.message && (
            <StyledText
              tag="span"
              body="2"
              color="--negative"
              className="error"
              id=""
              lineHeight=""
            >
              {errors.password.message}
            </StyledText>
          )}

          <StyledButton classButton="default" color="default" type="submit">Logar</StyledButton>
          <StyledText
            tag="span"
            body="2"
            color="--grey5"
            className=""
            id=""
            lineHeight=""
          >
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </StyledText>
          <StyledButton classButton="default" onClick={toRegister} type="button" color="grey1">
            Cadastrar
          </StyledButton>
        </StyledForm>
      </MainContent>
    </LoginS>
  );
};
