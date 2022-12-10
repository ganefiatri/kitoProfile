import React from 'react';

const ProjectNav = () => {
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
                    <a href="#pills-contactFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0" id="pills-contact-tabFill" data-bs-toggle="pill" data-bs-target="#pills-contactFill" role="tab" aria-controls="pills-contactFill" aria-selected="false">Residentials</a>
                </li>
                <li class="nav-item flex-auto text-center my-2 md:ml-2" role="presentation">
                    <a href="#pills-contactFill" className="nav-link w-full block font-medium text-xs leading-tight uppercase rounded px-6 py-3 focus:outline-none focus:ring-0" id="pills-contact-tabFill" data-bs-toggle="pill" data-bs-target="#pills-contactFill" role="tab" aria-controls="pills-contactFill" aria-selected="false">Restaurants</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContentFill">
                <div class="tab-pane fade show active pb-10" id="pills-homeFill" role="tabpanel" aria-labelledby="pills-home-tabFill">
                    {/* content */}
                    <div class="grid grid-cols-4">
                        <div class="rounded-lg shadow-lg p-2 bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                            </a>
                            <div class="p-2 text-center">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div class="rounded-lg shadow-lg p-2 bg-white max-w-sm">
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                            </a>
                            <div class="p-2 text-center">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profileFill" role="tabpanel" aria-labelledby="pills-profile-tabFill">
                    Tab 2 content fill
                </div>
                <div class="tab-pane fade" id="pills-contactFill" role="tabpanel" aria-labelledby="pills-contact-tabFill">
                    Tab 3 content fill
                </div>
            </div>
        </div>
    );
}

export default ProjectNav;
