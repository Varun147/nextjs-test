import Link from "next/link";
import Navbar from "../components/Navbar";

const BlogPage = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        lineHeight: "30px",
        marginTop: "120px",
        textAlign: "left",
      }}
    >
      <Navbar />
      {data.slice(0, 5).map((curElem) => {
        return (
          <div
            style={{
              marginLeft: "10%",
              marginRight: "10%",
              color: "grey",
              border: "4px black",
              padding: "12px",
              borderRadius: "2px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.6)",
            }}
            key={curElem.id}
          >
            <h4>{curElem.id}</h4>
            <h5>
              <Link href={`/blog/${curElem.id}`}>{curElem.title}</Link>
            </h5>
          </div>
        );
      })}
    </div>
  );
};

async function Blog() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return <BlogPage data={data} />;
}

export default Blog;
