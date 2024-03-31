import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                bio: "Default",
            },
        };
    }
    
    async componentDidMount() {
        // API call
        const data = await fetch("https://api.github.com/users/shreyanshthakur");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        
    }

    render() {

        const {name, bio, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Bio: {bio}</h3>
                <h4>contact: @shreyanshthakur</h4>
            </div>
        );
    }
}

export default UserClass;