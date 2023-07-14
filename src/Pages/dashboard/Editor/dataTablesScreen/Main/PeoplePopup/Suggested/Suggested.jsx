export default function Suggested({cell, datatable, allPeople, handleSelectPeople}) {
    const row = JSON.parse(JSON.stringify(cell[0]));
    const column = JSON.parse(JSON.stringify(cell[1]));
    const database = JSON.parse(JSON.stringify(datatable));
    const selectedPeopleArray = database[row]?.[column]?.value ?? []
    
    return(
        <div>
            {allPeople.map(person => {
                if (selectedPeopleArray.every(mail => mail !== person.mail))
                return(
                    <button 
                        key={person.mail}
                        name={person.mail}
                        onClick={(event) => handleSelectPeople(row, column, event.target.name)}
                    >
                        {person.mail}
                    </button>
                )
                else return null
            })}
        </div>
    )
}