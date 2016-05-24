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
				{ className: 'container-fluid' },
				React.createElement(
					'h1',
					{ id: 'heading' },
					'Ask me!'
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
						'label',
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
			'h3',
			null,
			post.question
		),
		React.createElement(
			'blockquote',
			null,
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
					className: 'form-control',
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
					React.createElement(
						'h2',
						null,
						'Hi, my name is Jinsoo Cha.'
					),
					React.createElement(
						'p',
						null,
						'I am a full stack developer in San Francisco, focusing on Javascript technologies. Ask me about life in SF as a software engineer! I would be happy to share my experiences.'
					),
					React.createElement('hr', null)
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
		'div',
		null,
		React.createElement(
			'nav',
			null,
			React.createElement(
				'button',
				{ className: 'btn btn-default navbar-btn pull-right' },
				React.createElement(
					Link,
					{ to: 'login' },
					'Login'
				)
			),
			React.createElement(
				'ul',
				{ className: 'nav nav-tabs' },
				React.createElement(
					'li',
					{ role: 'presentation' },
					React.createElement(
						Link,
						{ to: '/' },
						'Home'
					)
				),
				React.createElement(
					'li',
					{ role: 'presentation' },
					React.createElement(
						Link,
						{ to: 'post' },
						'Ask Your Own Question'
					)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZO0FBQUEsUUFDZjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBREQsRUFEZTtBQUFBLENBQWhCOztJQVFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwyRkFDWixLQURZOztBQUVsQixTQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sTUFETTtBQUVaLFlBQVM7QUFGRyxHQUFiO0FBRmtCO0FBTWxCOzs7OzBDQUV3QixNLEVBQVE7QUFDOUIsT0FBSSxjQUFjLEVBQWxCO0FBQ0EsUUFBSSxJQUFJLFFBQVIsSUFBb0IsTUFBcEI7QUFDRSxRQUFJLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ25DLGlCQUFZLElBQVosQ0FBaUIsbUJBQW1CLFFBQW5CLElBQStCLEdBQS9CLEdBQXFDLG1CQUFtQixPQUFPLFFBQVAsQ0FBbkIsQ0FBdEQ7QUFDRDtBQUhILElBSUEsT0FBTyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBUDtBQUNEOzs7aUNBRWM7QUFDZixXQUFRLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLE9BQUksV0FBVztBQUNYLFVBQU0sU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLElBQS9CLEVBQXFDLEtBRGhDO0FBRVgsV0FBTyxTQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsS0FBL0IsRUFBc0MsS0FGbEM7QUFHWCxjQUFVLFNBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxRQUEvQixFQUF5QyxLQUh4QztBQUlYLG9CQUFnQixTQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsWUFBL0IsRUFBNkM7QUFKbEQsSUFBZjs7QUFPRSxPQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxPQUFJLFFB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QVBGO0lBZ0JFO0FBQUE7S0FBQTtLQUNDLG9CQUFDLFFBQUQ7QUFDQSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBRGxCO0FBRUEsa0JBQVksS0FBSyxLQUFMLENBQVc7QUFGdkI7QUFERDtBQWhCRixJQUREO0FBeUJBOzs7O0VBekNpQixNQUFNLFM7O0FBNEN6QixJQUFJLE1BQU0sU0FBTixHQUFNO0FBQUEsS0FBRSxZQUFGLFNBQUUsWUFBRjtBQUFBLEtBQWdCLFdBQWhCLFNBQWdCLFdBQWhCO0FBQUEsUUFDVDtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FDRTtBQUFBO0lBQUEsRUFBUSxXQUFVLHVDQUFsQjtJQUEwRDtBQUFDLFNBQUQ7S0FBQSxFQUFNLElBQUcsT0FBVDtLQUFBO0FBQUE7QUFBMUQsSUFERjtHQUVDO0FBQUE7SUFBQSxFQUFJLFdBQVUsY0FBZDtJQUNDO0FBQUE7S0FBQSxFQUFJLE1BQUssY0FBVDtLQUF3QjtBQUFDLFVBQUQ7TUFBQSxFQUFNLElBQUcsR0FBVDtNQUFBO0FBQUE7QUFBeEIsS0FERDtJQUVHO0FBQUE7S0FBQSxFQUFJLE1BQUssY0FBVDtLQUF3QjtBQUFDLFVBQUQ7TUFBQSxFQUFNLElBQUcsTUFBVDtNQUFBO0FBQUE7QUFBeEI7QUFGSDtBQUZEO0FBREQsRUFEUztBQUFBLENBQVY7O0lBWU0sRzs7O0FBQ0osY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0ZBQ1gsS0FEVztBQUVsQjs7OzsyQkFFUTtBQUNULFVBQ0U7QUFBQTtJQUFBO0lBQ0U7QUFBQTtLQUFBO0tBQ0Usb0JBQUMsR0FBRDtBQURGLEtBREY7SUFJRTtBQUFBO0tBQUE7S0FDRSxLQUFLLEtBQUwsQ0FBVztBQURiO0FBSkYsSUFERjtBQVVBOzs7O0VBaEJnQixNQUFNLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE93bmVyVmlldyA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8cD5cblx0XHRVbmRlciBDb25zdHJ1Y3Rpb25cblx0XHQ8L3A+XG5cdDwvZGl2PlxuKTtcblxuY2xhc3MgUG9zdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dHlwZTogJ2luZm8nLFxuXHRcdFx0bWVzc2FnZTogJydcblx0XHR9O1xuXHR9XG5cblx0cmVxdWVzdEJ1aWxkUXVlcnlTdHJpbmcgKHBhcmFtcykge1xuICAgIHZhciBxdWVyeVN0cmluZyA9IFtdO1xuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gcGFyYW1zKVxuICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgcXVlcnlTdHJpbmcucHVzaChlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1twcm9wZXJ0eV0pKTtcbiAgICAgIH1cbiAgICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbignJicpO1xuICB9XG5cblx0c2VuZEZvcm1EYXRhICgpIHtcblx0XHRjb25zb2xlLmxvZyhcInNlbmRpbmcgdGhlIGZvcm0gdG8gdGhlIHNlcnZlclwiKVxuXHRcdHZhciBmb3JtRGF0YSA9IHtcbiAgICAgIG5hbWU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5uYW1lKS52YWx1ZSxcbiAgICAgIGVtYWlsOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZW1haWwpLnZhbHVlLFxuICAgICAgcXVlc3Rpb246IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5xdWVzdGlvbikudmFsdWUsXG4gICAgICBlbWFpbFJlcXVlc3RlZDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmVtYWlsUmVxdWVzdCkuY2hlY2tlZFxuICAgIH07XG5cbiAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnSSBoYXZlIHJlY2VpdmVkIHlvdXIgcXVlc3Rpb24uIFRoYW5rcyEnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdTb3JyeSwgdGhlcmUgaGFzIGJlZW4gYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgeG1saHR0cC5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2ZXInLCB0cnVlKTtcbiAgICB4bWxodHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB4bWxodHRwLnNlbmQodGhpcy5yZXF1ZXN0QnVpbGRRdWVyeVN0cmluZyhmb3JtRGF0YSkpO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0IChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgXHR0aGlzLnNldFN0YXRlKHsgXG4gIFx0XHR0eXBlOiAnaW5mbycsIFxuICBcdFx0bWVzc2FnZTogJ1NlbmRpbmcuLi4nIFxuICBcdH0sIHRoaXMuc2VuZEZvcm1EYXRhLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS50eXBlICYmIHRoaXMuc3RhdGUubWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS50eXBlLCBcIixcIix0aGlzLnN0YXRlLm1lc3NhZ2UpXG5cdCAgICB2YXIgY2xhc3NTdHJpbmcgPSAnYWxlcnQgYWxlcnQtJyArIHRoaXMuc3RhdGUudHlwZTtcblx0ICAgIHZhciBzdGF0dXMgPSA8ZGl2IGlkPVwic3RhdHVzXCIgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30gcmVmPVwic3RhdHVzXCI+XG5cdCAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuXHQgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgXHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHQgXHRcdDxoMSBpZD1cImhlYWRpbmdcIj5Bc2sgbWUhPC9oMT5cbiAgICAgIFx0e3N0YXR1c31cblx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBmdWxsIG5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZWY9XCJuYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgZW1haWwgYWRkcmVzcyB0byByZWNlaXZlIHRoZSBhbnN3ZXIgaW4gY2FzZSBpdCBpcyBzZW50IHByaXZhdGVseSAqPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiByZWY9XCJlbWFpbFwiIHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8bGFiZWw+V291bGQgeW91IGxpa2UgdG8gcmVjZWl2ZSB0aGUgYW5zd2VyIHByaXZhdGVseSBpZiB0aGUgb3duZXIgZGVjaWRlcyBub3QgdG8gcG9zdCB0aGUgYW5zd2VyPyA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCBuYW1lPVwiZW1haWxSZXF1ZXN0XCIgcmVmPVwiZW1haWxSZXF1ZXN0XCIgdHlwZT1cImNoZWNrYm94XCIgLz5ZZXM8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblwiPllvdXIgcXVlc3Rpb24gKjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInF1ZXN0aW9uXCIgcmVmPVwicXVlc3Rpb25cIiByb3dzPVwiNFwiIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlNlbmQgeW91ciBxdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXHR9ICAgXG59O1xuXG5cbnZhciBQb3N0TGlzdEVudHJ5ID0gKHtwb3N0fSkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxoMz5cblx0XHR7cG9zdC5xdWVzdGlvbn1cblx0XHQ8L2gzPlxuXHRcdDxibG9ja3F1b3RlPlxuXHRcdHtwb3N0LmFuc3dlcn1cblx0XHQ8L2Jsb2NrcXVvdGU+XG5cdDwvZGl2PlxuKTtcblxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIGZpbHRlcmRQb3N0cyA9IFtdO1xuXHRcdHRoaXMucHJvcHMucG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuXHRcdFx0aWYocG9zdC5xdWVzdGlvbi5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCkgIT09IC0xKSB7XG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2ZpbHRlcmRQb3N0cy5tYXAoKHBvc3QpID0+IFxuXHRcdFx0XHRcdDxQb3N0TGlzdEVudHJ5XG5cdFx0XHRcdCAgICBrZXk9e3Bvc3QuaWR9XG5cdFx0XHRcdCAgICBwb3N0PXtwb3N0fVxuXHRcdFx0XHQgIC8+XG5cdFx0XHRcdCl9ICBcblx0XHRcdDwvZGl2PlxuXHRcdCk7XHQgIFxuXHR9OyAgIFx0XHQgICAgIFx0IFx0XG59O1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSAoZSkge1xuXHRcdHRoaXMucHJvcHMub25TZWFyY2hJbnB1dCh0aGlzLnJlZnMuc2VhcmNoVGV4dElucHV0LnZhbHVlKTsgXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBxdWVzdGlvbnMgaGVyZSFcIlxuXHRcdFx0XHRcdHZhbHVlPSB7dGhpcy5wcm9wcy5zZWFyY2hUZXh0fVxuXHRcdFx0XHRcdHJlZj1cInNlYXJjaFRleHRJbnB1dFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHQvPlxuXHRcdCAgPC9mb3JtPlxuXHQgICk7XG5cdH0gXG4gIFxufTtcblxuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdHBvc3RzOiBbe2lkOiAxLCBxdWVzdGlvbjogXCJ3aGF0IGlmXCIsIGFuc3dlcjogXCJoaSBpIGFtIGFuIGFuc3dlclwifSx7aWQ6IDIsIHF1ZXN0aW9uOiBcImhpIGkgYW0gYSBxdWVzdGlvblwiLCBhbnN3ZXI6IFwiaGkgaSBhbSBhbiBhbnN3ZXJcIn0se2lkOjMsIHF1ZXN0aW9uOiBcImhpIGkgYW0gYSBxdWVzdGlvblwiLCBhbnN3ZXI6IFwiaGkgaSBhbSBhbiBhbnN3ZXJcIn0se2lkOjQscXVlc3Rpb246IFwiaGkgaSBhbSBhIHF1ZXN0aW9uXCIsIGFuc3dlcjogXCJoaSBpIGFtIGFuIGFuc3dlclwifV0sXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoSW5wdXQgKHNlYXJjaFRleHQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHRcdHNlYXJjaFRleHQ6IHNlYXJjaFRleHRcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0XHRvblNlYXJjaElucHV0PXt0aGlzLmhhbmRsZVNlYXJjaElucHV0LmJpbmQodGhpcyl9XG5cdFx0XHRcdCAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHRcdCAgLz5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQgIDxkaXY+XG5cdFx0XHQgIFx0PGgyPlxuXHRcdFx0ICBcdEhpLCBteSBuYW1lIGlzIEppbnNvbyBDaGEuXG5cdFx0XHQgIFx0PC9oMj5cblx0XHRcdCAgXHQ8cD5cblx0XHRcdCAgXHRJIGFtIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIgaW4gU2FuIEZyYW5jaXNjbywgZm9jdXNpbmcgb24gSmF2YXNjcmlwdCB0ZWNobm9sb2dpZXMuIEFzayBtZSBhYm91dCBsaWZlIGluIFNGIGFzIGEgc29mdHdhcmUgZW5naW5lZXIhIEkgd291bGQgYmUgaGFwcHkgdG8gc2hhcmUgbXkgZXhwZXJpZW5jZXMuXG5cdFx0XHQgIFx0PC9wPlxuXHRcdFx0ICBcdDxoci8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdFx0ICA8ZGl2PlxuXHRcdFx0ICBcdDxQb3N0TGlzdCBcblx0XHRcdCAgXHRwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c31cblx0XHRcdCAgXHRzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHQgICAgLz5cblx0XHRcdCAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQpOyAgXG5cdH0gICBcbn1cblxudmFyIE5hdiA9ICh7bG9naW5DbGlja2VkLCBwb3N0Q2xpY2tlZH0pID0+IChcblx0PGRpdj5cblx0XHQ8bmF2PlxuXHQgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgbmF2YmFyLWJ0biBwdWxsLXJpZ2h0XCI+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvYnV0dG9uPiAgICAgICAgXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XG5cdFx0XHRcdDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxuXHRcdCAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxMaW5rIHRvPVwicG9zdFwiPkFzayBZb3VyIE93biBRdWVzdGlvbjwvTGluaz48L2xpPlxuXHRcdCAgPC91bD4gICBcblx0XHQ8L25hdj5cbiAgPC9kaXY+XG4pXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdCAgPGRpdj5cblx0XHQgICAgPGRpdj5cblx0XHQgICBcdCAgPE5hdiAvPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGRpdj5cblx0XHQgICAgXHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHQgICAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQpO1xuXHR9XHRcbn1cbiJdfQ==