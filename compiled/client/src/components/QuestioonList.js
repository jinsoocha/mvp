"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionList = function (_React$Component) {
	_inherits(QuestionList, _React$Component);

	function QuestionList(props) {
		_classCallCheck(this, QuestionList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionList).call(this, props));
	}

	_createClass(QuestionList, [{
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

	return QuestionList;
}(React.Component);

;

window.PostList = PostList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvb25MaXN0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sWTs7O0FBQ0wsdUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHlGQUNaLEtBRFk7QUFFbEI7Ozs7MkJBRVM7QUFBQTs7QUFDVCxPQUFJLGVBQWUsRUFBbkI7QUFDQSxRQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLFVBQUMsSUFBRCxFQUFVO0FBQ2xDLFFBQUcsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixPQUFLLEtBQUwsQ0FBVyxVQUFqQyxNQUFpRCxDQUFDLENBQXJELEVBQXdEO0FBQ3ZELGtCQUFhLElBQWIsQ0FBa0IsSUFBbEI7QUFDQTtBQUNELElBSkQ7O0FBTUEsVUFDQztBQUFBO0lBQUE7SUFDRSxhQUFhLEdBQWIsQ0FBaUIsVUFBQyxJQUFEO0FBQUEsWUFDakIsb0JBQUMsYUFBRDtBQUNHLFdBQUssS0FBSyxFQURiO0FBRUcsWUFBTTtBQUZULE9BRGlCO0FBQUEsS0FBakI7QUFERixJQUREO0FBVUE7Ozs7RUF2QnlCLE1BQU0sUzs7QUF3QmhDOztBQUdELE9BQU8sUUFBUCxHQUFrQixRQUFsQiIsImZpbGUiOiJRdWVzdGlvb25MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUXVlc3Rpb25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHZhciBmaWx0ZXJkUG9zdHMgPSBbXTtcblx0XHR0aGlzLnByb3BzLnBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcblx0XHRcdGlmKHBvc3QucXVlc3Rpb24uaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaFRleHQpICE9PSAtMSkge1xuXHRcdFx0XHRmaWx0ZXJkUG9zdHMucHVzaChwb3N0KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtmaWx0ZXJkUG9zdHMubWFwKChwb3N0KSA9PiBcblx0XHRcdFx0XHQ8UG9zdExpc3RFbnRyeVxuXHRcdFx0XHQgICAga2V5PXtwb3N0LmlkfVxuXHRcdFx0XHQgICAgcG9zdD17cG9zdH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHQpfSAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1x0ICBcblx0fTsgICBcdFx0ICAgICBcdCBcdFxufTtcblxuXG53aW5kb3cuUG9zdExpc3QgPSBQb3N0TGlzdDsiXX0=