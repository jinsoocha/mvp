class QuestionList extends React.Component {
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
					<QuestionListEntry
				    key={post.id}
				    post={post}
				  />
				)}  
			</div>
		);	  
	};   		     	 	
};


window.QuestionList = QuestionList;