import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MdOutlineSpaceDashboard, MdOutlineLock, MdOutlinePrivacyTip } from "react-icons/md";
import servicesImage from "../../assets/services.jpg";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleScanNowClick = () => {
      
        navigate('/protection');
    };

    return (

        <div>
            <div>
                 <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Know Us More..</h1>
                    </div>
                    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <img
                            src={servicesImage}
                            alt="services"
                            className="w-full  object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                            loading="lazy"
                        />
                    </div>
                    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                        <dt className="sr-only">Reviews</dt>
                    </dl>

                    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-4 lg:row-end-5">
                        <button
                            type="button"
                            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                            onClick={handleScanNowClick} 
                        >
                            Try Scan now
                        </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 dark:text-slate-400">
                        Safeguarding your digital life is our utmost priority. We provide comprehensive security solutions, including real-time protection against viruses,
                        malware, and ransomware, advanced malware detection and removal, secure web browsing with web filtering to block malicious sites and phishing attempts,
                        automatic updates to keep your software current, and cross-platform compatibility across PCs, Macs, and mobile devices.
                    </p>
                </div>
            </main>
            </div>
            <div>
                 <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Know Us More..</h1>
                    </div>
                    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <img
                            src={servicesImage}
                            alt="services"
                            className="w-full  object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                            loading="lazy"
                        />
                    </div>
                    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                        <dt className="sr-only">Reviews</dt>
                    </dl>

                    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-4 lg:row-end-5">
                        <button
                            type="button"
                            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                            onClick={handleScanNowClick} 
                        >
                            Try Scan now
                        </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 dark:text-slate-400">
                        Safeguarding your digital life is our utmost priority. We provide comprehensive security solutions, including real-time protection against viruses,
                        malware, and ransomware, advanced malware detection and removal, secure web browsing with web filtering to block malicious sites and phishing attempts,
                        automatic updates to keep your software current, and cross-platform compatibility across PCs, Macs, and mobile devices.
                    </p>
                </div>
            </main>
            </div>
           
            <div>
                 <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                        <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Know Us More..</h1>
                    </div>
                    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                        <img
                            src={servicesImage}
                            alt="services"
                            className="w-full  object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                            loading="lazy"
                        />
                    </div>
                    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                        <dt className="sr-only">Reviews</dt>
                    </dl>

                    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-4 lg:row-end-5">
                        <button
                            type="button"
                            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                            onClick={handleScanNowClick} 
                        >
                            Try Scan now
                        </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-3 lg:col-span-1 dark:text-slate-400">
                        Safeguarding your digital life is our utmost priority. We provide comprehensive security solutions, including real-time protection against viruses,
                        malware, and ransomware, advanced malware detection and removal, secure web browsing with web filtering to block malicious sites and phishing attempts,
                        automatic updates to keep your software current, and cross-platform compatibility across PCs, Macs, and mobile devices.
                    </p>
                </div>
            </main>
            </div>
           

        </div>
    );
};

export default Dashboard;
