import { useState } from "react";
import { validateUserDetails } from "../utils/validationFunctions";
import Form from "../components/Form";
import { jwtDecode } from "jwt-decode";
import { createProfile } from "../utils/apiFunctions";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";


export default function UserDetails() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)

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
    setSubmitting(true)
    const { id } = jwtDecode(localStorage.getItem("Token"))
    const stats = {...formData}
    stats.dob = stats.dob.split("/").reverse().join("-")
   
    const { height, weight, dob } = stats

    try {
      validateUserDetails(height, weight, dob);
      const data = await createProfile(id, stats)
      if (data.error) {
        console.error(data.error)
        return
      }
      
      navigate("/dashboard/")
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
    <main className="flex-grow flex flex-col items-center justify-center gap-4">
      <p className="text-white text-2xl font-semibold">Your Stats</p>
      <Form
        inputs={inputs}
        onSubmit={onSubmit}
        onChange={onChange}
        buttonText="Submit"
      />
      {submitting && <LoadingSpinner />}
    </main>
  );
}
