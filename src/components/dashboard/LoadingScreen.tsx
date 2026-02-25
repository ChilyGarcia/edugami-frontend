import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed z-50 bg-tertiary text-light w-full h-full top-0 left-0 grid place-content-center">
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingScreen;
