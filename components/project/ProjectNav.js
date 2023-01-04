import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectNav = ({ projectAll, projectByOffice, projectByHotel, projectByResident, projectByRestaurant }) => {
    return (
        <div>
            <ul className="nav nav-pills flex flex-col md:flex-row list-none pl-0 mb-4" id="pills-tabFill" role="tablist">
                <li className="nav-item flex-auto text-center my-2 md:mr-2" role="presentation">
                    <a href="#pills-homeFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0 active" id="pills-home-tabFill" data-bs-toggle="pill" data-bs-target="#pills-homeFill" role="tab" aria-controls="pills-homeFill" aria-selected="true">All</a>
                </li>
                <li className="nav-item flex-auto text-center my-2 md:mx-2" role="presentation">
                    <a href="#pills-profileFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0" id="pills-profile-tabFill" data-bs-toggle="pill" data-bs-target="#pills-profileFill" role="tab" aria-controls="pills-profileFill" aria-selected="false">Offices</a>
                </li>
                <li class="nav-item flex-auto text-center my-2 md:mx-2" role="presentation">
                    <a href="#pills-contactFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0" id="pills-contact-tabFill" data-bs-toggle="pill" data-bs-target="#pills-contactFill" role="tab" aria-controls="pills-contactFill" aria-selected="false">Hotels</a>
                </li>
                <li class="nav-item flex-auto text-center my-2 md:mx-2" role="presentation">
                    <a href="#pills-residentFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0" id="pills-resident-tabFill" data-bs-toggle="pill" data-bs-target="#pills-residentFill" role="tab" aria-controls="pills-residentFill" aria-selected="false">Residentials</a>
                </li>
                <li class="nav-item flex-auto text-center my-2 md:ml-2" role="presentation">
                    <a href="#pills-restaurantFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0" id="pills-restaurant-tabFill" data-bs-toggle="pill" data-bs-target="#pills-restaurantFill" role="tab" aria-controls="pills-restaurantFill" aria-selected="false">Restaurants</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContentFill">
                <div class="tab-pane fade show active pb-10" id="pills-homeFill" role="tabpanel" aria-labelledby="pills-home-tabFill">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 ml-3'>
                        {/* content */}
                        {projectAll.map(item => (
                            <ProjectCard name={item.name} img={item.img} />
                        ))}
                    </div>

                </div>
                <div class="tab-pane fade" id="pills-profileFill" role="tabpanel" aria-labelledby="pills-profile-tabFill">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 ml-3'>
                        {/* content */}
                        {projectByOffice.map(item => (
                            <ProjectCard name={item.name} img={item.img} />
                        ))}
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contactFill" role="tabpanel" aria-labelledby="pills-contact-tabFill">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 ml-3'>
                        {/* content */}
                        {projectByHotel.map(item => (
                            <ProjectCard name={item.name} img={item.img} />
                        ))}
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-residentFill" role="tabpanel" aria-labelledby="pills-resident-tabFill">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 ml-3'>
                        {/* content */}
                        {projectByResident.map(item => (
                            <ProjectCard name={item.name} img={item.img} />
                        ))}
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-restaurantFill" role="tabpanel" aria-labelledby="pills-restaurant-tabFill">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 ml-3'>
                        {/* content */}
                        {projectByRestaurant.map(item => (
                            <ProjectCard name={item.name} img={item.img} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectNav;



