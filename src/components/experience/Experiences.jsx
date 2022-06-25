import React from 'react';
import {ExperienceCard} from "../index";

const Experiences = ({title}) => {
    return (
        <section className={'mt-5'}>
            <h2 className={'mb-3 text-center'}>{title}</h2>
            <ExperienceCard
             title={'Front End Developer'}
             date={'APRIL 2014 - MARCH 201'}
            type={'WEBNOTE'}
            description={'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.'}/>
            <ExperienceCard
                title={'Front End Developer'}
                date={'APRIL 2014 - MARCH 201'}
                type={'WEBNOTE'}
                description={'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.'}/>

            <ExperienceCard
                title={'Front End Developer'}
                date={'APRIL 2014 - MARCH 201'}
                type={'WEBNOTE'}
                isUnderTitle
                underTitle={'UNIVERSITY OF COMPUTER SCIENCE'}
                description={'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.'}/>

        </section>
    );
};

export default Experiences;