// class Admin(object):
//     """
//         Collection of the admin views. Also manages menu structure.
//     """
//     def __init__(self, app=None, name=None,
//                  url=None, subdomain=None,
//                  index_view=None,
//                  translations_path=None,
//                  endpoint=None,
//                  static_url_path=None,
//                  base_template=None,
//                  template_mode=None,
//                  category_icon_classes=None):

import React from 'react';
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }


    
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
