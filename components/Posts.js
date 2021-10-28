import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "sagar_maheshh",
		userImg: "https://links.papareact.com/3ke",
		img: "https://links.papareact.com/3ke",
		caption: "Insta clone in making",
	},
	{
		id: "1233",
		username: "sagar_maheshh",
		userImg: "https://links.papareact.com/3ke",
		img: "https://links.papareact.com/3ke",
		caption: "Insta clone in making",
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
