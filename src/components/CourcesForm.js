import React, { useState } from "react";
import useCourceStore from "../store/CourceStore";

const CourcesForm = () => {
  const addCource = useCourceStore((state) => state.addCource);
  const [courceTitle, setCourceTitle] = useState("");

  const handleCourceSubmit = () => {
    if (!courceTitle) return alert("Add a Cources");
    addCource({
      id: Math.ceil(Math.random() * 10000),
      title: courceTitle,
    });
    setCourceTitle("");
  };

  return (
    <div className="form-container">
      <input
        className="form-input"
        value={courceTitle}
        onChange={(e) => {
          setCourceTitle(e.target.value);
        }}
      />
      <button className="form-submit-btn" onClick={handleCourceSubmit}>
        add Cources
      </button>
    </div>
  );
};

export default CourcesForm;
