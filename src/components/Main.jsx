export default function Main() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center">
    <p className="text-white text-2xl font-semibold">Sign In</p>
      <form className="flex flex-col gap-2 text-white/50 font-extralight">
        <label htmlFor="email-address">Email address</label>
        <input
          className="border w-login-form h-login-form rounded-full bg-white/20 pl-4"
          name="email-address"
          type="textbox"
          placeholder="example@domain.com"
        />
        <label htmlFor="password">Password</label>
        <input
          className="border w-login-form h-login-form rounded-full bg-white/20 pl-4" 
          name="password"
          type="password"
          placeholder="Password..."
        />
        <button
          className="bg-tiny-orange w-login-form h-login-form text-white font-semibold mt-8 rounded-full"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}
