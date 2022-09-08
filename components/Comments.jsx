import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then(result => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-gray-700 text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Commentaire{comments.length > 1 ? "s" : ""}
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="text-gray-700 font-semibold capitalize">
                  {comment.nom}
                </span>{" "}
                le {moment(comment.createdAt).format("DD MMM YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.commentaire)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
