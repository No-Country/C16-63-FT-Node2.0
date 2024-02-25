const CampoJSON = ({ onChange, onRemove }: any) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="FieldName"></div>
      <div className="flex m-[6px] ">
        <div className="h-[32px] w-[204px] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f] mr-[10px]">
          <input type="text" onChange={onChange} className="text-white h-[28px] w-[200px] ml-[2px] bg-gray-900  	"/>
        </div>  
        <div className="h-[32px] w-[104px] flex items-center bg-gradient-to-b from-[#091474]  to-[#7f098f]">          
          <select className="text-white h-[28px] w-[100px] ml-[2px] bg-gray-900 ">
            <option value="Undefined">Undefined</option>
            <option value="Boolean">Boolean</option>
            <option value="Number">Number</option>
            <option value="String">String</option>
            <option value="Array">Null</option>
            <option value="Object">Object</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CampoJSON;
