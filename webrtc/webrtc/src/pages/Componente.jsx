const Componente = () => {
  const data = [
    {
      nombre: "Gatito 1",
      imagen: "https://placekitten.com/200/200",
    },
    {
      nombre: "Gatito 2",
      imagen: "https://placekitten.com/200/200",
    },
    {
      nombre: "Gatito 3",
      imagen: "https://placekitten.com/200/200",
    },
  ];

  return (
    <div>
      <h1>Traductor</h1>
      {data.map((item, index) => (
        <article key={index}>
          <img src={item.imagen} alt={item.nombre} />
          <p>{item.nombre}</p>
        </article>
      ))}
      <label htmlFor="comentarios">Comentarios:</label>
      <input type="text" id="comentarios" name="comentarios" className="text-black" />
    </div>
  );
};

export default Componente;
