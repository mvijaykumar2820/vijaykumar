'use client';

import Description from '@/components/animations/smoothScroll/description';
import Intro from '@/components/animations/smoothScroll/intro';
import Body from '@/components/animations/smoothScroll/body';

export default function FoodOrderingProject() {
    const introduction = [
        'A full-featured mobile food ordering application.',
        'Built with React Native and Firebase.',
        'Features real-time menu listing and cart management.',
        'Includes a robust coupon system for discounts.',
        'Focuses on providing a seamless user experience.'
    ];

    const components =
        'The app features a clean and intuitive UI with smooth navigation. ' +
        'It integrates Firebase for real-time data syncing and authentication. ' +
        'Users can browse menus, add items to cart, and view order history. ' +
        'The coupon system allows for dynamic discount application.';

    const description =
        'This project demonstrates mastery of mobile development concepts including state management, navigation, and backend integration. The focus was on creating a polished, real-world application flow.';

    // Placeholder body images - using empty strings or placeholders as actual images are missing
    const body = [
        {
            title: 'Menu Listing',
            src: 'project-placeholder.svg'
        },
        {
            title: 'Cart & Checkout',
            src: 'project-placeholder.svg'
        }
    ];

    return (
        <div className="bg-foreground">
            <Intro
                images={['/images/project-placeholder.svg']}
                title={'Food Ordering App'}
            />
            <Description phrases={introduction} />
            <Body body={body} text={components} description={description} />
        </div>
    );
}
