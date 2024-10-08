import React from "react";
import vpn from '../assets/vpn.png'; // Replace with appropriate images
import copeople from '../assets/copeople.png'; // Replace with appropriate images
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {image && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                {technologies && (
                    <div className='flex flex-wrap gap-2 pl-2'>
                        {technologies.map((tag, index) => (
                            <p
                                key={`${index}-${tag}`}
                                className='text-[14px] text-blue-500'
                            >
                                #{tag}
                            </p>
                        ))}
                    </div>
                )}
                {git && (
                    <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
                )}
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export const project = [
    {
        title: 'UnMute Project',
        description: 'The UnMute Project, funded by EPSRC and led by the University of Edinburgh and Swansea University in collaboration with Translators Without Borders and Auris Tech, aims to remove barriers in speech and voice-based interactions for digitally marginalized populations. It targets individuals with low digital and textual literacy, aiming to create a blueprint and toolkit benefiting low or zero-resource language communities worldwide.',
        image: vpn, // You can replace with the correct image if available
        technologies: ['EPSRC', 'Auris Tech', 'Translators Without Borders']
    },
    {
        title: 'JalJeevan Mission',
        description: 'We have collaborated with JalJeevan Mission to develop an app using ML techniques and algorithms to detect leakage at certain locations, helping to save water and potentially serving thousands.',
        image: copeople, // You can replace with the correct image if available
        technologies: ['Machine Learning', 'JalJeevan Mission', 'Water Management']
    },
    {
        title: 'Samvaad Sathi',
        description: 'Our target audience for this project was the section of Indian society that doesn\'t even have a basic understanding of English letters. Our aim was to help this section of society by using modern LLMs (like ChatGPT and Gemini AI). We developed a fully deployable web application that takes audio and text input in regional languages of India (like Tamil, Gujarati, Marathi, Telugu, Malayalam, and Bengali) and gives an audio and text-based LLM response like ChatGPT in the mentioned regional languages.',
        image: vpn, // You can replace with the correct image if available
        technologies: ['LLMs', 'ChatGPT', 'Gemini AI', 'Regional Languages']
    },
    {
        title: 'Policy Sentiment Analysis',
        description: 'Through this project, we aim to help our policymakers understand public opinion about their analysis via Twitter. Our application scrapes tweets related to a particular topic from Twitter and leverages machine learning to categorize the tweets into several categories of emotion.',
        image: copeople, // You can replace with the correct image if available
        technologies: ['Twitter API', 'Machine Learning', 'Sentiment Analysis']
    },
    {
        title: 'PhonePeShiksha',
        description: 'An app developed with inputs from PrajaYatna, a popular educational magazine. The purpose is to enable poor kids to learn basic skills in a gamified manner.',
        image: vpn, // You can replace with the correct image if available
        technologies: ['Gamification', 'Education', 'PrajaYatna']
    }
];

export default Projects;
