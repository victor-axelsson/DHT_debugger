import { CONSTANTS } from '../constants'
import { initialState } from '../initialState'

export default function appStateReducer(state = initialState.appState, action) {
    switch (action.type) {

        case CONSTANTS.GOT_PROBE: 
            var edges = []; 
            var previousNode = null; 
            var nodes = JSON.parse(action.payload).nodes.map((item, i) => {
                var node =  {
                    id: item.id,
                    label: item.ip + ":" + item.port
                }; 

                /*
                if(i == 2){
                    node.level = 3; 
                }
                */

                if(i > 0){
                    edges.push({
                        from: previousNode.id,
                        to: item.id
                    }); 
                } 

                previousNode = node; 
                return node; 
            });  

            if(nodes.length > 0){
                edges.push({
                    from: nodes[nodes.length -1].id,
                    to: nodes[0].id
                });                 
            }

            var newState = Object.assign({}, state, {
                nodes: nodes,
                edges: edges
            }); 

            return newState; 

        default:
            return state;
    }
}