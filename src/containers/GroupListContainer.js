import React, { Component } from 'react';
import GroupList from '../components/GroupList';
import { Container } from 'flux/utils';
import GroupListStore from '../stores/GroupListStore';
import { groupsFetchData } from '../actions/GroupActions';


class GroupsListContainer extends Component {
    static getStores() {
        return [ GroupListStore ];
    }

    static calculateState() {
        const state = GroupListStore.getState();
    
        return {
            groups: state.groups,
            isLoading: state.isLoading,
            isErrored: state.isErrored,
            fetchGroups: groupsFetchData,
        };
    }

    render() {
        return <GroupList {...this.state} />
    }
}




export default Container.create(GroupsListContainer);