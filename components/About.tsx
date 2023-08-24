export function About () {
  return (
    <div className="about_bg w-full text-center p-4" id="about">
        <h1 className="text-darkBlue font-extrabold text-4xl md:text-4xl pb-12 lg:text-5xl xl:text-6xl">Qui sommes-nous ?</h1>
        <div className="flex flex-col md:flex-row w-full md:w-3/4 mx-auto space-y-4 md:space-x-8 items-center mb-8  ">
            {/* <img src="../images/video.png" alt="Section vidéo" className="w-2/5 cursor-pointer" /> */}
            
            <div className="space-y-4 text-center md:text-left">
                <h1 className="text-darkBlue font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">L'Équipe de "Head Connect"</h1>
                <p className="text-darkBlue text-md md:text-lg lg:text-2xl">L'équipe de "Head Corporation" est composée d'individus passionnés et hautement qualifiés issus d'horizons divers. Chacun apporte une expertise unique dans le domaine des services informatiques et de l'innovation, contribuant ainsi à la mission globale de l'entreprise.</p>
                {/* <button className="text-white px-8 py-4 font-semibold text-xl md:text-2xl rounded-xl btn lg:text-3xl">More Informations</button> */}
            </div>

            <img src="../images/pexels-mart2.jpg" alt="Section vidéo" className="w-2/6 cursor-pointer rounded-3xl" />
        </div>
    </div>
  )
}
