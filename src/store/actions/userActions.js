/* eslint-disable no-unused-vars,import/prefer-default-export */
import { ActionTypes } from './ActionsTypes';
import { buildLoggers } from '../../utils/log';

const { log, error } = buildLoggers('userActions');


export const getUserIP = () => async (dispatch, getState) => {
  log('getUserIP()');

  try {
    const url = 'https://api.ipify.org?format=json';
    const payload = await fetch(url, { method: 'GET' }).then((response) => response.json());

    log('getUserIP()', { payload });

    return dispatch({
      type: ActionTypes.USER_GET_IP,
      payload,
    });
  } catch (err) {
    error('getUserIP()', err);

    return dispatch({
      type: ActionTypes.USER_ERROR,
      payload: { ...err, message: 'get user ip failed' },
    });
  }
};


/*


<script type="application/javascript">
  $(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        document.write("My public IP address is: ", json.ip);
      }
    );
  });
</script>


 */
