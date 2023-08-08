export function BlogPubCard() {
  return (
    <div className="w-full md:w-3/4 bg-white rounded-xl p-8 flex flex-col space-y-4">
      <div className="flex space-x-2">
        <img
          src="../images/blackperson.jpg"
          alt=""
          className="rounded-full w-[70px] h-[70px]"
          width="30"
          height="30"
        />
        <div className="flex space-x-4">
          <div className="flex space-y-0 flex-col items-center justify-center">
            <span className="text-darkBlue font-bold text-2xl">Emma alice</span>
            <span className="text-darkBlue text-xl">Web designer</span>
          </div>
          <div className="flex space-y-1 flex-col items-start justify-start py-2">
            <span className="text-darkBlue font-semibold text-xl">
              April 12 2023
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <span className="text-darkBlue font-bold text-2xl">
          Lorem ipsum dolor sit ame
        </span>
        <span className="text-darkBlue text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <button>
            <svg
              width="30"
              height="30"
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
          <span className="text-pink text-2xl">100</span>
        </div>

        <div className="flex space-x-8">
          <div className="flex space-x-2 items-center">
            <button>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.50008 17.3333C6.27907 17.3333 6.06711 17.2455 5.91083 17.0892C5.75455 16.9329 5.66675 16.721 5.66675 16.5V14H2.33341C1.89139 14 1.46746 13.8244 1.1549 13.5118C0.842343 13.1992 0.666748 12.7753 0.666748 12.3333V2.33329C0.666748 1.89127 0.842343 1.46734 1.1549 1.15478C1.46746 0.842221 1.89139 0.666626 2.33341 0.666626H15.6667C16.1088 0.666626 16.5327 0.842221 16.8453 1.15478C17.1578 1.46734 17.3334 1.89127 17.3334 2.33329V12.3333C17.3334 12.7753 17.1578 13.1992 16.8453 13.5118C16.5327 13.8244 16.1088 14 15.6667 14H10.5834L7.50008 17.0916C7.33341 17.25 7.12508 17.3333 6.91675 17.3333H6.50008Z"
                  fill="#EB5051"
                />
              </svg>
            </button>
            <span className="text-pink text-2xl">100</span>
          </div>
          <div className="flex space-x-2 items-center">
            <button>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 12.4C12.3667 12.4 11.8 12.65 11.3667 13.0416L5.425 9.58329C5.46667 9.39163 5.5 9.19996 5.5 8.99996C5.5 8.79996 5.46667 8.60829 5.425 8.41663L11.3 4.99163C11.75 5.40829 12.3417 5.66663 13 5.66663C14.3833 5.66663 15.5 4.54996 15.5 3.16663C15.5 1.78329 14.3833 0.666626 13 0.666626C11.6167 0.666626 10.5 1.78329 10.5 3.16663C10.5 3.36663 10.5333 3.55829 10.575 3.74996L4.7 7.17496C4.25 6.75829 3.65833 6.49996 3 6.49996C1.61667 6.49996 0.5 7.61663 0.5 8.99996C0.5 10.3833 1.61667 11.5 3 11.5C3.65833 11.5 4.25 11.2416 4.7 10.825L10.6333 14.2916C10.5917 14.4666 10.5667 14.65 10.5667 14.8333C10.5667 16.175 11.6583 17.2666 13 17.2666C14.3417 17.2666 15.4333 16.175 15.4333 14.8333C15.4333 13.4916 14.3417 12.4 13 12.4Z"
                  fill="#EB5051"
                />
              </svg>
            </button>
            <span className="text-pink text-2xl">100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
