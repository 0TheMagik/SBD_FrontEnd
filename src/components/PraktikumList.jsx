import React from 'react';
import PraktikumCard from './PraktikumCard';
import '../styles/PraktikumList.css';

function PraktikumList({ praktikumData }) {
return (
    <section className="praktikum-list">
        {praktikumData.map(praktikum => (
            <PraktikumCard
            key={praktikum.id}
            title={praktikum.title}
            description={praktikum.description}
            image={praktikum.image}
            />
        ))}
        </section>
    );
}

export default PraktikumList;