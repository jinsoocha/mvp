'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionListEntry = function (_React$Component) {
	_inherits(QuestionListEntry, _React$Component);

	function QuestionListEntry(props) {
		_classCallCheck(this, QuestionListEntry);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionListEntry).call(this, props));

		_this2.state = {
			answerClicked: false
		};
		return _this2;
	}

	_createClass(QuestionListEntry, [{
		key: 'handleClickAnswer',
		value: function handleClickAnswer(e) {
			e.preventDefault();
			document.getElementById('heading').scrollIntoView();
			this.setState({
				answerClicked: true
			});
		}
	}, {
		key: 'requestBuildQueryString',
		value: function requestBuildQueryString(params) {
			var queryString = [];
			for (var property in params) {
				if (params.hasOwnProperty(property)) {
					queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
				}
			}return queryString.join('&');
		}
	}, {
		key: 'handleClickDelete',
		value: function handleClickDelete() {
			this.props.post.delete = true;
			var xmlhttp = new XMLHttpRequest();
			var _this = this;
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState === 4) {
					var response = JSON.parse(xmlhttp.responseText);
					if (xmlhttp.status === 200 && response.status === 'OK') {
						_this.setState({ type: 'success', message: 'Your question has been deleted.' });
					} else {
						_this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later.' });
					}
				}
			};
			xmlhttp.open('POST', 'http://localhost:3000/server', true);
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xmlhttp.send(this.requestBuildQueryString(this.props.post));
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.answerClicked) {
				var answerView = React.createElement(
					'div',
					{ id: 'answerView', ref: 'answerView' },
					React.createElement(AnswerView, { post: this.props.post })
				);
			}

			if (this.state.type && this.state.message) {
				var classString = 'alert alert-' + this.state.type;
				return React.createElement(
					'div',
					{ id: 'status', className: classString, ref: 'status' },
					this.state.message
				);
			}

			return React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ id: 'heading', style: { marginBottom: '30px', textAlign: 'center' } },
					React.createElement(
						'button',
						{ style: { marginRight: '20px' }, className: 'btn btn-default', onClick: this.handleClickAnswer.bind(this) },
						'Answer this question'
					),
					React.createElement(
						'button',
						{ style: { marginRight: '20px' }, className: 'btn btn-default', onClick: this.handleClickDelete.bind(this) },
						'Delete this question'
					),
					React.createElement(
						'h4',
						{ style: { marginTop: '20px' } },
						this.props.post.name,
						': "',
						this.props.post.question,
						'"'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkxpc3RFbnRyeS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLGlCOzs7QUFDTCw0QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0dBQ1osS0FEWTs7QUFFbEIsU0FBSyxLQUFMLEdBQWE7QUFDWixrQkFBZTtBQURILEdBQWI7QUFGa0I7QUFLbEI7Ozs7b0NBRWtCLEMsRUFBRztBQUNyQixLQUFFLGNBQUY7QUFDQSxZQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDRSxRQUFLLFFBQUwsQ0FBYztBQUNWLG1CQUFlO0FBREwsSUFBZDtBQUdGOzs7MENBRXdCLE0sRUFBUTtBQUM5QixPQUFJLGNBQWMsRUFBbEI7QUFDQSxRQUFJLElBQUksUUFBUixJQUFvQixNQUFwQjtBQUNFLFFBQUksT0FBTyxjQUFQLENBQXNCLFFBQXRCLENBQUosRUFBcUM7QUFDbkMsaUJBQVksSUFBWixDQUFpQixtQkFBbUIsUUFBbkIsSUFBK0IsR0FBL0IsR0FBcUMsbUJBQW1CLE9BQU8sUUFBUCxDQUFuQixDQUF0RDtBQUNEO0FBSEgsSUFJQSxPQUFPLFlBQVksSUFBWixDQUFpQixHQUFqQixDQUFQO0FBQ0Q7OztzQ0FFbUI7QUFDcEIsUUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixNQUFoQixHQUF5QixJQUF6QjtBQUNFLE9BQUksVUFBVSxJQUFJLGNBQUosRUFBZDtBQUNBLE9BQUksUUFBUSxJQUFaO0FBQ0EsV0FBUSxrQkFBUixHQUE2QixZQUFXO0FBQ3RDLFFBQUksUUFBUSxVQUFSLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLFNBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFRLFlBQW5CLENBQWY7QUFDQSxTQUFJLFFBQVEsTUFBUixLQUFtQixHQUFuQixJQUEwQixTQUFTLE1BQVQsS0FBb0IsSUFBbEQsRUFBd0Q7QUFDdEQsWUFBTSxRQUFOLENBQWUsRUFBRSxNQUFNLFNBQVIsRUFBbUIsU0FBUyxpQ0FBNUIsRUFBZjtBQUNELE1BRkQsTUFHSztBQUNILFlBQU0sUUFBTixDQUFlLEVBQUUsTUFBTSxRQUFSLEVBQWtCLFNBQVMseURBQTNCLEVBQWY7QUFDRDtBQUNGO0FBQ0YsSUFWRDtBQVdBLFdBQVEsSUFBUixDQUFhLE1BQWIsRUFBcUIsOEJBQXJCLEVBQXFELElBQXJEO0FBQ0EsV0FBUSxnQkFBUixDQUF5QixjQUF6QixFQUF5QyxtQ0FBekM7QUFDQSxXQUFRLElBQVIsQ0FBYSxLQUFLLHVCQUFMLENBQTZCLEtBQUssS0FBTCxDQUFXLElBQXhDLENBQWI7QUFDRjs7OzJCQUVTO0FBQ1QsT0FBSSxLQUFLLEtBQUwsQ0FBVyxhQUFmLEVBQThCO0FBQzFCLFFBQUksYUFBYTtBQUFBO0tBQUEsRUFBSyxJQUFHLFlBQVIsRUFBcUIsS0FBSSxZQUF6QjtLQUNKLG9CQUFDLFVBQUQsSUFBWSxNQUFNLEtBQUssS0FBTCxDQUFXLElBQTdCO0FBREksS0FBakI7QUFHQTs7QUFFSCxPQUFJLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsS0FBSyxLQUFMLENBQVcsT0FBbEMsRUFBMkM7QUFDekMsUUFBSSxjQUFjLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxJQUE5QztBQUNBLFdBQU87QUFBQTtLQUFBLEVBQUssSUFBRyxRQUFSLEVBQWlCLFdBQVcsV0FBNUIsRUFBeUMsS0FBSSxRQUE3QztLQUNTLEtBQUssS0FBTCxDQUFXO0FBRHBCLEtBQVA7QUFHRDs7QUFJQSxVQUNDO0FBQUE7SUFBQTtJQUNBO0FBQUE7S0FBQSxFQUFLLElBQUcsU0FBUixFQUFrQixPQUFPLEVBQUMsY0FBYyxNQUFmLEVBQXVCLFdBQVcsUUFBbEMsRUFBekI7S0FDQztBQUFBO01BQUEsRUFBUSxPQUFPLEVBQUMsYUFBYSxNQUFkLEVBQWYsRUFBc0MsV0FBVSxpQkFBaEQsRUFBa0UsU0FBUyxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQTNFO01BQUE7QUFBQSxNQUREO0tBRUM7QUFBQTtNQUFBLEVBQVEsT0FBTyxFQUFDLGFBQWEsTUFBZCxFQUFmLEVBQXNDLFdBQVUsaUJBQWhELEVBQWtFLFNBQVMsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUEzRTtNQUFBO0FBQUEsTUFGRDtLQUdDO0FBQUE7TUFBQSxFQUFJLE9BQU8sRUFBQyxXQUFXLE1BQVosRUFBWDtNQUNDLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFEakI7TUFBQTtNQUMwQixLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLFFBRDFDO01BQUE7QUFBQTtBQUhELEtBREE7SUFRQztBQVJELElBREQ7QUFZRjs7OztFQXpFOEIsTUFBTSxTOztBQTBFckM7O0FBR0QsT0FBTyxpQkFBUCxHQUEyQixpQkFBM0IiLCJmaWxlIjoiUXVlc3Rpb25MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBRdWVzdGlvbkxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRhbnN3ZXJDbGlja2VkOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUNsaWNrQW5zd2VyIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgXHRcdHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIFx0XHRhbnN3ZXJDbGlja2VkOiB0cnVlXG4gIFx0XHR9KTtcblx0fVxuXG5cdHJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nIChwYXJhbXMpIHtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBbXTtcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIHBhcmFtcylcbiAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHF1ZXJ5U3RyaW5nLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbcHJvcGVydHldKSk7XG4gICAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5U3RyaW5nLmpvaW4oJyYnKTtcbiAgfVxuXG5cdGhhbmRsZUNsaWNrRGVsZXRlICgpIHtcblx0XHR0aGlzLnByb3BzLnBvc3QuZGVsZXRlID0gdHJ1ZTtcbiAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnWW91ciBxdWVzdGlvbiBoYXMgYmVlbiBkZWxldGVkLicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1NvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZlcicsIHRydWUpO1xuICAgIHhtbGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhtbGh0dHAuc2VuZCh0aGlzLnJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nKHRoaXMucHJvcHMucG9zdCkpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5hbnN3ZXJDbGlja2VkKSB7XG5cdCAgICBcdHZhciBhbnN3ZXJWaWV3ID0gPGRpdiBpZD1cImFuc3dlclZpZXdcIiByZWY9XCJhbnN3ZXJWaWV3XCI+XG5cdCAgICAgICAgICAgICAgICAgIDxBbnN3ZXJWaWV3IHBvc3Q9e3RoaXMucHJvcHMucG9zdH0vPlxuXHQgICAgICAgICAgICAgICAgIDwvZGl2Pjtcblx0ICAgIH0gICAgICAgICAgXG5cblx0ICBpZiAodGhpcy5zdGF0ZS50eXBlICYmIHRoaXMuc3RhdGUubWVzc2FnZSkge1xuXHQgICAgdmFyIGNsYXNzU3RyaW5nID0gJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLnN0YXRlLnR5cGU7XG5cdCAgICByZXR1cm4gPGRpdiBpZD1cInN0YXR1c1wiIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmd9IHJlZj1cInN0YXR1c1wiPlxuXHQgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cblx0ICAgICAgICAgICAgICAgICA8L2Rpdj47XG4gIFx0fVxuXG5cblxuXHQgIFx0cmV0dXJuIChcblx0ICBcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGlkPVwiaGVhZGluZ1wiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMzBweCcsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5cblx0XHRcdFx0XHRcdDxidXR0b24gc3R5bGU9e3ttYXJnaW5SaWdodDogJzIwcHgnfX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0Fuc3dlci5iaW5kKHRoaXMpfT5BbnN3ZXIgdGhpcyBxdWVzdGlvbjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBzdHlsZT17e21hcmdpblJpZ2h0OiAnMjBweCd9fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrRGVsZXRlLmJpbmQodGhpcyl9PkRlbGV0ZSB0aGlzIHF1ZXN0aW9uPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8aDQgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyMHB4J319PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMucG9zdC5uYW1lfTogXCJ7dGhpcy5wcm9wcy5wb3N0LnF1ZXN0aW9ufVwiXG5cdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHthbnN3ZXJWaWV3fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XHRcdFxufTtcblxuXG53aW5kb3cuUXVlc3Rpb25MaXN0RW50cnkgPSBRdWVzdGlvbkxpc3RFbnRyeTtcbiJdfQ==