import React from "react";
import TypeIt from "typeit-react";
import { HeroButton } from "./Button";
import { Link } from "react-router-dom";

const Heroe = () => {
  return (
    <section className="bg-hero relative min-h-screen w-full bg-center bg-cover bg-no-repeat lg:bg-center text-white">
      <div className="container mx-auto text-center">
        <h1 className="typeit">
          where you{" "}
          <span className="text-primary">
            <TypeIt
              options={{ speed: 250, waitUntilVisible: true, loop: true }}
              getBeforeInit={(instance) => {
                instance.type("taste the difference").pause(500).delete(9);
                return instance;
              }}
            />
          </span>
        </h1>
        <Link to="/order">
          <HeroButton title="ORDER NOW" />
        </Link>
      </div>
    </section>
  );
};

export default Heroe;
