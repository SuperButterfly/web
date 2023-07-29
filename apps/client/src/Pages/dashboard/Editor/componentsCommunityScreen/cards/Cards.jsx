import './cards.css'
import data from '../mockData.json'
import Card from '../card/Card'

const Cards = () => {
  return (
    // <div className="cardsContainer">
    <>
      {data.map(
        ({
          userName,
          imgProfile,
          urlImage,
          id,
          projectName,
          categories,
          description
        }) => (
          <Card
            userName={userName}
            imgProfile={imgProfile}
            urlImage={urlImage}
            id={id}
            projectName={projectName}
            categories={categories}
            description={description}
          />
        )
      )}
    </>
    // </div>
  )
}

export default Cards
