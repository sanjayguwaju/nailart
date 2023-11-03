const Header = () => {
    return (
        <div className="bg-gray-800 py-2">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="javascript:;" className="flex items-center">
                                    <i className="mr-1"></i>
                                    121 Waldeck Street, NY, USA
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" className="flex items-center">
                                    <i className="mr-1"></i>
                                    Mon-Sat: 9am to 6pm
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <ul className="flex space-x-4">
                            <li><a href="javascript:;"><i></i></a></li>
                            <li><a href="javascript:;"><i></i></a></li>
                            <li><a href="javascript:;"><i></i></a></li>
                            <li><a href="javascript:;"><i></i></a></li>
                            <li>
                                <a href="javascript:;">
                                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="cursor-pointer">
                                        Login
                                    </span>
                                    /
                                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop1" className="cursor-pointer">
                                        Register
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
