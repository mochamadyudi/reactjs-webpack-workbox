import * as uuid from "uuid"
import { SET_ALERT, REMOVE_ALERT } from "../type";

export const setAlert = (color,title,msg,py ='top', px='right', timeout = 3000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { color,title,msg ,px,py, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
