import { useForm } from "react-hook-form";
import { BrandBox } from "../../components/BrandBox";
import { Input } from "../../components/Input";
import { StyledButton } from "../../styles/components/Button/style";
import { StyledForm } from "../../styles/components/Form/style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { RegisterS, MainContent, RegisterFormHeader } from "./style";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { iRegisterData } from "./types";

export const Register = () => {
  const { submitRegister } = useContext(UserContext);

  const loginSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório!")
      .min(6, "O nome precisa de um mínimo de 6 caracteres")
      .max(150, "O nome pode ter no máximo 150 caracteres."),
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Necessário que seja um email!"),
    password: yup
      .string()
      .required("Senha obrigatória!")
      .matches(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula!")
      .matches(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula!")
      .matches(/(?=.*?[0-9])/, "É necessário ao menos um número!")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário ao menos uma caractere especial!"
      )
      .min(8, "Sua senha deve ter ao menos 8 caracteres!"),
    passwordConfirmation: yup
      .string()
      .required("Confirmação obrigatória!")
      .oneOf([yup.ref("password")], "As senhas devem coincidir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <RegisterS>
      <MainContent>
        <BrandBox />
        <StyledForm onSubmit={handleSubmit(submitRegister)}>
          <RegisterFormHeader>
            <StyledTitle
              tag="h3"
              heading="3"
              color="--grey6"
              className=""
              lineHeight=""
            >
              Cadastro
            </StyledTitle>
            <Link to="/">
              <StyledText
                tag="p"
                body="2"
                color="--grey5"
                className=""
                id=""
                lineHeight=""
              >
                Retornar para o login
              </StyledText>
            </Link>
          </RegisterFormHeader>
          <Input
            type="text"
            id="#name"
            placeholder="Nome"
            {...register("name")}
          >
            Nome
          </Input>
          {errors.name?.message && (
            <StyledText
              tag="span"
              id=""
              body="2"
              color="--negative"
              className="error"
              lineHeight=""
            >
              {errors.name.message}
            </StyledText>
          )}

          <Input
            type="email"
            id="#email"
            placeholder="Email"
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
            id="#senha"
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
              lineHeight=""
              id=""
            >
              {errors.password.message}
            </StyledText>
          )}

          <Input
            type="password"
            id="#pass"
            placeholder="Confirmar Senha"
            {...register("passwordConfirmation")}
          >
            Confirmar Senha
          </Input>
          {errors.passwordConfirmation?.message && (
            <StyledText
              tag="span"
              body="2"
              color="--negative"
              className="error"
              lineHeight=""
              id=""
            >
              {errors.passwordConfirmation.message}
            </StyledText>
          )}

          <StyledButton type="submit" classButton="default" color="grey1">
            Cadastrar
          </StyledButton>
        </StyledForm>
      </MainContent>
    </RegisterS>
  );
};
