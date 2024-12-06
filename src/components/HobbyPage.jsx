import React from "react";
import { Link } from "react-router-dom";

const hobbies = [
  { id: "chess", name: "Playing Chess" },
  { id: "books", name: "Reading Books" },
  { id: "soccer", name: "Playing Soccer" },
  { id: "watching", name: "Watching Movies" },
];

const HobbyPage = () => {
  return (
    <div className="container">
      <h1>Hobby Page</h1>
      <div className="hobby">
        {hobbies.map((hobby) => (
          <div className="hobby-item" key={hobby.id}>
            <h2>{hobby.name}</h2>
            <Link to={`/hobby/${hobby.id}`}>Show More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbyPage;
