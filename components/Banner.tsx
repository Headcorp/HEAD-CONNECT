import Link from "next/link";
import { useRouter } from "next/router";

export function Banner () {
    const router = useRouter()

    return (
        <div className="relative py-8 md:py-0"> {/* Pour fixer la navbar on rajoute : mt-12 */}
            <div className="flex flex-col md:flex-row justify-evenly mx-auto items-center bottom-0 left-0 top-0 right-0 bg:cover md:bg-contain bg-no-repeat md:bg-center">

                <div className="md:ml-15 space-y-4 md:space-y-8 w-5/6 text-center md:text-start">
                    <h1 className="text-5xl lg:text-6xl text-white font-bold xl:text-7xl">Votre Avenir <br /> Informatique <br /> Commence ici</h1>
                    <p className="text-white text-lg xl:text-2xl">Que vous souhaitiez perfectionner vos compétences, démarrer une carrière ou rester à jour<br />  avec les dernières technologies, Head Connect est votre allié. Notre mission est de vous offrir <br /> une expérience inégalée, combinant la flexibilité de l'apprentissage en ligne avec le soutien et <br /> l'inspiration d'une communauté dévouée.</p>
                    <button onClick={() => router.push('/courses')} className="text-white px-4 py-2 md:px-8 md:py-4 font-bold text-2xl md:text-4xl rounded-2xl btn xl:text-3xl duration-300">Rejoignez nous</button>
                </div>
                <div className="">
                    <img src="public/images/people.jpg" alt=""/>
                </div>

                
            </div>
            <div className="mx-12 md:mx-32 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pb-6 md:pb-12 mt-8 md:mt-8 cursor-pointer">
                <span className="text-2xl text-white lg:text-3xl xl:text-4xl hover:underline transition-150">2000+ <br /> membres</span>
                <span className="text-2xl text-white lg:text-3xl xl:text-4xl hover:underline">25 <br /> cas d'utilisations</span>
                <span className="text-2xl text-white lg:text-3xl xl:text-4xl hover:underline">49 <br /> heures de contenus</span>
                <span className="text-2xl text-white lg:text-3xl xl:text-4xl hover:underline">50+ panels de <br /> discussions</span>
                <span className="text-2xl text-white lg:text-3xl xl:text-4xl hover:underline">10 <br /> communautés</span>
            </div>
        </div>
    );
}
