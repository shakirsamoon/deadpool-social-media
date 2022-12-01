import { NextPage } from "next";
import Head from 'next/head';

/**
 * Interface class for Meta values
 * 
*/
interface IMetaProps {
    title?: string,
    keywords?: string,
    description?: string,
}

/**
 * All header files defined here
 * 
 * 
 * @param {title} string Custom page title [optional]
 * @param {keywords} string Custom page keywords [optional]
 * @param {description} string Custom page description [optional]
*/
const Meta: NextPage<IMetaProps> = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, maximum-scale=1.0, initial-scale=1.0, user-scalable=no, shrink-to-fit=no" />
            <meta name="author" content="Shakir Samoon" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='UTF-8' />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <title>{title}</title>
        </Head>
    );
}

// Default data for the optional parameters
Meta.defaultProps = {
    title: 'Deadpool Social Media',
    keywords: 'deadpool, social media',
    description: 'A Social media for Deadpool memebers'
};

export default Meta;