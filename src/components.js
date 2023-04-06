var root = ReactDOM.createRoot(document.getElementById("root"));

// Function Component

/* function Header(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>);
} */

// Class Component
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <Header title="Todo App" description="Pending Tasks" />
                <ToDo />
            </div>
        );
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