import { shower } from '../../assets/assets';
import { Drawer } from '../components';
import Image from 'next/image';

function SideBar(props) {
    const {
        data,
        isSearchLoading,
        onSubmit,
        setLocation,
        handleOpenDrawer,
        isDrawerOpen,
        si,
    } = props;

    return (
        <>
            <Drawer
                handleOpenDrawer={handleOpenDrawer}
                isSearchLoading={isSearchLoading}
                onSubmit={onSubmit}
                isDrawerOpen={isDrawerOpen}
                setLocation={setLocation}
            />

            <div className="h-full w-full p-12 md:py-4 flex flex-col justify-between">
                {/* the top bar */}
                <div className="flex md:flex-row justify-between">
                    <div onClick={handleOpenDrawer} className="has-tooltip bg-search-place-bg px-4 py-2 mx-2 cursor-pointer">
                        <span className='tooltip rounded shadow-md p-1 bg-gray-100 text-red-500 mt-8'>Search your favorite places</span>
                        <p className="text-gray-300">Search for places</p>
                    </div>
                    <div className="block px-4 py-2 mx-2 cursor-default">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        {/* <GpsFixedIcon className="text-gray-400" /> */}
                    </div>
                </div>
                {/* initail image with cloud background */}
                <div className="weather__img flex justify-center items-center mt-4 mb-4 md:mb-0 md:mt-0">
                    <Image src={shower} alt="cloud-background" />
                </div>

                {/* temperature reading and category */}
                <div className="flex flex-col justify-between item-center mt-4 mb-4 md:mb-0 md:mt-0">
                    <div className="flex items-center justify-center">
                        <p className="flex justify-center items-center">
                            <span className="text-color-text text-4xl md:text-9xl">
                                {Math.floor(data.list[0].main.temp)}
                            </span>
                            <sup className="text-gray-400">
                                0
                            </sup>
                            <span className="text-gray-400 text-2xl md:text-4xl">
                                {si ? "F" : "C"}
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                        <p className="text-gray-400 text-2xl md:text-4xl">{data.list[0].weather[0].main}</p>
                    </div>
                </div>

                {/* location and date */}
                <div className="flex flex-col justify-center item-center">
                    <div className="flex justify-center items-center">
                        <p className="text-gray-500">Today {new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}</p>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-gray-500 ml-1">{data.city.name}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;
