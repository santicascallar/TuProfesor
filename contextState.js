import React, { useContext } from 'react';

export const initialState = {
    loading: true,
    persona:[]
};

export const ActionTypes = {
    SetLoading: "SET_LOADING",
    SetPersona: "SET_PERSONA"
};


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetLoading:
            return ({
                ...state,
                loading: action.value,
            });
        case ActionTypes.SetPersona:
            return ({
                ...state,
                persona: action.value,
            });
        default:
            return state;
    }
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);


export function ContextProvider({children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);


const contextState = state;
const setContextState = dispatch;

return <Cont.Provider value={{contextState, setContextState }}>{children}</Cont.Provider>

}

export const useContextState = () => useContext(Cont);