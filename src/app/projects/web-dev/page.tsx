'use client';

import Description from '@/components/animations/smoothScroll/description';
import Intro from '@/components/animations/smoothScroll/intro';
import Body from '@/components/animations/smoothScroll/body';

export default function WebDevProject() {
    const introduction = [
        'A showcase of various web development projects.',
        'Highlighting full-stack capabilities.',
        'Showcasing modern UI interactions and animations.',
        'Built with React, Next.js, and modern CSS.',
        'Demonstrating responsive and performant design.'
    ];

    const components =
        'This collection includes several frontend and full-stack projects. ' +
        'Key technologies include React, Next.js, Tailwind CSS, and Node.js. ' +
        'Each project focuses on specific aspects of web development, from complex state management to advanced animations.';

    const description =
        'These projects represent a journey through modern web development, emphasizing clean code, performance, and user engagement through interactive UI elements.';

    const body = [
        {
            title: 'Project Portfolio',
            src: 'project-placeholder.svg'
        },
        {
            title: 'Web Interactions',
            src: 'project-placeholder.svg'
        }
    ];

    return (
        <div className="bg-foreground">
            <Intro
                images={['/images/project-placeholder.svg']}
                title={'Web Development'}
            />
            <Description phrases={introduction} />
            <Body body={body} text={components} description={description} />
        </div>
    );
}
