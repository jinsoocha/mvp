class AnswerView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'info',
			message: '',
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
		var formData = {
      id: this.props.post.id,
      answer: ReactDOM.findDOMNode(this.refs.answer).value,
    };
    var xmlhttp = new XMLHttpRequest();
    var _this = this;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        var response = JSON.parse(xmlhttp.responseText);
        if (xmlhttp.status === 200 && response.status === 'OK') {
          _this.setState({ type: 'success', message: 'Your answer is posted now!' });
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
	    var classString = 'alert alert-' + this.state.type;
	    var status = <div id="status" className={classString} ref="status">
	                   {this.state.message}
	                 </div>;
  	}

		return (
			<div className="container-fluid">
      	{status}
				<form action="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="answer">Your answer *</label>
            <textarea className="form-control" name="answer" ref="answer" rows="4" required/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Send your answer</button>
          </div>
        </form>
      </div>
    );
	}   
};

window.AnswerView = AnswerView;
