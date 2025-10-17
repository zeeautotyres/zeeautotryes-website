import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>
      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>   
   
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
