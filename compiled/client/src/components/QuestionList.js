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
				if (post.question.toLowerCase().indexOf(_this2.props.searchText.toLowerCase()) !== -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxZOzs7QUFDTCx1QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUZBQ1osS0FEWTtBQUVsQjs7OzsyQkFFUztBQUFBOztBQUNULE9BQUksZUFBZSxFQUFuQjtBQUNBLFFBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakIsQ0FBeUIsVUFBQyxJQUFELEVBQVU7QUFDbEMsUUFBRyxLQUFLLFFBQUwsQ0FBYyxXQUFkLEdBQTRCLE9BQTVCLENBQW9DLE9BQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsV0FBdEIsRUFBcEMsTUFBNkUsQ0FBQyxDQUFqRixFQUFvRjtBQUNuRixrQkFBYSxJQUFiLENBQWtCLElBQWxCO0FBQ0E7QUFDRCxJQUpEOztBQU1BLFVBQ0M7QUFBQTtJQUFBO0lBQ0UsYUFBYSxHQUFiLENBQWlCLFVBQUMsSUFBRDtBQUFBLFlBQ2pCLG9CQUFDLGlCQUFEO0FBQ0csV0FBSyxLQUFLLEVBRGI7QUFFRyxZQUFNO0FBRlQsT0FEaUI7QUFBQSxLQUFqQjtBQURGLElBREQ7QUFVQTs7OztFQXZCeUIsTUFBTSxTOztBQXdCaEM7O0FBR0QsT0FBTyxZQUFQLEdBQXNCLFlBQXRCIiwiZmlsZSI6IlF1ZXN0aW9uTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFF1ZXN0aW9uTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHR2YXIgZmlsdGVyZFBvc3RzID0gW107XG5cdFx0dGhpcy5wcm9wcy5wb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG5cdFx0XHRpZihwb3N0LnF1ZXN0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG5cdFx0XHRcdGZpbHRlcmRQb3N0cy5wdXNoKHBvc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e2ZpbHRlcmRQb3N0cy5tYXAoKHBvc3QpID0+IFxuXHRcdFx0XHRcdDxRdWVzdGlvbkxpc3RFbnRyeVxuXHRcdFx0XHQgICAga2V5PXtwb3N0LmlkfVxuXHRcdFx0XHQgICAgcG9zdD17cG9zdH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0XHQpfSAgXG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1x0ICBcblx0fTsgICBcdFx0ICAgICBcdCBcdFxufTtcblxuXG53aW5kb3cuUXVlc3Rpb25MaXN0ID0gUXVlc3Rpb25MaXN0OyJdfQ==