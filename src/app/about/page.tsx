import Hero from '@/components/Hero';
import React from 'react';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 m-2';

const AboutPage = () => {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center ">
        <h2 className={TITLE_CLASS}>Who Am I</h2>
        <p>좋은 개발자가 목표인 뉴페이스</p>
        <h2 className={TITLE_CLASS}>Skill</h2>
        <p>React, Typescript, git</p>
      </section>
    </>
  );
};

export default AboutPage;
