import React, { Component, createContext } from 'react';

export const AppContext = createContext();

export class AppProvider extends Component {

    state = {
        email: '',
        avatar: '',
        id_user: '',
        name: '',
    }

    addUser = (user) =>{
        this.setState({avatar: user.avatar})
        this.setState({id_user: user.id})
        this.setState({name: user.name})
    };

    signOut = () => {
        this.setState({avatar: ''})
        this.setState({id_user: ''})
        this.setState({name: ''})
    }

    render() {
        const {email, avatar, id_user, name} = this.state;
        const {addUser ,signOut} = this;
        return (
            <AppContext.Provider 
            value={{email, avatar, id_user, name, addUser , signOut}}>
                {this.props.children}
            </AppContext.Provider>
        )
    }


};

