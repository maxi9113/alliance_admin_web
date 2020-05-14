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

export default  Admin = ({children}) => (
  <div className="shopping-list">
    {children}
  </div>
);


/* export default class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="shopping-list">
        {this.props.children}
      </div>
    );
  }
} */
