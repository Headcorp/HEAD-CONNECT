import { useRouter } from "next/router"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export function About () {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(false)

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
                  onClick={() => setIsOpen(true)}
                  className="text-yellow px-8 py-4 font-bold text-xl md:text-2xl rounded-xl btn lg:text-3xl"
                >
                  More Informations
                </button>
                <Dialog
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  className="relative z-50"
                >
                  {/* The backdrop, rendered as a fixed sibling to the panel container */}
                  <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                  {/* Full-screen scrollable container */}
                  <div className="fixed inset-0 w-screen overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center p-4">
                      {/* The actual dialog panel  */}
                      <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
                        <Dialog.Title>HEAD CONNECT est bien plus qu'une plateforme éducative</Dialog.Title>

                        <Dialog.Description>
                          C'est une communauté dynamique et innovante. Notre équipe chevronnée de passionnés des TIC s'engage à offrir des formations de qualité, à encourager l'égalité des sexes dans le domaine de la technologie et à favoriser l'emploi des jeunes. Nous croyons en la puissance de la technologie pour transformer des vies et des communautés entières.
                        </Dialog.Description>

                        <p>
                          OBJECTIFS :

                          Chez HEAD CONNECT, nous avons des objectifs ambitieux :

                          Formation pour l'avenir : Nous formons la nouvelle génération de professionnels des TIC, les préparant à exceller dans un monde numérique en constante évolution.

                          Égalité des sexes : Nous encourageons activement la participation des jeunes femmes dans le secteur de la technologie, brisant les barrières de genre.

                          Communauté dynamique : Nous créons une communauté de passionnés de la technologie, favorisant le partage d'idées et de projets.

                          Emploi et opportunités : Nous aidons nos participants à trouver des emplois et à lancer leur carrière dans le secteur en croissance de la technologie.

                          Nos Valeurs

                          À HEAD CONNECT, nous sommes guidés par des valeurs fondamentales qui définissent notre culture et notre engagement envers notre communauté. Voici ce en quoi nous croyons :

                          1. Excellence

                          Nous nous engageons à offrir des formations de la plus haute qualité et à pousser constamment les limites de l'apprentissage en ligne. Notre recherche de l'excellence nous pousse à créer des programmes qui répondent aux normes les plus élevées de l'industrie.

                          2. Inclusion

                          Nous croyons en un accès équitable à l'éducation numérique pour tous, indépendamment de l'âge, du genre ou de l'origine. Nous œuvrons pour créer un environnement inclusif où chacun a sa place.

                          3. Innovation

                          Nous encourageons la créativité et l'innovation dans l'apprentissage. Nous sommes déterminés à rester à la pointe de la technologie et à adopter des méthodes d'enseignement innovantes.

                          4. Collaboration

                          Nous croyons en la puissance de la collaboration. Nous encourageons nos apprenants à travailler ensemble, à partager leurs compétences et à développer des projets conjoints.

                          À HEAD CONNECT, ces valeurs sont le fondement de tout ce que nous faisons. Nous sommes fiers de faire partie d'une communauté qui partage ces croyances et s'efforce de les mettre en pratique chaque jour. Rejoignez-nous pour grandir, apprendre et innover ensemble.
                        </p>

                        <button
                          onClick={() => setIsOpen(false)}
                          className="text-yellow px-8 py-4 font-bold text-xl md:text-2xl rounded-xl btn lg:text-3xl"
                        >
                          Fermer
                        </button>
                      </Dialog.Panel>
                    </div>
                  </div>
                </Dialog>
            </div>
        </div>
    </div>
  )
}
