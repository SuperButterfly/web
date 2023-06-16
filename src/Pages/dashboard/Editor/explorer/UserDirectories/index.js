import { useSelector } from 'react-redux';

const UserDirectory = () => {
  const { projectSelected } = useSelector(state => state.project);
  console.log("soy el projectedSelected", projectSelected);
  
  return (
    <div className='project-container'>
      <span className='project-title'>{projectSelected.name}</span>
        {/*
          projectSelected.pages.length ? 
            {
              projectSelected.pages?.map((page, idx) => {
                <span>{page.name}</span>
              })
            }
          :'Agrega una página'
        */}
    </div>
    
    )
}

export default UserDirectory;