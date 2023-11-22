const Header = () => {
    return (
        <div className="bg-[#EFCEC9] py-3 font-sans font-[Open Sans]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-black">
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
                    <div className="text-black">
                        <ul className="flex space-x-4">
                            <li><a href="javascript:;"><i></i></a></li>
                            <li><a href="javascript:;"><i></i></a></li>
                            <li><a href="javascript:;"><i></i></a></li>
                            <li><a href="javascript:;"><i></i></a></li>
                            <li>
                                <a href="javascript:;" className="cursor-pointer px-4 py-2 bg-[#911439] text-white">
                                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Login
                                    </span>
                                    /
                                    <span data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
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