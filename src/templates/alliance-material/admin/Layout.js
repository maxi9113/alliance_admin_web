import Admin from './base';
import Topbar from './Topbar';


class Layout extends Admin.Layout {
  render() {
    return (
      <Topbar />
    );
  }
}