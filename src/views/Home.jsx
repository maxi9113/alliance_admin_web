import React from 'react';
import BaseView from './base/BaseView';


class Home extends BaseView {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    static_content() {
        return ( 
            <h1>Hola soy la pagina de home</h1>
        );
    }
}
