'use-strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const Connected = ({connected}) => {
    if(connected){
    	return (
    		<div style={styles.connected}>
    			<h1>C</h1>
    		</div>
    	); 
    }else{
    	return (
    		<div style={styles.disconnected}>
				<h1>DC</h1>
			</div>
		); 
    }
}

const styles = {
	connected: {
		borderRadius: 10,
		padding: 5,
		backgroundColor: 'green',
		width: 60,
		textAlign: 'center',
		color: '#FFF'
	},
	disconnected: {
		borderRadius: 10,
		padding: 10,
		backgroundColor: 'red',
		width: 60,
		textAlign: 'center',
		color: '#FFF'
	}
}

const mapStateToProps = (state) => {
    return {
    	connected: state.appState.connected
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Connected);