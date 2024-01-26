import { createContext, useReducer } from 'react'
import { initialState, reducer } from './Reducers'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const toggleModal = () => {
        dispatch({
            type: 'TOGGLE_MODAL'
        })
    }

    const value = {
        isModalOpen: state.isModalOpen,
        toggleModal
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}