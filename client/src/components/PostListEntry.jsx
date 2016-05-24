var PostListEntry = ({post}) => (
	<div>
		<h4>
		{post.question}
		</h4>
		<blockquote>
		{post.answer}
		</blockquote>
	</div>
);


window.PostListEntry = 	PostListEntry;