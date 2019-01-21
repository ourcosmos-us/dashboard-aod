import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import injectStyles from 'react-jss';
import Aod from './Aod'

const styles = ({ theme }) => ({
  main: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',   
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const Layout = ({ classes }) => (
  <div className={classes.main}>
    <Aod />
  </div>
);

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    (state) => ({
    }),
    (dispatch) => ({
    }),
  ),
  injectStyles(styles),
)(Layout);
