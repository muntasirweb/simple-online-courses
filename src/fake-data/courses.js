var courses = [
    {   id: 1,
        name: 'Introduction to Cybersecurity',
        author: 'Muntasir Mahmud',
        price: 13.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/Duke_JavaProgrammingIntrotoSoftware_CM195522.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 2,
        name: 'Become a Data Analyst',
        author: 'Muntasir',
        price: 17.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/f2/9b76f090b311e7ab563db169a953fb/programming-1896158_1280.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 3,
        name: 'Object Oriented Java Programming: Data Structures and Beyond',
        author: 'University of California San Diego',
        price: 23.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/UCSD_JavaProgrammingOODDS_Getty483605575.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 4,
        name: 'Google IT Support',
        author: 'Google',
        price: 15.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/14/b2d530f1ad11e7ab380fc0c6c817a8/Search-Thumbnail.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 5,
        name: 'Java Programming: Solving Problems with Software',
        author: 'Duke University',
        price: 33.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/b6/2019201a9e11e5ace08b26adce8cb5/Java.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 6,
        name: 'Algorithms, Part I',
        author: 'Princeton University',
        price: 15.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e3/b971b05cfe11e89d97d1bd932bfd30/algs4partI-logo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 7,
        name: 'Computer Science: Programming with a Purpose',
        author: 'Princeton',
        price: 13.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/86/9297002bbc11e8b82d4d350d2ce323/IntroCSlogo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 8,
        name: 'Parallel, Concurrent, and Distributed Programming in Java',
        author: 'Rice University',
        price: 17.50,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/1c/930ba07dde11e79dc58ffbc792295a/Multicore-logo4.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 9,
        name: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
        author: 'Google Cloud',
        price: 19.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/54/4ed1d02bfe11e9b16e4738100f1cb7/logo-java-spring-boot-cloud_.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 10,
        name: 'Python for Everybody',
        author: 'University of Michigan',
        price: 15.09,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d2j5ihb19pt1hq.cloudfront.net/sdp_page/s12n_logos/python.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 11,
        name: 'Code Yourself! An Introduction to Programming',
        author: 'The University of Edinburgh',
        price: 27.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/94/669a20d8e511e493b80d6bde068b6d/codeyourself.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 12,
        name: 'Data Structures and Algorithms',
        author: 'National Research University Higher School of Economics',
        price: 35.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/2a/34a150d9ad11e5bd22cb7d7d7686df/logo3.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 13,
        name: 'Software Design and Architecture',
        author: 'University of Alberta',
        price: 143.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ac/2ecb508e8211e79bac57528104d87f/formatos-1200x1200.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    },
    {   id: 14,
        name: 'Full Stack Web Development',
        author: 'University of Alberta',
        price: 50.99,
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/ab/35ddf02a1111e986a14d46a3a1a6c8/full-stack-thumb.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF'
    }

];

export default courses;