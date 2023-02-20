const App = () => {
    return (
        <div>
            <Tweet username="maxuimus" name="Max" message="Hi everyone" />
            <Tweet username="fbhfgoi" name="Mike" message="Hi everyone!!!!!" />
            <Tweet username="fvgeajjvrpj" name="Ben" message="jfviafviohfsiovh" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))