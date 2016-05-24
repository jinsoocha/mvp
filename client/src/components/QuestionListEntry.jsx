class QuestionListEntry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answerClicked: false
		}
	}

	handleClickAnswer (e) {
		e.preventDefault();
		document.getElementById('heading').scrollIntoView();
  		this.setState({ 
      		answerClicked: true
  		});
	}

	render () {
		if (this.state.answerClicked) {
	    	var answerView = <div id="answerView" ref="answerView">
	                  <AnswerView post={this.props.post}/>
	                 </div>;
	    }             

	  	return (
	  		<div>
				<div id="heading">
					<h4>
					{this.props.post.question} by {this.props.post.name}
					</h4>
					<button className="btn btn-default pull-right" onClick={this.handleClickAnswer.bind(this)}>Answer this question</button>
					<button className="btn btn-default pull-right">Delete this question</button>
				</div>
				{answerView}
			</div>
		)
	}		
};


window.QuestionListEntry = QuestionListEntry;
