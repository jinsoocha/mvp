class App extends React.Component {
  constructor(props) {
    super(props);
  }

	render () {
		return (
		  <div>
		  	<div style={{marginBottom: '50px'}}>
	  	    <h1 style={{textAlign: 'center'}}>
			  	Ask Jinsoo For The World!
			  	</h1>
			  	<h3 style={{'textAlign': 'center'}}>
			  	Her experiences, values and perspective might help other people as well. 
			  	</h3>
		  	</div>
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

window.App = App;