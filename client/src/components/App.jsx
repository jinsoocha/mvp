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

var PostList = ({posts}) => (	  
  <div>
  	{posts.map((post) =>
	  	<PostListEntry
	      key={post.id}
	    	post={post}
	    />
	  )} 		     
 	</div>
);

var SearchBar = () => (
	<form>
		<input type="text" placeholder="Search questions here!"/>
  </form>
);

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
