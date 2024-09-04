import { useState } from "react";
import { validateUserDetails } from "../utils/validationFunctions";
import Form from "../components/Form";
import { jwtDecode } from "jwt-decode";
import { createProfile } from "../utils/apiFunctions";


export default function UserDetails() {
  const [formData, setFormData] = useState({
    height: 0,
    weight: 0,
    dob: "",
  });

  const [inputs, setInputs] = useState([
    {
      name: "height",
      label: "Height (cm)",
      type: "textbox",
      placeholder: "160",
      value: formData.height,
      error: "",
    },
    {
      name: "weight",
      label: "Weight (kg)",
      type: "textbox",
      placeholder: "80",
      value: formData.weight,
      error: "",
    },
    {
      name: "dob",
      label: "Date of Birth (dd/mm/yyyy)",
      type: "textbox",
      placeholder: "01/01/1990",
      value: formData.dob,
      error: "",
    },
  ]);

  async function onSubmit(e) {
    e.preventDefault();

    const { id } = jwtDecode(localStorage.getItem("Token"))
    const { height, weight, dob } = formData;

    try {
      validateUserDetails(height, weight, dob);
      const data = await createProfile(id, formData)
      if (data.error) {
        console.error(data.error)
        return
      }
      navigate("/dashboard")
    } catch (e) {
      const updatedInputs = inputs.map((input) => {
        if (e[input.name]) {
          return { ...input, error: e[input.name] };
        } else {
          return { ...input, error: false };
        }
      });
      setInputs(updatedInputs);
    }
  }

  async function onChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.name === name ? { ...input, error: "" } : input
      )
    );
  }

  return (
    <main className="flex-grow flex flex-col items-center justify-center">
      <p className="text-white text-2xl font-semibold mb-4">Your Stats</p>
      <Form
        inputs={inputs}
        onSubmit={onSubmit}
        onChange={onChange}
        buttonText="Submit"
      />
    </main>
  );
}
