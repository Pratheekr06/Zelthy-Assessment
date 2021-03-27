import React, { Component } from 'react';
import User from './user';
import styles from './style.module.css';


const URL = "https://jsonplaceholder.typicode.com/users";
class Main extends Component {
    state = { 
        userInfo: [],
        getUsers: false,
        loading: false,
     };
     
    getAllUsers = async () => {
        this.setState({
            loading: true,
        })
        await fetch(URL)
        .then(async res => {
            const data = await res.json()
            this.setState({
                userInfo: data,
            })
        })
        this.userAvatars();
        setTimeout(() => {
            this.setState({
                getUsers: true,
                loading: false,
            })
        }, 700);
     }

     
    userAvatars = async () => {
        const { userInfo} = this.state;
        userInfo.map(user => {
            fetch(`https://avatars.dicebear.com/v2/avataaars/{${user.username}}.svg?mood[]=happy`).then(async res => {
                const data = await res.text();
                user.avatars = data;
            })
        })
    }
    
    handleDeleteUser = (index) => {
        const { userInfo } = this.state;
        let user = [...userInfo];
        user.splice(index, 1);
        this.setState({
            userInfo: user,
        });
    }

    render() { 
        const { userInfo, getUsers, loading } = this.state;
        const users = userInfo.map((user,index) => {
            return (
                <div key={user.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <User
                        arrIndex={index}
                        userName={user.name}
                        emailId={user.email}
                        phone={user.phone}
                        website={user.website}
                        avatars={user.avatars}
                        company={user.company.name}
                        zipCode={user.address.zipcode}
                        city={user.address.city}
                        handleDeleteUser={this.handleDeleteUser} 
                    />
                </div>
            )
        })
        return ( 
            <div className={`fluid px-4 ${getUsers ? styles.pos : styles.pos2}`}>
                {getUsers ? (
                    <div className="row">
                        {users}
                    </div>
                ) : loading ? (
                    <div className={styles.loader} />
                ) : <button onClick={this.getAllUsers} type="button" className="btn btn-outline-info">Click Here To See All Users</button>}
            </div>
         );
    }
}
 
export default Main;