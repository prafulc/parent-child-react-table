import React, { Component } from 'react';
import createJson from './createJson.js';
import {table} from './sample-table.js';

export default class ParentChildTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			table: []
		}
	}
	componentDidMount(){
		this.setState({ table: createJson(table, ['a','b'])})
	}
	render() {
		return (
			<div className="container">
				<header>
					<h1>Todo List</h1>
        </header>
        <table>
					<thead>
						<tr>
							<th>A</th>
							<th>B</th>
							<th>C</th>
						</tr>
					</thead>
					<tbody>
						{ this.state.table.map((t,i)=>{
							return <tr key={t.id+'_'+i}>
									<td>{t.a}</td>
									<td>{t.b}</td>
									<td>{t.c}</td>
								</tr>
						})}
					</tbody>
				</table>
      </div>
    );
  }
}
