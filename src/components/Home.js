import React from "react";

export const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Learn 4 ALL </h1>
      <p className="lead">Bienvenue sur La plateform d'entraide</p>
      <hr className="my-4" />
      <p>
        Trouvez un interlocuteurs qui vous viendra en aide pour vos futurs
        examens
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          En savoir plus
        </a>
      </p>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item"></li>
      </ul>
    </div>
  );
};
