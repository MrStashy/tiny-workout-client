export default function Input({name, type, placeholder, label, onChange, error}) {

  let style = "border w-login-form h-login-form rounded-full pl-4"
  
  if (error) {
    style += " bg-red-500/50"
  } else {
    style += " bg-white/20"
  }

    return (
        <div className="flex flex-col mb-2">
        <label htmlFor={name} className="mb-1 ml-4">{label}</label>
        <input
          className={style}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        <p className="bg-white/80 text-red-500 place-self-center px-2 text-xs rounded-b-md">{error}</p>
        </div>
    )
}