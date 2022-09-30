import React from "react";

const Contact = () => {
  return (
    <div className="text-gray-700 w-full h-auto shadow-xl shadow-gray-400 border rounded-xl p-2 sm:p-8">
      <div>
        <form
          target="_blank"
          action="https://formsubmit.co/contact@asgolf-lso.fr"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-2">Nom</label>
              <input
                className="border-2 rounded-lg p-2 flex border-gray-300"
                type="text"
                name="nom"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm mb-2">Email</label>
              <input
                className="border-2 rounded-lg p-2 flex border-gray-300"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm mb-2">Sujet</label>
            <input
              className="border-2 rounded-lg p-2 flex border-gray-300"
              type="text"
              name="sujet"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm mb-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-2 border-gray-300"
              rows="8"
              name="message"
              required
            ></textarea>
          </div>
          <input
            className="cursor-pointer w-full p-4 mt-4 shadow-xl rounded-xl uppercase bg-white hover:opacity-90 transition ease-in duration-200"
            type="submit"
            value="envoyer"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
