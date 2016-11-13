import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import {convertParentChildJSON} from './convertJson.js';
// import {table} from './sample-table.js';

export default class ParentChildTable extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: 0,
			itemLimit: 5,
		}
		this.table = [];
		if(props.formatType = "parentChild") 
			this.table = convertParentChildJSON(props.data, props.chKey);
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	componentDidMount() {
		// this.setState({ table: createJson(this.props.data, this.props.chKey)})
		// this.table = createJson(this.props.data, this.props.chKey)
	}
	componentWillReceiveProps(nextProps){
		this.table = createJson(nextProps.data, nextProps.chKey);
	}
	handlePageChange(i){
		const page = i;
		this.setState({ page })
	}
	renderRow(r, i, comp) {
		return React.cloneElement(comp, { ...r, key: r.id+'_'+i })
	}
	render() {
		const header = React.createElement('h1', null, "Table Container")
		let row = [];
		let comp = this.props.children;
		let displayChildren = [];
		if(this.props.children.length){
			comp = _.find(this.props.children, (c) => {
				return c.type.displayName == this.props.rowDisplayName
			});
			displayChildren.push(_.find(this.props.children, (c) => {
				return c.type.displayName != this.props.rowDisplayName
			}));
		}
		for(let i = 0; i < this.state.itemLimit && i < this.table.length ; i++) {
			row.push(this.renderRow(this.table[(this.state.page * this.state.itemLimit) + i], i, comp))
		}
		return (
			<div className="container">
				<header>
					{ header }
        </header>
        <table className="table">
					{displayChildren}
					<tbody>{ row }</tbody>
				</table>
				<Pagination 
					currentPage = {this.state.page}
					pages = {Math.ceil(this.table.length / this.state.itemLimit)}
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