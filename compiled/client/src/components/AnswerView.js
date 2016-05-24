'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnswerView = function (_React$Component) {
  _inherits(AnswerView, _React$Component);

  function AnswerView(props) {
    _classCallCheck(this, AnswerView);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(AnswerView).call(this, props));

    _this2.state = {
      type: 'info',
      message: ''
    };
    return _this2;
  }

  _createClass(AnswerView, [{
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
    key: 'sendFormData',
    value: function sendFormData() {
      var formData = {
        id: this.props.post.id,
        answer: ReactDOM.findDOMNode(this.refs.answer).value
      };

      var xmlhttp = new XMLHttpRequest();
      var _this = this;
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
          var response = JSON.parse(xmlhttp.responseText);
          if (xmlhttp.status === 200 && response.status === 'OK') {
            _this.setState({ type: 'success', message: 'Your answer is posted now!' });
          } else {
            _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later.' });
          }
        }
      };
      xmlhttp.open('POST', 'http://localhost:3000/server', true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(this.requestBuildQueryString(formData));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      document.getElementById('heading').scrollIntoView();
      this.setState({
        type: 'info',
        message: 'Sending...'
      }, this.sendFormData.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.type && this.state.message) {
        var classString = 'alert alert-' + this.state.type;
        var status = React.createElement(
          'div',
          { id: 'status', className: classString, ref: 'status' },
          this.state.message
        );
      }

      return React.createElement(
        'div',
        { className: 'container-fluid' },
        status,
        React.createElement(
          'form',
          { action: '', onSubmit: this.handleSubmit.bind(this) },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'answer' },
              'Your answer *'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'answer', ref: 'answer', rows: '4', required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'button',
              { className: 'btn btn-primary', type: 'submit' },
              'Send your answer'
            )
          )
        )
      );
    }
  }]);

  return AnswerView;
}(React.Component);

;

