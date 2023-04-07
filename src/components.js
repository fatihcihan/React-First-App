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
class TodoApp extends React.Component {
    render() {
        const data = {
            title: "Todo Application",
            description: "Pending Tasks",
            items: ['Task 1', 'Task 2', 'Task 3']
        }
        return (
            <div>
                <Header title={data.title} description={data.description} />
                <TodoList items={data.items} />
                <NewItem />
            </div>
        );
    }
}

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


/* function TodoList(props) {
    return (
        <ul>
            {
                props.items.map((item, index) => <TodoItem key={index} item={item} />)
            }
        </ul>
    );
} */

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
    }
    clearItems() {
        console.log("clear items");
        console.log(this.props.items);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item, index) => <TodoItem key={index} item={item} />)
                    }
                </ul>
                <button onClick={this.clearItems}>Clear</button>
            </div>
        );
    }
}

/* function TodoItem(props) {
    return <li> {props.item} </li>
} */

class NewItem extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        if (item) {
            e.target.elements.txtItem.value = "";
            console.log(item);
        }
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Add</button>
            </form>
        )
    }
}

class TodoItem extends React.Component {
    render() {
        return <li> {this.props.item} </li>
    }
}


root.render(<TodoApp />);