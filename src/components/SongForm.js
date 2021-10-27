import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      setIsDisabled(true);
      // Retornamos para que no siga leyendo el HandleSubmit
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(false);
    console.log("Haz enviado el formulario");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          value={form.song}
          onChange={handleChange}
        />
        <input type="submit" value="Enviar" />
        <input
          type="button"
          onClick={handleSaveSong}
          value="Agregar Canción"
          disabled={isDisabled && "disabled"}
        />
      </form>
    </div>
  );
};

export default SongForm;
