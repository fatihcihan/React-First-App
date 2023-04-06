var root = ReactDOM.createRoot(document.getElementById("root"));

// function Header(props) {
//     return (<h1>Todo App</h1>);
// }

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ToDo />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (<h1> Todo App</h1 >)
    }
}

function ToDo(props) {
    return (
        <ul>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
        </ul>
    );
}

var template =



    root.render(<TodoApp />);