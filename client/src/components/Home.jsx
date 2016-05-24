class Home extends React.Component {
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
      	var answeredPosts =[];
      	data.data.forEach(function(post) {
      		if(post.answer) {
      			answeredPosts.push(post);
      		}
      	});
		    this.setState({posts: answeredPosts});			
      }.bind(this),	
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  }

  componentDidMount () {
    this.loadPosts();
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
				  	Hi, my name is Jinsoo Cha.
				  	</h3>
				  	<p style={{'textAlign': 'center'}}>
				  	I am a full stack developer in San Francisco, focusing on Javascript technologies. Ask me about life in SF as a software engineer! I would be happy to share my experiences.
				  	</p>
			    </div>
				<div>
					<SearchBar 
						onSearchInput={this.handleSearchInput.bind(this)}
				    searchText={this.state.searchText}
				  />
			  </div>
			  <div>
			  	<PostList 
			  	posts={this.state.posts}
			  	searchText={this.state.searchText}
			    />
			  </div>
		  </div>
		);  
	}   
}

window.Home = Home;

