import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }

    render() {
        
        return (
            <div>
                <h1>About</h1>
                <h2>This is about component</h2>
                <UserClass name="Shreyansh (Class)"/>
            </div>
        )
    }
}

export default About;