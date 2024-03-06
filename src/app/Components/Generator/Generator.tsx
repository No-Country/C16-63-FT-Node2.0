

"use client";

import React, { useState } from 'react';
import jsonData  from '../../../../public/JsonData.json';
import Image from "next/image";
import gJeneraSON from "../../../../assets/gJeneraSon.png";

// Definir una interfaz para el tipo de datos en JsonData.json
interface JsonDataType {
  [key: string]: string[];
}

interface FilteredDataType {
  [key: string]: string[];
}

const Generator = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<FilteredDataType[]>([]);
  const typedJsonData : JsonDataType = jsonData
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const filteredResults: FilteredDataType[] = selectedCategories.map((category: string) => ({
      [category]: typedJsonData[category]
    }));
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