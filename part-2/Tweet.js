const Tweet = ({ name, username, message, date = (new Date()).toDateString()}) => {
    return (
        <div>
            <h2>{username}</h2>
            <p>{name}</p>
            <p>{message}</p>
            <p>{date}</p>
        </div>
    )
}