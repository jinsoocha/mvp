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
            console.log("for looping");
            if (post.answer) {
              console.log("answered!", post);
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
      setInterval(this.loadPosts, 2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Ib21lLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sSTs7O0FBQ0wsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHdGQUNWLEtBRFU7O0FBRWhCLFVBQUssS0FBTCxHQUFhO0FBQ1osYUFBTyxFQURLO0FBRVgsa0JBQVk7QUFGRCxLQUFiO0FBRmdCO0FBTWpCOzs7O2dDQUVZO0FBQ1gsUUFBRSxJQUFGLENBQU87QUFDTCxhQUFLLFNBREE7QUFFTCxrQkFBVSxNQUZMO0FBR0wsZUFBTyxLQUhGO0FBSUwsaUJBQVMsVUFBUyxJQUFULEVBQWU7QUFDdkIsY0FBSSxnQkFBZSxFQUFuQjtBQUNBLGVBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsVUFBUyxJQUFULEVBQWU7QUFDaEMsb0JBQVEsR0FBUixDQUFZLGFBQVo7QUFDQSxnQkFBRyxLQUFLLE1BQVIsRUFBZ0I7QUFDZixzQkFBUSxHQUFSLENBQVksV0FBWixFQUF3QixJQUF4QjtBQUNBLDRCQUFjLElBQWQsQ0FBbUIsSUFBbkI7QUFDQTtBQUNELFdBTkQ7QUFPTCxlQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQU8sYUFBUixFQUFkO0FBQ0ssU0FWUSxDQVVQLElBVk8sQ0FVRixJQVZFLENBSko7QUFlTCxlQUFPLFVBQVMsR0FBVCxFQUFjLE1BQWQsRUFBc0IsR0FBdEIsRUFBMkI7QUFDaEMsa0JBQVEsS0FBUixDQUFjLEtBQUssS0FBTCxDQUFXLEdBQXpCLEVBQThCLE1BQTlCLEVBQXNDLElBQUksUUFBSixFQUF0QztBQUNELFNBRk0sQ0FFTCxJQUZLLENBRUEsSUFGQTtBQWZGLE9BQVA7QUFtQkQ7Ozt3Q0FFb0I7QUFDbkIsV0FBSyxTQUFMO0FBQ0Esa0JBQVksS0FBSyxTQUFqQixFQUE0QixJQUE1QjtBQUNEOzs7c0NBRWtCLFUsRUFBWTtBQUM5QixXQUFLLFFBQUwsQ0FBYztBQUNiLG9CQUFZO0FBREMsT0FBZDtBQUdBOzs7NkJBRVE7QUFDVCxhQUNDO0FBQUE7UUFBQTtRQUNDO0FBQUE7VUFBQSxFQUFLLE9BQU8sRUFBQyxXQUFXLE1BQVosRUFBb0IsY0FBYyxNQUFsQyxFQUFaO1VBQ0c7QUFBQTtZQUFBLEVBQUksT0FBTyxFQUFDLGFBQWEsUUFBZCxFQUFYO1lBQUE7QUFBQSxXQURIO1VBSUc7QUFBQTtZQUFBLEVBQUcsT0FBTyxFQUFDLGFBQWEsUUFBZCxFQUFWO1lBQUE7QUFBQTtBQUpILFNBREQ7UUFTQztBQUFBO1VBQUE7VUFDQyxvQkFBQyxTQUFEO0FBQ0MsMkJBQWUsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQURoQjtBQUVHLHdCQUFZLEtBQUssS0FBTCxDQUFXO0FBRjFCO0FBREQsU0FURDtRQWVFO0FBQUE7VUFBQTtVQUNDLG9CQUFDLFFBQUQ7QUFDQSxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQURsQjtBQUVBLHdCQUFZLEtBQUssS0FBTCxDQUFXO0FBRnZCO0FBREQ7QUFmRixPQUREO0FBd0JBOzs7O0VBbkVpQixNQUFNLFM7O0FBc0V6QixPQUFPLElBQVAsR0FBYyxJQUFkIiwiZmlsZSI6IkhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdHBvc3RzOiBbXSxcbiAgICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIH07XG4gIH1cblxuICBsb2FkUG9zdHMgKCkge1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvc2VydmVyJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBcdHZhciBhbnN3ZXJlZFBvc3RzID1bXTtcbiAgICAgIFx0ZGF0YS5kYXRhLmZvckVhY2goZnVuY3Rpb24ocG9zdCkge1xuICAgICAgXHRcdGNvbnNvbGUubG9nKFwiZm9yIGxvb3BpbmdcIilcbiAgICAgIFx0XHRpZihwb3N0LmFuc3dlcikge1xuICAgICAgXHRcdFx0Y29uc29sZS5sb2coXCJhbnN3ZXJlZCFcIixwb3N0KVxuICAgICAgXHRcdFx0YW5zd2VyZWRQb3N0cy5wdXNoKHBvc3QpO1xuICAgICAgXHRcdH1cbiAgICAgIFx0fSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7cG9zdHM6IGFuc3dlcmVkUG9zdHN9KTtcdFx0XHRcbiAgICAgIH0uYmluZCh0aGlzKSxcdFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLnN0YXRlLnVybCwgc3RhdHVzLCBlcnIudG9TdHJpbmcoKSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLmxvYWRQb3N0cygpO1xuICAgIHNldEludGVydmFsKHRoaXMubG9hZFBvc3RzLCAyMDAwKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaElucHV0IChzZWFyY2hUZXh0KSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0XHRzZWFyY2hUZXh0OiBzZWFyY2hUZXh0XG4gIFx0fSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpblRvcDogJzUwcHgnLCBtYXJnaW5Cb3R0b206ICc1MHB4J319PlxuXHRcdFx0XHQgIFx0PGgzIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG5cdFx0XHRcdCAgXHRIaSwgbXkgbmFtZSBpcyBKaW5zb28gQ2hhLlxuXHRcdFx0XHQgIFx0PC9oMz5cblx0XHRcdFx0ICBcdDxwIHN0eWxlPXt7J3RleHRBbGlnbic6ICdjZW50ZXInfX0+XG5cdFx0XHRcdCAgXHRJIGFtIGEgZnVsbCBzdGFjayBkZXZlbG9wZXIgaW4gU2FuIEZyYW5jaXNjbywgZm9jdXNpbmcgb24gSmF2YXNjcmlwdCB0ZWNobm9sb2dpZXMuIEFzayBtZSBhYm91dCBsaWZlIGluIFNGIGFzIGEgc29mdHdhcmUgZW5naW5lZXIhIEkgd291bGQgYmUgaGFwcHkgdG8gc2hhcmUgbXkgZXhwZXJpZW5jZXMuXG5cdFx0XHRcdCAgXHQ8L3A+XG5cdFx0XHQgICAgPC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRcdG9uU2VhcmNoSW5wdXQ9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdFx0ICAgIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdCAgPGRpdj5cblx0XHRcdCAgXHQ8UG9zdExpc3QgXG5cdFx0XHQgIFx0cG9zdHM9e3RoaXMuc3RhdGUucG9zdHN9XG5cdFx0XHQgIFx0c2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxuXHRcdFx0ICAgIC8+XG5cdFx0XHQgIDwvZGl2PlxuXHRcdCAgPC9kaXY+XG5cdFx0KTsgIFxuXHR9ICAgXG59XG5cbndpbmRvdy5Ib21lID0gSG9tZTtcblxuIl19