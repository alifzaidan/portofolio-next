import { NextRequest, NextResponse } from 'next/server';
import { features } from 'process';

const data = [
    {
        id: 1,
        title: 'CookIt',
        shortDescription: 'A food recipe website with a search feature to find recipes and detailed information on ingredients and cooking methods.',
        longDescription:
            'CookIt is a food recipe website designed to make cooking easier and more accessible for everyone. The website allows users to search for recipes using a simple and intuitive search feature. Each recipe includes detailed information on ingredients, cooking methods, and preparation steps, ensuring that users have all the information they need to cook delicious meals. \nBuilt using HTML, CSS, JavaScript, and TheMealDB API, CookIt offers a seamless user experience, making it a valuable resource for both beginner and experienced cooks.',
        platform: 'Website',
        client: 'Dicoding Submittion Project',
        timeline: 'Oct 2022 - Nov 2022',
        tagline: 'Discover, Cook, Delight.',
        image: '/assets/img/cookit/cookit-1.png',
        imageBanner: '/assets/img/cookit/cookit-banner.png',
        problem: {
            description:
                'The culinary world is vast and diverse, with countless recipes available online. However, many users find it challenging to locate reliable and easy-to-follow recipes that include comprehensive details on ingredients and cooking methods. This lack of accessible and detailed cooking instructions often leads to frustration and a lack of confidence in the kitchen. \n CookIt addresses this issue by offering a platform where users can easily find and follow recipes, complete with all the necessary information to ensure a successful cooking experience.',
            firstImage: '/assets/img/cookit/problem-1.jpg',
            secondImage: '/assets/img/cookit/problem-2.jpg',
        },
        solution: {
            description:
                'CookIt aims to provide a user-friendly solution for home cooks who need reliable and easy-to-understand recipes. The website features a powerful search function that allows users to quickly find recipes based on their preferences. \nEach recipe is presented with a detailed list of ingredients, step-by-step cooking methods, and preparation instructions, ensuring that users can confidently recreate dishes at home. \nThe integration with TheMealDB API enhances the website’s offerings by providing access to a vast database of recipes from various cuisines, making CookIt a comprehensive resource for all cooking enthusiasts.',
            firstImage: '/assets/img/cookit/solution-1.jpg',
            secondImage: '/assets/img/cookit/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Search Feature',
                    description: 'Users can search for recipes by entering keywords, making it easy to find the perfect dish.',
                    image: '/assets/img/cookit/cookit-2.png',
                },
                {
                    title: 'Detailed Recipe Pages',
                    description: 'Each recipe includes a comprehensive list of ingredients and step-by-step cooking methods.',
                    image: '/assets/img/cookit/cookit-3.png',
                },
                {
                    title: 'API Integration',
                    description: 'The website integrates with TheMealDB API to provide users with a wide range of recipes from various cuisines.',
                    image: '/assets/img/cookit/cookit-4.png',
                },
            ],
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'Javascript'],
            backend: ['-'],
            api: ['TheMealDB API'],
            additional: ['-'],
        },
    },
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (id) {
        const detailProject = data.find((project) => project.id === parseInt(id));
        if (detailProject) {
            return NextResponse.json({ status: 200, message: 'success', data: detailProject });
        }
        return NextResponse.json({ status: 404, message: 'not found', data: {} });
    }

    const projects = data;
    return NextResponse.json({ status: 200, message: 'success', data: projects });
}
