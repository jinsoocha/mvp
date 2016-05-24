"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
	_inherits(SearchBar, _React$Component);

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
				{ style: { marginBottom: '30px' } },
				React.createElement("input", {
					className: "form-control",
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

window.SearchBar = SearchBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxTOzs7QUFDTCxvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0ZBQ1osS0FEWTtBQUVsQjs7OzsrQkFFYSxDLEVBQUc7QUFDaEIsUUFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFLLElBQUwsQ0FBVSxlQUFWLENBQTBCLEtBQW5EO0FBQ0E7OzsyQkFFUztBQUNULFVBQ0M7QUFBQTtJQUFBLEVBQU0sT0FBTyxFQUFDLGNBQWMsTUFBZixFQUFiO0lBQ0M7QUFDQyxnQkFBVSxjQURYO0FBRUMsV0FBSyxNQUZOO0FBR0Msa0JBQVksd0JBSGI7QUFJQyxZQUFRLEtBQUssS0FBTCxDQUFXLFVBSnBCO0FBS0MsVUFBSSxpQkFMTDtBQU1DLGVBQVcsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCO0FBTlo7QUFERCxJQUREO0FBWUE7Ozs7RUF0QnNCLE1BQU0sUzs7QUF3QjdCOztBQUVELE9BQU8sU0FBUCxHQUFtQixTQUFuQiIsImZpbGUiOiJTZWFyY2hCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGhhbmRsZUNoYW5nZSAoZSkge1xuXHRcdHRoaXMucHJvcHMub25TZWFyY2hJbnB1dCh0aGlzLnJlZnMuc2VhcmNoVGV4dElucHV0LnZhbHVlKTsgXG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9ybSBzdHlsZT17e21hcmdpbkJvdHRvbTogJzMwcHgnfX0+XG5cdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggcXVlc3Rpb25zIGhlcmUhXCJcblx0XHRcdFx0XHR2YWx1ZT0ge3RoaXMucHJvcHMuc2VhcmNoVGV4dH1cblx0XHRcdFx0XHRyZWY9XCJzZWFyY2hUZXh0SW5wdXRcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPSB7dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0Lz5cblx0XHQgIDwvZm9ybT5cblx0ICApO1xuXHR9IFxuICBcbn07XG5cbndpbmRvdy5TZWFyY2hCYXIgPSBTZWFyY2hCYXI7Il19