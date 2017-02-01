export const initialState = {
    user: {},
    appState: {
        nodes: [{id: 1, label: 'Node 1'}, {id: 2, label: 'Node 2'}],
        edges: [{from: 1, to: 2}],
        options: {
            nodes:{
                shape:'circle',
                color: '#CCC',
                borderWidth: 3,
            }
        },
        messages : {
            probe: null
        },
        connected: false
    },
    navigation: {}
};
