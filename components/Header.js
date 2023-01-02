import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="title">MySuperPower</div>
      <nav>
        <ul>
          <li><Link href="/maintenance">Join Us</Link></li>
          <li><Link href="/maintenance">About Us</Link></li>
          <li><Link href="/maintenance">Learn More</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
