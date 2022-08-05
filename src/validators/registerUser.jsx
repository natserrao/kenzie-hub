import * as yup from "yup";

export const formSchema = yup.object({
  name: yup.string().required("Seu nome é obrigatório"),
  email: yup
    .string()
    .required("Seu email é obrigatório")
    .email("Forneça um email válido"),
  password: yup
    .string()
    .required("Sua senha é obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Suas senhas devem ser iguais"),
  bio: yup.string().required("Sua bio é obrigatória"),
  contact: yup.number().required("Contato é obrigatório"),
});
