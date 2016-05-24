"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
					filterdPosts.push(post);
				}
			});

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

window.PostList = PostList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZO0FBRWxCOzs7OzJCQUVTO0FBQUE7O0FBQ1QsT0FBSSxlQUFlLEVBQW5CO0FBQ0EsUUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixPQUFqQixDQUF5QixVQUFDLElBQUQsRUFBVTtBQUNsQyxRQUFHLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsT0FBSyxLQUFMLENBQVcsVUFBakMsTUFBaUQsQ0FBQyxDQUFyRCxFQUF3RDtBQUN2RCxrQkFBYSxJQUFiLENBQWtCLElBQWxCO0FBQ0E7QUFDRCxJQUpEOztBQU1BLFVBQ0M7QUFBQTtJQUFBO0lBQ0UsYUFBYSxHQUFiLENBQWlCLFVBQUMsSUFBRDtBQUFBLFlBQ2pCLG9CQUFDLGFBQUQ7QUFDRyxXQUFLLEtBQUssRUFEYjtBQUVHLFlBQU07QUFGVCxPQURpQjtBQUFBLEtBQWpCO0FBREYsSUFERDtBQVVBOzs7O0VBdkJxQixNQUFNLFM7O0FBd0I1Qjs7QUFHRCxPQUFPLFFBQVAsR0FBa0IsUUFBbEIiLCJmaWxlIjoiUG9zdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQb3N0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHR2YXIgZmlsdGVyZFBvc3RzID0gW107XG5cdFx0dGhpcy5wcm9wcy5wb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG5cdFx0XHRpZihwb3N0LnF1ZXN0aW9uLmluZGV4T2YodGhpcy5wcm9wcy5zZWFyY2hUZXh0KSAhPT0gLTEpIHtcblx0XHRcdFx0ZmlsdGVyZFBvc3RzLnB1c2gocG9zdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7ZmlsdGVyZFBvc3RzLm1hcCgocG9zdCkgPT4gXG5cdFx0XHRcdFx0PFBvc3RMaXN0RW50cnlcblx0XHRcdFx0ICAgIGtleT17cG9zdC5pZH1cblx0XHRcdFx0ICAgIHBvc3Q9e3Bvc3R9XG5cdFx0XHRcdCAgLz5cblx0XHRcdFx0KX0gIFxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcdCAgXG5cdH07ICAgXHRcdCAgICAgXHQgXHRcbn07XG5cblxud2luZG93LlBvc3RMaXN0ID0gUG9zdExpc3Q7Il19