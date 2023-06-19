import { useSelector } from 'react-redux';

const UserDirectory = () => {
  const { projectSelected } = useSelector(state => state.project);
  console.log(projectSelected);

  return (
    <div className='project-container'>
      <span className='project-title'>{projectSelected.name}</span>
        {
  projectSelected ?
    projectSelected.pages?.map((page, idx) => (
      <div key={idx}><span>{page.name}</span></div>
    ))
  : 'Agrega una página'
}

    </div>

  )
}

export default UserDirectory;
