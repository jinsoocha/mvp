'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ style: { marginBottom: '50px' } },
					React.createElement(
						'h1',
						{ style: { textAlign: 'center' } },
						'Ask Jinsoo For The World!'
					),
					React.createElement(
						'h3',
						{ style: { 'textAlign': 'center' } },
						'Her experiences, values and perspective might help other people as well.'
					)
				),
				React.createElement(
					'div',
					null,
					React.createElement(Nav, null)
				),
				React.createElement(
					'div',
					null,
					this.props.children
				)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxHOzs7QUFDSixjQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnRkFDWCxLQURXO0FBRWxCOzs7OzJCQUVRO0FBQ1QsVUFDRTtBQUFBO0lBQUE7SUFDQztBQUFBO0tBQUEsRUFBSyxPQUFPLEVBQUMsY0FBYyxNQUFmLEVBQVo7S0FDRztBQUFBO01BQUEsRUFBSSxPQUFPLEVBQUMsV0FBVyxRQUFaLEVBQVg7TUFBQTtBQUFBLE1BREg7S0FJQztBQUFBO01BQUEsRUFBSSxPQUFPLEVBQUMsYUFBYSxRQUFkLEVBQVg7TUFBQTtBQUFBO0FBSkQsS0FERDtJQVNFO0FBQUE7S0FBQTtLQUNFLG9CQUFDLEdBQUQ7QUFERixLQVRGO0lBWUU7QUFBQTtLQUFBO0tBQ0UsS0FBSyxLQUFMLENBQVc7QUFEYjtBQVpGLElBREY7QUFrQkE7Ozs7RUF4QmdCLE1BQU0sUzs7QUEyQnhCLE9BQU8sR0FBUCxHQUFhLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0ICA8ZGl2PlxuXHRcdCAgXHQ8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnNTBweCd9fT5cblx0ICBcdCAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG5cdFx0XHQgIFx0QXNrIEppbnNvbyBGb3IgVGhlIFdvcmxkIVxuXHRcdFx0ICBcdDwvaDE+XG5cdFx0XHQgIFx0PGgzIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG5cdFx0XHQgIFx0SGVyIGV4cGVyaWVuY2VzLCB2YWx1ZXMgYW5kIHBlcnNwZWN0aXZlIG1pZ2h0IGhlbHAgb3RoZXIgcGVvcGxlIGFzIHdlbGwuIFxuXHRcdFx0ICBcdDwvaDM+XG5cdFx0ICBcdDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgIFx0ICA8TmF2IC8+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2PlxuXHRcdCAgICBcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdCAgICA8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCk7XG5cdH1cdFxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==