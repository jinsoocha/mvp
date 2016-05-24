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
          var notAnsweredPosts = [];
          data.data.forEach(function (post) {
            if (!post.answer) {
              notAnsweredPosts.push(post);
            }
          });
          this.setState({ posts: notAnsweredPosts });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Pd25lclZpZXcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxTOzs7QUFDTCxxQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkZBQ1YsS0FEVTs7QUFFaEIsVUFBSyxLQUFMLEdBQWE7QUFDWixhQUFPLEVBREs7QUFFWCxrQkFBWTtBQUZELEtBQWI7QUFGZ0I7QUFNakI7Ozs7Z0NBRVk7QUFDWCxRQUFFLElBQUYsQ0FBTztBQUNMLGFBQUssU0FEQTtBQUVMLGtCQUFVLE1BRkw7QUFHTCxlQUFPLEtBSEY7QUFJTCxpQkFBUyxVQUFTLElBQVQsRUFBZTtBQUN2QixjQUFJLG1CQUFrQixFQUF0QjtBQUNBLGVBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsVUFBUyxJQUFULEVBQWU7QUFDaEMsZ0JBQUcsQ0FBQyxLQUFLLE1BQVQsRUFBaUI7QUFDaEIsK0JBQWlCLElBQWpCLENBQXNCLElBQXRCO0FBQ0E7QUFDRCxXQUpEO0FBS0gsZUFBSyxRQUFMLENBQWMsRUFBQyxPQUFPLGdCQUFSLEVBQWQ7QUFDRyxTQVJRLENBUVAsSUFSTyxDQVFGLElBUkUsQ0FKSjtBQWFMLGVBQU8sVUFBUyxHQUFULEVBQWMsTUFBZCxFQUFzQixHQUF0QixFQUEyQjtBQUNoQyxrQkFBUSxLQUFSLENBQWMsS0FBSyxLQUFMLENBQVcsR0FBekIsRUFBOEIsTUFBOUIsRUFBc0MsSUFBSSxRQUFKLEVBQXRDO0FBQ0QsU0FGTSxDQUVMLElBRkssQ0FFQSxJQUZBO0FBYkYsT0FBUDtBQWlCRDs7O3dDQUVvQjtBQUNuQixXQUFLLFNBQUw7QUFDRDs7O3NDQUVrQixVLEVBQVk7QUFDOUIsV0FBSyxRQUFMLENBQWM7QUFDYixvQkFBWTtBQURDLE9BQWQ7QUFHQTs7OzZCQUVRO0FBQ1QsYUFDQztBQUFBO1FBQUE7UUFDQztBQUFBO1VBQUEsRUFBSyxPQUFPLEVBQUMsV0FBVyxNQUFaLEVBQW9CLGNBQWMsTUFBbEMsRUFBWjtVQUNHO0FBQUE7WUFBQSxFQUFJLE9BQU8sRUFBQyxhQUFhLFFBQWQsRUFBWDtZQUFBO0FBQUEsV0FESDtVQUlHO0FBQUE7WUFBQSxFQUFHLE9BQU8sRUFBQyxhQUFhLFFBQWQsRUFBVjtZQUFBO0FBQUE7QUFKSCxTQUREO1FBU0M7QUFBQTtVQUFBO1VBQ0Msb0JBQUMsU0FBRDtBQUNDLDJCQUFlLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEaEI7QUFFRyx3QkFBWSxLQUFLLEtBQUwsQ0FBVztBQUYxQjtBQURELFNBVEQ7UUFlRTtBQUFBO1VBQUE7VUFDQyxvQkFBQyxZQUFEO0FBQ0EsbUJBQU8sS0FBSyxLQUFMLENBQVcsS0FEbEI7QUFFQSx3QkFBWSxLQUFLLEtBQUwsQ0FBVztBQUZ2QjtBQUREO0FBZkYsT0FERDtBQXdCQTs7OztFQWhFc0IsTUFBTSxTOztBQW1FOUIsT0FBTyxTQUFQLEdBQW1CLFNBQW5CIiwiZmlsZSI6Ik93bmVyVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE93bmVyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgXHRwb3N0czogW10sXG4gICAgICBzZWFyY2hUZXh0OiAnJyxcbiAgICB9O1xuICB9XG5cbiAgbG9hZFBvc3RzICgpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnL3NlcnZlcicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgXHR2YXIgbm90QW5zd2VyZWRQb3N0cyA9W107XG4gICAgICBcdGRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHBvc3QpIHtcbiAgICAgIFx0XHRpZighcG9zdC5hbnN3ZXIpIHtcbiAgICAgIFx0XHRcdG5vdEFuc3dlcmVkUG9zdHMucHVzaChwb3N0KTtcbiAgICAgIFx0XHR9XG4gICAgICBcdH0pO1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtwb3N0czogbm90QW5zd2VyZWRQb3N0c30pO1x0XHRcdFxuICAgICAgfS5iaW5kKHRoaXMpLFx0XG4gICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuc3RhdGUudXJsLCBzdGF0dXMsIGVyci50b1N0cmluZygpKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMubG9hZFBvc3RzKCk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hJbnB1dCAoc2VhcmNoVGV4dCkge1xuICBcdHRoaXMuc2V0U3RhdGUoe1xuICBcdFx0c2VhcmNoVGV4dDogc2VhcmNoVGV4dFxuICBcdH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICc1MHB4JywgbWFyZ2luQm90dG9tOiAnNTBweCd9fT5cblx0XHRcdFx0ICBcdDxoMyBzdHlsZT17eyd0ZXh0QWxpZ24nOiAnY2VudGVyJ319PlxuXHRcdFx0XHQgIFx0VGhlIHdvcmxkIGlzIHdhaXRpbmcgZm9yIHlvdXIgYW5zd2VycyFcblx0XHRcdFx0ICBcdDwvaDM+XG5cdFx0XHRcdCAgXHQ8cCBzdHlsZT17eyd0ZXh0QWxpZ24nOiAnY2VudGVyJ319PlxuXHRcdFx0XHQgIFx0U2hhcmUgeW91ciBhbnN3ZXJzIGFuZCBidWlsZCB5b3VyIHJlcHV0YXRpb24uXG5cdFx0XHRcdCAgXHQ8L3A+XG5cdFx0XHQgICAgPC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlYXJjaEJhciBcblx0XHRcdFx0XHRcdG9uU2VhcmNoSW5wdXQ9e3RoaXMuaGFuZGxlU2VhcmNoSW5wdXQuYmluZCh0aGlzKX1cblx0XHRcdFx0ICAgIHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdFx0ICAvPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHRcdCAgPGRpdj5cblx0XHRcdCAgXHQ8UXVlc3Rpb25MaXN0IFxuXHRcdFx0ICBcdHBvc3RzPXt0aGlzLnN0YXRlLnBvc3RzfVxuXHRcdFx0ICBcdHNlYXJjaFRleHQ9e3RoaXMuc3RhdGUuc2VhcmNoVGV4dH1cblx0XHRcdCAgICAvPlxuXHRcdFx0ICA8L2Rpdj5cblx0XHQgIDwvZGl2PlxuXHRcdCk7ICBcblx0fSAgIFxufVxuXG53aW5kb3cuT3duZXJWaWV3ID0gT3duZXJWaWV3O1xuIl19