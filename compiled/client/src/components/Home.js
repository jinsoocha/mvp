'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = {
      posts: [],
      searchText: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'loadPosts',
    value: function loadPosts() {
      $.ajax({
        url: '/server',
        dataType: 'json',
        cache: false,
        success: function (data) {
          var answeredPosts = [];
          data.data.forEach(function (post) {
            if (post.answer) {
              answeredPosts.push(post);
            }
          });
          this.setState({ posts: answeredPosts });
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(this.state.url, status, err.toString());
        }.bind(this)
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadPosts();
    }
  }, {
    key: 'handleSearchInput',
    value: function handleSearchInput(searchText) {
      this.setState({
        searchText: searchText
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { marginTop: '50px', marginBottom: '50px' } },
          React.createElement(
            'h3',
            { style: { 'textAlign': 'center' } },
            'Hi, my name is Jinsoo Cha.'
          ),
          React.createElement(
            'p',
            { style: { 'textAlign': 'center' } },
            'I am a full stack developer in San Francisco, focusing on Javascript technologies. Ask me about life in SF as a software engineer! I would be happy to share my experiences.'
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(SearchBar, {
            onSearchInput: this.handleSearchInput.bind(this),
            searchText: this.state.searchText
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(PostList, {
            posts: this.state.posts,
            searchText: this.state.searchText
          })
        )
      );
    }
  }]);

  return Home;
}(React.Component);

window.Home = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Ib21lLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sSTs7O0FBQ0wsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdGQUNWLEtBRFU7O0FBRWhCLFVBQUssS0FBTCxHQUFhO0FBQ1osYUFBTyxFQURLO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBRmdCO0FBTWpCOzs7O2dDQUVZO0FBQ1gsUUFBRSxJQUFGLENBQU87QUFDTCxhQUFLLFNBREE7QUFFTCxrQkFBVSxNQUZMO0FBR0wsZUFBTyxLQUhGO0FBSUwsaUJBQVMsVUFBUyxJQUFULEVBQWU7QUFDdkIsY0FBSSxnQkFBZSxFQUFuQjtBQUNBLGVBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsVUFBUyxJQUFULEVBQWU7QUFDaEMsZ0JBQUcsS0FBSyxNQUFSLEVBQWdCO0FBQ2YsNEJBQWMsSUFBZCxDQUFtQixJQUFuQjtBQUNBO0FBQ0QsV0FKRDtBQUtELGVBQUssUUFBTCxDQUFjLEVBQUMsT0FBTyxhQUFSLEVBQWQ7QUFDQyxTQVJRLENBUVAsSUFSTyxDQVFGLElBUkUsQ0FKSjtBQWFMLGVBQU8sVUFBUyxHQUFULEVBQWMsTUFBZCxFQUFzQixHQUF0QixFQUEyQjtBQUNoQyxrQkFBUSxLQUFSLENBQWMsS0FBSyxLQUFMLENBQVcsR0FBekIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBSSxRQUFKLEVBQXRDO0FBQ0QsU0FGTSxDQUVMLElBRkssQ0FFQSxJQUZBO0FBYkYsT0FBUDtBQWlCRDs7O3dDQUVvQjtBQUNuQixXQUFLLFNBQUw7QUFDRDs7O3NDQUVrQixVLEVBQVk7QUFDOUIsV0FBSyxRQUFMLENBQWM7QUFDYixvQkFBWTtBQURDLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1QsYUFDQztBQUFBO1FBQUE7UUFDQztBQUFBO1VBQUEsRUFBSyxPQUFPLEVBQUMsV0FBVyxNQUFaLEVBQW9CLGNBQWMsTUFBbEMsRUFBWjtVQUNHO0FBQUE7WUFBQSxFQUFJLE9BQU8sRUFBQyxhQUFhLFFBQWQsRUFBWDtZQUFBO0FBQUEsV0FESDtVQUlHO0FBQUE7WUFBQSxFQUFHLE9BQU8sRUFBQyxhQUFhLFFBQWQsRUFBVjtZQUFBO0FBQUE7QUFKSCxTQUREO1FBU0M7QUFBQTtVQUFBO1VBQ0Msb0JBQUMsU0FBRDtBQUNDLDJCQUFlLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEaEI7QUFFRyx3QkFBWSxLQUFLLEtBQUwsQ0FBVztBQUYxQjtBQURELFNBVEQ7UUFlRTtBQUFBO1VBQUE7VUFDQyxvQkFBQyxRQUFEO0FBQ0EsbUJBQU8sS0FBSyxLQUFMLENBQVcsS0FEbEI7QUFFQSx3QkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ2QjtBQUREO0FBZkYsT0FERDtBQXdCQTs7OztFQWhFaUIsTUFBTSxTOztBQW1FekIsT0FBTyxJQUFQLEdBQWMsSUFBZCIsImZpbGUiOiJIb21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRwb3N0czogW10sXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICB9O1xuICB9XG5cbiAgbG9hZFBvc3RzICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3NlcnZlcicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgXHR2YXIgYW5zd2VyZWRQb3N0cyA9W107XG4gICAgICBcdGRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHBvc3QpIHtcbiAgICAgIFx0XHRpZihwb3N0LmFuc3dlcikge1xuICAgICAgXHRcdFx0YW5zd2VyZWRQb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgXHRcdH1cbiAgICAgIFx0fSk7XG5cdFx0ICAgIHRoaXMuc2V0U3RhdGUoe3Bvc3RzOiBhbnN3ZXJlZFBvc3RzfSk7XHRcdFx0XG4gICAgICB9LmJpbmQodGhpcyksXHRcbiAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5zdGF0ZS51cmwsIHN0YXR1cywgZXJyLnRvU3RyaW5nKCkpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgdGhpcy5sb2FkUG9zdHMoKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaElucHV0IChzZWFyY2hUZXh0KSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0XHRzZWFyY2hUZXh0OiBzZWFyY2hUZXh0XG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpblRvcDogJzUwcHgnLCBtYXJnaW5Cb3R0b206ICc1MHB4J319PlxuXHRcdFx0XHQgIFx0PGgzIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG5cdFx0XHRcdCAgXHRIaSwgbXkgbmFtZSBpcyBKaW5zb28gQ2hhLlxuXHRcdFx0XHQgIFx0PC9oMz5cblx0XHRcdFx0ICBcdDxwIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG5cdFx0XHRcdCAgXHRJIGFtIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIgaW4gU2FuIEZyYW5jaXNjbywgZm9jdXNpbmcgb24gSmF2YXNjcmlwdCB0ZWNobm9sb2dpZXMuIEFzayBtZSBhYm91dCBsaWZlIGluIFNGIGFzIGEgc29mdHdhcmUgZW5naW5lZXIhIEkgd291bGQgYmUgaGFwcHkgdG8gc2hhcmUgbXkgZXhwZXJpZW5jZXMuXG5cdFx0XHRcdCAgXHQ8L3A+XG5cdFx0XHQgICAgPC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRcdG9uU2VhcmNoSW5wdXQ9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdFx0ICAgIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdCAgPGRpdj5cblx0XHRcdCAgXHQ8UG9zdExpc3QgXG5cdFx0XHQgIFx0cG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9XG5cdFx0XHQgIFx0c2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0ICAgIC8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTsgIFxuXHR9ICAgXG59XG5cbndpbmRvdy5Ib21lID0gSG9tZTtcblxuIl19