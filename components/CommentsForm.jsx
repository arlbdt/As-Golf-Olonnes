import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("nom");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = async () => {
    setError(false);

    const { value: commentaire } = commentEl.current;
    const { value: nom } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!commentaire || !nom || !email) {
      setError(true);
      return;
    }

    if (storeData) {
      window.localStorage.setItem("nom", nom);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("nom", nom);
      window.localStorage.removeItem("email", email);
    }

    const commentObj = {
      nom,
      email,
      commentaire,
      slug,
    };

    submitComment(commentObj).then(res => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-gray-700 text-xl mb-8 font-semibold border-b pb-4">
        Laisser un commentaire
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Commentaire"
          name="commentaire"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Nom"
          name="nom"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 text-sm cursor-pointer"
          >
            Sauvegarder mon nom et email pour mon prochain commentaire
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">
          Tous les champs sont obligatoires
        </p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-cyan-600 inline-block bg-green-700 text-base rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Publier
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-700">
            Commentaire en attente de validation par l'admin
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
