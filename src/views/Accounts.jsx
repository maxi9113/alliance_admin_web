import BaseView from './base/BaseView';


export default class Accounts extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.can_create = false;
        this.can_edit = false;
        this.can_delete = false;
    }

    get_columns() {
        return [
            { "label": "Username", "key": "username", "sortable": true, "filters": ["like", "equals", "not equals"] },
            { "label": "Name", "key": "name" },
            { "label": "Country", "key": "country_id", "values": {"1": "USA", "2": "Chile"}},
        ];
    }
}
