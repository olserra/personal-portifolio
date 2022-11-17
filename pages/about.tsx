import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Otavio Serra">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/leeerob">@leeerob</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/leerob">@leerob</a>
            </li>
            <li>
              Website: <Link href="https://leerob.io">https://leerob.io</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/leeerob/">
                https://www.linkedin.com/in/leeerob
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Otavio Serra, React Native Freelancer</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Otavio Serra is a React Native Freelancer
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Otavio. I'm a React Native Freelancer
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Otavio Serra is a React Native Freelancer
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Otavio. I'm a React Native Freelancer
          </p>
          <h3>Education</h3>
          <p>
            Otavio Serra graduated from Le Wagon with a Masters in
            Computer Engineering at IST.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Otavio Serra headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Otavio Serra headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
