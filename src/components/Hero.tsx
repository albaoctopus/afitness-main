import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
const router = useRouter();

const handleGetStartedClick = () => {
router.push('#');
};

const handleLearnMoreClick = () => {
router.push('#');
};

return (
<section >
<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-red-800 md:text-5xl lg:text-6xl dark:text-red-800">
Создай свое тело мечты!
</h1>
<p className="mb-8 text-3xl font-normal text-red-600 lg:text-3xl sm:px-16 lg:px-48 dark:text-red-600">
Эффективно тренеруйся! Вкусно питайся! Легко сбрасывай вес! Люби себя! А моя система тренировок Тебе поможет!
</p>

</div>
</section>
);
};

export default Hero;