window.AnswerView = AnswerView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BbnN3ZXJWaWV3LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sVTs7O0FBQ0wsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLCtGQUNaLEtBRFk7O0FBRWxCLFdBQUssS0FBTCxHQUFhO0FBQ1osWUFBTSxNQURNO0FBRVosZUFBUztBQUZHLEtBQWI7QUFGa0I7QUFNbEI7Ozs7NENBRXdCLE0sRUFBUTtBQUM5QixVQUFJLGNBQWMsRUFBbEI7QUFDQSxXQUFJLElBQUksUUFBUixJQUFvQixNQUFwQjtBQUNFLFlBQUksT0FBTyxjQUFQLENBQXNCLFFBQXRCLENBQUosRUFBcUM7QUFDbkMsc0JBQVksSUFBWixDQUFpQixtQkFBbUIsUUFBbkIsSUFBK0IsR0FBL0IsR0FBcUMsbUJBQW1CLE9BQU8sUUFBUCxDQUFuQixDQUF0RDtBQUNEO0FBSEgsT0FJQSxPQUFPLFlBQVksSUFBWixDQUFpQixHQUFqQixDQUFQO0FBQ0Q7OzttQ0FFYztBQUNmLFVBQUksV0FBVztBQUNYLFlBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixFQURUO0FBRVgsZ0JBQVEsU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLE1BQS9CLEVBQXVDO0FBRnBDLE9BQWY7O0FBS0UsVUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsVUFBSSxRQUFRLElBQVo7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLFlBQVc7QUFDdEMsWUFBSSxRQUFRLFVBQVIsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsY0FBSSxXQUFXLEtBQUssS0FBTCxDQUFXLFFBQVEsWUFBbkIsQ0FBZjtBQUNBLGNBQUksUUFBUSxNQUFSLEtBQW1CLEdBQW5CLElBQTBCLFNBQVMsTUFBVCxLQUFvQixJQUFsRCxFQUF3RDtBQUN0RCxrQkFBTSxRQUFOLENBQWUsRUFBRSxNQUFNLFNBQVIsRUFBbUIsU0FBUyw0QkFBNUIsRUFBZjtBQUNELFdBRkQsTUFHSztBQUNILGtCQUFNLFFBQU4sQ0FBZSxFQUFFLE1BQU0sUUFBUixFQUFrQixTQUFTLHlEQUEzQixFQUFmO0FBQ0Q7QUFDRjtBQUNGLE9BVkQ7QUFXQSxjQUFRLElBQVIsQ0FBYSxNQUFiLEVBQXFCLDhCQUFyQixFQUFxRCxJQUFyRDtBQUNBLGNBQVEsZ0JBQVIsQ0FBeUIsY0FBekIsRUFBeUMsbUNBQXpDO0FBQ0EsY0FBUSxJQUFSLENBQWEsS0FBSyx1QkFBTCxDQUE2QixRQUE3QixDQUFiO0FBQ0Y7OztpQ0FFYSxDLEVBQUc7QUFDaEIsUUFBRSxjQUFGO0FBQ0EsZUFBUyxjQUFULENBQXdCLFNBQXhCLEVBQW1DLGNBQW5DO0FBQ0MsV0FBSyxRQUFMLENBQWM7QUFDYixjQUFNLE1BRE87QUFFYixpQkFBUztBQUZJLE9BQWQsRUFHRyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FISDtBQUlEOzs7NkJBRVM7QUFDVCxVQUFJLEtBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsS0FBSyxLQUFMLENBQVcsT0FBbEMsRUFBMkM7QUFDeEMsWUFBSSxjQUFjLGlCQUFpQixLQUFLLEtBQUwsQ0FBVyxJQUE5QztBQUNBLFlBQUksU0FBUztBQUFBO1VBQUEsRUFBSyxJQUFHLFFBQVIsRUFBaUIsV0FBVyxXQUE1QixFQUF5QyxLQUFJLFFBQTdDO1VBQ0csS0FBSyxLQUFMLENBQVc7QUFEZCxTQUFiO0FBR0Q7O0FBRUYsYUFDQztBQUFBO1FBQUEsRUFBSyxXQUFVLGlCQUFmO1FBQ0ssTUFETDtRQUVDO0FBQUE7VUFBQSxFQUFNLFFBQU8sRUFBYixFQUFnQixVQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUExQjtVQUNNO0FBQUE7WUFBQSxFQUFLLFdBQVUsWUFBZjtZQUNFO0FBQUE7Y0FBQSxFQUFPLFNBQVEsUUFBZjtjQUFBO0FBQUEsYUFERjtZQUVFLGtDQUFVLFdBQVUsY0FBcEIsRUFBbUMsTUFBSyxRQUF4QyxFQUFpRCxLQUFJLFFBQXJELEVBQThELE1BQUssR0FBbkUsRUFBdUUsY0FBdkU7QUFGRixXQUROO1VBS007QUFBQTtZQUFBLEVBQUssV0FBVSxZQUFmO1lBQ0U7QUFBQTtjQUFBLEVBQVEsV0FBVSxpQkFBbEIsRUFBb0MsTUFBSyxRQUF6QztjQUFBO0FBQUE7QUFERjtBQUxOO0FBRkQsT0FERDtBQWNBOzs7O0VBekV1QixNQUFNLFM7O0FBMEU5Qjs7QUFFRCxPQUFPLFVBQVAsR0FBb0IsVUFBcEIiLCJmaWxlIjoiQW5zd2VyVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFuc3dlclZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0dHlwZTogJ2luZm8nLFxuXHRcdFx0bWVzc2FnZTogJycsXG5cdFx0fTtcblx0fVxuXG5cdHJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nIChwYXJhbXMpIHtcbiAgICB2YXIgcXVlcnlTdHJpbmcgPSBbXTtcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIHBhcmFtcylcbiAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgIHF1ZXJ5U3RyaW5nLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHByb3BlcnR5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbcHJvcGVydHldKSk7XG4gICAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5U3RyaW5nLmpvaW4oJyYnKTtcbiAgfVxuXG5cdHNlbmRGb3JtRGF0YSAoKSB7XG5cdFx0dmFyIGZvcm1EYXRhID0ge1xuICAgICAgaWQ6IHRoaXMucHJvcHMucG9zdC5pZCxcbiAgICAgIGFuc3dlcjogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmFuc3dlcikudmFsdWUsXG4gICAgfTtcblxuICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdZb3VyIGFuc3dlciBpcyBwb3N0ZWQgbm93IScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1NvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZlcicsIHRydWUpO1xuICAgIHhtbGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhtbGh0dHAuc2VuZCh0aGlzLnJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nKGZvcm1EYXRhKSk7XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmcnKS5zY3JvbGxJbnRvVmlldygpO1xuICBcdHRoaXMuc2V0U3RhdGUoeyBcbiAgXHRcdHR5cGU6ICdpbmZvJywgXG4gIFx0XHRtZXNzYWdlOiAnU2VuZGluZy4uLicgXG4gIFx0fSwgdGhpcy5zZW5kRm9ybURhdGEuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnR5cGUgJiYgdGhpcy5zdGF0ZS5tZXNzYWdlKSB7XG5cdCAgICB2YXIgY2xhc3NTdHJpbmcgPSAnYWxlcnQgYWxlcnQtJyArIHRoaXMuc3RhdGUudHlwZTtcblx0ICAgIHZhciBzdGF0dXMgPSA8ZGl2IGlkPVwic3RhdHVzXCIgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30gcmVmPVwic3RhdHVzXCI+XG5cdCAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuXHQgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgXHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIFx0e3N0YXR1c31cblx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIj5Zb3VyIGFuc3dlciAqPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYW5zd2VyXCIgcmVmPVwiYW5zd2VyXCIgcm93cz1cIjRcIiByZXF1aXJlZC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5TZW5kIHlvdXIgYW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cdH0gICBcbn07XG5cbndpbmRvdy5BbnN3ZXJWaWV3ID0gQW5zd2VyVmlldztcbiJdfQ==