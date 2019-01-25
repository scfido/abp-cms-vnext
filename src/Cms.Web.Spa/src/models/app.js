import * as service from '../services/app';

//菜单结构
// {
//   "name": "Todo.Index2",
//   "icon": "user",
//   "displayName": "Todo2",
//   "order": 0,
//   "url": "/todo3",
//   "customData": null,
//   "target": null,
//   "isEnabled": true,
//   "isVisible": true,
//   "items": []
// }

export default {
  namespace: 'app',
  state: {
    menus: [],
    sidebarStatus: "expand",  //hide,collapsed,expand
  },
  reducers: {
    saveMenu(state, { payload: { result } }) {
      state.menus = result.items;
    },
    changeSidebarStatus(state, { payload }) {
      state.sidebarStatus = payload;
    }
  },
  effects: {
    *getUserMenu({ payload }, { call, put }) {
      const data = yield call(service.getUserMenu, payload.menuType);
      yield put({ type: 'saveMenu', payload: data });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname, query }) => {
      //   let menuType = pathname.startsWith('/admin') ? "Admin" : "MainMenu";
      //   dispatch({ type: 'getUserMenu', payload: { menuType } });
      // });
    },
  },
};