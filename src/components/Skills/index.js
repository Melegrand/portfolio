import { useEffect } from 'react';
import Header from '../Header';
import './index.scss';
import Box from './Box';
import HTML from './tools/HTML.svg'
import CSS from './tools/CSS.svg'
import Sass from './tools/Sass.svg'
import PureCSS from './tools/pureCSS.svg'
import Javascript from './tools/Javascript.svg'
import react from './tools/react.svg'
import NodeJS from './tools/nodeJS.svg'
import ExpressJS from './tools/ExpressJS.svg'
import Sequelize from './tools/Sequelize.svg'
import PostgresSQL from './tools/PostgresSQL.svg'
import sql from './tools/sql.svg'
import docker from './tools/docker.svg'
import vscode from './tools/vscode.svg'
import github from './tools/github.svg'
import canva from './tools/canva.svg'
import appache from './tools/appache.svg'
import npm from './tools/npm.svg'
import python from './tools/python.png'
import dynamoDB from './tools/dynamoDB.svg'
import tailwind from './tools/tailwind.png'
import notion from './tools/notion.png'
const Skills = ({getLocation, location, handleChangeLocation}) => {
    document.title = 'Compétences | Mélody Legrand'

    const Front= [
        {name:'HTML', src:HTML},
        {name:'CSS', src:CSS},
        {name:'Sass', src:Sass},
        {name:'PureCSS', src:PureCSS},
        {name:'Tailwind', src:tailwind},
        {name:'Javascript', src:Javascript},
        {name:'React', src:react}]

    const Back= [{name:'NodeJS', src:NodeJS},
                 {name:'ExpressJS', src:ExpressJS},
                 {name:'Python', src:python}];

    const BDD= [{name:'Sequelize', src:Sequelize}, 
                {name:'PostgresSQL', src: PostgresSQL},
                {name:'DynamoDB', src: dynamoDB},
                {name:'SQL', src: sql}];

    const env= [{name:'Github', src:github}, 
    {name:'Vscode', src: vscode},
    {name:'Docker', src: docker},
    {name:'Appache', src: appache},
    {name:'Canva', src: canva},
    {name:'Npm', src: npm},
    {name:'Notion', src: notion}];

    useEffect(() => {
        handleChangeLocation()
    }, [])

    return (
        <>
        <Header getLocation={getLocation} location={location} handleChangeLocation={handleChangeLocation}/>
        <section className="skills">
        <h1 className='skills__header__title'>Mes compétences</h1>
            <div className="skills__container">
                <Box title='Front-end' data={Front}/>
                <Box title='Back-end' data={Back}/>
                <Box title='Base de données' data={BDD}/>
                <Box title='Environnement et outils' data={env}/>
            </div>
        </section>
        </>
    );
}

export default Skills;