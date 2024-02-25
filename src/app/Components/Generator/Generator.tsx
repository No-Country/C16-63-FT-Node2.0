"use client";

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

      <div className="flex justify-center sm:flex-col sm:items-center">
        <div className="mb-[0px] ml-[9%] sm:mb-[15px] ">      
          <div className=" h-[32px] w-[142px] mt-[10px] ml-[25%] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f]">  
            <button className=" h-[28px] w-[138px] m-[2px] bg-gray-900  " onClick={handleAddCampo}>
              Add
            </button>
          </div>
          <div className="flex justify-center ">
            <div className="flex  max-h-[273px] overflow-scroll no-scrollbar mr-[15px]	">
              <div>
                {campos.map((campo, index) => (
                  <div className="flex items-center m-[4px]" key={index}>
                    {campo}
                    <div className="h-[32px] w-[84px] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f]">
                      <button onClick={() => handleRemoveCampo(index)} className=" h-[28px] w-[80px] ml-[2px] bg-gray-900  ">Remove</button>
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
        <button className=" h-[28px] w-[138px] m-[2px] justify-center bg-gray-900 flex">
          <Image src={gJeneraSON} className="w-[30px]  bg-gray-900" alt="gJeneraSON" />
          enerASON
        </button>
      </div>
    </div>
  );
};
