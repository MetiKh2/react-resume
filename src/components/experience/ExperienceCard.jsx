import React from 'react';

const ExperienceCard = ({date,type,title,description,isUnderTitle,underTitle}) => {
    return (
        <div className={'my-3 shadow-lg'}>
            <div className={'row'}>
                <div
                    className={'col-12 col-md-3' +
                        '  text-white '}>
                    <div className={'h-100 py-5 px-1 bg-custom-green d-flex justify-content-center align-items-center flex-column'}>
                        <p className={'text-center '}>{date}</p>
                        <p className={'fs-4'}>{type}</p>
                    </div>

                </div>
                <div className={'col-12 col-md-9 py-2 px-4'}>
                    <h3 className={'fw-light'}>{title}</h3>
                    {isUnderTitle&&<h4 className={'text-secondary fw-bold fs-6'}>{underTitle}</h4>}
                    <p className={'opacity-75 mt-3'}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;