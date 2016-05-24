class OwnerView extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	posts: [],
      searchText: '',
    };
  }

  loadPosts () {
    $.ajax({
      url: '/server',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({posts: data.data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount () {
    this.loadPosts();
    setInterval(this.loadPosts, 2000);
  }

  handleSearchInput (searchText) {
  	this.setState({
  		searchText: searchText
  	});
  }

  render() {
		return(
			<div>
				<div style={{marginTop: '50px', marginBottom: '50px'}}>
				  	<h3 style={{'textAlign': 'center'}}>
				  	The world is waiting for your answers!
				  	</h3>
				  	<p style={{'textAlign': 'center'}}>
				  	Share your answers and build your reputation.
				  	</p>
			    </div>
				<div>
					<SearchBar 
						onSearchInput={this.handleSearchInput.bind(this)}
				    searchText={this.state.searchText}
				  />
			  </div>
			  <div>
			  	<QuestionList 
			  	posts={this.state.posts}
			  	searchText={this.state.searchText}
			    />
			  </div>
		  </div>
		);  
	}   
}

window.OwnerView = OwnerView;
