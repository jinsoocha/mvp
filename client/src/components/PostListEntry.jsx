class PostListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questionClicked: false
		};
	}


	handleClickQuestion (e) {
		e.preventDefault();
		document.getElementById('heading').scrollIntoView();
  		this.setState({ 
      		questionClicked: !this.state.questionClicked
  		});
	}

	render() {
		if (this.state.questionClicked) {
	  	var answerView = <div id="answerView" ref="answerView">
	                		 	 <blockquote>
												 {this.props.post.answer}
												 </blockquote>
	               			 </div>;
  	}

		return (
			<div>
				<div id="heading">
					<h4 onClick={this.handleClickQuestion.bind(this)}>
					{this.props.post.question}
					</h4>
				</div>
				{answerView}
			</div>
		);
	}	
}


window.PostListEntry = 	PostListEntry;