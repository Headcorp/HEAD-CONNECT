import "@fontsource/ubuntu-mono";

export default function Login() {
  return (
    <div className="header flex flex-col space-y-4 h-screen w-screen body items-center jsutify-center p-2 lg:p-8">
      <div className="flex items-center jsutify-center underline decoration-darkBlue">
        <span className="text-darkBlue text-6xl font-bold">
          Login
        </span>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.0833 54.25C30.4722 53.5278 30.1667 52.7089 30.1667 51.7933C30.1667 50.8778 30.4722 50.1133 31.0833 49.5L37.25 43.3333H13.3333C12.3889 43.3333 11.5967 43.0133 10.9567 42.3733C10.3167 41.7333 9.99779 40.9422 10 40C10 39.0556 10.32 38.2633 10.96 37.6233C11.6 36.9833 12.3911 36.6645 13.3333 36.6667H37.25L31.0833 30.5C30.4167 29.8333 30.0833 29.0411 30.0833 28.1233C30.0833 27.2056 30.4167 26.4145 31.0833 25.75C31.6945 25.0833 32.4589 24.75 33.3767 24.75C34.2945 24.75 35.0578 25.0556 35.6667 25.6667L47.6667 37.6667C48 38 48.2367 38.3611 48.3767 38.75C48.5167 39.1389 48.5856 39.5556 48.5833 40C48.5833 40.4445 48.5145 40.8611 48.3767 41.25C48.2389 41.6389 48.0022 42 47.6667 42.3333L35.6667 54.3333C35 55 34.2222 55.3056 33.3333 55.25C32.4445 55.1945 31.6945 54.8611 31.0833 54.25ZM43.3333 70C42.3889 70 41.5978 69.6811 40.96 69.0433C40.3222 68.4056 40.0022 67.6133 40 66.6667C40 65.7222 40.32 64.93 40.96 64.29C41.6 63.65 42.3911 63.3311 43.3333 63.3333H63.3333V16.6667H43.3333C42.3889 16.6667 41.5967 16.3467 40.9567 15.7067C40.3167 15.0667 39.9978 14.2756 40 13.3333C40 12.3889 40.32 11.5967 40.96 10.9567C41.6 10.3167 42.3911 9.99779 43.3333 10H63.3333C65.1667 10 66.7367 10.6533 68.0433 11.96C69.35 13.2667 70.0022 14.8356 70 16.6667V63.3333C70 65.1667 69.3467 66.7367 68.04 68.0433C66.7333 69.35 65.1645 70.0022 63.3333 70H43.3333Z"
            fill="#2E5F7E"
          />
        </svg>
      </div>
      <div className="lg:w-1/3 w-full md:w-3/4 h-full border-red/50 border-2 rounded-2xl bg-white/20 flex flex-col space-y-8 items-center p-8">
        <img src="../images/logo.png" alt="logo" className="w-1/2" />
        <div className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
            placeholder="Email"
          />
           <input
            type="password"
            className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
            placeholder="Password"
          />
          <a href="#">
            <span className="text-darkBlue text-2xl font-bold hover:underline">
              Create account
            </span>
          </a>
          <a href="#">
            <span className="text-darkBlue text-2xl font-bold hover:underline">
              Forgot your password?
            </span>
          </a>
        </div>
        <button className="btn px-8 py-4 text-yellow font-bold text-2xl rounded-xl">Connexion</button>
      </div>
    </div>
  );
}
