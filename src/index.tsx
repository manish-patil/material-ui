import * as React from "react";
import * as ReactDOM from "react-dom";

import NavBar from "./components/NavBar";
import Books from "./components/Books";

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return (
            <div>
                <NavBar/>
                <Books/>
            </div>
        );
    };
}

ReactDOM.render(<Main />, document.getElementById("main"));