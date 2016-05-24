'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostView = function (_React$Component) {
  _inherits(PostView, _React$Component);

  function PostView(props) {
    _classCallCheck(this, PostView);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(PostView).call(this, props));

    _this2.state = {
      type: 'info',
      message: '',
      id: 0
    };
    return _this2;
  }

  _createClass(PostView, [{
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
      console.log("sending the form to the server");
      var formData = {
        id: this.state.id,
        name: ReactDOM.findDOMNode(this.refs.name).value,
        email: ReactDOM.findDOMNode(this.refs.email).value,
        question: ReactDOM.findDOMNode(this.refs.question).value,
        emailRequested: ReactDOM.findDOMNode(this.refs.emailRequest).checked
      };

      var xmlhttp = new XMLHttpRequest();
      var _this = this;
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
          var response = JSON.parse(xmlhttp.responseText);
          if (xmlhttp.status === 200 && response.status === 'OK') {
            _this.setState({ type: 'success', message: 'I have received your question. Thanks!' });
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
        id: this.state.id + 1,
        type: 'info',
        message: 'Sending...'
      }, this.sendFormData.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.type && this.state.message) {
        console.log(this.state.type, ",", this.state.message);
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
        React.createElement(
          'h1',
          { id: 'heading' },
          'Ask me!'
        ),
        status,
        React.createElement(
          'form',
          { action: '', onSubmit: this.handleSubmit.bind(this) },
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'name' },
              'Your full name *'
            ),
            React.createElement('input', { className: 'form-control', name: 'name', ref: 'name', required: true, type: 'text' })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'email' },
              'Your email address to receive the answer in case it is sent privately *'
            ),
            React.createElement('input', { className: 'form-control', name: 'email', ref: 'email', required: true, type: 'email' })
          ),
          React.createElement(
            'label',
            null,
            'Would you like to receive the answer privately if the owner decides not to post the answer? '
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { className: 'checkbox-inline' },
              React.createElement('input', { name: 'emailRequest', ref: 'emailRequest', type: 'checkbox' }),
              'Yes'
            )
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'label',
              { htmlFor: 'question' },
              'Your question *'
            ),
            React.createElement('textarea', { className: 'form-control', name: 'question', ref: 'question', rows: '4', required: true })
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
              'button',
              { className: 'btn btn-primary', type: 'submit' },
              'Send your question'
            )
          )
        )
      );
    }
  }]);

  return PostView;
}(React.Component);

;

