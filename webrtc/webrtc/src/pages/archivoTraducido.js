import { TextInput } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
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
    <View>
      <Text>Traductor</Text>
      {data.map((item, index) => (
        <article key={index}>
          <Image src={item.imagen} alt={item.nombre} />
          <Text>{item.nombre}</Text>
        </article>
      ))}
      <Text htmlFor="comentarios">Comentarios:</Text>
      <TextInput type="text" id="comentarios" name="comentarios" className="text-black" />
    </View>
  );
};

export default Componente;
