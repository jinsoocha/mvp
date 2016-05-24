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
					return React.createElement(QuestionListEntry, {
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

window.QuestionList = QuestionList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxZOzs7QUFDTCx1QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUZBQ1osS0FEWTtBQUVsQjs7OzsyQkFFUztBQUFBOztBQUNULE9BQUksZUFBZSxFQUFuQjtBQUNBLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakIsQ0FBeUIsVUFBQyxJQUFELEVBQVU7QUFDbEMsUUFBRyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLE9BQUssS0FBTCxDQUFXLFVBQWpDLE1BQWlELENBQUMsQ0FBckQsRUFBd0Q7QUFDdkQsa0JBQWEsSUFBYixDQUFrQixJQUFsQjtBQUNBO0FBQ0QsSUFKRDs7QUFNQSxVQUNDO0FBQUE7SUFBQTtJQUNFLGFBQWEsR0FBYixDQUFpQixVQUFDLElBQUQ7QUFBQSxZQUNqQixvQkFBQyxpQkFBRDtBQUNHLFdBQUssS0FBSyxFQURiO0FBRUcsWUFBTTtBQUZULE9BRGlCO0FBQUEsS0FBakI7QUFERixJQUREO0FBVUE7Ozs7RUF2QnlCLE1BQU0sUzs7QUF3QmhDOztBQUdELE9BQU8sWUFBUCxHQUFzQixZQUF0QiIsImZpbGUiOiJRdWVzdGlvbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWVzdGlvbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0dmFyIGZpbHRlcmRQb3N0cyA9IFtdO1xuXHRcdHRoaXMucHJvcHMucG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuXHRcdFx0aWYocG9zdC5xdWVzdGlvbi5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoVGV4dCkgIT09IC0xKSB7XG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2ZpbHRlcmRQb3N0cy5tYXAoKHBvc3QpID0+IFxuXHRcdFx0XHRcdDxRdWVzdGlvbkxpc3RFbnRyeVxuXHRcdFx0XHQgICAga2V5PXtwb3N0LmlkfVxuXHRcdFx0XHQgICAgcG9zdD17cG9zdH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHQpfSAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1x0ICBcblx0fTsgICBcdFx0ICAgICBcdCBcdFxufTtcblxuXG53aW5kb3cuUXVlc3Rpb25MaXN0ID0gUXVlc3Rpb25MaXN0OyJdfQ==