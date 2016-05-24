'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OwnerView = function (_React$Component) {
  _inherits(OwnerView, _React$Component);

  function OwnerView(props) {
    _classCallCheck(this, OwnerView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OwnerView).call(this, props));

    _this.state = {
      posts: [],
      searchText: ''
    };
    return _this;
  }

  _createClass(OwnerView, [{
    key: 'loadPosts',
    value: function loadPosts() {
      $.ajax({
        url: '/server',
        dataType: 'json',
        cache: false,
        success: function (data) {
          this.setState({ posts: data.data });
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
            'The world is waiting for your answers!'
          ),
          React.createElement(
            'p',
            { style: { 'textAlign': 'center' } },
            'Share your answers and build your reputation.'
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
          React.createElement(QuestionList, {
            posts: this.state.posts,
            searchText: this.state.searchText
          })
        )
      );
    }
  }]);

  return OwnerView;
}(React.Component);

window.OwnerView = OwnerView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Pd25lclZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxTOzs7QUFDTCxxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkZBQ1YsS0FEVTs7QUFFaEIsVUFBSyxLQUFMLEdBQWE7QUFDWixhQUFPLEVBREs7QUFFWCxrQkFBWTtBQUZELEtBQWI7QUFGZ0I7QUFNakI7Ozs7Z0NBRVk7QUFDWCxRQUFFLElBQUYsQ0FBTztBQUNMLGFBQUssU0FEQTtBQUVMLGtCQUFVLE1BRkw7QUFHTCxlQUFPLEtBSEY7QUFJTCxpQkFBUyxVQUFTLElBQVQsRUFBZTtBQUN0QixlQUFLLFFBQUwsQ0FBYyxFQUFDLE9BQU8sS0FBSyxJQUFiLEVBQWQ7QUFDRCxTQUZRLENBRVAsSUFGTyxDQUVGLElBRkUsQ0FKSjtBQU9MLGVBQU8sVUFBUyxHQUFULEVBQWMsTUFBZCxFQUFzQixHQUF0QixFQUEyQjtBQUNoQyxrQkFBUSxLQUFSLENBQWMsS0FBSyxLQUFMLENBQVcsR0FBekIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBSSxRQUFKLEVBQXRDO0FBQ0QsU0FGTSxDQUVMLElBRkssQ0FFQSxJQUZBO0FBUEYsT0FBUDtBQVdEOzs7d0NBRW9CO0FBQ25CLFdBQUssU0FBTDtBQUNBLGtCQUFZLEtBQUssU0FBakIsRUFBNEIsSUFBNUI7QUFDRDs7O3NDQUVrQixVLEVBQVk7QUFDOUIsV0FBSyxRQUFMLENBQWM7QUFDYixvQkFBWTtBQURDLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1QsYUFDQztBQUFBO1FBQUE7UUFDQztBQUFBO1VBQUEsRUFBSyxPQUFPLEVBQUMsV0FBVyxNQUFaLEVBQW9CLGNBQWMsTUFBbEMsRUFBWjtVQUNHO0FBQUE7WUFBQSxFQUFJLE9BQU8sRUFBQyxhQUFhLFFBQWQsRUFBWDtZQUFBO0FBQUEsV0FESDtVQUlHO0FBQUE7WUFBQSxFQUFHLE9BQU8sRUFBQyxhQUFhLFFBQWQsRUFBVjtZQUFBO0FBQUE7QUFKSCxTQUREO1FBU0M7QUFBQTtVQUFBO1VBQ0Msb0JBQUMsU0FBRDtBQUNDLDJCQUFlLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEaEI7QUFFRyx3QkFBWSxLQUFLLEtBQUwsQ0FBVztBQUYxQjtBQURELFNBVEQ7UUFlRTtBQUFBO1VBQUE7VUFDQyxvQkFBQyxZQUFEO0FBQ0EsbUJBQU8sS0FBSyxLQUFMLENBQVcsS0FEbEI7QUFFQSx3QkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ2QjtBQUREO0FBZkYsT0FERDtBQXdCQTs7OztFQTNEc0IsTUFBTSxTOztBQThEOUIsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Ik93bmVyVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE93bmVyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRwb3N0czogW10sXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICB9O1xuICB9XG5cbiAgbG9hZFBvc3RzICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3NlcnZlcicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwb3N0czogZGF0YS5kYXRhfSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuc3RhdGUudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMubG9hZFBvc3RzKCk7XG4gICAgc2V0SW50ZXJ2YWwodGhpcy5sb2FkUG9zdHMsIDIwMDApO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoSW5wdXQgKHNlYXJjaFRleHQpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHRcdHNlYXJjaFRleHQ6IHNlYXJjaFRleHRcbiAgXHR9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnNTBweCcsIG1hcmdpbkJvdHRvbTogJzUwcHgnfX0+XG5cdFx0XHRcdCAgXHQ8aDMgc3R5bGU9e3sndGV4dEFsaWduJzogJ2NlbnRlcid9fT5cblx0XHRcdFx0ICBcdFRoZSB3b3JsZCBpcyB3YWl0aW5nIGZvciB5b3VyIGFuc3dlcnMhXG5cdFx0XHRcdCAgXHQ8L2gzPlxuXHRcdFx0XHQgIFx0PHAgc3R5bGU9e3sndGV4dEFsaWduJzogJ2NlbnRlcid9fT5cblx0XHRcdFx0ICBcdFNoYXJlIHlvdXIgYW5zd2VycyBhbmQgYnVpbGQgeW91ciByZXB1dGF0aW9uLlxuXHRcdFx0XHQgIFx0PC9wPlxuXHRcdFx0ICAgIDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0XHRvblNlYXJjaElucHV0PXt0aGlzLmhhbmRsZVNlYXJjaElucHV0LmJpbmQodGhpcyl9XG5cdFx0XHRcdCAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHRcdCAgLz5cblx0XHRcdCAgPC9kaXY+XG5cdFx0XHQgIDxkaXY+XG5cdFx0XHQgIFx0PFF1ZXN0aW9uTGlzdCBcblx0XHRcdCAgXHRwb3N0cz17dGhpcy5zdGF0ZS5wb3N0c31cblx0XHRcdCAgXHRzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XG5cdFx0XHQgICAgLz5cblx0XHRcdCAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQpOyAgXG5cdH0gICBcbn1cblxud2luZG93Lk93bmVyVmlldyA9IE93bmVyVmlldztcbiJdfQ==