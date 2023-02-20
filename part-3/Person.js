const Person = (props) => {
    const voter = props.age >= 18 
    const name = props.name.slice(0, 6)
    return (
        <div>
            <h2>{name}</h2>
            <p>Learn some information about this person</p>
            <p>{voter ? "Please go vote" : "Must be 18 to vote"}</p>
            <ul>{ props.hobbies ? props.hobbies.map(item => <li>{item}</li>) : 'No hobbies'}
            </ul>
        </div>
        
    )
}