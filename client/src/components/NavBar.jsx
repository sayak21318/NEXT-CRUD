import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <ul style={{backgroundColor:'green'}}>
        <li>
          <Link href="/">
            <div>Users View</div>
          </Link>
        </li>
        <li>
          <Link href="/create">
            <div>Create User</div>
          </Link>
        </li>
       

        <li>
          <Link href="/about">
            <div>About</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
