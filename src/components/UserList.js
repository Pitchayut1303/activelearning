import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './mystyle/General.scss';

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }

        this.invite = this.invite.bind(this);
        this.setInvitedUser = this.setInvitedUser.bind(this);
    }

    componentWillMount() {
        window.fetch('http://54.169.35.33:8080/user_list', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        }).then(res => { return res.json() })
            .then((data) => {
                //                    console.log(data);
                const arr = data;
                this.setState({ users: arr }, () => {
                    console.log(this.state.users);
                });
            });
    }

    invite(e) {
        e.preventDefault();
        this.props.inviteUser();
    }

    setInvitedUser(e, username) {
        e.preventDefault();
        this.props.setInvitedUser(username);
    }

    render() {
        return (
            <div>
                {this.state.users.map((user, index) =>
                    <div key={user._id} className="list relative">{user.name}
                        <Button className="right" bsSize="xsmall" onClick={this.invite} onMouseOver={(e) => this.setInvitedUser(e, user.username)}>invite</Button>
                    </div>
                )}
            </div>
        );
    }
}

export default UserList;