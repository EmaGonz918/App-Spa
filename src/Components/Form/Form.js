import "./Form.css";

function Form(props) {
  function saveReservation() {
    const fecha = document.querySelector("#fecha").value;
    const lugar = document.querySelector("#lugar").value;
    props.parentCallback(
        { Fecha: fecha, Lugar: lugar }
    );
  }

  return (
    <div className="container">
      <div className="card mb-3">
        <label htmlFor="fecha" className="form-label">
          Fecha de Reserva
        </label>
        <input type="date" className="form-control" id="fecha" />
      </div>
      <div className="mb-3">
        <label htmlFor="lugar" className="form-label">
          Lugar de Reserva
        </label>
        <select id="lugar" className="form-select">
          <option className="select-opt" value="Hotel">Hotel</option>
          <option className="select-opt" value="Spa">Spa</option>
          <option className="select-opt" value="Restaurante">Restaurante</option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn-1" onClick={() => saveReservation()}>Reservar</button>
      </div>
    </div>
  );
}

export default Form;
