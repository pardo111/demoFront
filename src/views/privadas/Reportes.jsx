export default function Reportes(){
    return (<>
 
  <div class="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
    <h2 class="text-xl font-semibold text-gray-800 mb-6">Selecciona el tipo de reporte</h2>
    
    <div class="flex justify-center gap-6">
       <div class="bg-gray-700 rounded-xl p-4 w-40 text-white flex flex-col items-center">
        <p class="mb-4">Reporte de citas</p>
        <button class="bg-green-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-500">
          Generar
        </button>
      </div>

       <div class="relative group bg-gray-700 rounded-xl p-4 w-40 text-white flex flex-col items-center">
         <div class="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-2 rounded-md bg-black text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity">
          Agregar un comentario
        </div>
        <p class="mb-4 text-center">Reporte de<br/>Empleados</p>
        <button class="bg-green-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-500">
          Generar
        </button>
      </div>
    </div>
  </div>
 
    </>);
};