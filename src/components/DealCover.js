import React, { Fragment } from "react";
import { connect } from "react-redux";

const DealCover = ({ covered }) => {
  return <Fragment>{covered && <div className='stage-cover'></div>}</Fragment>;
};

const mapStateToProps = state => ({
  covered: state.main.covered
});

export default connect(mapStateToProps)(DealCover);
