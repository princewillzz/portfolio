export const featuredProjectsRawData = Object.freeze({
    featured: [
        {
            name: 'UntangledChat',
            descriptionPoints: [
                'Developed a Messaging app with a focus on scalability and privacy',
                'Used RabbitMQ for routing messages to associated WebSocket to decouple systems and easily scale WebSockets horizontally',
                'Established End-to-end encryption using RSA public-key cryptosystem',
                'Integrated a ChatBot trained on 1.7 million comments using BRNN'
            ],
            // images: [
            //     "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            // ],
            images: [
                '/img/unc0.png',
                '/img/unc1.png',
                '/img/unc2.png',
                '/img/unc3.png',
                '/img/unc4.png',
                '/img/unc5.png',
                '/img/unc6.png',
                '/img/unc7.png',
            ],
            tools: ['Java11', 'Spring-Webflux', 'React-Native', 'MongoDB', 'RabbitMQ'],
            githubLink: 'https://github.com/princewillzz/untangledchat',
            hostedLink: 'https://play.google.com/store/apps/details?id=com.untangledchat',
            documentationLink: 'https://github.com/princewillzz/websocket-rabbitmq'
        },
        {
            name: 'Geo-Parking',
            descriptionPoints: [
                'Built a full-stack distributed web app to assist people to find nearby parking spots and rent their land as a parking spot',
                'Integrated map and geocoding search to enhance interactivity',
                'Implemented 6 microservices including API gateway (with token-based authorization), service registry, config, and authentication server',
                'Used Redis as distributed cache, decreasing the response time up to 5x'
            ],
            images: [
                '/img/g0.png',
                '/img/g1.png',
                '/img/g2.png',
                '/img/g3.png',
                '/img/g4.png',
                '/img/g5.png',
                '/img/g6.png',
                '/img/g7.png',
            ],
            tools: ['Java11', 'Spring-MVC', 'ReactJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
            githubLink: 'https://github.com/princewillzz/GeoParking',
            hostedLink: 'https://geoparking.netlify.app/'
        },
        {
            name: 'Crypto Analyser',
            descriptionPoints: [
                `Built a Web app, to view live Crypto Coins information such as Price,
                Market Capital, growth, rank, etc`
            ],
            images: [
                '/img/c1.png',
                '/img/c2.png',
                '/img/c3.png',
                '/img/c4.png',
            ],
            tools: ['Typescript', 'React-JS', 'Material-UI', 'ChartJS'],
            githubLink: 'https://github.com/princewillzz/crypto_analysis_app',
            hostedLink: 'https://crypto-analysis.netlify.app/'
        },
    ]
})
