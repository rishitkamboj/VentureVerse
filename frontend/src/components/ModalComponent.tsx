import { useState } from 'react';
import axios from 'axios';

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [button, setButton] = useState('Post');

  const postDetails = async () => {
    if (!title || !description || !location || !contact) {
      alert('Please fill in all fields');
      return;
    }

    setButton('Posting...');
    try {
      const response = await axios.post("http://localhost:5000/api/jobs", {
        title,
        description,
        location,
        contact,
        userId: localStorage.getItem('userId')
      });
      if (response.status === 200) {
        console.log('posted');
        alert('posted');
        resetForm();
        toggleModal();
      } else {
        console.log('error');
        alert('error');
      }
    } catch (err) {
      console.log(err);
      alert('An error occurred');
    }
    setButton('Post');
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setLocation('');
    setContact('');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      resetForm();
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Publish
      </button>

      {isModalOpen && (
        <div
          id="authentication-modal"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative rounded-lg shadow bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-white">Post a job</h3>
                <button
                  type="button"
                  className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="Software Developer"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="Job in a software company requirements Java, C++"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="Pune, India"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white">Contact</label>
                    <input
                      type="number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="1234567890"
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={postDetails}
                      type="button"
                      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {button}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
