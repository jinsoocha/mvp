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

	requestBuildQueryString (params) {
    var queryString = [];
    for(var property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  }

	handleClickDelete () {
		this.props.post.delete = true;
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'Your question has been deleted.' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later.' });
        }
      }
    };
    xmlhttp.open('POST', 'http://localhost:3000/server', true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send(this.requestBuildQueryString(this.props.post));
	}

	render () {
		if (this.state.answerClicked) {
	    	var answerView = <div id="answerView" ref="answerView">
	                  <AnswerView post={this.props.post}/>
	                 </div>;
	    }          

	  if (this.state.type && this.state.message) {
	    var classString = 'alert alert-' + this.state.type;
	    return <div id="status" className={classString} ref="status">
	                   {this.state.message}
	                 </div>;
  	}



	  	return (
	  		<div>
					<div id="heading" style={{marginBottom: '30px', textAlign: 'center'}}>
						<button style={{marginRight: '20px'}} className="btn btn-default" onClick={this.handleClickAnswer.bind(this)}>Answer this question</button>
						<button style={{marginRight: '20px'}} className="btn btn-default" onClick={this.handleClickDelete.bind(this)}>Delete this question</button>
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
