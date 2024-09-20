export default function Input({
  name,
  type,
  placeholder,
  label,
  onChange,
  error,
  constraints,
}) {
  let style = "border w-login-form h-login-form rounded-full pl-4 text-tiny-orange placeholder-tiny-orange";

  if (error) {
    style += " bg-red-500/50";
  } else {
    style += " bg-white/60";
  }

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="ml-4">
        {label}
      </label>
      <div className="relative">
        <input
          className={style}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
        />
        {constraints?.length > 0 && (
          <ul className="absolute text-xs text-black rounded -right-40 -top-2 p-1 bg-white/60 ">
            {constraints.map((constraint) => {
              return <li key={constraint}>{constraint}</li>;
            })}
          </ul>
        )}
      </div>
      <p className="bg-white/80 text-red-500 place-self-center px-2 text-xs rounded-b-md">
        {error}
      </p>
    </div>
  );
}

