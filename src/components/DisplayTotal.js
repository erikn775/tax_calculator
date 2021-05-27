import React from "react";
import {connect} from 'react-redux'


function DisplayTotal(props) {
  return (
    <div>
      <h2>Total Taxes: {props.totalTaxes}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
    debugger
  return {
    totalTaxes: state.totalTaxes
  }
}

export default connect(mapStateToProps)(DisplayTotal);