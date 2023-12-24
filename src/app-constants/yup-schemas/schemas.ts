import * as yup from "yup";

const Login = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup.string().required("Required"),
});
const Register = yup.object().shape({
  username: yup.string().min(3, "Username must be at least 3 characters long").required("Required"),
  email: yup.string().email().required("Required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(/[a-zA-Z0-9]/, "Password can only contain Latin letters or numbers")
    .required("Required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export const YupSchemas = { Login, Register };
