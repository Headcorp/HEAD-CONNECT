import React from 'react'

export function InstructorCard ({teacher}: {teacher: any}) {
  return (
    <div className="flex items-center space-x-4"> { /* Temporaire */ }
      {teacher && teacher.map((teacher: any) => (
        // <img src={`${process.env.NEXT_PUBLIC_IMAGE}${teacher.image_128}`} alt="" className="rounded-full w-[80px] h-[80px]" />
        <img src="../images/blackperson.jpg" alt="" className="rounded-full w-[80px] h-[80px]" />
      ))}
      <div className="space-y-2">
        {teacher && teacher.map((teacher: any) => (
          <span className="text-2xl text-red font-bold">{teacher.name}</span>
        ))}
        <div className="flex items-center space-x-2">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z" fill="#2E5F7E"/> </g>
          </svg>
          {teacher && teacher.map((teacher: any) => (
            <span className="text-lg">{teacher.slide_channel_count} courses</span>
          ))}
        </div>
      </div>
    </div>
  )
}
    // {/* // <div className="w-full bg-white rounded-xl p-8 flex flex-col space-y-4 text-center sm:text-start">
    //   <a href="" className="underline text-2xl text-red font-bold">John Doe</a>
    //   <div className="flex w-full sm:w-1/2 space-x-8 flex-col sm:flex-row justify-center items-center sm:justify-start space-y-2">
    //     <div className="flex flex-col space-y-2">
    //       <img src="../images/blackperson.jpg" alt="" className="rounded-full w-[80px] h-[80px]" />
    //     </div>
    //     <div className="flex flex-col text-darkBlue text-xl justify-evenly font-semibold items-center sm:items-start">
    //       <div className="flex space-x-2">
    //         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    //         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    //         <g id="SVGRepo_iconCarrier"> <path d="M17.5291 7.77C17.4591 7.76 17.3891 7.76 17.3191 7.77C15.7691 7.72 14.5391 6.45 14.5391 4.89C14.5391 3.3 15.8291 2 17.4291 2C19.0191 2 20.3191 3.29 20.3191 4.89C20.3091 6.45 19.0791 7.72 17.5291 7.77Z" fill="#2E5F7E"/> <path d="M20.7916 14.7004C19.6716 15.4504 18.1016 15.7304 16.6516 15.5404C17.0316 14.7204 17.2316 13.8104 17.2416 12.8504C17.2416 11.8504 17.0216 10.9004 16.6016 10.0704C18.0816 9.8704 19.6516 10.1504 20.7816 10.9004C22.3616 11.9404 22.3616 13.6504 20.7916 14.7004Z" fill="#2E5F7E"/> <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#2E5F7E"/> <path d="M6.55109 12.8506C6.55109 13.8206 6.76109 14.7406 7.14109 15.5706C5.73109 15.7206 4.26109 15.4206 3.18109 14.7106C1.60109 13.6606 1.60109 11.9506 3.18109 10.9006C4.25109 10.1806 5.76109 9.89059 7.18109 10.0506C6.77109 10.8906 6.55109 11.8406 6.55109 12.8506Z" fill="#2E5F7E"/> <path d="M12.1208 15.87C12.0408 15.86 11.9508 15.86 11.8608 15.87C10.0208 15.81 8.55078 14.3 8.55078 12.44C8.56078 10.54 10.0908 9 12.0008 9C13.9008 9 15.4408 10.54 15.4408 12.44C15.4308 14.3 13.9708 15.81 12.1208 15.87Z" fill="#2E5F7E"/> <path d="M8.87078 17.9406C7.36078 18.9506 7.36078 20.6106 8.87078 21.6106C10.5908 22.7606 13.4108 22.7606 15.1308 21.6106C16.6408 20.6006 16.6408 18.9406 15.1308 17.9406C13.4208 16.7906 10.6008 16.7906 8.87078 17.9406Z" fill="#2E5F7E"/> </g>
    //         </svg>
    //         <span>1,033,731 Students</span>
    //       </div>
    //       <div className="flex space-x-2">
    //         <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">
    //         <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    //         <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    //         <g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z" fill="#2E5F7E"/> </g>
    //         </svg>
    //         <span>26 Courses</span>
    //       </div>
    //     </div>
    //   </div>
    //   <p className="text-md sm:text-lg">
    //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem adipisci quis voluptatibus, ipsa placeat aspernatur error incidunt laborum repellendus eos maiores iste nihil, asperiores numquam itaque? Deleniti tempora suscipit possimus! error incidunt laborum repellendus eos maiores iste nihil, asperiores numquam itaque? Deleniti tempora suscipit possimus ! error incidunt laborum repellendus eos maiores iste nihil, asperiores numquam itaque? Deleniti tempora suscipit possimus.
    //   </p>
    // </div> */}
