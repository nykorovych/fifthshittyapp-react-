import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

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
const options = [
    {
        label: 'The RED',
        value: 'red'
    },
    {
        label: 'The GREEN',
        value: 'green'
    },
    {
        label: 'The BLUE',
        value: 'blue'
    }
]

export default () => {
    //  const [selected, setSelect] = useState(options[0])
    return (
        <div>
            {/* <Accordion items={items}></Accordion> */}
            {/* <Search></Search> */}
            <Translate></Translate>
            {/* <Dropdown selected={selected} onselectChange={setSelect} options={options}></Dropdown> */}
        </div>
    )
}