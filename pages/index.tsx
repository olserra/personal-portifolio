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
            {' '}
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
                  Entrepreuner, developer, growth hacking enthusiast.
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
          <Link
            href="mailto:olserra@gmail.com"
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
          </Link>
        </div>
      </Container>
    </Suspense>
  );
}
