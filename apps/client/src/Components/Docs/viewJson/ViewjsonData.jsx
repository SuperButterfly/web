import { useEffect, useState } from 'react';
import { listText } from '../../../actions/listText';

const ViewjsonData = ({ datas, properties }) => {
  const [view, setView] = useState([]);
  useEffect(() => {
    const datasjson = listText(datas.data); // <-- Accedemos a datas.data para obtener el array de datos
    const json = {
      title: datas.data[0]?.type === 'headings' ? datas.data[0] : '',
      sync: properties.sync,
      path: properties.path,
      menu: properties.menu,
      data: datasjson,
      code: []
    };
    setView([json]);
  }, [datas, properties]);

  return <pre>{view.length ? JSON.stringify(view, null, 2) : null}</pre>;
};

export default ViewjsonData;
