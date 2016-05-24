var OwnerView = () => (
	<div>
		<p>
		Under Construction
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

	requestBuildQueryString (params) {
    var queryString = [];
    for(var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  }

	sendFormData () {
		console.log("sending the form to the server")
		var formData = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      question: ReactDOM.findDOMNode(this.refs.question).value,
      emailRequested: ReactDOM.findDOMNode(this.refs.emailRequest).checked
    };

    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'I have received your question. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later.' });
        }
      }
    };
    xmlhttp.open('POST', 'http://localhost:3000/server', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(formData));
	}

	handleSubmit (e) {
		e.preventDefault();
		document.getElementById('heading').scrollIntoView();
  	this.setState({ 
  		type: 'info', 
  		message: 'Sending...' 
  	}, this.sendFormData.bind(this));
	}

	render () {
		if (this.state.type && this.state.message) {
			console.log(this.state.type, ",",this.state.message)
	    var classString = 'alert alert-' + this.state.type;
	    var status = <div id="status" className={classString} ref="status">
	                   {this.state.message}
	                 </div>;
  	}

		return (
			<div className="container-fluid">
		 		<h1 id="heading">Ask me!</h1>
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

          <label>Would you like to receive the answer privately if the owner decides not to post the answer? </label>
          <div className="form-group">
            <label className="checkbox-inline"><input name="emailRequest" ref="emailRequest" type="checkbox" />Yes</label>
          </div>
          <div className="form-group">
            <label htmlFor="question">Your question *</label>
            <textarea className="form-control" name="question" ref="question" rows="4" required/>
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
		<h3>
		{post.question}
		</h3>
		<blockquote>
		{post.answer}
		</blockquote>
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
			  	<h2>
			  	Hi, my name is Jinsoo Cha.
			  	</h2>
			  	<p>
			  	I am a full stack developer in San Francisco, focusing on Javascript technologies. Ask me about life in SF as a software engineer! I would be happy to share my experiences.
			  	</p>
			  	<hr/>
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
	<div>
		<nav>
	  	<button className="btn btn-default navbar-btn pull-right"><Link to="login">Login</Link></button>        
			<ul className="nav nav-tabs">
				<li role="presentation"><Link to="/">Home</Link></li>
		    <li role="presentation"><Link to="post">Ask Your Own Question</Link></li>
		  </ul>   
		</nav>
  </div>
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
