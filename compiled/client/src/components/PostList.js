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

window.PostList = PostList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0TGlzdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFE7OztBQUNMLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxRkFDWixLQURZO0FBRWxCOzs7OzJCQUVTO0FBQUE7O0FBQ1QsT0FBSSxlQUFlLEVBQW5CO0FBQ0EsUUFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixPQUFqQixDQUF5QixVQUFDLElBQUQsRUFBVTtBQUNsQyxRQUFHLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsT0FBSyxLQUFMLENBQVcsVUFBakMsTUFBaUQsQ0FBQyxDQUFyRCxFQUF3RDtBQUN2RCxhQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0Esa0JBQWEsSUFBYixDQUFrQixJQUFsQjtBQUNBO0FBQ0QsSUFMRDtBQU1BLFdBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsVUFDQztBQUFBO0lBQUE7SUFDRSxhQUFhLEdBQWIsQ0FBaUIsVUFBQyxJQUFEO0FBQUEsWUFDakIsb0JBQUMsYUFBRDtBQUNHLFdBQUssS0FBSyxFQURiO0FBRUcsWUFBTTtBQUZULE9BRGlCO0FBQUEsS0FBakI7QUFERixJQUREO0FBVUE7Ozs7RUF6QnFCLE1BQU0sUzs7QUEwQjVCOztBQUVELE9BQU8sUUFBUCxHQUFrQixRQUFsQiIsImZpbGUiOiJQb3N0TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvc3RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHZhciBmaWx0ZXJkUG9zdHMgPSBbXTtcblx0XHR0aGlzLnByb3BzLnBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcblx0XHRcdGlmKHBvc3QucXVlc3Rpb24uaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaFRleHQpICE9PSAtMSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwb3N0KVxuXHRcdFx0XHRmaWx0ZXJkUG9zdHMucHVzaChwb3N0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyhmaWx0ZXJkUG9zdHMpXG5cblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHR7ZmlsdGVyZFBvc3RzLm1hcCgocG9zdCkgPT4gXG5cdFx0XHRcdFx0PFBvc3RMaXN0RW50cnlcblx0XHRcdFx0ICAgIGtleT17cG9zdC5pZH1cblx0XHRcdFx0ICAgIHBvc3Q9e3Bvc3R9XG5cdFx0XHRcdCAgLz5cblx0XHRcdFx0KX0gIFxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcdCAgXG5cdH07ICAgXHRcdCAgICAgXHQgXHRcbn07XG5cbndpbmRvdy5Qb3N0TGlzdCA9IFBvc3RMaXN0OyJdfQ==