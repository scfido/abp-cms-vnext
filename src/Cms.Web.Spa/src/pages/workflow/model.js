import * as service from './service';

export default {
    namespace: 'workflow',
    state: {
        nodeEditorVisible: false,
        editNode: null,
    },
    reducers: {
        showEditor(state,{payload}){
            state.nodeEditorVisible = payload.visible;
            state.editNode = payload.node;
        },

        changeEditorVisible(state, { payload }) {
            state.nodeEditorVisible = payload;
        },

        selectNode(state, { payload }) {
            state.editNode = payload;
        }
    },
    effects: {

    },
};
