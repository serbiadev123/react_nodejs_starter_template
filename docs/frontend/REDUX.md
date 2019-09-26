# REDUX
## File structure
Redux data is stored here: *frontend\src\js\store*.

It contains 3 different folders:
- actions
- actionTypes
- reducers

In order to use the actual state and send API requests we will have to include the action and state to the component.

### Actions
Actions are called in components, and they are in-charged of sending the API request to the server. We can define different Actions in this folder depending on the type of data. Usually seperated datasets should use different actions (for instance admin data, user data).
We define the **URL** here and can use additional services like **auth** for user auntentication.
Action should not do anything else then call the API middleware with an appropriate url.
Example:
``` javascript
import {
    testAdminAction,
} from "../actionTypes/AdminActionTypes";
import * as apiService from "../../services/apiService";
import { auth } from "../../services/authService";

export const testAdmin = () => {
    return apiService.get(`/todos/1`, auth(), testAdminAction);
};
```
### Action Types
Same as actions action types should be seperated in different files just as the actions are.
Action types consist of:
-  type - used to indentify the action
-  data - variables representing the data returned from the server. If we require specific values inside the response we can filter it here. Example:
``` javascript
import * as actionType from "../../enums/ActionTypeConstants";

export const testAdminAction = data => ({
    type: actionType.TEST,
    data: data.subElement.someIndex
});
```
### Reducers
Same as actions action types should be seperated in different files just as the actions are.
Reducer is used to assign value defined in the **action type** to the state.
Based on the action type it knows how to process the data, and which state value to change.
Always make sure to intialize a value in the state, and don't forget to copy the existing values of the state `...state`
Example:
``` javascript
import * as actionType from "../../enums/ActionTypeConstants";

const initState = {
    testData: 'test',
};

const adminReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.TEST: {
            return {
                ...state,
                testData: action.data
            };
        }
        default:
            return state;
    }
};

export default adminReducer;
```

### How to use redux in the component
We must include specific actions we want to use in the component with `mapDispatchToProps` and link the specific state variables to the props with `mapDispatchToProps`.
Action is a asychronous call. After the server responds the state will automatically be updated.

Example:
``` javascript
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { testAdmin } from "../../js/store/actions/AdminActions";

class Home extends Component {
    constructor(props) {
        super(props);
        setTimeout(function(){
            props.testAction();
        }, 2000);
        
    }

    render() {
        return (
            <div>
            <h2>Home</h2>
            <p>Action Response: {JSON.stringify(this.props.testData)}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        testData: state.adminReducer.testData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        testAction: () => dispatch(testAdmin())
    }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)
);
```