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
					{ id: "heading", style: { marginBottom: '30px', textAlign: 'center' } },
					React.createElement(
						"button",
						{ style: { marginRight: '20px' }, className: "btn btn-default", onClick: this.handleClickAnswer.bind(this) },
						"Answer this question"
					),
					React.createElement(
						"button",
						{ style: { marginRight: '20px' }, className: "btn btn-default" },
						"Delete this question"
					),
					React.createElement(
						"h4",
						{ style: { marginTop: '20px' } },
						this.props.post.name,
						": \"",
						this.props.post.question,
						"\""
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkxpc3RFbnRyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLGlCOzs7QUFDTCw0QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUdBQ1osS0FEWTs7QUFFbEIsUUFBSyxLQUFMLEdBQWE7QUFDWixrQkFBZTtBQURILEdBQWI7QUFGa0I7QUFLbEI7Ozs7b0NBRWtCLEMsRUFBRztBQUNyQixLQUFFLGNBQUY7QUFDQSxZQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDRSxRQUFLLFFBQUwsQ0FBYztBQUNWLG1CQUFlO0FBREwsSUFBZDtBQUdGOzs7MkJBRVM7QUFDVCxPQUFJLEtBQUssS0FBTCxDQUFXLGFBQWYsRUFBOEI7QUFDMUIsUUFBSSxhQUFhO0FBQUE7S0FBQSxFQUFLLElBQUcsWUFBUixFQUFxQixLQUFJLFlBQXpCO0tBQ0osb0JBQUMsVUFBRCxJQUFZLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBN0I7QUFESSxLQUFqQjtBQUdBOztBQUVGLFVBQ0M7QUFBQTtJQUFBO0lBQ0E7QUFBQTtLQUFBLEVBQUssSUFBRyxTQUFSLEVBQWtCLE9BQU8sRUFBQyxjQUFjLE1BQWYsRUFBdUIsV0FBVyxRQUFsQyxFQUF6QjtLQUNDO0FBQUE7TUFBQSxFQUFRLE9BQU8sRUFBQyxhQUFhLE1BQWQsRUFBZixFQUFzQyxXQUFVLGlCQUFoRCxFQUFrRSxTQUFTLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBM0U7TUFBQTtBQUFBLE1BREQ7S0FFQztBQUFBO01BQUEsRUFBUSxPQUFPLEVBQUMsYUFBYSxNQUFkLEVBQWYsRUFBc0MsV0FBVSxpQkFBaEQ7TUFBQTtBQUFBLE1BRkQ7S0FHQztBQUFBO01BQUEsRUFBSSxPQUFPLEVBQUMsV0FBVyxNQUFaLEVBQVg7TUFDQyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBRGpCO01BQUE7TUFDMEIsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixRQUQxQztNQUFBO0FBQUE7QUFIRCxLQURBO0lBUUM7QUFSRCxJQUREO0FBWUY7Ozs7RUFuQzhCLE1BQU0sUzs7QUFvQ3JDOztBQUdELE9BQU8saUJBQVAsR0FBMkIsaUJBQTNCIiwiZmlsZSI6IlF1ZXN0aW9uTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUXVlc3Rpb25MaXN0RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YW5zd2VyQ2xpY2tlZDogZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDbGlja0Fuc3dlciAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGluZycpLnNjcm9sbEludG9WaWV3KCk7XG4gIFx0XHR0aGlzLnNldFN0YXRlKHsgXG4gICAgICBcdFx0YW5zd2VyQ2xpY2tlZDogdHJ1ZVxuICBcdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmFuc3dlckNsaWNrZWQpIHtcblx0ICAgIFx0dmFyIGFuc3dlclZpZXcgPSA8ZGl2IGlkPVwiYW5zd2VyVmlld1wiIHJlZj1cImFuc3dlclZpZXdcIj5cblx0ICAgICAgICAgICAgICAgICAgPEFuc3dlclZpZXcgcG9zdD17dGhpcy5wcm9wcy5wb3N0fS8+XG5cdCAgICAgICAgICAgICAgICAgPC9kaXY+O1xuXHQgICAgfSAgICAgICAgICAgICBcblxuXHQgIFx0cmV0dXJuIChcblx0ICBcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwiaGVhZGluZ1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMzBweCcsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5cblx0XHRcdFx0XHRcdDxidXR0b24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzIwcHgnfX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0Fuc3dlci5iaW5kKHRoaXMpfT5BbnN3ZXIgdGhpcyBxdWVzdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnMjBweCd9fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5EZWxldGUgdGhpcyBxdWVzdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGg0IHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fT5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLnBvc3QubmFtZX06IFwie3RoaXMucHJvcHMucG9zdC5xdWVzdGlvbn1cIlxuXHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7YW5zd2VyVmlld31cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVx0XHRcbn07XG5cblxud2luZG93LlF1ZXN0aW9uTGlzdEVudHJ5ID0gUXVlc3Rpb25MaXN0RW50cnk7XG4iXX0=