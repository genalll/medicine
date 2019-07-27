import React, { Fragment } from 'react';

class Doctor extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <Fragment>
          <div>Doctor page</div>
      </Fragment>
    )
  }
}

export default Doctor;