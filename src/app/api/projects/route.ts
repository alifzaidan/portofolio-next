import { NextRequest, NextResponse } from 'next/server';

const data = [
    {
        id: 1,
        isTop: false,
        color: '#D79A57',
        title: 'CookIt',
        shortDescription: 'A food recipe website with a search feature to find recipes and detailed information on ingredients and cooking methods.',
        longDescription:
            'CookIt is a food recipe website designed to make cooking easier and more accessible for everyone. The website allows users to search for recipes using a simple and intuitive search feature. Each recipe includes detailed information on ingredients, cooking methods, and preparation steps, ensuring that users have all the information they need to cook delicious meals. \nBuilt using HTML, CSS, JavaScript, and TheMealDB API, CookIt offers a seamless user experience, making it a valuable resource for both beginner and experienced cooks.',
        platform: 'Website',
        client: 'Dicoding Submittion Project',
        timeline: 'Oct 2022 - Nov 2022',
        tagline: 'Discover, Cook, Delight.',
        image: '/assets/img/cookit/cookit-1.png',
        imageBanner: '/assets/img/cookit/cookit-banner.jpg',
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
    {
        id: 2,
        isTop: false,
        color: '#762F67',
        title: 'Ineat Group',
        shortDescription: 'A youth business website offering shoe cleaning services, selling sambal, and providing custom shoe coloring services.',
        longDescription: `Ineat Group is a dynamic youth-driven business that embodies the entrepreneurial spirit of its founders, Imam, Nauzal, Enggar, Alif, and Thoriq. The vision of business is creating delicious and innovative sambal varieties, as well as offering premium quality shoe cleaning and clothing painting services. \n Ineat Group aims to make a mark in the local business scene, offering products and services that resonate with their audience's needs and preferences.`,
        platform: 'Website',
        client: 'Ineat Group',
        timeline: 'Mar 2023 - May 2023',
        tagline: 'Innovating Youth Business Ventures with Passion and Creativity',
        image: '/assets/img/ineat/ineat-1.png',
        imageBanner: '/assets/img/ineat/ineat-banner.jpg',
        problem: {
            description:
                'In a competitive market, young entrepreneurs often struggle to stand out and establish a unique brand identity. The founders of Ineat Group recognized this challenge and sought to create a business that not only meets market demands but also reflects their passion and creativity. \n However, reaching their target audience and effectively communicating the value of their diverse offerings. Ranging from shoe care to culinary products required a strong online presence. Ineat Group website was developed to address these needs, providing a platform that showcases their services and products while building their brand in the digital space.',
            firstImage: '/assets/img/ineat/problem-1.jpg',
            secondImage: '/assets/img/ineat/problem-2.jpg',
        },
        solution: {
            description: `Ineat Group website offers a comprehensive solution for presenting the diverse services and products offered by the business. It serves as a hub where customers can easily explore and engage with the brand's offerings, from booking shoe cleaning services to purchasing their homemade sambal. \n Ineat Group website offers a comprehensive solution for presenting the diverse services and products offered by the business. It serves as a hub where customers can easily explore and engage with the brand's offerings, from booking shoe cleaning services to purchasing their homemade sambal.`,
            firstImage: '/assets/img/ineat/solution-1.jpg',
            secondImage: '/assets/img/ineat/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Interactive Design',
                    description:
                        'The website features an interactive design that engages users with visually appealing animations, intuitive navigation, and responsive layouts.',
                    image: '/assets/img/ineat/ineat-2.png',
                },
                {
                    title: 'Comprehensive Service & Product Offerings',
                    description:
                        'Ineat Group provides a trio of services that cater to a wide range of customer needs with detailed product descriptions.',
                    image: '/assets/img/ineat/ineat-3.png',
                },
                {
                    title: 'Direct WhatsApp Contact',
                    description: `A convenient "Contact Us" and "Order Now feature is allowing customers to directly connect with the Ineat Group's admin via WhatsApp.`,
                    image: '/assets/img/ineat/ineat-4.png',
                },
            ],
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'Javascript'],
            backend: ['-'],
            api: ['-'],
            additional: ['-'],
        },
    },
    {
        id: 3,
        isTop: false,
        color: '#3153D4',
        title: 'Lask News App',
        shortDescription:
            'A modern and intuitive news app offering the latest updates from reliable sources, with a gamified level system to motivate users.',
        longDescription:
            'Lask News App is a cutting-edge news platform designed to keep users updated with the latest news from a variety of reliable sources. Featuring a sleek and engaging interface, the app provides an unparalleled news reading experience that is both informative and enjoyable. \n To further enhance user engagement, the app introduces a unique level system, where users can earn points and level up by reading articles. This gamified approach not only motivates users to stay informed but also adds a fun, competitive element to the news consumption process.',
        platform: 'Mobile App',
        client: 'Course Project',
        timeline: 'Okt 2023 - Dec 2023',
        tagline: 'Stay Informed, Stay Ahead',
        image: '/assets/img/lask-news/lask-banner.png',
        imageBanner: '/assets/img/lask-news/lask-banner.png',
        problem: {
            description: `In today's fast-paced world, staying informed with the latest news is essential. However, many users struggle to keep up with the constant influx of information and often lack motivation to regularly engage with news content. \n Lask News App was developed to address this issue by creating a platform that not only delivers news efficiently but also encourages users to read more through an innovative level system. This approach aims to transform the news reading experience from a passive activity into an engaging and rewarding one, making it easier for users to stay connected with global events.`,
            firstImage: '/assets/img/lask-news/problem-1.jpg',
            secondImage: '/assets/img/lask-news/problem-2.jpg',
        },
        solution: {
            description:
                'Lask News App offers a comprehensive solution for modern news consumption. It combines a user-friendly interface with advanced features that cater to both casual readers and news enthusiasts. The app’s level system adds a gamified layer to the experience, where users earn points for each article they read, motivating them to consume more content and stay informed. \n By integrating reliable news sources and offering a seamless reading experience, Lask News App ensures that users can easily access the information they need while enjoying a unique and interactive journey through the news landscape.',
            firstImage: '/assets/img/lask-news/solution-1.jpg',
            secondImage: '/assets/img/lask-news/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Reliable News Sources',
                    description: 'The app aggregates news from various trusted sources, ensuring users receive accurate and up-to-date information.',
                    image: '/assets/img/lask-news/lask-2.png',
                },
                {
                    title: 'Level System',
                    description:
                        'A unique feature that rewards users with points for reading articles, allowing them to level up and track their progress over time.',
                    image: '/assets/img/lask-news/lask-3.png',
                },
                {
                    title: 'Engaging Interface',
                    description: `The app's modern design and intuitive navigation make it easy for users to explore and read news articles.`,
                    image: '/assets/img/lask-news/lask-4.png',
                },
                {
                    title: 'Personalized News Feed',
                    description: 'Users can customize their news feed to focus on topics that interest them the most.',
                    image: '/assets/img/lask-news/lask-4.png',
                },
            ],
        },
        techStack: {
            frontend: ['Dart', 'Flutter'],
            backend: ['Firebase'],
            api: ['newsapi.org'],
            additional: ['-'],
        },
    },
    {
        id: 4,
        isTop: true,
        color: '#1D6364',
        title: 'Ecocycle',
        shortDescription:
            'An innovative mobile app that helps users manage waste by providing recycling tutorials and connecting them with local recyclers.',
        longDescription:
            'Ecocycle is a forward-thinking mobile application designed to empower users to make a positive impact on environmental sustainability. Utilizing Google technologies and built with Flutter, Ecocycle offers an intuitive experience for scanning or uploading images of waste. \n The app determines whether the waste can be reused or not. For reusable waste, it provides engaging tutorials on how to recycle it into creative crafts. If the waste is not reusable, users can find nearby recyclers through an integrated map feature. Ecocycle aims to make waste management both educational and practical, fostering a more sustainable lifestyle.',
        platform: 'Mobile App',
        client: 'Competition “Hackfest” Project',
        timeline: 'Mar 2024 - Jun 2024',
        tagline: 'Transforming Waste into Wonders',
        image: '/assets/img/ecocycle/ecocycle-banner.png',
        imageBanner: '/assets/img/ecocycle/ecocycle-banner.png',
        problem: {
            description:
                'Environmental sustainability is a growing concern, and managing waste effectively is crucial to reducing our ecological footprint. Many people struggle with how to properly dispose of or repurpose their waste, leading to a significant amount of recyclable material ending up in landfills. \n Ecocycle was created to address these challenges by offering a user-friendly solution that combines waste detection with actionable recycling guidance. The app helps users identify which items can be repurposed and which should be sold to recyclers, streamlining the waste management process and promoting environmental responsibility.',
            firstImage: '/assets/img/ecocycle/problem-1.jpg',
            secondImage: '/assets/img/ecocycle/problem-2.jpg',
        },
        solution: {
            description:
                'Ecocycle provides a comprehensive solution for waste management by leveraging advanced technologies to simplify the recycling process. The app enables users to scan or upload images of waste to quickly determine its reusability. If the item can be recycled, Ecocycle presents detailed tutorials on how to transform it into useful crafts, encouraging creative reuse. \n For items that are not suitable for recycling at home, the app facilitates the sale of these items to local recyclers, displaying a map of nearby collection points. This approach not only helps users manage their waste more effectively but also contributes to broader environmental sustainability efforts.',
            firstImage: '/assets/img/ecocycle/solution-1.jpg',
            secondImage: '/assets/img/ecocycle/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Waste Detection',
                    description: 'Users can scan or upload images of waste to determine if it can be reused or should be sold to recyclers.',
                    image: '/assets/img/ecocycle/ecocycle-2.png',
                },
                {
                    title: 'Recycling Tutorials',
                    description: 'Provides step-by-step guides for converting recyclable waste into creative and useful crafts.',
                    image: '/assets/img/ecocycle/ecocycle-3.png',
                },
                {
                    title: 'Local Recycler Map',
                    description: 'Displays a map of nearby recyclers where users can sell waste that is not suitable for home recycling.',
                    image: '/assets/img/ecocycle/ecocycle-4.png',
                },
                {
                    title: 'User-Friendly Interface',
                    description: 'Built with Flutter to offer a seamless and engaging experience.',
                    image: '/assets/img/ecocycle/ecocycle-4.png',
                },
            ],
        },
        techStack: {
            frontend: ['Dart', 'Flutter'],
            backend: ['Firebase'],
            api: ['-'],
            additional: ['-'],
        },
    },
    {
        id: 5,
        isTop: false,
        color: '#028BAB',
        title: 'Maturity BLU',
        shortDescription:
            'A comprehensive evaluation tool for faculties at UIN Maulana Malik Ibrahim Malang, designed to audit and measure performance across multiple aspects.',
        longDescription: `Maturity BLU is an advanced website developed for UIN Maulana Malik Ibrahim Malang, facilitating the evaluation and auditing of faculty performance in various aspects, including finance and service quality. The platform provides a structured approach with multiple levels for each aspect, allowing detailed measurement of key performance indicators. \n The website supports two types of users: faculty users, who are responsible for uploading documents into tables according to the relevant aspect and level, and admin users, who assess and score these aspects. This system ensures that all faculties maintain high standards of performance and quality, contributing to the university's overall excellence.`,
        platform: 'Website',
        client: 'UIN Maulana Malik Ibrahim Malang',
        timeline: 'Sep 2023 - Nov 2023',
        tagline: 'Enhancing Performance, Ensuring Quality',
        image: '/assets/img/maturity/maturity-1.png',
        imageBanner: '/assets/img/maturity/maturity-banner.jpg',
        problem: {
            description:
                'Maintaining high performance and quality standards across faculties is crucial for any educational institution, particularly in aspects like finance and service delivery. Traditional methods of performance evaluation can be inconsistent and prone to errors, leading to difficulties in ensuring that all faculties meet the required standards. \n The Maturity BLU website was created to streamline this process, offering a digital platform that provides clear guidelines and structured levels for evaluating key aspects of faculty performance. This ensures that the evaluation process is both thorough and transparent, helping the university to maintain and improve its overall performance.',
            firstImage: '/assets/img/maturity/problem-1.jpg',
            secondImage: '/assets/img/maturity/problem-2.jpg',
        },
        solution: {
            description:
                'The Maturity BLU website offers a robust solution for evaluating faculty performance at UIN Maulana Malik Ibrahim Malang. By providing predefined levels for various aspects such as finance and services, the platform allows for consistent measurement of performance indicators across all faculties. \n Faculty users can easily upload the necessary documents into the system, categorized by aspect and level, ensuring that all relevant data is collected for evaluation. Admin users then assess this data, providing scores that reflect the faculty’s performance in each area. This systematic approach helps to ensure that all faculties are held to the same high standards and can easily identify areas for improvement.',
            firstImage: '/assets/img/maturity/solution-1.png',
            secondImage: '/assets/img/maturity/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Multi-Level Evaluation',
                    description:
                        'Provides a structured approach with multiple levels for evaluating key performance aspects, ensuring comprehensive audits.',
                    image: '/assets/img/maturity/maturity-2.png',
                },
                {
                    title: 'Recycling Tutorials',
                    description:
                        'Faculty users can easily upload relevant documents into tables categorized by aspect and level, simplifying the data collection process.',
                    image: '/assets/img/maturity/maturity-1.png',
                },
                {
                    title: 'Admin Assessment',
                    description:
                        'Admin users have access to detailed evaluation tools, allowing them to assess and score each aspect based on the uploaded documents.',
                    image: '/assets/img/maturity/maturity-5.png',
                },
            ],
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
            backend: ['CodeIgniter'],
            api: ['-'],
            additional: ['-'],
        },
    },
    {
        id: 6,
        isTop: true,
        color: '#E01E26',
        title: 'Cardion',
        shortDescription:
            'A comprehensive competition platform designed for medical students, featuring a landing page for information, an admin dashboard, and a participant portal.',
        longDescription:
            'Cardion is an all-encompassing competition website developed for the Faculty of Medicine at UIN Maulana Malik Ibrahim Malang. The platform caters to various needs of both the organizers and participants. It includes a landing page providing detailed information about the olympiad and public poster competitions. \n The admin section features a dashboard and table system for managing participant data, handling payments, overseeing users, and organizing competition details. Additionally, the participant portal streamlines processes such as payment, accessing olympiad questions, and uploading public poster submissions, ensuring a smooth and organized competition experience.',
        platform: 'Website',
        client: 'Fakultas Kedokteran, UIN Maulana Malik Ibrahim Malang',
        timeline: 'Apr 2023 - Jun 2023',
        tagline: 'Dare to go Beyond Limits?',
        image: '/assets/img/cardion/cardion-1.png',
        imageBanner: '/assets/img/cardion/cardion-banner.jpg',
        problem: {
            description:
                'Organizing large-scale academic competitions, such as olympiads and public poster contests, requires efficient management and communication. Traditional methods, often reliant on manual processes, can lead to confusion, delays, and errors, especially when handling participant data and competition submissions. \n The Cardion website was developed to address these issues by providing a centralized digital platform that streamlines all aspects of competition management. This platform ensures that both participants and organizers have a seamless experience, reducing the potential for mistakes and enhancing the overall effectiveness of the event.',
            firstImage: '/assets/img/cardion/problem-1.jpg',
            secondImage: '/assets/img/cardion/problem-2.jpg',
        },
        solution: {
            description:
                'The Cardion website offers a comprehensive solution for managing academic competitions at the Faculty of Medicine, UIN Maulana Malik Ibrahim Malang. The landing page serves as a centralized hub for all competition-related information, making it easy for potential participants to learn about the event and register. \n The admin dashboard and table functionalities allow organizers to efficiently manage participant data, process payments, and oversee competition logistics. For participants, the portal provides a user-friendly interface to complete payments, access olympiad questions, and submit public poster entries. This integrated approach ensures that the competition runs smoothly from start to finish.',
            firstImage: '/assets/img/cardion/solution-1.png',
            secondImage: '/assets/img/cardion/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Landing Page',
                    description:
                        'A well-designed landing page that provides comprehensive information about the competition, including details on how to participate, schedules, and guidelines.',
                    image: '/assets/img/cardion/cardion-1.png',
                },
                {
                    title: 'Admin Dashboard',
                    description: 'A robust admin interface for managing participant data, payments, user accounts, and competition logistics.',
                    image: '/assets/img/cardion/cardion-5.png',
                },
                {
                    title: 'Participant Portal',
                    description:
                        'An intuitive portal where participants can easily make payments, access olympiad questions, and submit their public poster entries.',
                    image: '/assets/img/cardion/cardion-6.png',
                },
                {
                    title: 'User Roles',
                    description:
                        'The website supports multiple user roles, including admins and participants, each with specific access and functionalities to ensure smooth operation.',
                    image: '/assets/img/cardion/cardion-4.png',
                },
            ],
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'Javascript', 'Tailwind'],
            backend: ['Laravel'],
            api: ['-'],
            additional: ['-'],
        },
    },
    {
        id: 7,
        isTop: true,
        color: '#004080',
        title: 'BRI Customer Queue',
        shortDescription: 'A digital solution for managing customer queues at banks, designed to enhance efficiency and customer experience.',
        longDescription:
            'The BRI Customer Queue application is a comprehensive digital platform designed to improve the management of customer queues at bank branches. By offering an intuitive interface and a range of powerful features, the application streamlines the queuing process, reducing wait times and enhancing overall service efficiency. \n The platform includes four main menus: "Ambil Antrian" for taking and printing queue tickets, "Panggil Antrian" for tellers and customer service representatives to call the next customer, "Display Antrian" for showing current and pending queue numbers on a monitor, and "Setting" for customizing configurations such as branch name, address, displayed videos, the number of tellers, and queue resets. This solution is designed to optimize the flow of customers through bank branches, ensuring a more organized and satisfying experience for both customers and staff.',
        platform: 'Website',
        client: 'BRI Kantor Cabang Malang Sutoyo',
        timeline: 'Jul 2024 - Aug 2024',
        tagline: 'Streamlining Customer Service, One Queue at a Time',
        image: '/assets/img/customer-queue/queue-1.png',
        imageBanner: '/assets/img/customer-queue/queue-banner.jpg',
        problem: {
            description:
                'Managing customer queues efficiently is a significant challenge for banks, particularly during peak hours. Long wait times and disorganized queues can lead to customer dissatisfaction and decreased service quality. Traditional manual queue management methods are often insufficient to handle large volumes of customers effectively. \n The BRI Customer Queue application was developed to address these challenges by providing a digital solution that automates and streamlines the queue management process. By implementing this system, banks can reduce customer wait times, improve service flow, and create a more positive customer experience.',
            firstImage: '/assets/img/customer-queue/problem-1.jpg',
            secondImage: '/assets/img/customer-queue/problem-2.jpg',
        },
        solution: {
            description: `The BRI Customer Queue application offers a robust solution for managing customer queues in bank branches. The platform allows customers to take a queue number through the "Ambil Antrian" menu, which prints a ticket using a thermal printer. \n Bank staff can efficiently call the next customer in line using the "Panggil Antrian" feature, ensuring an orderly and systematic service flow. The "Display Antrian" menu provides real-time updates on queue numbers and waiting customers, visible to everyone in the branch. The "Setting" menu offers extensive customization options, enabling bank managers to configure various aspects of the queue management system to fit the branch's specific needs. \n By integrating these features into a single platform, the application ensures a seamless and efficient queuing process.`,
            firstImage: '/assets/img/customer-queue/solution-1.png',
            secondImage: '/assets/img/customer-queue/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Ambil Antrian',
                    description: 'Allows customers to take a queue number, which is then printed on a ticket via a thermal printer.',
                    image: '/assets/img/customer-queue/queue-2.png',
                },
                {
                    title: 'Panggil Antrian',
                    description:
                        'Enables bank staff (tellers or customer service representatives) to call the next customer in line, ensuring a smooth and orderly flow.',
                    image: '/assets/img/customer-queue/queue-3.png',
                },
                {
                    title: 'Display Antrian',
                    description: 'Displays current and pending queue numbers on a monitor, providing customers with real-time updates.',
                    image: '/assets/img/customer-queue/queue-4.png',
                },
                {
                    title: 'Settings',
                    description:
                        'Offers customization options for branch-specific configurations, including the name, address, videos shown on the display monitor, the number of tellers, and resetting the queue.',
                    image: '/assets/img/customer-queue/queue-5.png',
                },
            ],
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'Javascript', 'Tailwind'],
            backend: ['Laravel'],
            api: ['-'],
            additional: ['-'],
        },
    },
    {
        id: 8,
        isTop: false,
        color: '#FF6F00',
        title: 'Scoreboard Quiz Game',
        shortDescription:
            'A web-based scoreboard system for quiz games, featuring participant score display and referee controls for managing the game.',
        longDescription:
            'The Scoreboard Quiz Game is an intuitive web application designed to manage and display scores in quiz games. It provides two main functionalities: a display menu for participants to view their current scores in real-time, and a referee menu equipped with controls to add or subtract points, manage the game timer, reset the game, and end the game when necessary. This platform ensures that quiz games are conducted smoothly, with clear and accurate score tracking for all participants.',
        platform: 'Website',
        client: 'BRI Kantor Cabang Malang Sutoyo',
        timeline: 'Aug 2024',
        tagline: 'Keeping Scores, Making Memories',
        image: '/assets/img/scoreboard/scoreboard-1.png',
        imageBanner: '/assets/img/scoreboard/scoreboard-banner.jpg',
        problem: {
            description:
                'In competitive quiz games, accurately tracking and displaying scores is crucial for maintaining fairness and transparency. Traditional methods of scorekeeping can be error-prone and time-consuming, leading to potential disputes or confusion among participants. \n The Scoreboard Quiz Game website was developed to address these challenges by providing a digital solution that simplifies score management and enhances the overall experience for both participants and referees. \n The application ensures that scores are updated in real-time, reducing the risk of errors and ensuring that the game runs smoothly.',
            firstImage: '/assets/img/scoreboard/problem-1.jpg',
            secondImage: '/assets/img/scoreboard/problem-2.jpg',
        },
        solution: {
            description:
                'The Scoreboard Quiz Game website offers a reliable and user-friendly solution for managing quiz game scores. The participant score display provides an easy-to-read interface where players can see their current standing in the game. The referee menu includes a set of robust controls for adjusting scores, starting or stopping the timer, resetting the game for a new round, and ending the game when the quiz is complete. \n This approach ensures that all aspects of scorekeeping are handled efficiently, allowing referees to focus on managing the game and participants to enjoy the competition.',
            firstImage: '/assets/img/scoreboard/solution-1.png',
            secondImage: '/assets/img/scoreboard/solution-2.png',
        },
        keyFeature: {
            description:
                'My final high fidelity screens with a live prototype below. Designed for the iPhone X to stay up to date with latest tech and design updates.',
            features: [
                {
                    title: 'Participant Score Display',
                    description: 'Shows real-time scores for all participants, ensuring everyone is aware of their current standing.',
                    image: '/assets/img/scoreboard/scoreboard-2.png',
                },
                {
                    title: 'Referee Controls',
                    description: 'Includes options to add or subtract points, manage the game timer, reset the game, and finish the game.',
                    image: '/assets/img/scoreboard/scoreboard-3.png',
                },
                {
                    title: 'Real-Time Updates',
                    description: 'Ensures that score changes are reflected immediately on the participant display.',
                    image: '/assets/img/scoreboard/scoreboard-4.png',
                },
                {
                    title: 'User-Friendly Interface',
                    description: 'Designed to be intuitive for both participants and referees, making it easy to navigate and use during live games.',
                    image: '/assets/img/scoreboard/scoreboard-1.png',
                },
            ],
        },
        techStack: {
            frontend: ['HTML', 'CSS', 'Typescript', 'ReactJS', 'Tailwind'],
            backend: ['NextJS'],
            api: ['-'],
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
