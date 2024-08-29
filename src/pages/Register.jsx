import Form from "../components/Form";
import { Link } from "react-router-dom";

export default function Register() {
    const inputs = [
        {name: "email-address", label: "Email", 
        type: "textbox",
        placeholder: "example@gmail.com"},
        {name: "password", label: "Password", 
        type: "password",
        placeholder: "Password"}
    ]


  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <p className="text-white text-2xl font-semibold mb-4">Register</p>
      <Form inputs={inputs} buttonText="Register"/>
      <p className="text-xs text-white/50 font-light mt-1">
        Already registered? <Link to="/sign-in" className="text-tiny-orange">Sign in</Link>
      </p>
    </main>
  );
}
