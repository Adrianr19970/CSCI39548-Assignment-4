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
		if(this.props.fillU && this.state.color==="white"){
			this.state.color=this.props.color;
			return (
				<td className="grid_cell" onClick={this.changeColor} style={{backgroundColor:this.props.color}}/>
			);
		}
        return (
            <td className="grid_cell" onClick={this.changeColor} style={{backgroundColor:this.state.color}}/>
        );
    }
	
	changeColor = () =>
	{
		this.setState({color:this.props.color});
	}

}

GridCell.propTypes =
{
    key: PropTypes.string.isRequired,
    color: PropTypes.string
}