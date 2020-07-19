import React from 'react'


const Dropdown = ({options, selected, onselectChange}) => {
    const renderedOptions = options.map(o => {
        return (
            <div onClick={() => onselectChange(o)} className="item">
                {o.label}
            </div>
        )
    })
    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a colour</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown