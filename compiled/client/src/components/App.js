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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFlBQVksU0FBWixTQUFZO0FBQUEsUUFDZjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBREQsRUFEZTtBQUFBLENBQWhCOztJQVFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWixLQURZOztBQUVsQixRQUFLLEtBQUwsR0FBYTtBQUNaLFNBQU0sTUFETTtBQUVaLFlBQVM7QUFGRyxHQUFiO0FBRmtCO0FBTWxCOzs7O2lDQUVlO0FBQ2YsV0FBUSxHQUFSLENBQVksZ0NBQVo7QUFDQTs7OytCQUVhLEMsRUFBRztBQUNoQixLQUFFLGNBQUY7QUFDQSxZQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDQyxRQUFLLFFBQUwsQ0FBYztBQUNiLFVBQU0sTUFETztBQUViLGFBQVM7QUFGSSxJQUFkLEVBR0csS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBSEg7QUFJRDs7OzJCQUVTO0FBQ1QsT0FBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQW1CLEtBQUssS0FBTCxDQUFXLE9BQWxDLEVBQTJDO0FBQ3hDLFFBQUksY0FBYyxpQkFBaUIsS0FBSyxLQUFMLENBQVcsSUFBOUM7QUFDQSxRQUFJLFNBQVM7QUFBQTtLQUFBLEVBQUssSUFBRyxRQUFSLEVBQWlCLFdBQVcsV0FBNUIsRUFBeUMsS0FBSSxRQUE3QztLQUNHLEtBQUssS0FBTCxDQUFXO0FBRGQsS0FBYjtBQUdEOztBQUVGLFVBQ0M7QUFBQTtJQUFBO0lBQ0U7QUFBQTtLQUFBLEVBQUksSUFBRyxTQUFQO0tBQUE7QUFBQSxLQURGO0lBRUssTUFGTDtJQUdDO0FBQUE7S0FBQSxFQUFNLFFBQU8sRUFBYixFQUFnQixVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJ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QUFBLENBQVY7O0lBVU0sRzs7O0FBQ0osY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0ZBQ1gsS0FEVztBQUVsQjs7OzsyQkFFUTtBQUNULFVBQ0U7QUFBQTtJQUFBO0lBQ0U7QUFBQTtLQUFBO0tBQ0Usb0JBQUMsR0FBRDtBQURGLEtBREY7SUFJRTtBQUFBO0tBQUE7S0FDRSxLQUFLLEtBQUwsQ0FBVztBQURiO0FBSkYsSUFERjtBQVVBOzs7O0VBaEJnQixNQUFNLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE93bmVyVmlldyA9ICgpID0+IChcblx0PGRpdj5cblx0XHQ8cD5cblx0XHRIaSB0aGlzIGlzIHRoZSBvd25lclZpZXchXG5cdFx0PC9wPlxuXHQ8L2Rpdj5cbik7XG5cbmNsYXNzIFBvc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHR5cGU6ICdpbmZvJyxcblx0XHRcdG1lc3NhZ2U6ICcnXG5cdFx0fTtcblx0fVxuXG5cdHNlbmRGb3JtRGF0YSAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJzZW5kaW5nIHRoZSBmb3JtIHRvIHRoZSBzZXJ2ZXJcIilcblx0fVxuXG5cdGhhbmRsZVN1Ym1pdCAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGluZycpLnNjcm9sbEludG9WaWV3KCk7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7IFxuICBcdFx0dHlwZTogJ2luZm8nLCBcbiAgXHRcdG1lc3NhZ2U6ICdUaGFuayB5b3UhIEkgaGF2ZSByZWNlaXZlZCB5b3VyIHF1ZXN0aW9uLicgXG4gIFx0fSwgdGhpcy5zZW5kRm9ybURhdGEuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnR5cGUgJiYgdGhpcy5zdGF0ZS5tZXNzYWdlKSB7XG5cdCAgICB2YXIgY2xhc3NTdHJpbmcgPSAnYWxlcnQgYWxlcnQtJyArIHRoaXMuc3RhdGUudHlwZTtcblx0ICAgIHZhciBzdGF0dXMgPSA8ZGl2IGlkPVwic3RhdHVzXCIgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30gcmVmPVwic3RhdHVzXCI+XG5cdCAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuXHQgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgXHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHQgXHRcdDxoMSBpZD1cImhlYWRpbmdcIj5UZWxsIG1lIHdoYXQgeW91IGFyZSBjdXJpb3VzIGFib3V0IG1lPC9oMT5cbiAgICAgIFx0e3N0YXR1c31cblx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBmdWxsIG5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZWY9XCJuYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgZW1haWwgYWRkcmVzcyB0byByZWNlaXZlIHRoZSBhbnN3ZXIgaW4gY2FzZSBpdCBpcyBzZW50IHByaXZhdGVseSAqPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiByZWY9XCJlbWFpbFwiIHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDM+V291bGQgeW91IGxpa2UgdG8gcmVjZWl2ZSB0aGUgYW5zd2VyIHByaXZhdGVseSBpZiB0aGUgb3duZXIgZGVjaWRlcyBub3QgdG8gcG9zdCB0aGUgYW5zd2VyPyAqPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgbmFtZT1cImFyZWFzXCIgcmVmPVwiYXJlYXNcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIkVtYWlsUmVxdWVzdFwiIC8+WWVzPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlNlbmQgeW91ciBxdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXHR9ICAgXG59O1xuXG5cbnZhciBQb3N0TGlzdEVudHJ5ID0gKHtwb3N0fSkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxwPlxuXHRcdFE6IHtwb3N0LnF1ZXN0aW9ufVxuXHRcdDwvcD5cblx0XHQ8cD5cblx0XHRBOiB7cG9zdC5hbnN3ZXJ9XG5cdFx0PC9wPlxuXHQ8L2Rpdj5cbik7XG5cbmNsYXNzIFBvc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHZhciBmaWx0ZXJkUG9zdHMgPSBbXTtcblx0XHR0aGlzLnByb3BzLnBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcblx0XHRcdGlmKHBvc3QucXVlc3Rpb24uaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaFRleHQpICE9PSAtMSkge1xuXHRcdFx0XHRmaWx0ZXJkUG9zdHMucHVzaChwb3N0KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtmaWx0ZXJkUG9zdHMubWFwKChwb3N0KSA9PiBcblx0XHRcdFx0XHQ8UG9zdExpc3RFbnRyeVxuXHRcdFx0XHQgICAga2V5PXtwb3N0LmlkfVxuXHRcdFx0XHQgICAgcG9zdD17cG9zdH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHQpfSAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1x0ICBcblx0fTsgICBcdFx0ICAgICBcdCBcdFxufTtcblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgKGUpIHtcblx0XHR0aGlzLnByb3BzLm9uU2VhcmNoSW5wdXQodGhpcy5yZWZzLnNlYXJjaFRleHRJbnB1dC52YWx1ZSk7IFxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIHF1ZXN0aW9ucyBoZXJlIVwiXG5cdFx0XHRcdFx0dmFsdWU9IHt0aGlzLnByb3BzLnNlYXJjaFRleHR9XG5cdFx0XHRcdFx0cmVmPVwic2VhcmNoVGV4dElucHV0XCJcblx0XHRcdFx0XHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cdFx0ICA8L2Zvcm0+XG5cdCAgKTtcblx0fSBcbiAgXG59O1xuXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIFx0cG9zdHM6IFt7aWQ6IDEsIHF1ZXN0aW9uOiBcIndoYXQgaWZcIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9LHtpZDogMiwgcXVlc3Rpb246IFwiaGkgaSBhbSBhIHF1ZXN0aW9uXCIsIGFuc3dlcjogXCJoaSBpIGFtIGFuIGFuc3dlclwifSx7aWQ6MywgcXVlc3Rpb246IFwiaGkgaSBhbSBhIHF1ZXN0aW9uXCIsIGFuc3dlcjogXCJoaSBpIGFtIGFuIGFuc3dlclwifSx7aWQ6NCxxdWVzdGlvbjogXCJoaSBpIGFtIGEgcXVlc3Rpb25cIiwgYW5zd2VyOiBcImhpIGkgYW0gYW4gYW5zd2VyXCJ9XSxcbiAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVTZWFyY2hJbnB1dCAoc2VhcmNoVGV4dCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdFx0c2VhcmNoVGV4dDogc2VhcmNoVGV4dFxuICBcdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRcdG9uU2VhcmNoSW5wdXQ9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdFx0ICAgIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdCAgPGRpdj5cblx0XHRcdCAgXHQ8UG9zdExpc3QgXG5cdFx0XHQgIFx0cG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9XG5cdFx0XHQgIFx0c2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0ICAgIC8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTsgIFxuXHR9ICAgXG59XG5cbnZhciBOYXYgPSAoe2xvZ2luQ2xpY2tlZCwgcG9zdENsaWNrZWR9KSA9PiAoXG5cdDxuYXY+XHRcdFxuICBcdDx1bD5cbiAgXHRcdDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICA8bGk+PExpbmsgdG89XCJsb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+ICAgIFxuICAgICAgPGxpPjxMaW5rIHRvPVwicG9zdFwiPkFzayBZb3VyIE93biBRdWVzdGlvbjwvTGluaz48L2xpPiAgICBcbiAgICA8L3VsPlxuXHQ8L25hdj5cbilcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0ICA8ZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgIFx0ICA8TmF2IC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdCAgICA8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCk7XG5cdH1cdFxufVxuIl19