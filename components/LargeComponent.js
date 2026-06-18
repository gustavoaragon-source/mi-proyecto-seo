export default function LargeComponent() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Componente cargado dinámicamente</h2>

      <p>
        Este componente utiliza lazy loading con next/dynamic.
      </p>
    </div>
  );
}