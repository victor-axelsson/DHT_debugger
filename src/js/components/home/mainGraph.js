import React, { Component } from 'react'
import { CONSTANTS } from '../../core/constants'
import { ENV } from '../../core/env'
import { connect } from 'react-redux'
import Graph from '../graph/Graph'


class MainGraph extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = this._getInitialState();
    }

    _getInitialState(){	
    	return {};
    }

    getGraphData(){	
    	var data = {
    		nodes: this.props.nodes,
    		edges: this.props.edges,
    		options: this.props.options
    	}; 
    	return data; 
    }

	render(){
		return (
			<div >
				<h1>Debugger</h1>
				<Graph hierarchicalLayout={false} graph={this.getGraphData()} style={styles.mainDiv} options={this.props.options}/>
			</div>
		); 
	}
}

const styles = {
	mainDiv: {
		backgroundColor: "#CCC",
		borderRadius: 10,
		padding: 10,
		margin: 10,
		height: 400
	}
}

const mapStateToProps = (state) => {
    return {
        nodes: state.appState.nodes,
        edges: state.appState.edges,
        options: state.appState.options
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGraph);