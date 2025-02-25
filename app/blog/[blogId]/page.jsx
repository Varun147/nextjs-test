import Navbar from "../../components/Navbar";

export const generateStaticParams = async () => {
  // Fetch the specific blog post
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const allPosts = await res.json();

  const slugs = allPosts.map((post) => ({
    slug: post.id,
  }));

  // array of slug =  [ { slug: 1 }]

  return slugs;
};

export default async function BlogPostPage({ params }) {
  const { blogId } = params;

  if (!blogId) {
    return (
      <div>
        <h1>Blog post not found</h1>
      </div>
    );
  }

  // Fetch the specific blog post
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`
  );
  const blog = await res.json();

  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "15%",
          marginLeft: "10%",
          marginRight: "10%",
          height: "120px",
          color: "grey",
          border: "4px black",
          padding: "12px",
          borderRadius: "2px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Blog Post {blog.id}</h1>
        <h2 style={{ marginBottom: "10px" }}>{blog.title}</h2>
        <p>{blog.body}</p>
      </div>
    </div>
  );
}
