import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-20 flex flex-col items-center justify-center">
      <Head>
        <title>AS | Golf des Sables d&#39;Olonnes - Contact</title>
        <meta
          name="description"
          content="Blog de l&#39;Association Sportive du golf des Sables d&#39;Olonne - Contact"
        />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mt-12 mb-20 text-center">
          Informations
        </h2>

        <div className="mb-12">
          <h5 className="text-lg font-semibold text-gray-700">
            A Propos de l'association
          </h5>
          <p className=" my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex
            quam excepturi ipsum modi quidem quis, voluptatibus reiciendis sed
            eaque suscipit iure aliquam quos et? Similique error doloremque
            dicta eius!
          </p>
        </div>

        <div className="mb-24">
          <h5 className="text-lg font-semibold text-gray-700">Liens utiles</h5>
          <ul className="list-none my-4 flex flex-col gap-2">
            <li>
              Site internet du golf des Sables d'Olonne:{" "}
              <a
                target="_blank"
                rel="noreferrer "
                href="https://www.golfdessablesdolonne.com/"
                className="text-green-700 font-semibold"
              >
                lien
              </a>
            </li>
            <li>
              Inscription aux compétitions:{" "}
              <a
                target="_blank"
                rel="noreferrer "
                href="https://www.isp-golf.fr/"
                className="text-green-700 font-semibold"
              >
                ISP
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
