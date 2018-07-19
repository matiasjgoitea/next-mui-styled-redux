import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs/lib/stomp';

import { TOGGLE_SOCKET } from '../constants';

function toggleSocket(isConnected) {
  return {
    type: TOGGLE_SOCKET,
    isConnected
  };
}

export function initializeSocket () {
  return dispatch => {
    const URL = 'http://dev-onboarding-166051811.us-east-1.elb.amazonaws.com:81/gs-guide-websocket';
    const socket = new SockJS(URL);
    const stompClient = Stomp.over(socket);
    stompClient.debug = str => {
      const res = str.split(' ');
      if (res[0] === 'Whoops!') {
        console.log('Connection lost!!!!!!');
        console.log(str);
        dispatch(toggleSocket(false));
      } else {
        console.log(str);
      }
    }
    return stompClient.connect({}, (conect) => {
      console.log(conect.command);

      if (conect.command === 'CONNECTED') {
        dispatch(toggleSocket(true));
      } else {
        dispatch(toggleSocket(false));
      }

      // stompClient.subscribe(CAMUNDA.SUBSCRIBE, response => {

      // })
    })
  }
}
