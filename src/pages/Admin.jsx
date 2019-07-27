import React, { Fragment } from 'react';

class Admin extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <Fragment>
          <div>Admin page</div>
      </Fragment>
    )
  }
}

export default Admin;