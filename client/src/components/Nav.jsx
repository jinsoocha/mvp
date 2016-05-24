var Nav = () => (
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

window.Nav = Nav;