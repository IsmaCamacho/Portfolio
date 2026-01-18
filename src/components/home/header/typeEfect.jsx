import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: [
            "Desarrollo Multiplataforma", 
            "Aplicaciones Móviles", 
            "Sistemas de Gestión", 
            "Soluciones Fullstack"
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
