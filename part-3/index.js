const App = () => {
    return (
        <div>
           <Person name="Longnameperson" age={8} hobbies={['dancing', 'reading', 'games']}/>
           <Person name="Morgan" age={18} hobbies={['dancing', 'swimming']}/>
           <Person name="Mike" age={28}/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))