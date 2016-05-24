'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OwnerView = function OwnerView() {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			'Under Construction'
		)
	);
};

var PostView = function (_React$Component) {
	_inherits(PostView, _React$Component);

	function PostView(props) {
		_classCallCheck(this, PostView);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(PostView).call(this, props));

		_this2.state = {
			type: 'info',
			message: ''
		};
		return _this2;
	}

	_createClass(PostView, [{
		key: 'requestBuildQueryString',
		value: function requestBuildQueryString(params) {
			var queryString = [];
			for (var property in params) {
				if (params.hasOwnProperty(property)) {
					queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
				}
			}return queryString.join('&');
		}
	}, {
		key: 'sendFormData',
		value: function sendFormData() {
			console.log("sending the form to the server");
			var formData = {
				name: ReactDOM.findDOMNode(this.refs.name).value,
				email: ReactDOM.findDOMNode(this.refs.email).value,
				question: ReactDOM.findDOMNode(this.refs.question).value,
				emailRequested: ReactDOM.findDOMNode(this.refs.emailRequest).checked
			};

			var xmlhttp = new XMLHttpRequest();
			var _this = this;
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState === 4) {
					var response = JSON.parse(xmlhttp.responseText);
					if (xmlhttp.status === 200 && response.status === 'OK') {
						_this.setState({ type: 'success', message: 'I have received your question. Thanks!' });
					} else {
						_this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later.' });
					}
				}
			};
			xmlhttp.open('POST', 'http://localhost:3000/server', true);
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xmlhttp.send(this.requestBuildQueryString(formData));
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			document.getElementById('heading').scrollIntoView();
			this.setState({
				type: 'info',
				message: 'Sending...'
			}, this.sendFormData.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.type && this.state.message) {
				console.log(this.state.type, ",", this.state.message);
				var classString = 'alert alert-' + this.state.type;
				var status = React.createElement(
					'div',
					{ id: 'status', className: classString, ref: 'status' },
					this.state.message
				);
			}

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					{ id: 'heading' },
					'Tell me what you are curious about me'
				),
				status,
				React.createElement(
					'form',
					{ action: '', onSubmit: this.handleSubmit.bind(this) },
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'name' },
							'Your full name *'
						),
						React.createElement('input', { className: 'form-control', name: 'name', ref: 'name', required: true, type: 'text' })
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'email' },
							'Your email address to receive the answer in case it is sent privately *'
						),
						React.createElement('input', { className: 'form-control', name: 'email', ref: 'email', required: true, type: 'email' })
					),
					React.createElement(
						'h3',
						null,
						'Would you like to receive the answer privately if the owner decides not to post the answer? '
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ className: 'checkbox-inline' },
							React.createElement('input', { name: 'emailRequest', ref: 'emailRequest', type: 'checkbox' }),
							'Yes'
						)
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'label',
							{ htmlFor: 'question' },
							'Your question *'
						),
						React.createElement('textarea', { className: 'form-control', name: 'question', ref: 'question', rows: '4', required: true })
					),
					React.createElement(
						'div',
						{ className: 'form-group' },
						React.createElement(
							'button',
							{ className: 'btn btn-primary', type: 'submit' },
							'Send your question'
						)
					)
				)
			);
		}
	}]);

	return PostView;
}(React.Component);

;

var PostListEntry = function PostListEntry(_ref) {
	var post = _ref.post;
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			'Q: ',
			post.question
		),
		React.createElement(
			'p',
			null,
			'A: ',
			post.answer
		)
	);
};

var PostList = function (_React$Component2) {
	_inherits(PostList, _React$Component2);

	function PostList(props) {
		_classCallCheck(this, PostList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PostList).call(this, props));
	}

	_createClass(PostList, [{
		key: 'render',
		value: function render() {
			var _this4 = this;

			var filterdPosts = [];
			this.props.posts.forEach(function (post) {
				if (post.question.indexOf(_this4.props.searchText) !== -1) {
					filterdPosts.push(post);
				}
			});

			return React.createElement(
				'div',
				null,
				filterdPosts.map(function (post) {
					return React.createElement(PostListEntry, {
						key: post.id,
						post: post
					});
				})
			);
		}
	}]);

	return PostList;
}(React.Component);

;

