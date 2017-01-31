import { CONSTANTS } from '../constants'
import { initialState } from '../initialState'

export default function appStateReducer(state = initialState.appState, action) {
    switch (action.type) {

        case CONSTANTS.GOT_PROBE: 
            if(state.messages['probe'] == action.payload){
                return state; 
            }
            var edges = []; 
            var previousNode = null; 
            var nodes = JSON.parse(action.payload).nodes.map((item, i) => {
                var node =  {
                    id: item.id,
                    label: item.ip + ":" + item.port
                }; 

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
            newState.messages['probe'] = action.payload; 

            return newState; 


        case CONSTANTS.UNRESONSIVE_NODE: 

            console.log(action.payload)
            var data = JSON.parse(action.payload); 
            console.log(data); 
            var newState = Object.assign({}, state, {
                edges: state.edges.concat({
                    from: data.from,
                    to: data.to,
                    color: "red",
                    label: "Unresponsive"
                })
            }); 

            return newState; 

        default:
            return state;
    }
}