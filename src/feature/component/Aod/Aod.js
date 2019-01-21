import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
// import { connect } from 'react-redux';
import injectStyles from 'react-jss';

const styles = () => ({
    main: {
        width: '100%',
        maxWidth: '333px',
        height: '333px',
        boxShadow: {x: 0, y: 11, blur: 36, spread: -1, color: 'rgba(0,0,0,0.75)'},
        backgroundColor: 'rgba(35, 35, 35, 1)',
    }
})

const Aod = ({classes}) => (
    <div className={classes.main}>
        <h1>Astronomy of the Day</h1>
    </div>
);

Aod.proptypes = {
    classes: PropTypes.object.isRequired,
}

export default compose(
    injectStyles(styles),
)(Aod);