window.PostView = PostView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0Vmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFE7OztBQUNMLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWixLQURZOztBQUVsQixXQUFLLEtBQUwsR0FBYTtBQUNaLFlBQU0sTUFETTtBQUVaLGVBQVMsRUFGRztBQUdULFVBQUk7QUFISyxLQUFiO0FBRmtCO0FBT2xCOzs7OzRDQUV3QixNLEVBQVE7QUFDOUIsVUFBSSxjQUFjLEVBQWxCO0FBQ0EsV0FBSSxJQUFJLFFBQVIsSUFBb0IsTUFBcEI7QUFDRSxZQUFJLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ25DLHNCQUFZLElBQVosQ0FBaUIsbUJBQW1CLFFBQW5CLElBQStCLEdBQS9CLEdBQXFDLG1CQUFtQixPQUFPLFFBQVAsQ0FBbkIsQ0FBdEQ7QUFDRDtBQUhILE9BSUEsT0FBTyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBUDtBQUNEOzs7bUNBRWM7QUFDZixjQUFRLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBLFVBQUksV0FBVztBQUNYLFlBQUksS0FBSyxLQUFMLENBQVcsRUFESjtBQUVYLGNBQU0sU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLElBQS9CLEVBQXFDLEtBRmhDO0FBR1gsZUFBTyxTQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsS0FBL0IsRUFBc0MsS0FIbEM7QUFJWCxrQkFBVSxTQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsUUFBL0IsRUFBeUMsS0FKeEM7QUFLWCx3QkFBZ0IsU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLFlBQS9CLEVBQTZDO0FBTGxELE9BQWY7O0FBUUUsVUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsVUFBSSxRQUFRLElBQVo7QUFDQSxjQUFRLGtCQUFSLEdBQTZCLFlBQVc7QUFDdEMs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QUEyRSxjQUEzRTtBQUZGLFdBZE47VUFrQk07QUFBQTtZQUFBLEVBQUssV0FBVSxZQUFmO1lBQ0U7QUFBQTtjQUFBLEVBQVEsV0FBVSxpQkFBbEIsRUFBb0MsTUFBSyxRQUF6QztjQUFBO0FBQUE7QUFERjtBQWxCTjtBQUhELE9BREQ7QUE0QkE7Ozs7RUE5RnFCLE1BQU0sUzs7QUErRjVCOztBQUVELE9BQU8sUUFBUCxHQUFrQixRQUFsQiIsImZpbGUiOiJQb3N0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHR5cGU6ICdpbmZvJyxcblx0XHRcdG1lc3NhZ2U6ICcnLFxuICAgICAgaWQ6IDBcblx0XHR9O1xuXHR9XG5cblx0cmVxdWVzdEJ1aWxkUXVlcnlTdHJpbmcgKHBhcmFtcykge1xuICAgIHZhciBxdWVyeVN0cmluZyA9IFtdO1xuICAgIGZvcih2YXIgcHJvcGVydHkgaW4gcGFyYW1zKVxuICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgcXVlcnlTdHJpbmcucHVzaChlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1twcm9wZXJ0eV0pKTtcbiAgICAgIH1cbiAgICByZXR1cm4gcXVlcnlTdHJpbmcuam9pbignJicpO1xuICB9XG5cblx0c2VuZEZvcm1EYXRhICgpIHtcblx0XHRjb25zb2xlLmxvZyhcInNlbmRpbmcgdGhlIGZvcm0gdG8gdGhlIHNlcnZlclwiKVxuXHRcdHZhciBmb3JtRGF0YSA9IHtcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmlkLFxuICAgICAgbmFtZTogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLm5hbWUpLnZhbHVlLFxuICAgICAgZW1haWw6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5lbWFpbCkudmFsdWUsXG4gICAgICBxdWVzdGlvbjogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnF1ZXN0aW9uKS52YWx1ZSxcbiAgICAgIGVtYWlsUmVxdWVzdGVkOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZW1haWxSZXF1ZXN0KS5jaGVja2VkXG4gICAgfTtcblxuICAgIHZhciB4bWxodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgaWYgKHhtbGh0dHAuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdJIGhhdmUgcmVjZWl2ZWQgeW91ciBxdWVzdGlvbi4gVGhhbmtzIScgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0eXBlOiAnZGFuZ2VyJywgbWVzc2FnZTogJ1NvcnJ5LCB0aGVyZSBoYXMgYmVlbiBhbiBlcnJvci4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB4bWxodHRwLm9wZW4oJ1BPU1QnLCAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZlcicsIHRydWUpO1xuICAgIHhtbGh0dHAuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIHhtbGh0dHAuc2VuZCh0aGlzLnJlcXVlc3RCdWlsZFF1ZXJ5U3RyaW5nKGZvcm1EYXRhKSk7XG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRpbmcnKS5zY3JvbGxJbnRvVmlldygpO1xuICBcdHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmlkKzEsXG4gIFx0XHR0eXBlOiAnaW5mbycsIFxuICBcdFx0bWVzc2FnZTogJ1NlbmRpbmcuLi4nIFxuICBcdH0sIHRoaXMuc2VuZEZvcm1EYXRhLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS50eXBlICYmIHRoaXMuc3RhdGUubWVzc2FnZSkge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZS50eXBlLCBcIixcIix0aGlzLnN0YXRlLm1lc3NhZ2UpXG5cdCAgICB2YXIgY2xhc3NTdHJpbmcgPSAnYWxlcnQgYWxlcnQtJyArIHRoaXMuc3RhdGUudHlwZTtcblx0ICAgIHZhciBzdGF0dXMgPSA8ZGl2IGlkPVwic3RhdHVzXCIgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30gcmVmPVwic3RhdHVzXCI+XG5cdCAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlfVxuXHQgICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgXHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHQgXHRcdDxoMSBpZD1cImhlYWRpbmdcIj5Bc2sgbWUhPC9oMT5cbiAgICAgIFx0e3N0YXR1c31cblx0XHRcdFx0PGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBmdWxsIG5hbWUgKjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiByZWY9XCJuYW1lXCIgcmVxdWlyZWQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgZW1haWwgYWRkcmVzcyB0byByZWNlaXZlIHRoZSBhbnN3ZXIgaW4gY2FzZSBpdCBpcyBzZW50IHByaXZhdGVseSAqPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxcIiByZWY9XCJlbWFpbFwiIHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8bGFiZWw+V291bGQgeW91IGxpa2UgdG8gcmVjZWl2ZSB0aGUgYW5zd2VyIHByaXZhdGVseSBpZiB0aGUgb3duZXIgZGVjaWRlcyBub3QgdG8gcG9zdCB0aGUgYW5zd2VyPyA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCBuYW1lPVwiZW1haWxSZXF1ZXN0XCIgcmVmPVwiZW1haWxSZXF1ZXN0XCIgdHlwZT1cImNoZWNrYm94XCIgLz5ZZXM8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblwiPllvdXIgcXVlc3Rpb24gKjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInF1ZXN0aW9uXCIgcmVmPVwicXVlc3Rpb25cIiByb3dzPVwiNFwiIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlNlbmQgeW91ciBxdWVzdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXHR9ICAgXG59O1xuXG53aW5kb3cuUG9zdFZpZXcgPSBQb3N0VmlldztcbiJdfQ==