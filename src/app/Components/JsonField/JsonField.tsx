const JSONViewer = ({ jsonData }: any) => {
  return (
    <div style={styles.container}>
      <pre style={styles.code}>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#333", // Cambiado a un gris oscuro
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
    color: "#fff", // Cambiado el color del texto a blanco
  },
};

export default JSONViewer;
