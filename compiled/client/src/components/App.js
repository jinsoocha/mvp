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

var PostList = function (_React$Component) {
	_inherits(PostList, _React$Component);

	function PostList(props) {
		_classCallCheck(this, PostList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(PostList).call(this, props));
	}

	_createClass(PostList, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var filterdPosts = [];
			this.props.posts.forEach(function (post) {
				if (post.question.indexOf(_this2.props.searchText) !== -1) {
					console.log(post);
					filterdPosts.push(post);
				}
			});
			console.log(filterdPosts);

			return React.createElement(
				"div",
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

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

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

var Nav = function Nav(_ref2) {
	var loginClicked = _ref2.loginClicked;
	var postClicked = _ref2.postClicked;
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

var App = function (_React$Component3) {
	_inherits(App, _React$Component3);

	function App(props) {
		_classCallCheck(this, App);

		var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

		_this4.state = {
			//posts: []
			searchText: '',
			loginClicked: false,
			postClicked: false
		};
		return _this4;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLEtBQUUsSUFBRixRQUFFLElBQUY7QUFBQSxRQUNuQjtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtHQUNJLEtBQUs7QUFEVCxHQUREO0VBSUM7QUFBQTtHQUFBO0dBQUE7R0FDSSxLQUFLO0FBRFQ7QUFKRCxFQURtQjtBQUFBLENBQXBCOztJQVdNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZO0FBRWxCOzs7OzJCQUVTO0FBQUE7O0FBQ1QsT0FBSSxlQUFlLEVBQW5CO0FBQ0EsUUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixPQUFqQixDQUF5QixVQUFDLElBQUQsRUFBVTtBQUNsQyxRQUFHLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsT0FBSyxLQUFMLENBQVcsVUFBakMsTUFBaUQsQ0FBQyxDQUFyRCxFQUF3RDtBQUN2RCxhQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0Esa0JBQWEsSUFBYixDQUFrQixJQUFsQjtBQUNBO0FBQ0QsSUFMRDtBQU1BLFdBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsVUFDQztBQUFBO0lBQUE7SUFDRSxhQUFhLEdBQWIsQ0FBaUIsVUFBQyxJQUFEO0FBQUEsWUFDakIsb0JBQUMsYUFBRDtBQUNHLFdBQUssS0FBSyxFQURiO0FBRUcsWUFBTTtBQUZULE9BRGlCO0FBQUEsS0FBakI7QUFERixJQUREO0FBVUE7Ozs7RUF6QnFCLE1BQU0sUzs7QUEwQjVCOztJQUVLLFM7OztBQUNMLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzRkFDWixLQURZO0FBRWxCOzs7OytCQUVhLEMsRUFBRztBQUNoQixRQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEtBQUssSUFBTCxDQUFVLGVBQVYsQ0FBMEIsS0FBbkQ7QUFDQTs7OzJCQUVTO0FBQ1QsVUFDQztBQUFBO0lBQUE7SUFDQztBQUNDLFdBQUssTUFETjtBQUVDLGtCQUFZLHdCQUZiO0FBR0MsWUFBUSxLQUFLLEtBQUwsQ0FBVyxVQUhwQjtBQUlDLFVBQUksaUJBSkw7QUFLQyxlQUFXLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBREQsSUFERDtBQVdBOzs7O0VBckJzQixNQUFNLFM7O0FBdUI3Qjs7QUFFRCxJQUFJLE1BQU0sU0FBTixHQUFNO0FBQUEsS0FBRSxZQUFGLFNBQUUsWUFBRjtBQUFBLEtBQWdCLFdBQWhCLFNBQWdCLFdBQWhCO0FBQUEsUUFDVDtBQUFBO0VBQUE7RUFDQztBQUFBO0dBQUE7R0FBQTtBQUFBLEdBREQ7RUFJQztBQUFBO0dBQUE7R0FBQTtBQUFBO0FBSkQsRUFEUztBQUFBLENBQVY7O0lBV00sRzs7O0FBQ0osY0FBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0ZBQ1gsS0FEVzs7QUFFakIsU0FBSyxLQUFMLEdBQWE7O0FBRVgsZUFBWSxFQUZEO0FBR1gsaUJBQWMsS0FISDtBQUlYLGdCQUFhO0FBSkYsR0FBYjtBQUZpQjtBQVFsQjs7OztvQ0FFa0IsVSxFQUFZO0FBQzlCLFdBQVEsR0FBUixDQUFZLFVBQVo7QUFDQSxRQUFLLFFBQUwsQ0FBYztBQUNiLGdCQUFZO0FBREMsSUFBZDtBQUdBOzs7MkJBRVE7QUFDVCxVQUNFO0FBQUE7SUFBQTtJQUNFO0FBQUE7S0FBQTtLQUNFLG9CQUFDLEdBQUQ7QUFDQSxvQkFBYyxLQUFLLEtBQUwsQ0FBVyxZQUR6QjtBQUVBLG1CQUFhLEtBQUssS0FBTCxDQUFXO0FBRnhCO0FBREYsS0FERjtJQU9FO0FBQUE7S0FBQTtLQUNDLG9CQUFDLFNBQUQ7QUFDQSxxQkFBZSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBRGY7QUFFQSxrQkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ2QjtBQURELEtBUEY7SUFhRTtBQUFBO0tBQUE7S0FDQyxvQkFBQyxRQUFEO0FBQ0EsYUFBTyxLQUFLLEtBQUwsQ0FBVyxLQURsQjtBQUVBLGtCQUFZLEtBQUssS0FBTCxDQUFXO0FBRnZCO0FBREQ7QUFiRixJQURGO0FBc0JBOzs7O0VBekNnQixNQUFNLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBvc3RMaXN0RW50cnkgPSAoe3Bvc3R9KSA9PiAoXG5cdDxkaXY+XG5cdFx0PHA+XG5cdFx0UToge3Bvc3QucXVlc3Rpb259XG5cdFx0PC9wPlxuXHRcdDxwPlxuXHRcdEE6IHtwb3N0LmFuc3dlcn1cblx0XHQ8L3A+XG5cdDwvZGl2PlxuKTtcblxuY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIGZpbHRlcmRQb3N0cyA9IFtdO1xuXHRcdHRoaXMucHJvcHMucG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuXHRcdFx0aWYocG9zdC5xdWVzdGlvbi5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCkgIT09IC0xKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHBvc3QpXG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNvbnNvbGUubG9nKGZpbHRlcmRQb3N0cylcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtmaWx0ZXJkUG9zdHMubWFwKChwb3N0KSA9PiBcblx0XHRcdFx0XHQ8UG9zdExpc3RFbnRyeVxuXHRcdFx0XHQgICAga2V5PXtwb3N0LmlkfVxuXHRcdFx0XHQgICAgcG9zdD17cG9zdH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHQpfSAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1x0ICBcblx0fTsgICBcdFx0ICAgICBcdCBcdFxufTtcblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgKGUpIHtcblx0XHR0aGlzLnByb3BzLm9uU2VhcmNoSW5wdXQodGhpcy5yZWZzLnNlYXJjaFRleHRJbnB1dC52YWx1ZSk7IFxuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIHF1ZXN0aW9ucyBoZXJlIVwiXG5cdFx0XHRcdFx0dmFsdWU9IHt0aGlzLnByb3BzLnNlYXJjaFRleHR9XG5cdFx0XHRcdFx0cmVmPVwic2VhcmNoVGV4dElucHV0XCJcblx0XHRcdFx0XHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG5cdFx0XHRcdC8+XG5cdFx0ICA8L2Zvcm0+XG5cdCAgKTtcblx0fSBcbiAgXG59O1xuXG52YXIgTmF2ID0gKHtsb2dpbkNsaWNrZWQsIHBvc3RDbGlja2VkfSkgPT4gKFxuXHQ8bmF2PlxuXHRcdDxidXR0b24+XG5cdFx0TG9naW5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uPlxuXHRcdEFzayBZb3VyIE93biBRdWVzdGlvblxuXHRcdDwvYnV0dG9uPlxuXHQ8L25hdj5cbilcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vcG9zdHM6IFtdXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICAgIGxvZ2luQ2xpY2tlZDogZmFsc2UsXG4gICAgICBwb3N0Q2xpY2tlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoSW5wdXQgKHNlYXJjaFRleHQpIHtcbiAgXHRjb25zb2xlLmxvZyhzZWFyY2hUZXh0KVxuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdFx0c2VhcmNoVGV4dDogc2VhcmNoVGV4dFxuICBcdH0pO1xuICB9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdCAgPGRpdj5cblx0XHQgICAgPGRpdj5cblx0XHQgICBcdCAgPE5hdiBcblx0XHQgICBcdCAgbG9naW5DbGlja2VkPXt0aGlzLnN0YXRlLmxvZ2luQ2xpY2tlZH1cblx0XHQgICBcdCAgcG9zdENsaWNrZWQ9e3RoaXMuc3RhdGUucG9zdENsaWNrZWR9XG5cdFx0ICAgXHQgIC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdFx0ICAgIDxTZWFyY2hCYXIgXG5cdFx0XHQgICAgb25TZWFyY2hJbnB1dD17dGhpcy5oYW5kbGVTZWFyY2hJbnB1dC5iaW5kKHRoaXMpfVxuXHRcdFx0ICAgIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdCAgICAvPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGRpdj5cblx0XHQgICAgXHQ8UG9zdExpc3QgXG5cdFx0ICAgIFx0cG9zdHM9e3RoaXMucHJvcHMucG9zdHN9XG5cdFx0ICAgIFx0c2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdCAgICBcdC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTtcblx0fVx0XG59XG4iXX0=