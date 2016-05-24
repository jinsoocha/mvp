"use strict";

var Nav = function Nav() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"nav",
			null,
			React.createElement(
				"button",
				{ className: "btn btn-default navbar-btn pull-right" },
				React.createElement(
					Link,
					{ to: "login" },
					"Login"
				)
			),
			React.createElement(
				"ul",
				{ className: "nav nav-tabs" },
				React.createElement(
					"li",
					{ role: "presentation" },
					React.createElement(
						Link,
						{ to: "/" },
						"Home"
					)
				),
				React.createElement(
					"li",
					{ role: "presentation" },
					React.createElement(
						Link,
						{ to: "post" },
						"Ask Your Own Question"
					)
				)
			)
		)
	);
};

window.Nav = Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9OYXYuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxNQUFNLFNBQU4sR0FBTTtBQUFBLFFBQ1Q7QUFBQTtFQUFBO0VBQ0M7QUFBQTtHQUFBO0dBQ0U7QUFBQTtJQUFBLEVBQVEsV0FBVSx1Q0FBbEI7SUFBMEQ7QUFBQyxTQUFEO0tBQUEsRUFBTSxJQUFHLE9BQVQ7S0FBQTtBQUFBO0FBQTFELElBREY7R0FFQztBQUFBO0lBQUEsRUFBSSxXQUFVLGNBQWQ7SUFDQztBQUFBO0tBQUEsRUFBSSxNQUFLLGNBQVQ7S0FBd0I7QUFBQyxVQUFEO01BQUEsRUFBTSxJQUFHLEdBQVQ7TUFBQTtBQUFBO0FBQXhCLEtBREQ7SUFFRztBQUFBO0tBQUEsRUFBSSxNQUFLLGNBQVQ7S0FBd0I7QUFBQyxVQUFEO01BQUEsRUFBTSxJQUFHLE1BQVQ7TUFBQTtBQUFBO0FBQXhCO0FBRkg7QUFGRDtBQURELEVBRFM7QUFBQSxDQUFWOztBQVlBLE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdiA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8bmF2PlxuXHQgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgbmF2YmFyLWJ0biBwdWxsLXJpZ2h0XCI+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvYnV0dG9uPiAgICAgICAgXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG5cdFx0XHRcdDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxuXHRcdCAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxMaW5rIHRvPVwicG9zdFwiPkFzayBZb3VyIE93biBRdWVzdGlvbjwvTGluaz48L2xpPlxuXHRcdCAgPC91bD4gICBcblx0XHQ8L25hdj5cbiAgPC9kaXY+XG4pXG5cbndpbmRvdy5OYXYgPSBOYXY7Il19