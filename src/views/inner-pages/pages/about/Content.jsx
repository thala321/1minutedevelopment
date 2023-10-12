import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationChart } from 'primereact/organizationchart';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const Content = (props) => {
    const customStyles = {
        "--bs-card-border-color": 'unset',
        "--bs-card-bg": 'unset',
    };
    const { course } = props;
    const customNodeTemplate = (node) => {
        if (node.lesson || node.lesson == 0) return <Link to={`/lesson/${node.lesson}`}> Lesson: {node.label} </Link>
        if (node.tutorial || node.tutorial == 0) return <Link to={`/tutorial/${node.tutorial}`}> Tutorial: {node.label} </Link>
        if (node.link) return <a href={node.link}> {node.label} </a>
        return node.label
    };

    return (
        <div style={customStyles} className="card overflow-x-auto">
          <OrganizationChart value={[course]} nodeTemplate={customNodeTemplate} />
        </div>
    )
}

export default Content;