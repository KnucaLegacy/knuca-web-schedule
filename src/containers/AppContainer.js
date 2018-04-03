import React, { Component } from 'react';
import App from '../components/App';
import { Container } from 'flux/utils';
import GroupListStore from '../stores/GroupListStore';
import { groupsFetchData, searchGroups } from '../actions/GroupActions';


class AppContainer extends Component {
    static getStores() {
        return [ GroupListStore ];
    }

    static calculateState() {
        const groupsState = GroupListStore.getState();
    
        return {
            groupsState,
            fetchGroups: groupsFetchData,

            onInputChange: onInputChange,
        };
    }

    render() {
        return <App {...this.state} />
    }
}
    
function onInputChange(event) {
    searchGroups(event.target.value);
}



export default Container.create(AppContainer);