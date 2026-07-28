export default function Navbar({ setCategory }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">Daily News</div>
      <div className="nav-links">
        <button onClick={() => setCategory("general")}>General</button>
        <button onClick={() => setCategory("technology")}>Technology</button>
        <button onClick={() => setCategory("business")}>Business</button>
        <button onClick={() => setCategory("health")}>Health</button>
        <button onClick={() => setCategory("sports")}>Sports</button>
        <button onClick={() => setCategory("entertainment")}>Entertainment</button>
      </div>
    </nav>
  );
}