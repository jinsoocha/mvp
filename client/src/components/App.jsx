var PostListEntry = ({post}) => (
	<div>
		<p>
		Q: {post.question}
		</p>
		<p>
		A: {post.answer}
		</p>
	</div>
);

class PostList extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		var filterdPosts = [];
		this.props.posts.forEach((post) => {
			if(post.question.indexOf(this.props.searchText) !== -1) {
				console.log(post)
				filterdPosts.push(post);
			}
		});
		console.log(filterdPosts)

		return(
			<div>
				{filterdPosts.map((post) => 
					<PostListEntry
				    key={post.id}
				    post={post}
				  />
				)}  
			</div>
		);	  
	};   		     	 	
};

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChange (e) {
		this.props.onSearchInput(this.refs.searchTextInput.value); 
	}

	render () {
		return (
			<form>
				<input 
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

var Nav = ({loginClicked, postClicked}) => (
	<nav>
		<button>
		Login
		</button>
		<button>
		Ask Your Own Question
		</button>
	</nav>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //posts: []
      searchText: '',
      loginClicked: false,
      postClicked: false
    };
  }

  handleSearchInput (searchText) {
  	console.log(searchText)
  	this.setState({
  		searchText: searchText
  	});
  }

	render () {
		return (
		  <div>
		    <div>
		   	  <Nav 
		   	  loginClicked={this.state.loginClicked}
		   	  postClicked={this.state.postClicked}
		   	  />
		    </div>
		    <div>
			    <SearchBar 
			    onSearchInput={this.handleSearchInput.bind(this)}
			    searchText={this.state.searchText}
			    />
		    </div>
		    <div>
		    	<PostList 
		    	posts={this.props.posts}
		    	searchText={this.state.searchText}
		    	/>
		    </div>
		  </div>
		);
	}	
}
