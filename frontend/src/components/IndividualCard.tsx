
import Avatar3 from './Avatar3';

const ProfileCard = ({ name, role }:any) => {
    return (
        <div className="w-full max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
                <div className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                    <Avatar3 n={name[0]} />
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
                
                <div className="flex mt-4 md:mt-6">
                    <a href="#" className="py-2 px-4 ml-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Message</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
