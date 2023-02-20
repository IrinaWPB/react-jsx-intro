const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Max" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))