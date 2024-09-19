import Input from "./Input";


export default function Form({ inputs, buttonText, onSubmit, onChange }) {

  return (
    <form onSubmit={onSubmit} className="flex flex-col text-white/50 font-extralight gap-4">
      {inputs.map((input, index) => {
        return (
          <Input
            key={index + "form"}
            onChange={onChange}
            name={input.name}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            error={input.error}
            constraints={input.constraints}
          />
        );
      })}

      <button
        className="bg-tiny-orange w-login-form h-login-form text-white font-semibold mt-6 rounded-full"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}
