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
      message: ''
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
      var formData = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0Vmlldy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLFE7OztBQUNMLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2RkFDWixLQURZOztBQUVsQixXQUFLLEtBQUwsR0FBYTtBQUNaLFlBQU0sTUFETTtBQUVaLGVBQVM7QUFGRyxLQUFiO0FBRmtCO0FBTWxCOzs7OzRDQUV3QixNLEVBQVE7QUFDOUIsVUFBSSxjQUFjLEVBQWxCO0FBQ0EsV0FBSSxJQUFJLFFBQVIsSUFBb0IsTUFBcEI7QUFDRSxZQUFJLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFKLEVBQXFDO0FBQ25DLHNCQUFZLElBQVosQ0FBaUIsbUJBQW1CLFFBQW5CLElBQStCLEdBQS9CLEdBQXFDLG1CQUFtQixPQUFPLFFBQVAsQ0FBbkIsQ0FBdEQ7QUFDRDtBQUhILE9BSUEsT0FBTyxZQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBUDtBQUNEOzs7bUNBRWM7QUFDZixVQUFJLFdBQVc7QUFDWCxjQUFNLFNBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxJQUEvQixFQUFxQyxLQURoQztBQUVYLGVBQU8sU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLEtBQS9CLEVBQXNDLEtBRmxDO0FBR1gsa0JBQVUsU0FBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLFFBQS9CLEVBQXlDLEtBSHhDO0FBSVgsd0JBQWdCLFNBQVMsV0FBVCxDQUFxQixLQUFLLElBQUwsQ0FBVSxZQUEvQixFQUE2QztBQUpsRCxPQUFmOztBQU9FLFVBQUksVUFBVSxJQUFJLGNBQUosRUFBZDtBQUNBLFVBQUksUUFBUSxJQUFaO0FBQ0EsY0FBUSxrQkFBUixHQUE2QixZQUFXO0FBQ3RDLFlBQUksUUFBUSxVQUFSLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCLGNBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFRLFlB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ImZpbGUiOiJQb3N0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBvc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHR5cGU6ICdpbmZvJyxcblx0XHRcdG1lc3NhZ2U6ICcnLFxuXHRcdH07XG5cdH1cblxuXHRyZXF1ZXN0QnVpbGRRdWVyeVN0cmluZyAocGFyYW1zKSB7XG4gICAgdmFyIHF1ZXJ5U3RyaW5nID0gW107XG4gICAgZm9yKHZhciBwcm9wZXJ0eSBpbiBwYXJhbXMpXG4gICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICBxdWVyeVN0cmluZy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwcm9wZXJ0eSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3Byb3BlcnR5XSkpO1xuICAgICAgfVxuICAgIHJldHVybiBxdWVyeVN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuXHRzZW5kRm9ybURhdGEgKCkge1xuXHRcdHZhciBmb3JtRGF0YSA9IHtcbiAgICAgIG5hbWU6IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5uYW1lKS52YWx1ZSxcbiAgICAgIGVtYWlsOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZW1haWwpLnZhbHVlLFxuICAgICAgcXVlc3Rpb246IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5xdWVzdGlvbikudmFsdWUsXG4gICAgICBlbWFpbFJlcXVlc3RlZDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmVtYWlsUmVxdWVzdCkuY2hlY2tlZFxuICAgIH07XG5cbiAgICB2YXIgeG1saHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIGlmICh4bWxodHRwLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnSSBoYXZlIHJlY2VpdmVkIHlvdXIgcXVlc3Rpb24uIFRoYW5rcyEnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgdHlwZTogJ2RhbmdlcicsIG1lc3NhZ2U6ICdTb3JyeSwgdGhlcmUgaGFzIGJlZW4gYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgeG1saHR0cC5vcGVuKCdQT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2ZXInLCB0cnVlKTtcbiAgICB4bWxodHRwLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB4bWxodHRwLnNlbmQodGhpcy5yZXF1ZXN0QnVpbGRRdWVyeVN0cmluZyhmb3JtRGF0YSkpO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0IChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkaW5nJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgXHR0aGlzLnNldFN0YXRlKHsgXG4gIFx0XHR0eXBlOiAnaW5mbycsIFxuICBcdFx0bWVzc2FnZTogJ1NlbmRpbmcuLi4nIFxuICBcdH0sIHRoaXMuc2VuZEZvcm1EYXRhLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS50eXBlICYmIHRoaXMuc3RhdGUubWVzc2FnZSkge1xuXHQgICAgdmFyIGNsYXNzU3RyaW5nID0gJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLnN0YXRlLnR5cGU7XG5cdCAgICB2YXIgc3RhdHVzID0gPGRpdiBpZD1cInN0YXR1c1wiIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmd9IHJlZj1cInN0YXR1c1wiPlxuXHQgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZX1cblx0ICAgICAgICAgICAgICAgICA8L2Rpdj47XG4gIFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0IFx0XHQ8aDEgaWQ9XCJoZWFkaW5nXCI+QXNrIG1lITwvaDE+XG4gICAgICBcdHtzdGF0dXN9XG5cdFx0XHRcdDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgZnVsbCBuYW1lICo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJuYW1lXCIgcmVmPVwibmFtZVwiIHJlcXVpcmVkIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIGVtYWlsIGFkZHJlc3MgdG8gcmVjZWl2ZSB0aGUgYW5zd2VyIGluIGNhc2UgaXQgaXMgc2VudCBwcml2YXRlbHkgKjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImVtYWlsXCIgcmVmPVwiZW1haWxcIiByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGxhYmVsPldvdWxkIHlvdSBsaWtlIHRvIHJlY2VpdmUgdGhlIGFuc3dlciBwcml2YXRlbHkgaWYgdGhlIG93bmVyIGRlY2lkZXMgbm90IHRvIHBvc3QgdGhlIGFuc3dlcj8gPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveC1pbmxpbmVcIj48aW5wdXQgbmFtZT1cImVtYWlsUmVxdWVzdFwiIHJlZj1cImVtYWlsUmVxdWVzdFwiIHR5cGU9XCJjaGVja2JveFwiIC8+WWVzPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicXVlc3Rpb25cIj5Zb3VyIHF1ZXN0aW9uICo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJxdWVzdGlvblwiIHJlZj1cInF1ZXN0aW9uXCIgcm93cz1cIjRcIiByZXF1aXJlZC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5TZW5kIHlvdXIgcXVlc3Rpb248L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblx0fSAgIFxufTtcblxud2luZG93LlBvc3RWaWV3ID0gUG9zdFZpZXc7XG4iXX0=