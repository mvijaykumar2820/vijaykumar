'use client';

import Description from '@/components/animations/smoothScroll/description';
import Intro from '@/components/animations/smoothScroll/intro';
import Body from '@/components/animations/smoothScroll/body';

export default function TravelProject() {
    const introduction = [
        'A comprehensive travel itinerary management app.',
        'Developed using React Native and Firebase.',
        'Designed to help travelers organize their trips.',
        'Prioritizes clean UI and structured user flows.',
        'Ensures a stress-free travel planning experience.'
    ];

    const components =
        'The application allows users to create, view, and manage detailed travel itineraries. ' +
        'It supports cloud syncing via Firebase, ensuring data availability across devices. ' +
        'The interface is designed to be minimal yet functional, reducing cognitive load for travelers.';

    const description =
        'This project showcases the ability to build practical utility applications with a focus on user interface design and structured data handling.';

    const body = [
        {
            title: 'Trip Overview',
            src: 'project-placeholder.svg'
        },
        {
            title: 'Detailed Itinerary',
            src: 'project-placeholder.svg'
        }
    ];

    return (
        <div className="bg-foreground">
            <Intro
                images={['/images/project-placeholder.svg']}
                title={'Travel Itinerary App'}
            />
            <Description phrases={introduction} />
            <Body body={body} text={components} description={description} />
        </div>
    );
}
