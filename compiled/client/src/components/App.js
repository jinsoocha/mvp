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
		key: 'sendFormData',
		value: function sendFormData() {
			console.log("sending the form to the server");
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			document.getElementById('heading').scrollIntoView();
			this.setState({
				type: 'info',
				message: 'Thank you! I have received your question.'
			}, this.sendFormData.bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.type && this.state.message) {
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
							React.createElement('input', { name: 'areas', ref: 'areas', type: 'checkbox', value: 'EmailRequest' }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZO0FBQUEsUUFDZjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBREQsRUFEZTtBQUFBLENBQWhCOztJQVFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sTUFETTtBQUVaLFlBQVM7QUFGRyxHQUFiO0FBRmtCO0FBTWxCOzs7O2lDQUVlO0FBQ2YsV0FBUSxHQUFSLENBQVksZ0NBQVo7QUFDQTs7OytCQUVhLEMsRUFBRztBQUNoQixLQUFFLGNBQUY7QUFDQSxZQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDQyxRQUFLLFFBQUwsQ0FBYztBQUNiLFVBQU0sTUFETztBQUViLGFBQVM7QUFGSSxJQUFkLEVBR0csS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBSEg7QUFJRDs7OzJCQUVTO0FBQ1QsT0FBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEtBQUssS0FBTCxDQUFXLE9BQWxDLEVBQTJDO0FBQ3hDLFFBQUksY0FBYyxpQkFBaUIsS0FBSyxLQUFMLENBQVcsSUFBOUM7QUFDQSxRQUFJLFNBQVM7QUFBQTtLQUFBLEVBQUssSUFBRyxRQUFSLEVBQWlCLFdBQVcsV0FBNUIsRUFBeUMsS0FBSSxRQUE3QztLQUNHLEtBQUssS0FBTCxDQUFXO0FBRGQsS0FBYjtBQUdEOztBQUVGLFVBQ0M7QUFBQTtJQUFBO0lBQ0U7QUFBQTtLQUFBLEVBQUksSUFBRyxTQUFQO0tBQUE7QUFBQSxLQURGO0lBRUssTUFGTDtJQUdDO0FBQUE7S0FBQSxFQUFNLFFBQU8sRUFBYixFQUFnQixVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJ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QUFKLElBREQ7R0FFRztBQUFBO0lBQUE7SUFBSTtBQUFDLFNBQUQ7S0FBQSxFQUFNLElBQUcsT0FBVDtLQUFBO0FBQUE7QUFBSixJQUZIO0dBR0c7QUFBQTtJQUFBO0lBQUk7QUFBQyxTQUFEO0tBQUEsRUFBTSxJQUFHLE1BQVQ7S0FBQTtBQUFBO0FBQUo7QUFISDtBQURGLEVBRFM7QUFBQSxDQUFWOztJQVVNLEc7OztBQUNKLGNBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLGdGQUNYLEtBRFc7QUFFbEI7Ozs7MkJBRVE7QUFDVCxVQUNFO0FBQUE7SUFBQTtJQUNFO0FBQUE7S0FBQTtLQUNFLG9CQUFDLEdBQUQ7QUFERixLQURGO0lBSUU7QUFBQTtLQUFBO0tBQ0UsS0FBSyxLQUFMLENBQVc7QUFEYjtBQUpGLElBREY7QUFVQTs7OztFQWhCZ0IsTUFBTSxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBPd25lclZpZXcgPSAoKSA9PiAoXG5cdDxkaXY+XG5cdFx0PHA+XG5cdFx0SGkgdGhpcyBpcyB0aGUgb3duZXJWaWV3IVxuXHRcdDwvcD5cblx0PC9kaXY+XG4pO1xuXG5jbGFzcyBQb3N0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiAnaW5mbycsXG5cdFx0XHRtZXNzYWdlOiAnJ1xuXHRcdH07XG5cdH1cblxuXHRzZW5kRm9ybURhdGEgKCkge1xuXHRcdGNvbnNvbGUubG9nKFwic2VuZGluZyB0aGUgZm9ybSB0byB0aGUgc2VydmVyXCIpXG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmcnKS5zY3JvbGxJbnRvVmlldygpO1xuICBcdHRoaXMuc2V0U3RhdGUoeyBcbiAgXHRcdHR5cGU6ICdpbmZvJywgXG4gIFx0XHRtZXNzYWdlOiAnVGhhbmsgeW91ISBJIGhhdmUgcmVjZWl2ZWQgeW91ciBxdWVzdGlvbi4nIFxuICBcdH0sIHRoaXMuc2VuZEZvcm1EYXRhLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS50eXBlICYmIHRoaXMuc3RhdGUubWVzc2FnZSkge1xuXHQgICAgdmFyIGNsYXNzU3RyaW5nID0gJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLnN0YXRlLnR5cGU7XG5cdCAgICB2YXIgc3RhdHVzID0gPGRpdiBpZD1cInN0YXR1c1wiIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmd9IHJlZj1cInN0YXR1c1wiPlxuXHQgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cblx0ICAgICAgICAgICAgICAgICA8L2Rpdj47XG4gIFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0IFx0XHQ8aDEgaWQ9XCJoZWFkaW5nXCI+VGVsbCBtZSB3aGF0IHlvdSBhcmUgY3VyaW91cyBhYm91dCBtZTwvaDE+XG4gICAgICBcdHtzdGF0dXN9XG5cdFx0XHRcdDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgZnVsbCBuYW1lICo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJuYW1lXCIgcmVmPVwibmFtZVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIGVtYWlsIGFkZHJlc3MgdG8gcmVjZWl2ZSB0aGUgYW5zd2VyIGluIGNhc2UgaXQgaXMgc2VudCBwcml2YXRlbHkgKjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcmVmPVwiZW1haWxcIiByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgzPldvdWxkIHlvdSBsaWtlIHRvIHJlY2VpdmUgdGhlIGFuc3dlciBwcml2YXRlbHkgaWYgdGhlIG93bmVyIGRlY2lkZXMgbm90IHRvIHBvc3QgdGhlIGFuc3dlcj8gKjwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IG5hbWU9XCJhcmVhc1wiIHJlZj1cImFyZWFzXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJFbWFpbFJlcXVlc3RcIiAvPlllczwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRlbnRzXCI+WW91ciBxdWVzdGlvbiAqPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiY29udGVudHNcIiByZWY9XCJjb250ZW50c1wiIHJvd3M9XCI0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlNlbmQgeW91ciBxdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXHR9ICAgXG59O1xuXG5cbnZhciBQb3N0TGlzdEVudHJ5ID0gKHtwb3N0fSkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxwPlxuXHRcdFE6IHtwb3N0LnF1ZXN0aW9ufVxuXHRcdDwvcD5cblx0XHQ8cD5cblx0XHRBOiB7cG9zdC5hbnN3ZXJ9XG5cdFx0PC9wPlxuXHQ8L2Rpdj5cbik7XG5cbmNsYXNzIFBvc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHZhciBmaWx0ZXJkUG9zdHMgPSBbXTtcblx0XHR0aGlzLnByb3BzLnBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcblx0XHRcdGlmKHBvc3QucXVlc3Rpb24uaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaFRleHQpICE9PSAtMSkge1xuXHRcdFx0XHRmaWx0ZXJkUG9zdHMucHVzaChwb3N0KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtmaWx0ZXJkUG9zdHMubWFwKChwb3N0KSA9PiBcblx0XHRcdFx0XHQ8UG9zdExpc3RFbnRyeVxuXHRcdFx0XHQgICAga2V5PXtwb3N0LmlkfVxuXHRcdFx0XHQgICAgcG9zdD17cG9zdH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHQpfSAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1x0ICBcblx0fTsgICBcdFx0ICAgICBcdCBcdFxufTtcblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgKGUpIHtcblx0XHR0aGlzLnByb3BzLm9uU2VhcmNoSW5wdXQodGhpcy5yZWZzLnNlYXJjaFRleHRJbnB1dC52YWx1ZSk7IFxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIHF1ZXN0aW9ucyBoZXJlIVwiXG5cdFx0XHRcdFx0dmFsdWU9IHt0aGlzLnByb3BzLnNlYXJjaFRleHR9XG5cdFx0XHRcdFx0cmVmPVwic2VhcmNoVGV4dElucHV0XCJcblx0XHRcdFx0XHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cdFx0ICA8L2Zvcm0+XG5cdCAgKTtcblx0fSBcbiAgXG59O1xuXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0cG9zdHM6IFt7aWQ6IDEsIHF1ZXN0aW9uOiBcIndoYXQgaWZcIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9LHtpZDogMiwgcXVlc3Rpb246IFwiaGkgaSBhbSBhIHF1ZXN0aW9uXCIsIGFuc3dlcjogXCJoaSBpIGFtIGFuIGFuc3dlclwifSx7aWQ6MywgcXVlc3Rpb246IFwiaGkgaSBhbSBhIHF1ZXN0aW9uXCIsIGFuc3dlcjogXCJoaSBpIGFtIGFuIGFuc3dlclwifSx7aWQ6NCxxdWVzdGlvbjogXCJoaSBpIGFtIGEgcXVlc3Rpb25cIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9XSxcbiAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWFyY2hJbnB1dCAoc2VhcmNoVGV4dCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdFx0c2VhcmNoVGV4dDogc2VhcmNoVGV4dFxuICBcdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRcdG9uU2VhcmNoSW5wdXQ9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdFx0ICAgIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdCAgPGRpdj5cblx0XHRcdCAgXHQ8UG9zdExpc3QgXG5cdFx0XHQgIFx0cG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9XG5cdFx0XHQgIFx0c2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0ICAgIC8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTsgIFxuXHR9ICAgXG59XG5cbnZhciBOYXYgPSAoe2xvZ2luQ2xpY2tlZCwgcG9zdENsaWNrZWR9KSA9PiAoXG5cdDxuYXY+XHRcdFxuICBcdDx1bD5cbiAgXHRcdDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+ICAgIFxuICAgICAgPGxpPjxMaW5rIHRvPVwicG9zdFwiPkFzayBZb3VyIE93biBRdWVzdGlvbjwvTGluaz48L2xpPiAgICBcbiAgICA8L3VsPlxuXHQ8L25hdj5cbilcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0ICA8ZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgIFx0ICA8TmF2IC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdCAgICA8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCk7XG5cdH1cdFxufVxuIl19