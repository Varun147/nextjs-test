import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <h1>Welcome to About</h1>
        <p style={{ fontSize: "18px", color: "#555", marginTop: "10px" }}>
          Learn more about us and what we do.
        </p>
      </div>
    </div>
  );
}
