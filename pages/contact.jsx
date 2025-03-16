import React from "react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-20 flex flex-col items-center justify-center">
      <SEO
        title="Contact"
        description="Contactez l'Association Sportive du golf des Sables d'Olonne - Informations sur l'association, membres du bureau et formulaire de contact"
        url="/contact"
      />

      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mt-12 mb-20 text-center">
          Informations
        </h2>

        <div className="mb-12">
          <h5 className="text-lg font-semibold text-gray-700">
            A Propos de l'association
          </h5>
          <p className=" my-4">
            Adhérer à notre Association Sportive c'est participer à la vie d'un
            véritable Club de Golf. Présente depuis la création du golf des
            Sables d'Olonne en 1992, elle assure au mieux l'information et la
            convivialité entre les adhérents.
          </p>
        </div>

        <div className="mb-12">
          <h5 className="text-lg font-semibold text-gray-700">
            Membres du bureau
          </h5>
          <ul className=" my-4 list-disc list-inside">
            <li>Président : Yann Raison</li>
            <li>Vice-Président : Habib Rihani</li>
            <li>Trésorier : Alain Cailleau</li>
            <li>Trésorier Adjoint: Rémi Bessé</li>
            <li>Secrétaire : Sébastien Baudu</li>
          </ul>
        </div>

        <div className="mb-12">
          <h5 className="text-lg font-semibold text-gray-700">Rôle de l'AS</h5>
          <ul className=" my-4 list-disc list-inside">
            <li>
              Organiser des compétitions et des animations avec la direction du
              golf
            </li>
            <li>Organiser les équipes de compétitions (Adultes et jeunes)</li>
            <li>Participer à la formation des jeunes (Juniors Golf Club)</li>
            <li>
              Administrer le bon déroulement des compétitions et des résultats
              (horaires de départs, enregistrement des scores)
            </li>
            <li>Organiser les remises de prix</li>
            <li>
              Informer les membres de l'AS de l'actualité du Club (panneaux
              extérieurs, club house et site internet de l'AS)
            </li>
            <li>Echanger avec la fédération (FFG)</li>
          </ul>
        </div>

        <div className="mb-24">
          <h5 className="text-lg font-semibold text-gray-700">Liens utiles</h5>
          <ul className="list-none my-4 flex flex-col gap-2">
            <li>Adresse email de l'AS : asgolfolonne85@gmail.com</li>
            <li>
              Site internet du golf des Sables d'Olonne:{" "}
              <a
                target="_blank"
                rel="noreferrer "
                href="https://www.golfdessablesdolonne.com/"
                className="text-green-700 font-semibold underline"
              >
                LIEN
              </a>
            </li>
            <li>
              S'inscrire aux compétitions via ISP:{" "}
              <a
                target="_blank"
                rel="noreferrer "
                href="https://www.isp-golf.fr/"
                className="text-green-700 font-semibold underline"
              >
                LIEN
              </a>
            </li>
            <li>
              Horaires de départ:{" "}
              <a
                target="_blank"
                rel="noreferrer "
                href="https://web.ffgolf.org/ffgolf/tee/tee.php?gk=7f934d874e35216521ab663211c6d79e"
                className="text-green-700 font-semibold underline"
              >
                LIEN
              </a>
            </li>
            <li>
              Résultats des compétitions:{" "}
              <a
                target="_blank"
                rel="noreferrer "
                href="https://pages.ffgolf.org/resultats/liste-competitions/7f934d874e35216521ab663211c6d79e"
                className="text-green-700 font-semibold underline"
              >
                LIEN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1024px] w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-12 text-center">
          Formulaire de Contact
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
