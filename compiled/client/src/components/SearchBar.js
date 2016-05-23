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
				null,
				React.createElement("input", {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxTOzs7QUFDTCxvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0ZBQ1osS0FEWTtBQUVsQjs7OzsrQkFFYSxDLEVBQUc7QUFDaEIsUUFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFLLElBQUwsQ0FBVSxlQUFWLENBQTBCLEtBQW5EO0FBQ0E7OzsyQkFFUztBQUNULFVBQ0M7QUFBQTtJQUFBO0lBQ0M7QUFDQyxXQUFLLE1BRE47QUFFQyxrQkFBWSx3QkFGYjtBQUdDLFlBQVEsS0FBSyxLQUFMLENBQVcsVUFIcEI7QUFJQyxVQUFJLGlCQUpMO0FBS0MsZUFBVyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQURELElBREQ7QUFXQTs7OztFQXJCc0IsTUFBTSxTOztBQXVCN0I7O0FBRUQsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6IlNlYXJjaEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0aGFuZGxlQ2hhbmdlIChlKSB7XG5cdFx0dGhpcy5wcm9wcy5vblNlYXJjaElucHV0KHRoaXMucmVmcy5zZWFyY2hUZXh0SW5wdXQudmFsdWUpOyBcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb3JtPlxuXHRcdFx0XHQ8aW5wdXQgXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBxdWVzdGlvbnMgaGVyZSFcIlxuXHRcdFx0XHRcdHZhbHVlPSB7dGhpcy5wcm9wcy5zZWFyY2hUZXh0fVxuXHRcdFx0XHRcdHJlZj1cInNlYXJjaFRleHRJbnB1dFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHQvPlxuXHRcdCAgPC9mb3JtPlxuXHQgICk7XG5cdH0gXG4gIFxufTtcblxud2luZG93LlNlYXJjaEJhciA9IFNlYXJjaEJhcjsiXX0=