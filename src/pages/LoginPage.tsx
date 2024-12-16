import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { YupSchemas } from "../app-constants/yup-schemas/schemas";
import { FormikInput } from "../components/FormikInput";
import { RealButton } from "../components/RealButton";
import { supabase } from "../utils/supabaseClient";



interface FormValues {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();

  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupSchemas.Login}
      validateOnChange={true}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });

        if (error) {
          toast.error(error.message);
          throw new Error(error.message);
        }

        navigate("/");
        resetForm();
        setSubmitting(false);
      }}
    >
      <Form className="flex flex-col">
        <FormikInput name="email" placeholder="tomi@gmail.com" label="Email" required />
        <FormikInput
          name="password"
          required
          placeholder="**********"
          label="Password"
          type="password"
          className="mt-3"
        />
        <RealButton className="mt-4" type="submit">
          Log in
        </RealButton>
        <Link to="/register">
          <p className="mt-2 text-blue-600">I don't have an account yet</p>
        </Link>
      </Form>
    </Formik>
  );
};