var SearchBar = function (_React$Component3) {
	_inherits(SearchBar, _React$Component3);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange(e) {
			this.props.onSearchInput(this.refs.searchTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'form',
				null,
				React.createElement('input', {
					type: 'text',
					placeholder: 'Search questions here!',
					value: this.props.searchText,
					ref: 'searchTextInput',
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(React.Component);

;

var Home = function (_React$Component4) {
	_inherits(Home, _React$Component4);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

		_this6.state = {
			posts: [{ id: 1, question: "what if", answer: "hi i am an answer" }, { id: 2, question: "hi i am a question", answer: "hi i am an answer" }, { id: 3, question: "hi i am a question", answer: "hi i am an answer" }, { id: 4, question: "hi i am a question", answer: "hi i am an answer" }],
			searchText: ''
		};
		return _this6;
	}

	_createClass(Home, [{
		key: 'handleSearchInput',
		value: function handleSearchInput(searchText) {
			this.setState({
				searchText: searchText
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(SearchBar, {
						onSearchInput: this.handleSearchInput.bind(this),
						searchText: this.state.searchText
					})
				),
				React.createElement(
					'div',
					null,
					React.createElement(PostList, {
						posts: this.state.posts,
						searchText: this.state.searchText
					})
				)
			);
		}
	}]);

	return Home;
}(React.Component);

var Nav = function Nav(_ref2) {
	var loginClicked = _ref2.loginClicked;
	var postClicked = _ref2.postClicked;
	return React.createElement(
		'nav',
		null,
		React.createElement(
			'ul',
			null,
			React.createElement(
				'li',
				null,
				React.createElement(
					Link,
					{ to: '/' },
					'Home'
				)
			),
			React.createElement(
				'li',
				null,
				React.createElement(
					Link,
					{ to: 'login' },
					'Login'
				)
			),
			React.createElement(
				'li',
				null,
				React.createElement(
					Link,
					{ to: 'post' },
					'Ask Your Own Question'
				)
			)
		)
	);
};

var App = function (_React$Component5) {
	_inherits(App, _React$Component5);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					null,
					React.createElement(Nav, null)
				),
				React.createElement(
					'div',
					null,
					this.props.children
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZO0FBQUEsUUFDZjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBREQsRUFEZTtBQUFBLENBQWhCOztJQVFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyRkFDWixLQURZOztBQUVsQixTQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sTUFETTtBQUVaLFlBQVM7QUFGRyxHQUFiO0FBRmtCO0FBTWxCOzs7OzBDQUV3QixNLEVBQVE7QUFDOUIsT0FBSSxjQUFjLEVBQWxCO0FBQ0EsUUFBSSxJQUFJLFFBQVIsSUFBb0IsTUFBcEI7QUFDRSxRQUFJLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ25DLGlCQUFZLElBQVosQ0FBaUIsbUJBQW1CLFFBQW5CLElBQStCLEdBQS9CLEdBQXFDLG1CQUFtQixPQUFPLFFBQVAsQ0FBbkIsQ0FBdEQ7QUFDRDtBQUhILElBSUEsT0FBTyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBUDtBQUNEOzs7aUNBRWM7QUFDZixXQUFRLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLE9BQUksV0FBVztBQUNYLFVBQU0sU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLElBQS9CLEVBQXFDLEtBRGhDO0FBRVgsV0FBTyxTQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsS0FBL0IsRUFBc0MsS0FGbEM7QUFHWCxjQUFVLFNBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxRQUEvQixFQUF5QyxLQUh4QztBQUlYLG9CQUFnQixTQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsWUFBL0IsRUFBNkM7QUFKbEQsSUFBZjs7QUFPRSxPQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxPQUFJLFFB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O0FBZ0JBOzs7O0VBaENpQixNQUFNLFM7O0FBbUN6QixJQUFJLE1BQU0sU0FBTixHQUFNO0FBQUEsS0FBRSxZQUFGLFNBQUUsWUFBRjtBQUFBLEtBQWdCLFdBQWhCLFNBQWdCLFdBQWhCO0FBQUEsUUFDVDtBQUFBO0VBQUE7RUFDRTtBQUFBO0dBQUE7R0FDQztBQUFBO0lBQUE7SUFBSTtBQUFDLFNBQUQ7S0FBQSxFQUFNLElBQUcsR0FBVDtLQUFBO0FBQUE7QUFBSixJQUREO0dBRUc7QUFBQTtJQUFBO0lBQUk7QUFBQyxTQUFEO0tBQUEsRUFBTSxJQUFHLE9BQVQ7S0FBQTtBQUFBO0FBQUosSUFGSDtHQUdHO0FBQUE7SUFBQTtJQUFJO0FBQUMsU0FBRDtLQUFBLEVBQU0sSUFBRyxNQUFUO0tBQUE7QUFBQTtBQUFKO0FBSEg7QUFERixFQURTO0FBQUEsQ0FBVjs7SUFVTSxHOzs7QUFDSixjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnRkFDWCxLQURXO0FBRWxCOzs7OzJCQUVRO0FBQ1QsVUFDRTtBQUFBO0lBQUE7SUFDRTtBQUFBO0tBQUE7S0FDRSxvQkFBQyxHQUFEO0FBREYsS0FERjtJQUlFO0FBQUE7S0FBQTtLQUNFLEtBQUssS0FBTCxDQUFXO0FBRGI7QUFKRixJQURGO0FBVUE7Ozs7RUFoQmdCLE1BQU0sUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgT3duZXJWaWV3ID0gKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxwPlxuXHRcdFVuZGVyIENvbnN0cnVjdGlvblxuXHRcdDwvcD5cblx0PC9kaXY+XG4pO1xuXG5jbGFzcyBQb3N0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiAnaW5mbycsXG5cdFx0XHRtZXNzYWdlOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRyZXF1ZXN0QnVpbGRRdWVyeVN0cmluZyAocGFyYW1zKSB7XG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gW107XG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpXG4gICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBxdWVyeVN0cmluZy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3Byb3BlcnR5XSkpO1xuICAgICAgfVxuICAgIHJldHVybiBxdWVyeVN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuXHRzZW5kRm9ybURhdGEgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwic2VuZGluZyB0aGUgZm9ybSB0byB0aGUgc2VydmVyXCIpXG5cdFx0dmFyIGZvcm1EYXRhID0ge1xuICAgICAgbmFtZTogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm5hbWUpLnZhbHVlLFxuICAgICAgZW1haWw6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5lbWFpbCkudmFsdWUsXG4gICAgICBxdWVzdGlvbjogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnF1ZXN0aW9uKS52YWx1ZSxcbiAgICAgIGVtYWlsUmVxdWVzdGVkOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZW1haWxSZXF1ZXN0KS5jaGVja2VkXG4gICAgfTtcblxuICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdJIGhhdmUgcmVjZWl2ZWQgeW91ciBxdWVzdGlvbi4gVGhhbmtzIScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1NvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZlcicsIHRydWUpO1xuICAgIHhtbGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhtbGh0dHAuc2VuZCh0aGlzLnJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nKGZvcm1EYXRhKSk7XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmcnKS5zY3JvbGxJbnRvVmlldygpO1xuICBcdHRoaXMuc2V0U3RhdGUoeyBcbiAgXHRcdHR5cGU6ICdpbmZvJywgXG4gIFx0XHRtZXNzYWdlOiAnU2VuZGluZy4uLicgXG4gIFx0fSwgdGhpcy5zZW5kRm9ybURhdGEuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnR5cGUgJiYgdGhpcy5zdGF0ZS5tZXNzYWdlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnR5cGUsIFwiLFwiLHRoaXMuc3RhdGUubWVzc2FnZSlcblx0ICAgIHZhciBjbGFzc1N0cmluZyA9ICdhbGVydCBhbGVydC0nICsgdGhpcy5zdGF0ZS50eXBlO1xuXHQgICAgdmFyIHN0YXR1cyA9IDxkaXYgaWQ9XCJzdGF0dXNcIiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfSByZWY9XCJzdGF0dXNcIj5cblx0ICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2V9XG5cdCAgICAgICAgICAgICAgICAgPC9kaXY+O1xuICBcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdCBcdFx0PGgxIGlkPVwiaGVhZGluZ1wiPlRlbGwgbWUgd2hhdCB5b3UgYXJlIGN1cmlvdXMgYWJvdXQgbWU8L2gxPlxuICAgICAgXHR7c3RhdHVzfVxuXHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCJcIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIGZ1bGwgbmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHJlZj1cIm5hbWVcIiByZXF1aXJlZCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBlbWFpbCBhZGRyZXNzIHRvIHJlY2VpdmUgdGhlIGFuc3dlciBpbiBjYXNlIGl0IGlzIHNlbnQgcHJpdmF0ZWx5ICo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHJlZj1cImVtYWlsXCIgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoMz5Xb3VsZCB5b3UgbGlrZSB0byByZWNlaXZlIHRoZSBhbnN3ZXIgcHJpdmF0ZWx5IGlmIHRoZSBvd25lciBkZWNpZGVzIG5vdCB0byBwb3N0IHRoZSBhbnN3ZXI/IDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IG5hbWU9XCJlbWFpbFJlcXVlc3RcIiByZWY9XCJlbWFpbFJlcXVlc3RcIiB0eXBlPVwiY2hlY2tib3hcIiAvPlllczwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCI+WW91ciBxdWVzdGlvbiAqPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicXVlc3Rpb25cIiByZWY9XCJxdWVzdGlvblwiIHJvd3M9XCI0XCIgcmVxdWlyZWQvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+U2VuZCB5b3VyIHF1ZXN0aW9uPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cdH0gICBcbn07XG5cblxudmFyIFBvc3RMaXN0RW50cnkgPSAoe3Bvc3R9KSA9PiAoXG5cdDxkaXY+XG5cdFx0PHA+XG5cdFx0UToge3Bvc3QucXVlc3Rpb259XG5cdFx0PC9wPlxuXHRcdDxwPlxuXHRcdEE6IHtwb3N0LmFuc3dlcn1cblx0XHQ8L3A+XG5cdDwvZGl2PlxuKTtcblxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIGZpbHRlcmRQb3N0cyA9IFtdO1xuXHRcdHRoaXMucHJvcHMucG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuXHRcdFx0aWYocG9zdC5xdWVzdGlvbi5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCkgIT09IC0xKSB7XG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2ZpbHRlcmRQb3N0cy5tYXAoKHBvc3QpID0+IFxuXHRcdFx0XHRcdDxQb3N0TGlzdEVudHJ5XG5cdFx0XHRcdCAgICBrZXk9e3Bvc3QuaWR9XG5cdFx0XHRcdCAgICBwb3N0PXtwb3N0fVxuXHRcdFx0XHQgIC8+XG5cdFx0XHRcdCl9ICBcblx0XHRcdDwvZGl2PlxuXHRcdCk7XHQgIFxuXHR9OyAgIFx0XHQgICAgIFx0IFx0XG59O1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSAoZSkge1xuXHRcdHRoaXMucHJvcHMub25TZWFyY2hJbnB1dCh0aGlzLnJlZnMuc2VhcmNoVGV4dElucHV0LnZhbHVlKTsgXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggcXVlc3Rpb25zIGhlcmUhXCJcblx0XHRcdFx0XHR2YWx1ZT0ge3RoaXMucHJvcHMuc2VhcmNoVGV4dH1cblx0XHRcdFx0XHRyZWY9XCJzZWFyY2hUZXh0SW5wdXRcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPSB7dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHQgIDwvZm9ybT5cblx0ICApO1xuXHR9IFxuICBcbn07XG5cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRwb3N0czogW3tpZDogMSwgcXVlc3Rpb246IFwid2hhdCBpZlwiLCBhbnN3ZXI6IFwiaGkgaSBhbSBhbiBhbnN3ZXJcIn0se2lkOiAyLCBxdWVzdGlvbjogXCJoaSBpIGFtIGEgcXVlc3Rpb25cIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9LHtpZDozLCBxdWVzdGlvbjogXCJoaSBpIGFtIGEgcXVlc3Rpb25cIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9LHtpZDo0LHF1ZXN0aW9uOiBcImhpIGkgYW0gYSBxdWVzdGlvblwiLCBhbnN3ZXI6IFwiaGkgaSBhbSBhbiBhbnN3ZXJcIn1dLFxuICAgICAgc2VhcmNoVGV4dDogJycsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaElucHV0IChzZWFyY2hUZXh0KSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0XHRzZWFyY2hUZXh0OiBzZWFyY2hUZXh0XG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8U2VhcmNoQmFyIFxuXHRcdFx0XHRcdFx0b25TZWFyY2hJbnB1dD17dGhpcy5oYW5kbGVTZWFyY2hJbnB1dC5iaW5kKHRoaXMpfVxuXHRcdFx0XHQgICAgc2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0XHQgIC8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdFx0ICA8ZGl2PlxuXHRcdFx0ICBcdDxQb3N0TGlzdCBcblx0XHRcdCAgXHRwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c31cblx0XHRcdCAgXHRzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHQgICAgLz5cblx0XHRcdCAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQpOyAgXG5cdH0gICBcbn1cblxudmFyIE5hdiA9ICh7bG9naW5DbGlja2VkLCBwb3N0Q2xpY2tlZH0pID0+IChcblx0PG5hdj5cdFx0XG4gIFx0PHVsPlxuICBcdFx0PGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cbiAgICAgIDxsaT48TGluayB0bz1cImxvZ2luXCI+TG9naW48L0xpbms+PC9saT4gICAgXG4gICAgICA8bGk+PExpbmsgdG89XCJwb3N0XCI+QXNrIFlvdXIgT3duIFF1ZXN0aW9uPC9MaW5rPjwvbGk+ICAgIFxuICAgIDwvdWw+XG5cdDwvbmF2PlxuKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQgIDxkaXY+XG5cdFx0ICAgIDxkaXY+XG5cdFx0ICAgXHQgIDxOYXYgLz5cblx0XHQgICAgPC9kaXY+XG5cdFx0ICAgIDxkaXY+XG5cdFx0ICAgIFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTtcblx0fVx0XG59XG4iXX0=