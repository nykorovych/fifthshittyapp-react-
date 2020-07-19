import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
    {
        title: 'What is Pepeg?',
        content: 'Pepg is a pepe the frog'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorits Js library among engineers'
    },
    {
        title: 'Why kill oneself ?',
        content: 'coz'
    }
]


export default () => {
    return (
        <div>
            {/* <Accordion items={items}></Accordion> */}
            <Search></Search>
        </div>
    )
}