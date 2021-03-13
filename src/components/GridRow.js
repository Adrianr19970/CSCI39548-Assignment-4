import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GridRow extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            key: props.key,
            cells: props.cells,
            color: props.color
        }
    }

    render()
    {
        return (
            <tr className="grid_row">
                {this.props.cells}
            </tr>
        );
    }   
}

GridRow.propTypes =
{
    key: PropTypes.string.isRequired,
    cells: PropTypes.array.isRequired,
    color: PropTypes.string.isRequired
}