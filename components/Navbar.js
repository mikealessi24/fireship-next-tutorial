import Link from "next/link";
import Image from "next/image";

export default function Navbar({}) {
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button>Feed</button>
          </Link>
        </li>
        {username && (
          <>
            <li>
              <Link href="/admin" passHref>
                <button>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <Image
                  className="navbarImage"
                  src={user?.photoUrl}
                  alt="profile image"
                />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <>
            <li>
              <Link href="/enter" passHref>
                <button>Sign In</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
