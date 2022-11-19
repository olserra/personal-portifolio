import { Suspense } from 'react';
import Image from 'next/image';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Otavio Serra
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software engineer & Mentor
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I help companies build apps and websites faster, and developers / tech teams have a clear roadmap for a lifelong learning.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Otavio Serra"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            What I can offer
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="iOS and Android apps. Already running a business on the Web and want to expand and/or shift to Mobile? Nice, let's do it."
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Websites. Need to start an ecommerce or just create a landing page to market your products and services, let's go."
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
            <BlogPostCard
              title="Career mentoring. Not sure how to start or how to take the next step in your software engineer career, I can help you."
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
          </div>
          <a
            href="https://calendly.com/olserra/15min"
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
