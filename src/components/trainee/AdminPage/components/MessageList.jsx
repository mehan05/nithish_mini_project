import React from 'react';

const MessageList = () => {
  const messages = [
    {
      id: 1,
      name: 'Mithun',
      message: 'Hi, I am Mithun...',
      time: '09:29 AM',
      image: '/avatar.png', 
    },
    {
      id: 2,
      name: 'Geetha',
      message: 'How to connect...',
      time: '12:30 AM',
      image: '/avatar.png', 
    },
    {
      id: 3,
      name: 'Raja',
      message: 'Database related...',
      time: '15:12 PM',
      image: '/avatar.png', 
    },
    {
      id: 4,
      name: 'Zoya',
      message: 'Is there any...',
      time: '09:29 AM',
      image: '/avatar.png', 
    },
    {
      id: 5,
      name: 'Meera',
      message: 'How to disable...',
      time: '10:43 AM',
      image: '/avatar.png', 
    },
  ];

  return (
    <div className="w-full  max-w-md p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-[#161439] mb-4">Messages</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-gray-600 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <img
                src={message.image}
                alt={message.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold text-gray-800">{message.name}</h3>
                <p className="text-xs text-gray-500 truncate">{message.message}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">{message.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
