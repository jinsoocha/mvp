class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChange (e) {
		this.props.onSearchInput(this.refs.searchTextInput.value); 
	}

	render () {
		return (
			<form style={{marginBottom: '30px'}}>
				<input 
					className="form-control"
					type="text" 
					placeholder="Search questions here!"
					value= {this.props.searchText}
					ref="searchTextInput"
					onChange= {this.handleChange.bind(this)}
				/>
		  </form>
	  );
	} 
  
};

window.SearchBar = SearchBar;