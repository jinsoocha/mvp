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
			'Hi this is the ownerView!'
		)
	);
};

var PostView = function (_React$Component) {
	_inherits(PostView, _React$Component);

	function PostView(props) {
		_classCallCheck(this, PostView);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PostView).call(this, props));

		_this.state = {
			type: 'info',
			message: ''
		};
		return _this;
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
			// var formData = {
			//     name: React.findDOMNode(this.refs.name).value,
			//     email: React.findDOMNode(this.refs.email).value,
			//     contents: React.findDOMNode(this.refs.contents).value,
			//     emailRequested: React.findDOMNode(this.refs.emailRequest).checked
			//   };

			//   // Send the form data.
			//   var xmlhttp = new XMLHttpRequest();
			//   var _this = this;
			//   xmlhttp.onreadystatechange = function() {
			//     if (xmlhttp.readyState === 4) {
			//       var response = JSON.parse(xmlhttp.responseText);
			//       if (xmlhttp.status === 200 && response.status === 'OK') {
			//         _this.setState({ type: 'success', message: 'I have received your question. Thanks!' });
			//       }
			//       else {
			//         _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later.' });
			//       }
			//     }
			//   };
			//   xmlhttp.open('POST', 'send', true);
			//   xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			//   xmlhttp.send(this.requestBuildQueryString(formData));
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
						'Would you like to receive the answer privately if the owner decides not to post the answer? *'
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
							{ htmlFor: 'contents' },
							'Your question *'
						),
						React.createElement('textarea', { className: 'form-control', name: 'contents', ref: 'contents', rows: '4' })
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
			var _this3 = this;

			var filterdPosts = [];
			this.props.posts.forEach(function (post) {
				if (post.question.indexOf(_this3.props.searchText) !== -1) {
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

		var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

		_this5.state = {
			posts: [{ id: 1, question: "what if", answer: "hi i am an answer" }, { id: 2, question: "hi i am a question", answer: "hi i am an answer" }, { id: 3, question: "hi i am a question", answer: "hi i am an answer" }, { id: 4, question: "hi i am a question", answer: "hi i am an answer" }],
			searchText: ''
		};
		return _this5;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZO0FBQUEsUUFDZjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBREQsRUFEZTtBQUFBLENBQWhCOztJQVFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sTUFETTtBQUVaLFlBQVM7QUFGRyxHQUFiO0FBRmtCO0FBTWxCOzs7OzBDQUV3QixNLEVBQVE7QUFDOUIsT0FBSSxjQUFjLEVBQWxCO0FBQ0EsUUFBSSxJQUFJLFFBQVIsSUFBb0IsTUFBcEI7QUFDRSxRQUFJLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ25DLGlCQUFZLElBQVosQ0FBaUIsbUJBQW1CLFFBQW5CLElBQStCLEdBQS9CLEdBQXFDLG1CQUFtQixPQUFPLFFBQVAsQ0FBbkIsQ0FBdEQ7QUFDRDtBQUhILElBSUEsT0FBTyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBUDtBQUNEOzs7aUNBRWM7QUFDZixXQUFRLEdBQVIsQ0FBWSxnQ0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTs7OytCQUVhLEMsRUFBRztBQUNoQixLQUFFLGNBQUY7QUFDQSxZQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDQyxRQUFLLFFBQUwsQ0FBYztBQUNiLFVBQU0sTUFETztBQUViLGFBQVM7QUFGSSxJQUFkLEVBR0csS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBSEg7QUFJRDs7OzJCQUVTO0FBQ1QsT0FBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEtBQUssS0FBTCxDQUFXLE9BQWxDLEVBQTJDO0FBQzFDLFlBQVEsR0FBUixDQUFZLEtBQUss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S0FBTCxDQUFXO0FBRjFCO0FBREQsS0FERDtJQU9FO0FBQUE7S0FBQTtLQUNDLG9CQUFDLFFBQUQ7QUFDQSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBRGxCO0FBRUEsa0JBQVksS0FBSyxLQUFMLENBQVc7QUFGdkI7QUFERDtBQVBGLElBREQ7QUFnQkE7Ozs7RUFoQ2lCLE1BQU0sUzs7QUFtQ3pCLElBQUksTUFBTSxTQUFOLEdBQU07QUFBQSxLQUFFLFlBQUYsU0FBRSxZQUFGO0FBQUEsS0FBZ0IsV0FBaEIsU0FBZ0IsV0FBaEI7QUFBQSxRQUNUO0FBQUE7RUFBQTtFQUNFO0FBQUE7R0FBQTtHQUNDO0FBQUE7SUFBQTtJQUFJO0FBQUMsU0FBRDtLQUFBLEVBQU0sSUFBRyxHQUFUO0tBQUE7QUFBQTtBQUFKLElBREQ7R0FFRztBQUFBO0lBQUE7SUFBSTtBQUFDLFNBQUQ7S0FBQSxFQUFNLElBQUcsT0FBVDtLQUFBO0FBQUE7QUFBSixJQUZIO0dBR0c7QUFBQTtJQUFBO0lBQUk7QUFBQyxTQUFEO0tBQUEsRUFBTSxJQUFHLE1BQVQ7S0FBQTtBQUFBO0FBQUo7QUFISDtBQURGLEVBRFM7QUFBQSxDQUFWOztJQVVNLEc7OztBQUNKLGNBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGdGQUNYLEtBRFc7QUFFbEI7Ozs7MkJBRVE7QUFDVCxVQUNFO0FBQUE7SUFBQTtJQUNFO0FBQUE7S0FBQTtLQUNFLG9CQUFDLEdBQUQ7QUFERixLQURGO0lBSUU7QUFBQTtLQUFBO0tBQ0UsS0FBSyxLQUFMLENBQVc7QUFEYjtBQUpGLElBREY7QUFVQTs7OztFQWhCZ0IsTUFBTSxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBPd25lclZpZXcgPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PHA+XG5cdFx0SGkgdGhpcyBpcyB0aGUgb3duZXJWaWV3IVxuXHRcdDwvcD5cblx0PC9kaXY+XG4pO1xuXG5jbGFzcyBQb3N0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiAnaW5mbycsXG5cdFx0XHRtZXNzYWdlOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRyZXF1ZXN0QnVpbGRRdWVyeVN0cmluZyAocGFyYW1zKSB7XG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gW107XG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpXG4gICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBxdWVyeVN0cmluZy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3Byb3BlcnR5XSkpO1xuICAgICAgfVxuICAgIHJldHVybiBxdWVyeVN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuXHRzZW5kRm9ybURhdGEgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwic2VuZGluZyB0aGUgZm9ybSB0byB0aGUgc2VydmVyXCIpXG5cdFx0Ly8gdmFyIGZvcm1EYXRhID0ge1xuICAvLyAgICAgbmFtZTogUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLm5hbWUpLnZhbHVlLFxuICAvLyAgICAgZW1haWw6IFJlYWN0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5lbWFpbCkudmFsdWUsXG4gIC8vICAgICBjb250ZW50czogUmVhY3QuZmluZERPTU5vZGUodGhpcy5yZWZzLmNvbnRlbnRzKS52YWx1ZSxcbiAgLy8gICAgIGVtYWlsUmVxdWVzdGVkOiBSZWFjdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZW1haWxSZXF1ZXN0KS5jaGVja2VkXG4gIC8vICAgfTtcblxuICAvLyAgIC8vIFNlbmQgdGhlIGZvcm0gZGF0YS5cbiAgLy8gICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAvLyAgIHZhciBfdGhpcyA9IHRoaXM7XG4gIC8vICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgLy8gICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgLy8gICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gIC8vICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gJ09LJykge1xuICAvLyAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnSSBoYXZlIHJlY2VpdmVkIHlvdXIgcXVlc3Rpb24uIFRoYW5rcyEnIH0pO1xuICAvLyAgICAgICB9XG4gIC8vICAgICAgIGVsc2Uge1xuICAvLyAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdTb3JyeSwgdGhlcmUgaGFzIGJlZW4gYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyB9KTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH07XG4gIC8vICAgeG1saHR0cC5vcGVuKCdQT1NUJywgJ3NlbmQnLCB0cnVlKTtcbiAgLy8gICB4bWxodHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgLy8gICB4bWxodHRwLnNlbmQodGhpcy5yZXF1ZXN0QnVpbGRRdWVyeVN0cmluZyhmb3JtRGF0YSkpO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0IChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgXHR0aGlzLnNldFN0YXRlKHsgXG4gIFx0XHR0eXBlOiAnaW5mbycsIFxuICBcdFx0bWVzc2FnZTogJ1NlbmRpbmcuLi4nIFxuICBcdH0sIHRoaXMuc2VuZEZvcm1EYXRhLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS50eXBlICYmIHRoaXMuc3RhdGUubWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS50eXBlLCBcIixcIix0aGlzLnN0YXRlLm1lc3NhZ2UpXG5cdCAgICB2YXIgY2xhc3NTdHJpbmcgPSAnYWxlcnQgYWxlcnQtJyArIHRoaXMuc3RhdGUudHlwZTtcblx0ICAgIHZhciBzdGF0dXMgPSA8ZGl2IGlkPVwic3RhdHVzXCIgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30gcmVmPVwic3RhdHVzXCI+XG5cdCAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuXHQgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgXHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHQgXHRcdDxoMSBpZD1cImhlYWRpbmdcIj5UZWxsIG1lIHdoYXQgeW91IGFyZSBjdXJpb3VzIGFib3V0IG1lPC9oMT5cbiAgICAgIFx0e3N0YXR1c31cblx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBmdWxsIG5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZWY9XCJuYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgZW1haWwgYWRkcmVzcyB0byByZWNlaXZlIHRoZSBhbnN3ZXIgaW4gY2FzZSBpdCBpcyBzZW50IHByaXZhdGVseSAqPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiByZWY9XCJlbWFpbFwiIHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDM+V291bGQgeW91IGxpa2UgdG8gcmVjZWl2ZSB0aGUgYW5zd2VyIHByaXZhdGVseSBpZiB0aGUgb3duZXIgZGVjaWRlcyBub3QgdG8gcG9zdCB0aGUgYW5zd2VyPyAqPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgbmFtZT1cImVtYWlsUmVxdWVzdFwiIHJlZj1cImVtYWlsUmVxdWVzdFwiIHR5cGU9XCJjaGVja2JveFwiIC8+WWVzPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudHNcIj5Zb3VyIHF1ZXN0aW9uICo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjb250ZW50c1wiIHJlZj1cImNvbnRlbnRzXCIgcm93cz1cIjRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+U2VuZCB5b3VyIHF1ZXN0aW9uPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cdH0gICBcbn07XG5cblxudmFyIFBvc3RMaXN0RW50cnkgPSAoe3Bvc3R9KSA9PiAoXG5cdDxkaXY+XG5cdFx0PHA+XG5cdFx0UToge3Bvc3QucXVlc3Rpb259XG5cdFx0PC9wPlxuXHRcdDxwPlxuXHRcdEE6IHtwb3N0LmFuc3dlcn1cblx0XHQ8L3A+XG5cdDwvZGl2PlxuKTtcblxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIGZpbHRlcmRQb3N0cyA9IFtdO1xuXHRcdHRoaXMucHJvcHMucG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuXHRcdFx0aWYocG9zdC5xdWVzdGlvbi5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCkgIT09IC0xKSB7XG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2ZpbHRlcmRQb3N0cy5tYXAoKHBvc3QpID0+IFxuXHRcdFx0XHRcdDxQb3N0TGlzdEVudHJ5XG5cdFx0XHRcdCAgICBrZXk9e3Bvc3QuaWR9XG5cdFx0XHRcdCAgICBwb3N0PXtwb3N0fVxuXHRcdFx0XHQgIC8+XG5cdFx0XHRcdCl9ICBcblx0XHRcdDwvZGl2PlxuXHRcdCk7XHQgIFxuXHR9OyAgIFx0XHQgICAgIFx0IFx0XG59O1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSAoZSkge1xuXHRcdHRoaXMucHJvcHMub25TZWFyY2hJbnB1dCh0aGlzLnJlZnMuc2VhcmNoVGV4dElucHV0LnZhbHVlKTsgXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybT5cblx0XHRcdFx0PGlucHV0IFxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggcXVlc3Rpb25zIGhlcmUhXCJcblx0XHRcdFx0XHR2YWx1ZT0ge3RoaXMucHJvcHMuc2VhcmNoVGV4dH1cblx0XHRcdFx0XHRyZWY9XCJzZWFyY2hUZXh0SW5wdXRcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPSB7dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHQgIDwvZm9ybT5cblx0ICApO1xuXHR9IFxuICBcbn07XG5cblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRwb3N0czogW3tpZDogMSwgcXVlc3Rpb246IFwid2hhdCBpZlwiLCBhbnN3ZXI6IFwiaGkgaSBhbSBhbiBhbnN3ZXJcIn0se2lkOiAyLCBxdWVzdGlvbjogXCJoaSBpIGFtIGEgcXVlc3Rpb25cIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9LHtpZDozLCBxdWVzdGlvbjogXCJoaSBpIGFtIGEgcXVlc3Rpb25cIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9LHtpZDo0LHF1ZXN0aW9uOiBcImhpIGkgYW0gYSBxdWVzdGlvblwiLCBhbnN3ZXI6IFwiaGkgaSBhbSBhbiBhbnN3ZXJcIn1dLFxuICAgICAgc2VhcmNoVGV4dDogJycsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaElucHV0IChzZWFyY2hUZXh0KSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0XHRzZWFyY2hUZXh0OiBzZWFyY2hUZXh0XG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8U2VhcmNoQmFyIFxuXHRcdFx0XHRcdFx0b25TZWFyY2hJbnB1dD17dGhpcy5oYW5kbGVTZWFyY2hJbnB1dC5iaW5kKHRoaXMpfVxuXHRcdFx0XHQgICAgc2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0XHQgIC8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdFx0ICA8ZGl2PlxuXHRcdFx0ICBcdDxQb3N0TGlzdCBcblx0XHRcdCAgXHRwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c31cblx0XHRcdCAgXHRzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHQgICAgLz5cblx0XHRcdCAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQpOyAgXG5cdH0gICBcbn1cblxudmFyIE5hdiA9ICh7bG9naW5DbGlja2VkLCBwb3N0Q2xpY2tlZH0pID0+IChcblx0PG5hdj5cdFx0XG4gIFx0PHVsPlxuICBcdFx0PGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cbiAgICAgIDxsaT48TGluayB0bz1cImxvZ2luXCI+TG9naW48L0xpbms+PC9saT4gICAgXG4gICAgICA8bGk+PExpbmsgdG89XCJwb3N0XCI+QXNrIFlvdXIgT3duIFF1ZXN0aW9uPC9MaW5rPjwvbGk+ICAgIFxuICAgIDwvdWw+XG5cdDwvbmF2PlxuKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQgIDxkaXY+XG5cdFx0ICAgIDxkaXY+XG5cdFx0ICAgXHQgIDxOYXYgLz5cblx0XHQgICAgPC9kaXY+XG5cdFx0ICAgIDxkaXY+XG5cdFx0ICAgIFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTtcblx0fVx0XG59XG4iXX0=