var OwnerView = () => (
	<div>
		<p>
		Hi this is the ownerView!
		</p>
	</div>
);

class PostView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'info',
			message: ''
		};
	}

	sendFormData () {
		console.log("sending the form to the server")
	}

	handleSubmit (e) {
		e.preventDefault();
		document.getElementById('heading').scrollIntoView();
  	this.setState({ 
  		type: 'info', 
  		message: 'Thank you! I have received your question.' 
  	}, this.sendFormData.bind(this));
	}

	render () {
		if (this.state.type && this.state.message) {
	    var classString = 'alert alert-' + this.state.type;
	    var status = <div id="status" className={classString} ref="status">
	                   {this.state.message}
	                 </div>;
  	}

		return (
			<div>
		 		<h1 id="heading">Tell me what you are curious about me</h1>
      	{status}
				<form action="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="name">Your full name *</label>
            <input className="form-control" name="name" ref="name" required type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email address to receive the answer in case it is sent privately *</label>
            <input className="form-control" name="email" ref="email" required type="email" />
          </div>

          <h3>Would you like to receive the answer privately if the owner decides not to post the answer? *</h3>
          <div className="form-group">
            <label className="checkbox-inline"><input name="areas" ref="areas" type="checkbox" value="EmailRequest" />Yes</label>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Send your question</button>
          </div>
        </form>
      </div>
    );
	}   
};


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
				filterdPosts.push(post);
			}
		});

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


class Home extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	posts: [{id: 1, question: "what if", answer: "hi i am an answer"},{id: 2, question: "hi i am a question", answer: "hi i am an answer"},{id:3, question: "hi i am a question", answer: "hi i am an answer"},{id:4,question: "hi i am a question", answer: "hi i am an answer"}],
      searchText: '',
    };
  }

  handleSearchInput (searchText) {
  	this.setState({
  		searchText: searchText
  	});
  }

  render() {
		return(
			<div>
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

var Nav = ({loginClicked, postClicked}) => (
	<nav>		
  	<ul>
  		<li><Link to="/">Home</Link></li>
      <li><Link to="login">Login</Link></li>    
      <li><Link to="post">Ask Your Own Question</Link></li>    
    </ul>
	</nav>
)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

	render () {
		return (
		  <div>
		    <div>
		   	  <Nav />
		    </div>
		    <div>
		    	{this.props.children}
		    </div>
		  </div>
		);
	}	
}
