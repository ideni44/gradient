import React from 'react'
import Addbuttons from '../components/Addbuttons'
import List from '../components/List'


function Home() {
    return (
        <div>
           <Addbuttons/> 
           <List buttonsAllow={true}/>
        </div>
    )
}

export default Home
