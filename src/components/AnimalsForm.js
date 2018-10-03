import React from "react";
import T from "prop-types";

const AnimalsForm = ({ onSubmit, isSending }) => {
  const shibesCountRef = React.createRef();
  const shibesTypeRef = React.createRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(shibesTypeRef.current.value, shibesCountRef.current.value);
  };

  const animalOptions = [
    { value: "shibes", label: "psy" },
    { value: "cats", label: "koty" },
    { value: "birds", label: "ptaki" },
    { value: "random", label: "losowe" }
  ].map(animal => <option value={animal.value} key={animal.value}>{animal.label}</option>);

  return (
    <form className="AnimalsForm" onSubmit={onFormSubmit}>
      <label>Liczba zdjęć: <input ref={shibesCountRef} type="number" min="1" max="10" defaultValue="5" /></label>
      <select ref={shibesTypeRef}>{animalOptions}</select>
      <input type="submit" value="Szukaj" disabled={isSending} />
    </form>
  );
};

AnimalsForm.propTypes = {
  onSubmit: T.func.isRequired,
  isSending: T.bool.isRequired
}

export default AnimalsForm;