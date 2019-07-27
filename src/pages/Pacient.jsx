import React, { Fragment } from 'react';

class Pacient extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <Fragment>
          <div>Pacient page</div>
      </Fragment>
    )
  }
}

export default Pacient;