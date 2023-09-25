import { useRouter } from "next/router"

export function Banner () {
    const router = useRouter()

    return (
        <div className="relative py-8 md:py-0"> {/* Pour fixer la navbar on rajoute : mt-12 */}
            <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center bottom-0 left-0 top-0 right-0 bg:cover md:bg-contain bg-no-repeat md:bg-center"
                style={{ backgroundImage: `url(../icons/stars.svg)` }}>
                <div className="md:ml-20 space-y-4 md:space-y-8 w-5/6 text-center md:text-start">
                    <h1 className="text-4xl lg:text-5xl text-darkBlue font-bold xl:text-7xl">
                        Bienvenue sur HEAD CONNECT, Votre passerelle vers l'avenir numérique !
                    </h1>
                    <p className="text-darkBlue text-lg xl:text-2xl font-semibold">
                        Votre passerelle vers l'avenir numérique ! Chez HEAD CONNECT, nous sommes déterminés à former et à accompagner la prochaine génération de leaders en technologies de l'information et de la communication (TIC). Notre mission est claire : doter les jeunes et les professionnels des compétences numériques essentielles pour prospérer dans l'économie numérique en constante évolution.
                    </p>
                    <button
                        onClick={() => router.push('/courses')}
                        className="text-yellow px-4 py-2 md:px-8 md:py-4 font-bold text-2xl md:text-4xl rounded-md btn xl:text-5xl"
                    >
                        Rejoins nous
                    </button>
                </div>
                <div className="hidden md:block md:mr-20">
                    <img src="../images/cercle.png" alt="image en tête" className="" />
                </div>
            </div>
            <div className="mx-12 md:mx-32 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-12 mt-8 md:mt-0">
                <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">2000+ <br /> members</span>
                <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">25 <br /> use cases</span>
                <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">49 <br /> hours of contents</span>
                <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">50+ panel <br /> discussions</span>
                <span className="underline text-2xl text-white lg:text-3xl xl:text-4xl">10 <br /> communities</span>
            </div>
        </div>
    );
}
