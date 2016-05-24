"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostListEntry = function (_React$Component) {
	_inherits(PostListEntry, _React$Component);

	function PostListEntry(props) {
		_classCallCheck(this, PostListEntry);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PostListEntry).call(this, props));

		_this.state = {
			questionClicked: false
		};
		return _this;
	}

	_createClass(PostListEntry, [{
		key: "handleClickQuestion",
		value: function handleClickQuestion(e) {
			e.preventDefault();
			document.getElementById('heading').scrollIntoView();
			this.setState({
				questionClicked: !this.state.questionClicked
			});
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.questionClicked) {
				var answerView = React.createElement(
					"div",
					{ id: "answerView", ref: "answerView" },
					React.createElement(
						"blockquote",
						null,
						this.props.post.answer
					)
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
						{ onClick: this.handleClickQuestion.bind(this) },
						this.props.post.question
					)
				),
				answerView
			);
		}
	}]);

	return PostListEntry;
}(React.Component);

window.PostListEntry = PostListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0TGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sYTs7O0FBQ0wsd0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLCtGQUNaLEtBRFk7O0FBRWxCLFFBQUssS0FBTCxHQUFhO0FBQ1osb0JBQWlCO0FBREwsR0FBYjtBQUZrQjtBQUtsQjs7OztzQ0FHb0IsQyxFQUFHO0FBQ3ZCLEtBQUUsY0FBRjtBQUNBLFlBQVMsY0FBVCxDQUF3QixTQUF4QixFQUFtQyxjQUFuQztBQUNFLFFBQUssUUFBTCxDQUFjO0FBQ1YscUJBQWlCLENBQUMsS0FBSyxLQUFMLENBQVc7QUFEbkIsSUFBZDtBQUdGOzs7MkJBRVE7QUFDUixPQUFJLEtBQUssS0FBTCxDQUFXLGVBQWYsRUFBZ0M7QUFDOUIsUUFBSSxhQUFhO0FBQUE7S0FBQSxFQUFLLElBQUcsWUFBUixFQUFxQixLQUFJLFlBQXpCO0tBQ0M7QUFBQTtNQUFBO01BQ1IsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQjtBQURSO0FBREQsS0FBakI7QUFLQTs7QUFFRixVQUNDO0FBQUE7SUFBQTtJQUNDO0FBQUE7S0FBQSxFQUFLLElBQUcsU0FBUjtLQUNDO0FBQUE7TUFBQSxFQUFJLFNBQVMsS0FBSyxtQkFBTCxDQUF5QixJQUF6QixDQUE4QixJQUE5QixDQUFiO01BQ0MsS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQjtBQURqQjtBQURELEtBREQ7SUFNRTtBQU5GLElBREQ7QUFVQTs7OztFQXBDMEIsTUFBTSxTOztBQXdDbEMsT0FBTyxhQUFQLEdBQXdCLGFBQXhCIiwiZmlsZSI6IlBvc3RMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQb3N0TGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHF1ZXN0aW9uQ2xpY2tlZDogZmFsc2Vcblx0XHR9O1xuXHR9XG5cblxuXHRoYW5kbGVDbGlja1F1ZXN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgXHRcdHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIFx0XHRxdWVzdGlvbkNsaWNrZWQ6ICF0aGlzLnN0YXRlLnF1ZXN0aW9uQ2xpY2tlZFxuICBcdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUucXVlc3Rpb25DbGlja2VkKSB7XG5cdCAgXHR2YXIgYW5zd2VyVmlldyA9IDxkaXYgaWQ9XCJhbnN3ZXJWaWV3XCIgcmVmPVwiYW5zd2VyVmlld1wiPlxuXHQgICAgICAgICAgICAgICAgXHRcdCBcdCA8YmxvY2txdW90ZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCB7dGhpcy5wcm9wcy5wb3N0LmFuc3dlcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8L2Jsb2NrcXVvdGU+XG5cdCAgICAgICAgICAgICAgIFx0XHRcdCA8L2Rpdj47XG4gIFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgaWQ9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdFx0PGg0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tRdWVzdGlvbi5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5wb3N0LnF1ZXN0aW9ufVxuXHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7YW5zd2VyVmlld31cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cdFxufVxuXG5cbndpbmRvdy5Qb3N0TGlzdEVudHJ5ID0gXHRQb3N0TGlzdEVudHJ5OyJdfQ==