import React from "react";

export default function ButtonCreate() {
  function click() {
    alert("Você criou um novo item");
  }
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        background: "green",
        color: "white"
      }}
      onClick={() => click()}
    >
      Criar itens
    </button>
  );
}
