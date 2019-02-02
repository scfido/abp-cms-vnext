import * as service from './service';
import { queryRule, removeRule, addRule, updateRule } from './service';

export default {
    namespace: 'workflow',
    state: {
        nodeEditorVisible: false,
        editNode: null,
        flows: [],
        pagination: {},
    },

    reducers: {
        showEditor(state, { payload }) {
            state.nodeEditorVisible = payload.visible;
            state.editNode = payload.node;
        },

        changeEditorVisible(state, { payload }) {
            state.nodeEditorVisible = payload;
        },

        selectNode(state, { payload }) {
            state.editNode = payload;
        },

        save(state, { payload }) {
            state.flows = payload.list;
            state.pagination = payload.pagination;
        },

    },
    effects: {
        * fetch({ payload }, { call, put }) {
            const response = yield call(queryRule, payload);
            yield put({
                type: 'save',
                payload: response,
            });
        },
        * add({ payload, callback }, { call, put }) {
            const response = yield call(addRule, payload);
            yield put({
                type: 'save',
                payload: response,
            });
            if (callback) callback();
        },
        * remove({ payload, callback }, { call, put }) {
            const response = yield call(removeRule, payload);
            yield put({
                type: 'save',
                payload: response,
            });
            if (callback) callback();
        },
        * update({ payload, callback }, { call, put }) {
            const response = yield call(updateRule, payload);
            yield put({
                type: 'save',
                payload: response,
            });
            if (callback) callback();
        },
    },
};

