import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import createJson from './createJson.js';
// import {table} from './sample-table.js';

export default class ParentChildTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			table: [],
			pageStart: 0,
			itemLimit: 5,
		}
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	componentDidMount() {
		this.setState({ table: createJson(this.props.data, this.props.indentParams)})
	}
	handlePageChange(i){
		const pageStart = i * this.state.itemLimit;
		this.setState({ pageStart })
	}
	renderRow(r, i) {
		return <tr key={r.id+'_'+i}>
			<td onClick={() => console.log(r.a, " <==== ")}>{r.a}</td>
			<td>{r.b}</td>
			<td>{r.c}</td>
		</tr>;
	}
	render() {
		h1 = React.createElement('h1', null, "Table Container")
		row = [];
		for(let i = 0; i < this.state.itemLimit && i < this.state.table.length ; i++) {
			row.push(this.renderRow(this.state.table[this.state.pageStart + i], i))
		}
		return (
			<div className="container">
				<header>
					{ h1 }
        </header>
        <table className="table">
					{this.props.children}
					<tbody>{ row }</tbody>
				</table>
				<Pagination 
					currentPage = {this.state.pageStart / this.state.itemLimit}
					pages = {Math.ceil(this.state.table.length / this.state.itemLimit)}
					handlePageChange = {this.handlePageChange}
					/>
      </div>
    );
  }
}

class Pagination extends Component {
	renderPage(activeClass, i){
		return <li key={'pagination_'+i} className={activeClass}>
			<a href="javascript:void(null)" onClick={() => { this.props.handlePageChange(i); }} >{i + 1}</a>
		</li>
	}
	render(){
		let page = [];
		let disabledClass='disabled';
		for (i = 0; i < this.props.pages; i++) {
			let activeClass = '';
			if(this.props.currentPage == i) activeClass = 'active';
			page.push(this.renderPage(activeClass, i));
		}
		return <nav aria-label="Page navigation">
		  <ul className="pagination">
		    <li className={this.props.currentPage == 0?disabledClass:''}>
		      <a href="javascript:void(null);" onClick={() => { this.props.handlePageChange(0); }} aria-label="Previous">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>
		    {
		    	page.length?page:''
		    }
		    <li className={this.props.currentPage+1 == page.length?disabledClass:''}>
		      <a href="javascript:void(null);" onClick={() => { this.props.handlePageChange(this.props.pages - 1); }} aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		  </ul>
		</nav>;
	}
}