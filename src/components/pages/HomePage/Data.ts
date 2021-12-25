import heroImg from 'images/hero-img.svg'
import about1 from 'images/about1.svg'
import about2 from 'images/about2.svg'
import about3 from 'images/about3.svg'
import client1 from 'images/client1.svg'
import client2 from 'images/client2.svg'
import client3 from 'images/client3.svg'
import client4 from 'images/client4.svg'
import client5 from 'images/client5.svg'
import client6 from 'images/client6.svg'
import team1 from 'images/team1.png'
import team2 from 'images/team2.png'
import team3 from 'images/team3.png'
import team4 from 'images/team4.png'

export const heroSection = {
    lightText: true,
    lightTextDesc: true,
    headline: 'Increase your chances of going to your dream institution by ',
    highlight: '70%',
    description:
        'We are a professional development organisation, providing tailored academic & career counselling solutions to aspiring students.',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: heroImg,
    alt: 'Academics',
}

export const about = {
    image1: about1,
    heading1: 'Sign up with us',
    desc1: 'To get started, fill out our online form. After assessing your academic and professional aspirations, we help you finalise a list of universities and begin working on your applications.',
    image2: about2,
    heading2: 'Secure university acceptances',
    desc2: 'Our exceptional team of experts assists you with filing university applications, enabling you to secure admissions at the world’s leading institutions.',
    image3: about3,
    heading3: 'Fly to your dream institution',
    desc3: 'As part of our end-to-end solution, we guide you through the visa process enabling you to reach your dream institution in an effective manner.',
}

export const team = {
    image1: team1,
    heading1: 'Ali Aanish',
    desc1: 'Ali is the Founder and Chief Executive Officer of Gradvisors. His commendable journey to success is filled with examples of perseverance, commitment, and hard work. He’s well-versed in educational counselling, with hands-on experience in undergraduate and postgraduate admissions.',
    image2: team2,
    heading2: 'Zoraiz Tauqeer',
    desc2: 'Zoraiz came up with his first business idea at the age of 13. In the decade that followed, he went on to work with numerous tech startups. After graduating from LUMS, Zoraiz worked as a business consultant for companies in the US and Canada, later forming Gradvisors.',
    image3: team3,
    heading3: 'Misha Shahid',
    desc3: "Misha Shahid is a University of London Alumnus who recently graduated with a Master's degree in management from the University of Westminster. At Gradvisors, Misha develops and conducts courses to assist students with the preparation of tests such as IELTS; she is also a creative writing coach and a volunteer teacher trainer.",
    image4: team4,
    heading4: 'Hamna Azam',
    desc4: 'Hamna Azam is a LUMS graduate from the batch of 2021. Her background in Humanities and Social Sciences allows her to grasp and understand problems faced by students on a regular basis. As a Community Manager at Gradvisors, Hamna is responsible for connecting students with experts who can guide them.',
}

export const clients = {
    heading:
        'Our students have received acceptances from universities all over the globe',
    preHeading: 'Our Global Alumni Network',
    logos: [client1, client2, client3, client4, client5, client6],
}

export const testimonials = {
    heading: 'What our students say',
    preHeading: 'Students we have assisted',
    quotes: [
        {
            client: 'Fatima Noman Butt (University of Manchester)',
            quote: 'Believe me when I say this, this is the best service I have gotten. Ali knows his stuff but more importantly, he knows yours. He took the entire hassle out of the admission process. All I had to do was provide Ali with the documents required, he took it from there. From applying to universities to choosing between acceptances and communicating with relevant departments, Ali took care of it all. I didn’t even bother logging into my email. I knew Ali was handling my communications for me. That’s how good he is at his job. Hands down will recommend him to anyone and everyone.',
        },
        {
            client: 'Tallal Ahmed Bhatti (Sheffield Hallam University)',
            quote: 'So it was a few months back, around March 2021, when I first got to know about Gradvisors through Instagram when I had decided to pursue a postgraduate degree. After connecting with Ali and Zoraiz, I felt confident in choosing their services. I was honest to them about my needs and plans, and they figured everything out for me just the way I wanted. I would recommend trusting them with your future plans as they help you through each and every stage and even after you’ve reached the university. I had a great journey with Gradvisors and would definitely recommend Ali and Zoraiz for their amazing services.',
        },
        {
            client: 'Faizan Bhagat (University of Exeter)',
            quote: 'My experience in applying to the UK for my Masters’s program with Gradvisors has been fulfilling. One of my favorite things about their service is that they tailor things according to your requirements after having an in-depth discussion with you to understand exactly what is the best fit for you. I would highly recommend Gradvisors to anyone who would want to apply abroad for Bachelors/Masters.',
        },
    ],
}

export const footer = {
    about: {
        twitter: '/',
        facebook: '/',
        linkedin: '/',
        instagram: '/',
    },
    quickLinks: [
        [
            {
                link: '',
                name: 'Resources',
            },
            {
                link: '/',
                name: 'United States',
            },
            {
                link: '/',
                name: 'United Kingdom',
            },
            {
                link: '/',
                name: 'Canada',
            },
            {
                link: '/',
                name: 'Australia',
            },
        ],
        [
            {
                link: '',
                name: 'Communities',
            },
            {
                link: '/',
                name: 'LUMS',
            },
            {
                link: '/',
                name: 'IBA',
            },
            {
                link: '/',
                name: 'LSE',
            },
        ],
        [
            {
                link: '',
                name: 'Company',
            },
            {
                link: '/',
                name: 'Disclaimer',
            },
            {
                link: '/',
                name: 'Terms',
            },
            {
                link: '/',
                name: 'Jobs',
            },
            {
                link: '/',
                name: 'Privacy Policy',
            },
        ],
        [
            {
                link: '',
                name: 'Connect with us',
            },
            {
                link: '/',
                name: 'Facebook',
            },
            {
                link: '/',
                name: 'Instagram',
            },
            {
                link: '/',
                name: 'Medium',
            },
            {
                link: '/',
                name: 'Twitter',
            },
            {
                link: '/',
                name: 'LinkedIn',
            },
        ],
    ],
}
