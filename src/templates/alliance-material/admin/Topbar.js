export default () => 
  <>
    <h1>{this.admin.title}</h1>
    <ul>
      {this.admin.props.children.map((item, index) => <li>{item.title || item.className}</li>)}
    </ul>
  </>