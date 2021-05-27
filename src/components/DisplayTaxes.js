import React from "react";
import {connect} from 'react-redux'


function DisplayTaxes(props) {
  return (
    <div>
      <h2>Total Taxes: {props.state.totalTaxes}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(DisplayTaxes);