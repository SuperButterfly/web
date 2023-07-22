import styles from './Suggested.module.css'

export default function Suggested({
  sheet,
  datatable,
  allPeople,
  handleSelectPeople,
  input
}) {
  const row = JSON.parse(JSON.stringify(sheet?.selectedCell[0]))
  const column = JSON.parse(JSON.stringify(sheet?.selectedCell[1]))
  const database = JSON.parse(JSON.stringify(datatable))
  const selectedPeopleArray = Array.isArray(database[row]?.[column]?.value)
    ? database[row]?.[column]?.value
    : []

  return (
    <div className={styles.unselectedContainer}>
      {allPeople.map((person) => {
        if (input === '') {
          if (selectedPeopleArray.every((mail) => mail !== person.mail))
            return (
              <button
                key={person.mail}
                className={styles.unselectedLabel}
                name={person.mail}
                onClick={(event) => handleSelectPeople(row, column, event)}
              >
                {person.mail}
              </button>
            )
          else return null
        } else if (
          person.mail.includes(input.trimStart()) &&
          selectedPeopleArray.every((mail) => mail !== person.mail)
        ) {
          return (
            <button
              key={person.mail}
              className={styles.unselectedLabel}
              name={person.mail}
              onClick={(event) => handleSelectPeople(row, column, event)}
            >
              {person.mail}
            </button>
          )
        } else return null
      })}
    </div>
  )
}
