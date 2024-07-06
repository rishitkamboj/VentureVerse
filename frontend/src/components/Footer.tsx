

export default function Footer(){
     return(
    

<footer className=" m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <div className="text-lg font-bold text-gray-900 dark:text-white">
            <span className="text-indigo-400">Venture</span>
            <span className="text-pink-600">Verse</span>
          </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Messages</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Community</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Jobs</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="/home" className="hover:underline">VentureVerse</a>. All Rights Reserved.</span>
    </div>
</footer>

)
}