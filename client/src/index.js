ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="login" component={OwnerView} />
			<Route path="post" component={PostView} />
		</Route>	
	</Router>
), document.getElementById("app"));