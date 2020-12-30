import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../Notes/NoteScreen'
// import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
    return (
        <div className="journal___main-content">
            <Sidebar />
            <main>
                <NoteScreen />
                {/* <NothingSelected /> */}
            </main>
        </div>
    )
}
