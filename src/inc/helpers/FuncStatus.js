import axiosInstance from "../utils/AxiosInstance";

export const GetStatus = ()=> async dispatch => {
    try{
        await axiosInstance.get('/api/get_status/form')
            .then((res)=> {

                dispatch({
                    type:"GET_STATUS",
                    payload: res.data.data
                })
            })
            .catch((err)=> {
                // console.log('[res] - ERROR STATUS : ', err)
                dispatch({
                    type:"GET_STATUS_ERROR"
                })
            })

    }catch(err){
        // console.log('[catch] - ERROR STATUS : ', err)
        dispatch({
            type:"GET_STATUS_ERROR"
        })
    }
}

export const GetPosition = ()=> async dispatch => {
    try{
        await axiosInstance.get('/api/get_status/position')
            .then((res)=> {
                dispatch({
                    type:"GET_POSITION",
                    payload: res.data.data
                })
            })
            .catch((err)=> {
                // console.log('[res] - ERROR STATUS : ', err)
                dispatch({
                    type:"GET_POSITION_ERROR"
                })
            })

    }catch(err){
        // console.log('[catch] - ERROR STATUS : ', err)
        dispatch({
            type:"GET_POSITION_ERROR"
        })
    }
}
