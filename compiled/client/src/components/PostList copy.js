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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0TGlzdCBjb3B5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sUTs7O0FBQ0wsbUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHFGQUNaLEtBRFk7QUFFbEI7Ozs7MkJBRVM7QUFBQTs7QUFDVCxPQUFJLGVBQWUsRUFBbkI7QUFDQSxRQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLFVBQUMsSUFBRCxFQUFVO0FBQ2xDLFFBQUcsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixPQUFLLEtBQUwsQ0FBVyxVQUFqQyxNQUFpRCxDQUFDLENBQXJELEVBQXdEO0FBQ3ZELGtCQUFhLElBQWIsQ0FBa0IsSUFBbEI7QUFDQTtBQUNELElBSkQ7O0FBTUEsVUFDQztBQUFBO0lBQUE7SUFDRSxhQUFhLEdBQWIsQ0FBaUIsVUFBQyxJQUFEO0FBQUEsWUFDakIsb0JBQUMsYUFBRDtBQUNHLFdBQUssS0FBSyxFQURiO0FBRUcsWUFBTTtBQUZULE9BRGlCO0FBQUEsS0FBakI7QUFERixJQUREO0FBVUE7Ozs7RUF2QnFCLE1BQU0sUzs7QUF3QjVCOztBQUdELE9BQU8sUUFBUCxHQUFrQixRQUFsQiIsImZpbGUiOiJQb3N0TGlzdCBjb3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUG9zdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIGZpbHRlcmRQb3N0cyA9IFtdO1xuXHRcdHRoaXMucHJvcHMucG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuXHRcdFx0aWYocG9zdC5xdWVzdGlvbi5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCkgIT09IC0xKSB7XG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2ZpbHRlcmRQb3N0cy5tYXAoKHBvc3QpID0+IFxuXHRcdFx0XHRcdDxQb3N0TGlzdEVudHJ5XG5cdFx0XHRcdCAgICBrZXk9e3Bvc3QuaWR9XG5cdFx0XHRcdCAgICBwb3N0PXtwb3N0fVxuXHRcdFx0XHQgIC8+XG5cdFx0XHRcdCl9ICBcblx0XHRcdDwvZGl2PlxuXHRcdCk7XHQgIFxuXHR9OyAgIFx0XHQgICAgIFx0IFx0XG59O1xuXG5cbndpbmRvdy5Qb3N0TGlzdCA9IFBvc3RMaXN0OyJdfQ==