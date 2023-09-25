import { useRouter } from "next/router"

export function About () {
  const router = useRouter()

  return (
    <div className="about_bg w-full text-center p-4" id="about">
        <h1 className="text-darkBlue font-bold underline text-4xl md:text-5xl pb-12 lg:text-6xl xl:text-7xl">
          Qui sommes nous ?
        </h1>
        <div className="flex flex-col md:flex-row w-full md:w-3/4 mx-auto space-y-4 md:space-x-8 items-center mb-8  ">
            <img src="../images/video.png" alt="Section vidéo" className="w-1/2 cursor-pointer" />
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-red font-bold text-2xl md:text-2xl lg:text-3xl xl:text-5xl">
                  HEAD CONNECT est bien plus qu'une plateforme éducative
                </h1>
                <p className="text-darkBlue text-md md:text-lg lg-text-2xl">
                  C'est une communauté dynamique et innovante. Notre équipe chevronnée de passionnés des TIC s'engage à offrir des formations de qualité, à encourager l'égalité des sexes dans le domaine de la technologie et à favoriser l'emploi des jeunes. Nous croyons en la puissance de la technologie pour transformer des vies et des communautés entières.
                </p>
                <button
                  onClick={() => router.push('/')}
                  className="text-yellow px-8 py-4 font-bold text-xl md:text-2xl rounded-xl btn lg:text-3xl"
                >
                  More Informations
                </button>
            </div>
        </div>
    </div>
  )
}
