class PostView extends React.Component {
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

window.PostView = PostView;
