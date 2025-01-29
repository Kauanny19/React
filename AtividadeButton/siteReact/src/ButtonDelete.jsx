import React from "react";

export default function ButtonDelete() {
  function click() {
    alert("Você deletou um item");
  }
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        background: "red",
        color: "white"
      }}
      onClick={() => click()}
    >
      Deletar itens
    </button>
  );
}
