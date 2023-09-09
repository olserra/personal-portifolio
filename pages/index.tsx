import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from '../public/avatar-bw.png';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start mb-8">
            <div className="flex flex-col pr-8">
              <h2 className="text-gray-700 dark:text-gray-200">📍 Lisbon</h2>
              <Link href="https://open.spotify.com/show/3wB8b5r5KQJ0XUt0BMR3jO?si=102c7e7485de40a4">
                <h2 className="text-gray-700 dark:text-gray-200">
                  🎙️ Podcaster @Spotify | AI & Performance
                </h2>
              </Link>
              <Link href="https://www.amazon.com/Unlocking-Human-Potential-Transforming-Development-ebook/dp/B0C3W5N45W/ref=sr_1_3?crid=14ZDTQP5DKC9Z&keywords=unlocking+human+potential&qid=1689010933&sprefix=unlocking+human+potentia%2Caps%2C148&sr=8-3">
                <h2 className="text-gray-700 dark:text-gray-200">
                  📚 Author @Amazon | Unlocking human potential with AI
                </h2>
              </Link>
            </div>
            <div className="flex flex-row mb-4">
              <Image
                alt="Otavio Serra"
                height={100}
                width={100}
                src={Avatar}
                priority
                className="rounded-full filter mr-4 mb-4"
              />
              <div>
                <h1 className="font-bold text-xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                  Otavio Serra
                </h1>
                <h2 className="text-xs italic text-gray-700 dark:text-gray-200">
                  Brazilian entrepreuner, graduated and master in Management,
                  with experience in Finance, Software Engineering, Product
                  Management, Strategy and AI.
                </h2>
              </div>
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Career coaching to support the next step in your software engineer career, or start one."
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Mentoring for companies and individuals on how to use AI to improve performance."
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Talks about the intersection between Tech / AI and productivity / human intelligence."
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <a
            href="https://zcal.co/olserra/30min"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Get in touch'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </a>
        </div>
      </Container>
    </Suspense>
  );
}
