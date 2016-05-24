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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BbnN3ZXJWaWV3LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sVTs7O0FBQ0wsc0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLCtGQUNaLEtBRFk7O0FBRWxCLFdBQUssS0FBTCxHQUFhO0FBQ1osWUFBTSxNQURNO0FBRVosZUFBUztBQUZHLEtBQWI7QUFGa0I7QUFNbEI7Ozs7NENBRXdCLE0sRUFBUTtBQUM5QixVQUFJLGNBQWMsRUFBbEI7QUFDQSxXQUFJLElBQUksUUFBUixJQUFvQixNQUFwQjtBQUNFLFlBQUksT0FBTyxjQUFQLENBQXNCLFFBQXRCLENBQUosRUFBcUM7QUFDbkMsc0JBQVksSUFBWixDQUFpQixtQkFBbUIsUUFBbkIsSUFBK0IsR0FBL0IsR0FBcUMsbUJBQW1CLE9BQU8sUUFBUCxDQUFuQixDQUF0RDtBQUNEO0FBSEgsT0FJQSxPQUFPLFlBQVksSUFBWixDQUFpQixHQUFqQixDQUFQO0FBQ0Q7OzttQ0FFYztBQUNmLFVBQUksV0FBVztBQUNYLFlBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixFQURUO0FBRVgsZ0JBQVEsU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLE1BQS9CLEVBQXVDO0FBRnBDLE9BQWY7QUFJRSxVQUFJLFVBQVUsSUFBSSxjQUFKLEVBQWQ7QUFDQSxVQUFJLFFBQVEsSUFBWjtBQUNBLGNBQVEsa0JBQVIsR0FBNkIsWUFBVztBQUN0QyxZQUFJLFFBQVEsVUFBUixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixjQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsUUFBUSxZQUFuQixDQUFmO0FBQ0EsY0FBSSxRQUFRLE1BQVIsS0FBbUIsR0FBbkIsSUFBMEIsU0FBUyxNQUFULEtBQW9CLElBQWxELEVBQXdEO0FBQ3RELGtCQUFNLFFBQU4sQ0FBZSxFQUFFLE1BQU0sU0FBUixFQUFtQixTQUFTLDRCQUE1QixFQUFmO0FBQ0QsV0FGRCxNQUdLO0FBQ0gsa0JBQU0sUUFBTixDQUFlLEVBQUUsTUFBTSxRQUFSLEVBQWtCLFNBQVMseURBQTNCLEVBQWY7QUFDRDtBQUNGO0FBQ0YsT0FWRDtBQVdBLGNBQVEsSUFBUixDQUFhLE1BQWIsRUFBcUIsOEJBQXJCLEVBQXFELElBQXJEO0FBQ0EsY0FBUSxnQkFBUixDQUF5QixjQUF6QixFQUF5QyxtQ0FBekM7QUFDQSxjQUFRLElBQVIsQ0FBYSxLQUFLLHVCQUFMLENBQTZCLFFBQTdCLENBQWI7QUFDRjs7O2lDQUVhLEMsRUFBRztBQUNoQixRQUFFLGNBQUY7QUFDQSxlQUFTLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUMsY0FBbkM7QUFDQyxXQUFLLFFBQUwsQ0FBYztBQUNiLGNBQU0sTUFETztBQUViLGlCQUFTO0FBRkksT0FBZCxFQUdHLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUhIO0FBSUQ7Ozs2QkFFUztBQUNULFVBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxJQUFtQixLQUFLLEtBQUwsQ0FBVyxPQUFsQyxFQUEyQztBQUN4QyxZQUFJLGNBQWMsaUJBQWlCLEtBQUssS0FBTCxDQUFXLElBQTlDO0FBQ0EsWUFBSSxTQUFTO0FBQUE7VUFBQSxFQUFLLElBQUcsUUFBUixFQUFpQixXQUFXLFdBQTVCLEVBQXlDLEtBQUksUUFBN0M7VUFDRyxLQUFLLEtBQUwsQ0FBVztBQURkLFNBQWI7QUFHRDs7QUFFRixhQUNDO0FBQUE7UUFBQSxFQUFLLFdBQVUsaUJBQWY7UUFDSyxNQURMO1FBRUM7QUFBQTtVQUFBLEVBQU0sUUFBTyxFQUFiLEVBQWdCLFVBQVUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQTFCO1VBQ007QUFBQTtZQUFBLEVBQUssV0FBVSxZQUFmO1lBQ0U7QUFBQTtjQUFBLEVBQU8sU0FBUSxRQUFmO2NBQUE7QUFBQSxhQURGO1lBRUUsa0NBQVUsV0FBVSxjQUFwQixFQUFtQyxNQUFLLFFBQXhDLEVBQWlELEtBQUksUUFBckQsRUFBOEQsTUFBSyxHQUFuRSxFQUF1RSxjQUF2RTtBQUZGLFdBRE47VUFLTTtBQUFBO1lBQUEsRUFBSyxXQUFVLFlBQWY7WUFDRTtBQUFBO2NBQUEsRUFBUSxXQUFVLGlCQUFsQixFQUFvQyxNQUFLLFFBQXpDO2NBQUE7QUFBQTtBQURGO0FBTE47QUFGRCxPQUREO0FBY0E7Ozs7RUF4RXVCLE1BQU0sUzs7QUF5RTlCOztBQUVELE9BQU8sVUFBUCxHQUFvQixVQUFwQiIsImZpbGUiOiJBbnN3ZXJWaWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQW5zd2VyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHR0eXBlOiAnaW5mbycsXG5cdFx0XHRtZXNzYWdlOiAnJyxcblx0XHR9O1xuXHR9XG5cblx0cmVxdWVzdEJ1aWxkUXVlcnlTdHJpbmcgKHBhcmFtcykge1xuICAgIHZhciBxdWVyeVN0cmluZyA9IFtdO1xuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gcGFyYW1zKVxuICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgcXVlcnlTdHJpbmcucHVzaChlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1twcm9wZXJ0eV0pKTtcbiAgICAgIH1cbiAgICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbignJicpO1xuICB9XG5cblx0c2VuZEZvcm1EYXRhICgpIHtcblx0XHR2YXIgZm9ybURhdGEgPSB7XG4gICAgICBpZDogdGhpcy5wcm9wcy5wb3N0LmlkLFxuICAgICAgYW5zd2VyOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuYW5zd2VyKS52YWx1ZSxcbiAgICB9O1xuICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdZb3VyIGFuc3dlciBpcyBwb3N0ZWQgbm93IScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1NvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZlcicsIHRydWUpO1xuICAgIHhtbGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhtbGh0dHAuc2VuZCh0aGlzLnJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nKGZvcm1EYXRhKSk7XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmcnKS5zY3JvbGxJbnRvVmlldygpO1xuICBcdHRoaXMuc2V0U3RhdGUoeyBcbiAgXHRcdHR5cGU6ICdpbmZvJywgXG4gIFx0XHRtZXNzYWdlOiAnU2VuZGluZy4uLicgXG4gIFx0fSwgdGhpcy5zZW5kRm9ybURhdGEuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLnR5cGUgJiYgdGhpcy5zdGF0ZS5tZXNzYWdlKSB7XG5cdCAgICB2YXIgY2xhc3NTdHJpbmcgPSAnYWxlcnQgYWxlcnQtJyArIHRoaXMuc3RhdGUudHlwZTtcblx0ICAgIHZhciBzdGF0dXMgPSA8ZGl2IGlkPVwic3RhdHVzXCIgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30gcmVmPVwic3RhdHVzXCI+XG5cdCAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuXHQgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgXHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIFx0e3N0YXR1c31cblx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbnN3ZXJcIj5Zb3VyIGFuc3dlciAqPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiYW5zd2VyXCIgcmVmPVwiYW5zd2VyXCIgcm93cz1cIjRcIiByZXF1aXJlZC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5TZW5kIHlvdXIgYW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cdH0gICBcbn07XG5cbndpbmRvdy5BbnN3ZXJWaWV3ID0gQW5zd2VyVmlldztcbiJdfQ==