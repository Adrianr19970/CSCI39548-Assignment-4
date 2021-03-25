import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GridCell extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            key: props.key,
            color: "white"
        }
    }
      
    render()
    {
        return (
            <td className="grid_cell" onClick={this.props.changeColor}/>
        );
    }

}

GridCell.propTypes =
{
    key: PropTypes.string.isRequired,
    color: PropTypes.string
}