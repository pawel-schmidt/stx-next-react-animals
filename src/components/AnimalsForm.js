import React from "react";
import T from "prop-types";
import "./AnimalsForm.css";

const AnimalsForm = ({ onSubmit, isLoading }) => {
  const animalsCountRef = React.createRef();
  const animalsTypeRef = React.createRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(animalsTypeRef.current.value, animalsCountRef.current.value);
  };

  const animalOptions = [
    { value: "shibes", label: "psy" },
    { value: "cats", label: "koty" },
    { value: "birds", label: "ptaki" },
    { value: "random", label: "losowe" }
  ].map(animal => <option value={animal.value} key={animal.value}>{animal.label}</option>);

  return (
    <div className="AnimalsForm">
      <form onSubmit={onFormSubmit}>
        <label><span>Liczba zdjęć:</span><input ref={animalsCountRef} type="number" min="1" max="10" defaultValue="5" /></label>
        <select ref={animalsTypeRef}>{animalOptions}</select>
        <input type="submit" value={isLoading ? "Ładowanie danych" : "Szukaj"} disabled={isLoading} />
      </form>
    </div>
  );
};

AnimalsForm.propTypes = {
  onSubmit: T.func.isRequired,
  isLoading: T.bool.isRequired
};

export default AnimalsForm;