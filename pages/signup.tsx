import "@fontsource/ubuntu-mono";

export default function SignUp() {
  return (
    <div className="header flex flex-col space-y-4 md:h-screen w-screen body items-center jsutify-center p-4 lg:p-12">
      <div className="flex items-center jsutify-center underline decoration-darkBlue">
        <span className="text-darkBlue text-6xl font-bold">SignUP</span>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36 56H44V39.2L50.4 45.6L56 40L40 24L24 40L29.6 45.6L36 39.2V56ZM40 80C34.4667 80 29.2667 78.9493 24.4 76.848C19.5333 74.7467 15.3 71.8973 11.7 68.3C8.1 64.7 5.25067 60.4667 3.152 55.6C1.05333 50.7333 0.00266667 45.5333 0 40C0 34.4667 1.05067 29.2667 3.152 24.4C5.25333 19.5333 8.10267 15.3 11.7 11.7C15.3 8.1 19.5333 5.25067 24.4 3.152C29.2667 1.05333 34.4667 0.00266667 40 0C45.5333 0 50.7333 1.05067 55.6 3.152C60.4667 5.25333 64.7 8.10267 68.3 11.7C71.9 15.3 74.7507 19.5333 76.852 24.4C78.9533 29.2667 80.0027 34.4667 80 40C80 45.5333 78.9493 50.7333 76.848 55.6C74.7467 60.4667 71.8973 64.7 68.3 68.3C64.7 71.9 60.4667 74.7507 55.6 76.852C50.7333 78.9533 45.5333 80.0027 40 80ZM40 72C48.9333 72 56.5 68.9 62.7 62.7C68.9 56.5 72 48.9333 72 40C72 31.0667 68.9 23.5 62.7 17.3C56.5 11.1 48.9333 8 40 8C31.0667 8 23.5 11.1 17.3 17.3C11.1 23.5 8 31.0667 8 40C8 48.9333 11.1 56.5 17.3 62.7C23.5 68.9 31.0667 72 40 72Z"
            fill="#2E5F7E"
          />
        </svg>
      </div>
      <div className="w-full lg:w-3/4 h-full border-red/50 border-2 rounded-2xl bg-white/20 flex flex-col space-y-8 items-center p-8">
        <img src="../images/logo.png" alt="logo" className="w-1/2 md:w-1/4" />
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-x-0 space-y-4 w-full">
            <div className="flex flex-col space-y-4 p-2 w-full md:w-1/2">
              <input
                type="text"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="domain of interest"
              />
              <input
                type="text"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Professionnal experience"
              />
            </div>
            <div className="flex flex-col space-y-4 p-2 w-full md:w-1/2">
              <input
                type="text"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Surname"
              />
              <input
                type="text"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Profession"
              />
              <input
                type="password"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Password"
              />
              <input
                type="password"
                className="w-full rounded-xl text-2xl p-4 border-4 border-pink placeholder:text-pink placeholder:text-2xl placeholder:font-bold text-pink font-bold bg-white/50 outline-pink"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <a href="#">
            <span className="text-darkBlue text-2xl font-bold hover:underline">
              Login
            </span>
          </a>
        </div>
        <button className="btn px-8 py-4 text-yellow font-bold text-2xl rounded-xl">
          Connexion
        </button>
      </div>
    </div>
  );
}
