const CampoJSON = ({ onChange, onRemove }: any) => {
  return (
    <div className="Fields">
      <div className="FieldName"></div>
      <div className="FieldType">
        <input type="text" onChange={onChange} />
        <select>
          <option value="Undefined">Undefined</option>
          <option value="Boolean">Boolean</option>
          <option value="Number">Number</option>
          <option value="String">String</option>
          <option value="Null">Null</option>
          <option value="Object">Object</option>
        </select>
      </div>
    </div>
  );
};

export default CampoJSON;
