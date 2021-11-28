import * as counter from './constants'

export const increament = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

export const decreament = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

export const decreamentWithCheck = (value) => {
    return (dispatch, getState) => {
        if(getState().counter.count > 0){
            dispatch(decreament(1))
        }
    }
}