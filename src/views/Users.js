import React from 'react';
const Users = () => {
    return (
        <h1>Users</h1>
    )
}

export default Users;

/* export default class Users extends BaseView {
    constructor() {
        super();
        this.state = {
            value: null,
        };
        this.can_create = false;
        this.can_edit = false;
        this.can_delete = false;
    }

    get_columns() {
        return [
            {"label": "Username", "key": "username", "sortable": true, "filters": ["like", "equals", "not equals"]},
            {"label": "Name", "key": "name"},
            {"label": "Country", "key": "country_id"},
        ];
    }
} */
