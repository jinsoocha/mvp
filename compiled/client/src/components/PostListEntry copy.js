"use strict";

var PostListEntry = function PostListEntry(_ref) {
	var post = _ref.post;
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h4",
			null,
			post.question
		),
		React.createElement(
			"blockquote",
			null,
			post.answer
		)
	);
};

window.PostListEntry = PostListEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Qb3N0TGlzdEVudHJ5IGNvcHkuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxnQkFBZ0IsU0FBaEIsYUFBZ0I7QUFBQSxLQUFFLElBQUYsUUFBRSxJQUFGO0FBQUEsUUFDbkI7QUFBQTtFQUFBO0VBQ0M7QUFBQTtHQUFBO0dBQ0MsS0FBSztBQUROLEdBREQ7RUFJQztBQUFBO0dBQUE7R0FDQyxLQUFLO0FBRE47QUFKRCxFQURtQjtBQUFBLENBQXBCOztBQVlBLE9BQU8sYUFBUCxHQUF3QixhQUF4QiIsImZpbGUiOiJQb3N0TGlzdEVudHJ5IGNvcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUG9zdExpc3RFbnRyeSA9ICh7cG9zdH0pID0+IChcblx0PGRpdj5cblx0XHQ8aDQ+XG5cdFx0e3Bvc3QucXVlc3Rpb259XG5cdFx0PC9oND5cblx0XHQ8YmxvY2txdW90ZT5cblx0XHR7cG9zdC5hbnN3ZXJ9XG5cdFx0PC9ibG9ja3F1b3RlPlxuXHQ8L2Rpdj5cbik7XG5cblxud2luZG93LlBvc3RMaXN0RW50cnkgPSBcdFBvc3RMaXN0RW50cnk7Il19