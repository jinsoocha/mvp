"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostListEntry = function PostListEntry(_ref) {
	var post = _ref.post;
	return React.createElement(
		"div",
		null,
		React.createElement(
			"p",
			null,
			"Q: ",
			post.question
		),
		React.createElement(
			"p",
			null,
			"A: ",
			post.answer
		)
	);
};

var PostList = function PostList(_ref2) {
	var posts = _ref2.posts;
	return React.createElement(
		"div",
		null,
		posts.map(function (post) {
			return React.createElement(PostListEntry, {
				key: post.id,
				post: post
			});
		})
	);
};

var SearchBar = function (_React$Component) {
	_inherits(SearchBar, _React$Component);

	function SearchBar(props) {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));
	}

	_createClass(SearchBar, [{
		key: "handleChange",
		value: function handleChange(e) {
			this.props.onSearchInput(this.refs.searchTextInput.value);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"form",
				null,
				React.createElement("input", {
					type: "text",
					placeholder: "Search questions here!",
					value: this.props.searchText,
					ref: "searchTextInput",
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(React.Component);

;

var Nav = function Nav(_ref3) {
	var loginClicked = _ref3.loginClicked;
	var postClicked = _ref3.postClicked;
	return React.createElement(
		"nav",
		null,
		React.createElement(
			"button",
			null,
			"Login"
		),
		React.createElement(
			"button",
			null,
			"Ask Your Own Question"
		)
	);
};

var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App(props) {
		_classCallCheck(this, App);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this2.state = {
			//posts: []
			searchText: '',
			loginClicked: false,
			postClicked: false
		};
		return _this2;
	}

	_createClass(App, [{
		key: "handleSearchInput",
		value: function handleSearchInput(searchText) {
			console.log(searchText);
			this.setState({
				searchText: searchText
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					null,
					React.createElement(Nav, {
						loginClicked: this.state.loginClicked,
						postClicked: this.state.postClicked
					})
				),
				React.createElement(
					"div",
					null,
					React.createElement(SearchBar, {
						onSearchInput: this.handleSearchInput.bind(this),
						searchText: this.state.searchText
					})
				),
				React.createElement(
					"div",
					null,
					React.createElement(PostList, {
						posts: this.props.posts,
						searchText: this.state.searchText
					})
				)
			);
		}
	}]);

	return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLEtBQUUsSUFBRixRQUFFLElBQUY7QUFBQSxRQUNuQjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtHQUNJLEtBQUs7QUFEVCxHQUREO0VBSUM7QUFBQTtHQUFBO0dBQUE7R0FDSSxLQUFLO0FBRFQ7QUFKRCxFQURtQjtBQUFBLENBQXBCOztBQVdBLElBQUksV0FBVyxTQUFYLFFBQVc7QUFBQSxLQUFFLEtBQUYsU0FBRSxLQUFGO0FBQUEsUUFDYjtBQUFBO0VBQUE7RUFDRSxNQUFNLEdBQU4sQ0FBVSxVQUFDLElBQUQ7QUFBQSxVQUNWLG9CQUFDLGFBQUQ7QUFDRyxTQUFLLEtBQUssRUFEYjtBQUVFLFVBQU07QUFGUixLQURVO0FBQUEsR0FBVjtBQURGLEVBRGE7QUFBQSxDQUFmOztJQVdNLFM7OztBQUNMLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzRkFDWixLQURZO0FBRWxCOzs7OytCQUVhLEMsRUFBRztBQUNoQixRQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEtBQUssSUFBTCxDQUFVLGVBQVYsQ0FBMEIsS0FBbkQ7QUFDQTs7OzJCQUVTO0FBQ1QsVUFDQztBQUFBO0lBQUE7SUFDQztBQUNDLFdBQUssTUFETjtBQUVDLGtCQUFZLHdCQUZiO0FBR0MsWUFBUSxLQUFLLEtBQUwsQ0FBVyxVQUhwQjtBQUlDLFVBQUksaUJBSkw7QUFLQyxlQUFXLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBREQsSUFERDtBQVdBOzs7O0VBckJzQixNQUFNLFM7O0FBdUI3Qjs7QUFFRCxJQUFJLE1BQU0sU0FBTixHQUFNO0FBQUEsS0FBRSxZQUFGLFNBQUUsWUFBRjtBQUFBLEtBQWdCLFdBQWhCLFNBQWdCLFdBQWhCO0FBQUEsUUFDVDtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBLEdBREQ7RUFJQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBSkQsRUFEUztBQUFBLENBQVY7O0lBV00sRzs7O0FBQ0osY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0ZBQ1gsS0FEVzs7QUFFakIsU0FBSyxLQUFMLEdBQWE7O0FBRVgsZUFBWSxFQUZEO0FBR1gsaUJBQWMsS0FISDtBQUlYLGdCQUFhO0FBSkYsR0FBYjtBQUZpQjtBQVFsQjs7OztvQ0FFa0IsVSxFQUFZO0FBQzlCLFdBQVEsR0FBUixDQUFZLFVBQVo7QUFDQSxRQUFLLFFBQUwsQ0FBYztBQUNiLGdCQUFZO0FBREMsSUFBZDtBQUdBOzs7MkJBRVE7QUFDVCxVQUNFO0FBQUE7SUFBQTtJQUNFO0FBQUE7S0FBQTtLQUNFLG9CQUFDLEdBQUQ7QUFDQSxvQkFBYyxLQUFLLEtBQUwsQ0FBVyxZQUR6QjtBQUVBLG1CQUFhLEtBQUssS0FBTCxDQUFXO0FBRnhCO0FBREYsS0FERjtJQU9FO0FBQUE7S0FBQTtLQUNDLG9CQUFDLFNBQUQ7QUFDQSxxQkFBZSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBRGY7QUFFQSxrQkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ2QjtBQURELEtBUEY7SUFhRTtBQUFBO0tBQUE7S0FDQyxvQkFBQyxRQUFEO0FBQ0EsYUFBTyxLQUFLLEtBQUwsQ0FBVyxLQURsQjtBQUVBLGtCQUFZLEtBQUssS0FBTCxDQUFXO0FBRnZCO0FBREQ7QUFiRixJQURGO0FBc0JBOzs7O0VBekNnQixNQUFNLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBvc3RMaXN0RW50cnkgPSAoe3Bvc3R9KSA9PiAoXG5cdDxkaXY+XG5cdFx0PHA+XG5cdFx0UToge3Bvc3QucXVlc3Rpb259XG5cdFx0PC9wPlxuXHRcdDxwPlxuXHRcdEE6IHtwb3N0LmFuc3dlcn1cblx0XHQ8L3A+XG5cdDwvZGl2PlxuKTtcblxudmFyIFBvc3RMaXN0ID0gKHtwb3N0c30pID0+IChcdCAgXG4gIDxkaXY+XG4gIFx0e3Bvc3RzLm1hcCgocG9zdCkgPT5cblx0ICBcdDxQb3N0TGlzdEVudHJ5XG5cdCAgICAgIGtleT17cG9zdC5pZH1cblx0ICAgIFx0cG9zdD17cG9zdH1cblx0ICAgIC8+XG5cdCAgKX0gXHRcdCAgICAgXG4gXHQ8L2Rpdj5cbik7XG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlIChlKSB7XG5cdFx0dGhpcy5wcm9wcy5vblNlYXJjaElucHV0KHRoaXMucmVmcy5zZWFyY2hUZXh0SW5wdXQudmFsdWUpOyBcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBxdWVzdGlvbnMgaGVyZSFcIlxuXHRcdFx0XHRcdHZhbHVlPSB7dGhpcy5wcm9wcy5zZWFyY2hUZXh0fVxuXHRcdFx0XHRcdHJlZj1cInNlYXJjaFRleHRJbnB1dFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHQvPlxuXHRcdCAgPC9mb3JtPlxuXHQgICk7XG5cdH0gXG4gIFxufTtcblxudmFyIE5hdiA9ICh7bG9naW5DbGlja2VkLCBwb3N0Q2xpY2tlZH0pID0+IChcblx0PG5hdj5cblx0XHQ8YnV0dG9uPlxuXHRcdExvZ2luXG5cdFx0PC9idXR0b24+XG5cdFx0PGJ1dHRvbj5cblx0XHRBc2sgWW91ciBPd24gUXVlc3Rpb25cblx0XHQ8L2J1dHRvbj5cblx0PC9uYXY+XG4pXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvL3Bvc3RzOiBbXVxuICAgICAgc2VhcmNoVGV4dDogJycsXG4gICAgICBsb2dpbkNsaWNrZWQ6IGZhbHNlLFxuICAgICAgcG9zdENsaWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaElucHV0IChzZWFyY2hUZXh0KSB7XG4gIFx0Y29uc29sZS5sb2coc2VhcmNoVGV4dClcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHRcdHNlYXJjaFRleHQ6IHNlYXJjaFRleHRcbiAgXHR9KTtcbiAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHQgIDxkaXY+XG5cdFx0ICAgIDxkaXY+XG5cdFx0ICAgXHQgIDxOYXYgXG5cdFx0ICAgXHQgIGxvZ2luQ2xpY2tlZD17dGhpcy5zdGF0ZS5sb2dpbkNsaWNrZWR9XG5cdFx0ICAgXHQgIHBvc3RDbGlja2VkPXt0aGlzLnN0YXRlLnBvc3RDbGlja2VkfVxuXHRcdCAgIFx0ICAvPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGRpdj5cblx0XHRcdCAgICA8U2VhcmNoQmFyIFxuXHRcdFx0ICAgIG9uU2VhcmNoSW5wdXQ9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdCAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHQgICAgLz5cblx0XHQgICAgPC9kaXY+XG5cdFx0ICAgIDxkaXY+XG5cdFx0ICAgIFx0PFBvc3RMaXN0IFxuXHRcdCAgICBcdHBvc3RzPXt0aGlzLnByb3BzLnBvc3RzfVxuXHRcdCAgICBcdHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHQgICAgXHQvPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCk7XG5cdH1cdFxufVxuIl19