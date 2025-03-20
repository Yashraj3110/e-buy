import React, { useState, useEffect } from 'react';
import PCreate from './PCreate';
import Pmanage from './Pmanage';
import Pinsights from './Pinsights';
const VendorPage = () => {

    const [activeContent, setActiveContent] = useState('PCreate');

    // Content to display based on the active selection
    const renderContent = () => {
        switch (activeContent) {
          case 'PCreate':
            return <PCreate />;
          case 'Pmanage':
            return <Pmanage />;
          case 'Pinsights':
            return <Pinsights />;
          default:
            return <PCreate />;
        }
      };
    

    return (
        <>

            <div id='frame' style={{
                display: "flex"
            }}>
                <div>
                    <nav class="bg-[#2e2e48] h-screen  top-0 left-0 min-w-[260px] py-6 px-4 font-[sans-serif] flex flex-col overflow-auto">

                        <div class="flex flex-wrap flex-col justify-center items-center cursor-pointer">
                            <p class="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-xl">
                                S
                            </p>

                            <div class="text-center mt-2">
                                <p class="text-base text-white">John Doe</p>
                                <p class="text-xs text-gray-300 mt-0.5">johndoe23@gmail.com</p>
                            </div>
                        </div>

                        <hr class="my-6 border-gray-400" />

                        <ul class="space-y-3 flex-1">
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActiveContent('PCreate')}
                                    class="text-gray-300 hover:text-white text-sm flex items-center hover:bg-[#36336b] rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M197.332 170.668h-160C16.746 170.668 0 153.922 0 133.332v-96C0 16.746 16.746 0 37.332 0h160c20.59 0 37.336 16.746 37.336 37.332v96c0 20.59-16.746 37.336-37.336 37.336zM37.332 32A5.336 5.336 0 0 0 32 37.332v96a5.337 5.337 0 0 0 5.332 5.336h160a5.338 5.338 0 0 0 5.336-5.336v-96A5.337 5.337 0 0 0 197.332 32zm160 480h-160C16.746 512 0 495.254 0 474.668v-224c0-20.59 16.746-37.336 37.332-37.336h160c20.59 0 37.336 16.746 37.336 37.336v224c0 20.586-16.746 37.332-37.336 37.332zm-160-266.668A5.337 5.337 0 0 0 32 250.668v224A5.336 5.336 0 0 0 37.332 480h160a5.337 5.337 0 0 0 5.336-5.332v-224a5.338 5.338 0 0 0-5.336-5.336zM474.668 512h-160c-20.59 0-37.336-16.746-37.336-37.332v-96c0-20.59 16.746-37.336 37.336-37.336h160c20.586 0 37.332 16.746 37.332 37.336v96C512 495.254 495.254 512 474.668 512zm-160-138.668a5.338 5.338 0 0 0-5.336 5.336v96a5.337 5.337 0 0 0 5.336 5.332h160a5.336 5.336 0 0 0 5.332-5.332v-96a5.337 5.337 0 0 0-5.332-5.336zm160-74.664h-160c-20.59 0-37.336-16.746-37.336-37.336v-224C277.332 16.746 294.078 0 314.668 0h160C495.254 0 512 16.746 512 37.332v224c0 20.59-16.746 37.336-37.332 37.336zM314.668 32a5.337 5.337 0 0 0-5.336 5.332v224a5.338 5.338 0 0 0 5.336 5.336h160a5.337 5.337 0 0 0 5.332-5.336v-224A5.336 5.336 0 0 0 474.668 32zm0 0"
                                            data-original="#000000" />
                                    </svg>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActiveContent('Pmanage')}
                                    class="text-gray-300 hover:text-white text-sm flex items-center hover:bg-[#36336b] rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
                                            data-original="#000000" />
                                    </svg>
                                    <span>Product</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={() => setActiveContent('Pinsights')}
                                    class="text-gray-300 hover:text-white text-sm flex items-center hover:bg-[#36336b] rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4" viewBox="0 0 24 24">
                                        <path
                                            d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
                                            data-original="#000000" />
                                        <path d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z" data-original="#000000" />
                                        <path d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z" data-original="#000000" />
                                    </svg>
                                    <span>Manage</span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript:void(0)" onClick={() => setActiveContent('PInsights')}
                                    class="text-gray-300 hover:text-white text-sm flex items-center hover:bg-[#36336b] rounded px-4 py-3 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-[18px] h-[18px] mr-4"
                                        viewBox="0 0 371.263 371.263">
                                        <path
                                            d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                                            data-original="#000000"></path>
                                    </svg>
                                    <span>Insights</span>
                                </a>
                            </li>
                        </ul>



                    </nav>
                </div>
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center" , width:"100%"}}>
                    <div style={{  padding: '20px', display:"flex", justifyContent:"center", alignItems:"center" }}>
                        {renderContent()}
                    </div>
                </div>
            </div>


        </>
    );
};

export default VendorPage;