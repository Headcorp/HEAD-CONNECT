import "@fontsource/ubuntu-mono";
import React from "react";

export function CurentView() {
  return (
    <div className="body w-full sm:w-2/3 rounded-xl flex flex-col space-y-4">
      <div className="rounded-xl">
        <img src="../images/test.jpg" className="rounded-xl sm:rounded-2xl" />
      </div>
      <div className="flex space-x-6 items-center justify-between">
        <span className="text-xl text-darkBlue font-semibold">
          Titre de l'event
        </span>
      </div>
      <div className="flex space-x-6 items-center justify-between">
        <span className="text-xl text-darkBlue font-semibold">Moniteur</span>
        <div className="">
          <div className="flex space-x-4 rounded-full bg-white px-4 py-2">
            <button className="">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.1666 8.33337C19.1666 7.89135 18.991 7.46742 18.6784 7.15486C18.3659 6.8423 17.9419 6.66671 17.4999 6.66671H12.2333L13.0333 2.85837C13.0499 2.77504 13.0583 2.68337 13.0583 2.59171C13.0583 2.25004 12.9166 1.93337 12.6916 1.70837L11.8083 0.833374L6.32492 6.31671C6.01659 6.62504 5.83325 7.04171 5.83325 7.50004V15.8334C5.83325 16.2754 6.00885 16.6993 6.32141 17.0119C6.63397 17.3244 7.05789 17.5 7.49992 17.5H14.9999C15.6916 17.5 16.2833 17.0834 16.5333 16.4834L19.0499 10.6084C19.1249 10.4167 19.1666 10.2167 19.1666 10V8.33337ZM0.833252 17.5H4.16659V7.50004H0.833252V17.5Z"
                  fill="#EB5051"
                />
              </svg>
            </button>
            <span className="text-xl text-pink">452</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl text-darkBlue">Nb vues</span>
        <span className="text-xl text-darkBlue">depuis.....jours</span>
      </div>
    </div>
  );
}
