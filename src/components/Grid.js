import React, { Component } from 'react';
import { GridRow, GridCell } from '.';

export default class Grid extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            num_Cols: 1,
            num_Rows: 1,
            color: "white",
            fillU: false,
            fill: false,
            clearAll: false,
        }
    }


    render()
    {
        return (
            <section>
                <div className="interface">
                    <button onClick={this.addR}><p>Add Row</p></button>
                    <button onClick={this.addC}><p>Add Col</p></button>
                    <button onClick={this.removeR}><p>Remove Row</p></button>
                    <button onClick={this.removeC}><p>Remove Col</p></button>
                    <button onClick={this.fillU}><p>Fill All Uncolored</p></button>
                    <button onClick={this.fill}><p>Fill All</p></button>
                    <button onClick={this.clearAll}><p>Clear</p></button>
	

                    <select onChange={this.selectedColor}>
                        <option value="#ffffff">White</option>
                        <option value="#000000">Black</option>
                        <option value="#ffff00">Yellow</option>
                        <option value="#9acd32">Yellow-Green</option>
                        <option value="#00ff00">Green</option>
                        <option value="#0d98ba">Blue-Green</option>
                        <option value="#0000ff">Blue</option>
                        <option value="#8a2be2">Blue-Violet</option>
                        <option value="#7f00ff">Violet</option>
                        <option value="#c71585">Red-Violet</option>
                        <option value="#ff0000">Red</option>
                        <option value="#ff5349">Red-Orange</option>
                        <option value="#ffa500">Orange</option>
                        <option value="#f8d568">Yellow-Orange</option>
                    </select>

                    <hr></hr>

                </div>

                <table id="grid">
                    <tbody>
                        {this.createGrid(this.state.num_Rows, this.state.num_Cols)}
                    </tbody>
                </table>
            </section>
        );
    }

    createGrid(num_Rows, num_Cols) 
    {
        let rows = [];

        for (let x = 0; x < num_Rows; x++)
        {
            let columns = [];

            for (let y = 0; y < num_Cols; y++)
            {
                columns.push(<GridCell key={x+y.toString()} color={this.state.color} changeColor={this.changeColor} fillU={this.state.fillU} fill={this.state.fill} />);
            }
            rows.push(<GridRow key={x.toString()} cells={columns} color={this.state.color} />);
        }
        //After grid is created, set all the options (fill uncolored, fill all, and clear) to false.
        this.state.fillU=false;
        this.state.fill = false;
        return rows;
    }

    addR = () =>
    {
        this.setState({ num_Rows: this.state.num_Rows + 1 });
        console.log("Pressed addR");
        console.log(this.state.num_Rows);
    }

    addC = () =>
    {
        this.setState({ num_Cols: this.state.num_Cols + 1 });
        console.log("Pressed addC");
        console.log(this.state.num_Cols );
    }

    removeR = () =>
    {
        if (this.state.num_Rows <= 1)
        {
            this.setState({ num_Rows: this.state.num_Rows});
            console.log("Cannot removeR");
        }
        else
        {
            this.setState({ num_Rows: this.state.num_Rows - 1 });
            console.log("Pressed removeR");
        }
    }

    removeC = () =>
    {
        if (this.state.num_Cols <= 1)
        {
            this.setState({ num_Cols: this.state.num_Cols});
            console.log("Cannot removeC");
        }
        else 
        {
            this.setState({ num_Cols: this.state.num_Cols - 1 });
            console.log("Pressed removeC");
        }
    }
	
    selectedColor = (event) =>
    {
        this.setState({ color: event.target.value });
    }
	
	
	
	fillU = () =>
	{
		this.setState({fillU:true});
    }
    
    /*
    The way this method works is similar to ^^, once user clicks fillAll, it 
    triggers this method which will set the state of fill to be true, allowing 
    the handling of each gridCell to happen in that file. In createGrid, after the 
    grid is created, the states are set to false. 
    */
    fill = () =>
    {
        this.setState({fill:true});
    }

    
}