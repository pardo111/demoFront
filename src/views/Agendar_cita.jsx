import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Agendar_citas() {
    const [fechaHora, setFechaHora] = useState(null);

  return (
    <div className="flex flex-col gap-4 items-start">
      <h2 className="text-xl font-bold">Agendar cita</h2>
      <label>Selecciona fecha y hora:</label>
      <DatePicker
        selected={fechaHora}
        onChange={(date) => setFechaHora(date)}
        showTimeSelect
        dateFormat="Pp"
        timeFormat="HH:mm"
        timeIntervals={30} // intervalos de media hora
        placeholderText="Haz clic para elegir"
        className="border px-2 py-1 rounded"
      />
      {fechaHora && (
        <p className="text-green-600">
          Has seleccionado: {fechaHora.toLocaleString()}
        </p>
      )}
    </div>
  );

};