import request from '../utils/request';

export function getUserMenu(type = "MainMenu") {
  let menu =  request(`/api/services/app/Navigation/GetUserMenu/?type=${type}`);
  return menu;
}

