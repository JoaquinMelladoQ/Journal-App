import React from 'react'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal___main-content">
            <Sidebar />
            <main>
                <NothingSelected />
            </main>
        </div>
    )
}
