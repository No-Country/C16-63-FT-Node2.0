/* "use client";
import { useState } from "react";
import CampoJSON from "../CampoJson/CampoJson";
import JSONViewer from "../JsonField/JsonField";
import Image from "next/image";
import gJeneraSON from "../../../../assets/gJeneraSon.png";

export const Generator = () => {
  const [campos, setCampos] = useState([
    <CampoJSON key={0} onChange={() => {}} onRemove={() => {}} />,
  ]);

  const handleAddCampo = () => {
    if (campos.length >= 5) return; // Limitar a un máximo de 5 campos
    const nuevoCampo = (
      <CampoJSON
        key={campos.length}
        onChange={() => {}}
        onRemove={() => handleRemoveCampo(campos.length)}
      />
    );
    setCampos([...campos, nuevoCampo]);
  };

  const handleRemoveCampo = (index: number) => {
    if (campos.length === 1) return; // Evitar eliminar el último campo
    const nuevosCampos = campos.filter((campo, i) => i !== index);
    setCampos(nuevosCampos);
  };

  const resetCampos = () => {
    setCampos([
      <CampoJSON key={0} onChange={() => {}} onRemove={() => {}} />
    ]);
  };

  // Objeto JSON que deseas mostrar
  const jsonData = {
    texto: "Texto de ejemplo",
    numero: 42,
    booleano: true,
    arreglo: [1, 2, 3],
    objetoInterno: {
      propiedad: "valor",
    },
  };

  return (
    <div>
      <div className="flex justify-center xl:flex-row sm:flex-col sm:items-center">
        <div className="mb-[0px] ml-[9%] sm:mb-[15px] ">
          <div className=" h-[32px] w-[142px] mt-[10px] ml-[25%] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f]">
            <button
              className=" h-[28px] w-[138px] m-[2px] bg-gray-900  "
              onClick={handleAddCampo}
            >
              Add
            </button>
          </div>
          <div className="flex justify-center ">
            <div className="flex  max-h-[273px] overflow-scroll no-scrollbar mr-[15px] ">
              <div>
                {campos.map((campo, index) => (
                  <div className="flex items-center m-[4px]" key={index}>
                    {campo}
                    <div className="h-[32px] w-[84px] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f]">
                      <button
                        onClick={() => handleRemoveCampo(index)}
                        className=" h-[28px] w-[80px] ml-[2px] bg-gray-900  "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <JSONViewer jsonData={jsonData} />
      </div>
      <div className=" h-[32px] w-[142px] mt-[25px] ml-[45%] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f] sm:ml-[38%]">
        <button
          className=" h-[28px] w-[138px] m-[2px] justify-center bg-gray-900 flex"
          onClick={resetCampos}
        >
          <Image
            src={gJeneraSON || ""}
            className="w-[30px]  bg-gray-900"
            alt="gJeneraSON"
          />
          enerASON
        </button>
      </div>
    </div>
  );
};

export default Generator;
 */

"use client";

import React, { useState } from 'react';
import jsonData from '../../../../public/JsonData.json';
import Image from "next/image";
import gJeneraSON from "../../../../assets/gJeneraSon.png";


const Generator = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories((prevCategories) => [...prevCategories, value]);
    } else {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((category) => category !== value)
      );
    }
  };

  const handleSearch = () => {
    const filteredResults = Object.keys(jsonData)
      .filter((category) => selectedCategories.includes(category))
      .map((category) => ({ [category]: jsonData[category] }));
    setFilteredData(filteredResults);
  };

  return (
    <div className='flex justify-center'>
      <div>      
        <h2>Selecciona las categorías:</h2>
        <div>
          <input
            type="checkbox"
            id="nombres"
            value="Nombres"
            onChange={handleCategoryChange}
          />
          <label htmlFor="nombres">Nombres</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="apellidos"
            value="Apellidos"
            onChange={handleCategoryChange}
          />
          <label htmlFor="apellidos">Apellidos</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="direcciones"
            value="Direcciones"
            onChange={handleCategoryChange}
          />
          <label htmlFor="direcciones">Direcciones</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="ciudades"
            value="Ciudades"
            onChange={handleCategoryChange}
          />
          <label htmlFor="ciudades">Ciudades</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="estados_provincias"
            value="Estados_Provincias"
            onChange={handleCategoryChange}
          />
          <label htmlFor="estados_provincias">Estados/Provincias</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="codigos_postales"
            value="Codigos_Postales"
            onChange={handleCategoryChange}
          />
          <label htmlFor="codigos_postales">Códigos Postales</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="paises"
            value="Paises"
            onChange={handleCategoryChange}
          />
          <label htmlFor="paises">Países</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="telefonos"
            value="Telefonos"
            onChange={handleCategoryChange}
          />
          <label htmlFor="telefonos">Teléfonos</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="correos_electronicos"
            value="Correos_Electronicos"
            onChange={handleCategoryChange}
          />
          <label htmlFor="correos_electronicos">Correos Electrónicos</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="fechas_nacimiento"
            value="Fechas_Nacimiento"
            onChange={handleCategoryChange}
          />
          <label htmlFor="fechas_nacimiento">Fechas de Nacimiento</label>
        </div>
        <div className=" h-[32px] w-[142px] mt-[25px] ml-[45%] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f] sm:ml-[38%]">
          <button
            className=" h-[28px] w-[138px] m-[2px] justify-center bg-gray-900 flex"
            onClick={handleSearch}>
            <Image
              src={gJeneraSON || ""}
              className="w-[30px]  bg-gray-900"
              alt="gJeneraSON"/>
                enerASON
          </button>
        </div>
      </div>
      <div className=' bg-[#333] p-[10px] rounded-[5px] overflow-auto max-h-[315px] h-[315px] w-[450px] ml-[105px]'>
        {filteredData.map((result, index) => (
          <div key={index}>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generator;


/* backgroundColor: "#333", // Cambiado a un gris oscuro
    padding: "10px",
    borderRadius: "5px",
    overflow: "auto",
    maxHeight: "315px",
    height: "315px",
    width: "550px",
    marginLeft:"15px",
  },
  code: {
    fontFamily: "monospace",
    color: "#fff", // Camb */