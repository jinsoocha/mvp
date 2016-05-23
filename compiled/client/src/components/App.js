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

var SearchBar = function SearchBar() {
	return React.createElement(
		"form",
		null,
		React.createElement("input", { type: "text", placeholder: "Search questions here!" })
	);
};

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

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this.state = {
			//posts: []
			searchText: '',
			loginClicked: false,
			postClicked: false
		};
		return _this;
	}

	_createClass(App, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLEtBQUUsSUFBRixRQUFFLElBQUY7QUFBQSxRQUNuQjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtHQUNJLEtBQUs7QUFEVCxHQUREO0VBSUM7QUFBQTtHQUFBO0dBQUE7R0FDSSxLQUFLO0FBRFQ7QUFKRCxFQURtQjtBQUFBLENBQXBCOztBQVdBLElBQUksV0FBVyxTQUFYLFFBQVc7QUFBQSxLQUFFLEtBQUYsU0FBRSxLQUFGO0FBQUEsUUFDYjtBQUFBO0VBQUE7RUFDRSxNQUFNLEdBQU4sQ0FBVSxVQUFDLElBQUQ7QUFBQSxVQUNWLG9CQUFDLGFBQUQ7QUFDRyxTQUFLLEtBQUssRUFEYjtBQUVFLFVBQU07QUFGUixLQURVO0FBQUEsR0FBVjtBQURGLEVBRGE7QUFBQSxDQUFmOztBQVdBLElBQUksWUFBWSxTQUFaLFNBQVk7QUFBQSxRQUNmO0FBQUE7RUFBQTtFQUNDLCtCQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLHdCQUEvQjtBQURELEVBRGU7QUFBQSxDQUFoQjs7QUFNQSxJQUFJLE1BQU0sU0FBTixHQUFNO0FBQUEsS0FBRSxZQUFGLFNBQUUsWUFBRjtBQUFBLEtBQWdCLFdBQWhCLFNBQWdCLFdBQWhCO0FBQUEsUUFDVDtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBLEdBREQ7RUFJQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBSkQsRUFEUztBQUFBLENBQVY7O0lBV00sRzs7O0FBQ0osY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUZBQ1gsS0FEVzs7QUFFakIsUUFBSyxLQUFMLEdBQWE7O0FBRVgsZUFBWSxFQUZEO0FBR1gsaUJBQWMsS0FISDtBQUlYLGdCQUFhO0FBSkYsR0FBYjtBQUZpQjtBQVFsQjs7OzsyQkFFUTtBQUNULFVBQ0U7QUFBQTtJQUFBO0lBQ0U7QUFBQTtLQUFBO0tBQ0Usb0JBQUMsR0FBRDtBQUNBLG9CQUFjLEtBQUssS0FBTCxDQUFXLFlBRHpCO0FBRUEsbUJBQWEsS0FBSyxLQUFMLENBQVc7QUFGeEI7QUFERixLQURGO0lBT0U7QUFBQTtLQUFBO0tBQ0Msb0JBQUMsU0FBRDtBQUNBLGtCQUFZLEtBQUssS0FBTCxDQUFXO0FBRHZCO0FBREQsS0FQRjtJQVlFO0FBQUE7S0FBQTtLQUNDLG9CQUFDLFFBQUQ7QUFDQSxhQUFPLEtBQUssS0FBTCxDQUFXLEtBRGxCO0FBRUEsa0JBQVksS0FBSyxLQUFMLENBQVc7QUFGdkI7QUFERDtBQVpGLElBREY7QUFxQkE7Ozs7RUFqQ2dCLE1BQU0sUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUG9zdExpc3RFbnRyeSA9ICh7cG9zdH0pID0+IChcblx0PGRpdj5cblx0XHQ8cD5cblx0XHRROiB7cG9zdC5xdWVzdGlvbn1cblx0XHQ8L3A+XG5cdFx0PHA+XG5cdFx0QToge3Bvc3QuYW5zd2VyfVxuXHRcdDwvcD5cblx0PC9kaXY+XG4pO1xuXG52YXIgUG9zdExpc3QgPSAoe3Bvc3RzfSkgPT4gKFx0ICBcbiAgPGRpdj5cbiAgXHR7cG9zdHMubWFwKChwb3N0KSA9PlxuXHQgIFx0PFBvc3RMaXN0RW50cnlcblx0ICAgICAga2V5PXtwb3N0LmlkfVxuXHQgICAgXHRwb3N0PXtwb3N0fVxuXHQgICAgLz5cblx0ICApfSBcdFx0ICAgICBcbiBcdDwvZGl2PlxuKTtcblxudmFyIFNlYXJjaEJhciA9ICgpID0+IChcblx0PGZvcm0+XG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcXVlc3Rpb25zIGhlcmUhXCIvPlxuICA8L2Zvcm0+XG4pO1xuXG52YXIgTmF2ID0gKHtsb2dpbkNsaWNrZWQsIHBvc3RDbGlja2VkfSkgPT4gKFxuXHQ8bmF2PlxuXHRcdDxidXR0b24+XG5cdFx0TG9naW5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uPlxuXHRcdEFzayBZb3VyIE93biBRdWVzdGlvblxuXHRcdDwvYnV0dG9uPlxuXHQ8L25hdj5cbilcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vcG9zdHM6IFtdXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICAgIGxvZ2luQ2xpY2tlZDogZmFsc2UsXG4gICAgICBwb3N0Q2xpY2tlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdCAgPGRpdj5cblx0XHQgICAgPGRpdj5cblx0XHQgICBcdCAgPE5hdiBcblx0XHQgICBcdCAgbG9naW5DbGlja2VkPXt0aGlzLnN0YXRlLmxvZ2luQ2xpY2tlZH1cblx0XHQgICBcdCAgcG9zdENsaWNrZWQ9e3RoaXMuc3RhdGUucG9zdENsaWNrZWR9XG5cdFx0ICAgXHQgIC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdFx0ICAgIDxTZWFyY2hCYXIgXG5cdFx0XHQgICAgc2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0ICAgIC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgICBcdDxQb3N0TGlzdCBcblx0XHQgICAgXHRwb3N0cz17dGhpcy5wcm9wcy5wb3N0c31cblx0XHQgICAgXHRzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0ICAgIFx0Lz5cblx0XHQgICAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQpO1xuXHR9XHRcbn1cbiJdfQ==