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
					<div id="heading" style={{marginBottom: '30px', textAlign: 'center'}}>
						<button style={{marginRight: '20px'}} className="btn btn-default" onClick={this.handleClickAnswer.bind(this)}>Answer this question</button>
						<button style={{marginRight: '20px'}} className="btn btn-default">Delete this question</button>
						<h4 style={{marginTop: '20px'}}>
						{this.props.post.name}: "{this.props.post.question}"
						</h4>
					</div>
					{answerView}
			</div>
		)
	}		
};


window.QuestionListEntry = QuestionListEntry;
