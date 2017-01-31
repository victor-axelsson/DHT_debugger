import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MyApp from '../core/reducers'
import { getRoute } from './router'
import { CONSTANTS } from '../core/constants'
import { ENV } from 'core/env'
import Graph from 'react-graph-vis'

const store = createStore(MyApp);
if (!ENV.DEV) {
    console.log = function() {};
}
export default class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = this._getInitialState();
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
            this._onChange();
        });
    }

    _onChange() {
        this.setState(this._getInitialState());
    }

    _getInitialState() {
        //let storeState = store.getState();


        var data = {
            nodes: [
              {id: 1, label: 'Node 1'},
              {id: 2, label: 'Node 2'},
              {id: 3, label: 'Node 3'},
              {id: 4, label: 'Node 4'},
              {id: 5, label: 'Node 5'}
            ],
            edges: [
              {from: 1, to: 2},
              {from: 1, to: 3},
              {from: 2, to: 4},
              {from: 2, to: 5}
            ]
        };


        var that = this; 
        setInterval(() => {
            var d = that.state.graphData; 
            d.nodes.push({
                id: d.nodes.length + 1 , 
                label : "Node "  + d.nodes.length +1
            })

            /*
            that.setState({
                graphData: d
            }); 
            */

        }, 1000); 

        return {
            graphData: data
        };
    }

    setupListeners(){
        __socket.on('probe', (data) => {
            console.log(data); 
        }); 

        setTimeout(function(){
            console.log("asdasd"); 
            __socket.emit("leave", JSON.stringify({id: 22}),function(data){
                console.log(data);
                console.log("CB");  
            }); 
        }, 2000); 
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }

    componentDidMount() {
        this.setupListeners(); 
    }

    render() {
        return (
            <Provider store={ store }>
                <div>
                    <Graph graph={this.state.graphData}/>
                </div>
            </Provider>
            );
    }
}

const styles = {}