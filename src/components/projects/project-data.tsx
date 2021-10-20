export const projectsRawData = Object.freeze({
    featured: [
        {
            name: 'UntangledChat',
            startData: '',
            endData: '',
            descriptionPoints: [
                'Developed a Messaging app with a focus on scalability and privacy',
                'Used RabbitMQ forrouting messages to associated WebSocket to decouple systems and easily scale WebSockets horizontally',
                'Established End-to-end encryption using RSA public-key cryptosystem',
                'Integrated a ChatBot trained on 1.7 million comments using BRNN'
            ],
            tools: ['Java11', 'Spring-Webflux', 'React-Native', 'MongoDB', 'RabbitMQ'],
            githubLink: 'https://github.com/princewillzz/untangledchat',
            hostedLink: 'https://play.google.com/store/apps/details?id=com.untangledchat',
            documentationLink: 'https://github.com/princewillzz/websocket-rabbitmq'
        },
        {
            name: 'Geo-Parking',
            startData: '',
            endData: '',
            descriptionPoints: [
                'Built a full-stack distributed web app to assist people to find nearby parking spots and rent theirland as a parking spot',
                'Integrated map and geocoding search to enhance interactivity',
                'Implemented 6 microservices including API gateway (with token-based authorization), service registry, config, and authentication server',
                'Used Redis as distributed cache, decreasing the response time up to 5x'
            ],
            tools: ['Java11', 'Spring', 'ReactJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
            githubLink: 'https://github.com/princewillzz/GeoParking',
            hostedLink: 'https://geoparking.netlify.app/'
        },
        {
            name: 'Covid-19 Tracker',
            startData: '',
            endData: '',
            descriptionPoints: [
                'Web app to view live Covid-19 updates with interactive graphs using ChartJS and material-UI using open-source mathdroid api',
                
            ],
            tools: ['React-JS', 'Material-UI'],
            githubLink: 'https://github.com/princewillzz/covid-19-tracker',
            hostedLink: 'https://naughty-kare-16921a.netlify.app/',

        }
    ]
})