import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Store/Store'
import { AppRouter } from './Routers/AppRouter'

export const JournalApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
