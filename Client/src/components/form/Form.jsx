import style from "./Form.module.css";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { useSelector } from "react-redux";

const Form = () => {
  const isRegistered = useSelector((state) => state.isRegistered);

  return (
    <section className={style.login}>
      <img src="/RICKEPICO.gif" alt="rick" className={style.image} />^
      {isRegistered ? <LoginForm /> : <RegisterForm />}
    </section>
  );
};

export default Form;
