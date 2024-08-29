export default function Input({name, type, placeholder, label, onChange}) {
    return (
        <div className="flex flex-col gap-2">
        <label htmlFor={name}>{label}</label>
        <input
          className="border w-login-form h-login-form rounded-full bg-white/20 pl-4 mb-2"
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        </div>
    )
}