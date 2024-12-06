import React from "react";
import { useParams, Link } from "react-router-dom";

const hobbyDetails = {
  chess: "I like playing chess because it improves my strategy skills.",
  books: "I enjoy reading books as it expands my imagination.",
  soccer: "Soccer is my favorite sport to play with friends.",
  watching: "I love watching movies to relax.",
};

const HobbyDetail = () => {
  const { id } = useParams();
  const detail = hobbyDetails[id] || "No details available.";

  return (
    <div className="container">
      <Link className="back-link" to="/hobby">
        ← Back
      </Link>
      <h1>{id.replace(/^\w/, (c) => c.toUpperCase())}</h1>
      <p>{detail}</p>
    </div>
  );
};

export default HobbyDetail;
