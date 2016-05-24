"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionListEntry = function (_React$Component) {
	_inherits(QuestionListEntry, _React$Component);

	function QuestionListEntry(props) {
		_classCallCheck(this, QuestionListEntry);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionListEntry).call(this, props));

		_this.state = {
			answerClicked: false
		};
		return _this;
	}

	_createClass(QuestionListEntry, [{
		key: "handleClickAnswer",
		value: function handleClickAnswer(e) {
			e.preventDefault();
			document.getElementById('heading').scrollIntoView();
			this.setState({
				answerClicked: true
			});
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.answerClicked) {
				var answerView = React.createElement(
					"div",
					{ id: "answerView", ref: "answerView" },
					React.createElement(AnswerView, { post: this.props.post })
				);
			}

			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ id: "heading" },
					React.createElement(
						"h4",
						null,
						this.props.post.question,
						" by ",
						this.props.post.name
					),
					React.createElement(
						"button",
						{ className: "btn btn-default pull-right", onClick: this.handleClickAnswer.bind(this) },
						"Answer this question"
					),
					React.createElement(
						"button",
						{ className: "btn btn-default pull-right" },
						"Delete this question"
					)
				),
				answerView
			);
		}
	}]);

	return QuestionListEntry;
}(React.Component);

;

window.QuestionListEntry = QuestionListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkxpc3RFbnRyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLGlCOzs7QUFDTCw0QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUdBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixrQkFBZTtBQURILEdBQWI7QUFGa0I7QUFLbEI7Ozs7b0NBRWtCLEMsRUFBRztBQUNyQixLQUFFLGNBQUY7QUFDQSxZQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDRSxRQUFLLFFBQUwsQ0FBYztBQUNWLG1CQUFlO0FBREwsSUFBZDtBQUdGOzs7MkJBRVM7QUFDVCxPQUFJLEtBQUssS0FBTCxDQUFXLGFBQWYsRUFBOEI7QUFDMUIsUUFBSSxhQUFhO0FBQUE7S0FBQSxFQUFLLElBQUcsWUFBUixFQUFxQixLQUFJLFlBQXpCO0tBQ0osb0JBQUMsVUFBRCxJQUFZLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBN0I7QUFESSxLQUFqQjtBQUdBOztBQUVGLFVBQ0M7QUFBQTtJQUFBO0lBQ0Q7QUFBQTtLQUFBLEVBQUssSUFBRyxTQUFSO0tBQ0M7QUFBQTtNQUFBO01BQ0MsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQURqQjtNQUFBO01BQytCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0I7QUFEL0MsTUFERDtLQUlDO0FBQUE7TUFBQSxFQUFRLFdBQVUsNEJBQWxCLEVBQStDLFNBQVMsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUF4RDtNQUFBO0FBQUEsTUFKRDtLQUtDO0FBQUE7TUFBQSxFQUFRLFdBQVUsNEJBQWxCO01BQUE7QUFBQTtBQUxELEtBREM7SUFRQTtBQVJBLElBREQ7QUFZRjs7OztFQW5DOEIsTUFBTSxTOztBQW9DckM7O0FBR0QsT0FBTyxpQkFBUCxHQUEyQixpQkFBM0IiLCJmaWxlIjoiUXVlc3Rpb25MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWVzdGlvbkxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRhbnN3ZXJDbGlja2VkOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNsaWNrQW5zd2VyIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgXHRcdHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIFx0XHRhbnN3ZXJDbGlja2VkOiB0cnVlXG4gIFx0XHR9KTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuYW5zd2VyQ2xpY2tlZCkge1xuXHQgICAgXHR2YXIgYW5zd2VyVmlldyA9IDxkaXYgaWQ9XCJhbnN3ZXJWaWV3XCIgcmVmPVwiYW5zd2VyVmlld1wiPlxuXHQgICAgICAgICAgICAgICAgICA8QW5zd2VyVmlldyBwb3N0PXt0aGlzLnByb3BzLnBvc3R9Lz5cblx0ICAgICAgICAgICAgICAgICA8L2Rpdj47XG5cdCAgICB9ICAgICAgICAgICAgIFxuXG5cdCAgXHRyZXR1cm4gKFxuXHQgIFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiaGVhZGluZ1wiPlxuXHRcdFx0XHRcdDxoND5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wb3N0LnF1ZXN0aW9ufSBieSB7dGhpcy5wcm9wcy5wb3N0Lm5hbWV9XG5cdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0Fuc3dlci5iaW5kKHRoaXMpfT5BbnN3ZXIgdGhpcyBxdWVzdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IHB1bGwtcmlnaHRcIj5EZWxldGUgdGhpcyBxdWVzdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e2Fuc3dlclZpZXd9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cdFx0XG59O1xuXG5cbndpbmRvdy5RdWVzdGlvbkxpc3RFbnRyeSA9IFF1ZXN0aW9uTGlzdEVudHJ5O1xuIl19