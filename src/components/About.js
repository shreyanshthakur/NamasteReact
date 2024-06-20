import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
            <p className="text-gray-600 mt-4">
              Learn more about our team and what we do.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Current User
            </h2>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <div className="flex items-center justify-center bg-blue-50 p-4 rounded-lg">
                  <h1 className="text-xl font-bold text-blue-600">
                    {loggedInUser}
                  </h1>
                </div>
              )}
            </UserContext.Consumer>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About the Component
            </h2>
            <p className="text-gray-700">
              This component demonstrates the use of context and class-based
              components in React.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <UserClass name="Shreyansh (Class)" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
