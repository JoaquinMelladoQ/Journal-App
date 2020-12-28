 import React from 'react'
 
 export const JournalEntry = () => {
     return (
         <div className="journal__entry">
             <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCCCeB3plBM6Ad9zWJqLl6Zj5G7F-rFk8bw&usqp=CAU)'
                }}
             >
             </div>

             <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-title">
                    aoedutnao
                </p>
             </div>
         </div>
     )
 }
 