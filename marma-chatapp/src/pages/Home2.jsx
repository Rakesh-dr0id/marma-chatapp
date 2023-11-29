import React from 'react';

const Home2 = () => {
  return (
    <div>
      {/* <!-- This is an example component --> */}
      <div class="container mx-auto shadow-lg rounded-lg">
        {/* <!-- header --> */}
        <div class="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div class="font-semibold text-2xl">Marma Chatapp</div>
          <div class="w-1/3 flex items-center justify-around gap-2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search Contacts"
              class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
            <div class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
              RA
            </div>
          </div>
        </div>
        {/* <!-- end header --> */}
        {/* <!-- Chatting --> */}
        <div class="flex flex-row justify-between bg-white">
          {/* <!-- chat list --> */}
          <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* <!-- search compt --> */}

            {/* <!-- end search compt --> */}
            {/* <!-- user list --> */}
            <div class="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Luis1994</div>
                <span class="text-gray-500">Pick me at 9:00 Am</span>
              </div>
            </div>
            <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Everest Trip 2021</div>
                <span class="text-gray-500">Hi Sam, Welcome</span>
              </div>
            </div>
            <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">MERN Stack</div>
                <span class="text-gray-500">Lusi : Thanks Everyone</span>
              </div>
            </div>
            <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Javascript Indonesia</div>
                <span class="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div>
            <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Javascript Indonesia</div>
                <span class="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div>

            <div class="flex flex-row py-4 px-2 items-center border-b-2">
              <div class="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div class="w-full">
                <div class="text-lg font-semibold">Javascript Indonesia</div>
                <span class="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div>
            {/* <!-- end user list --> */}
          </div>
          {/* <!-- end chat list --> */}
          {/* <!-- message --> */}
          <div class="w-full px-5 flex flex-col justify-between">
            <div class="flex flex-col mt-5">
              <div class="flex justify-end mb-4">
                <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Welcome to group everyone !
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat at praesentium, aut ullam delectus odio error sit rem.
                  Architecto nulla doloribus laborum illo rem enim dolor odio
                  saepe, consequatur quas?
                </div>
              </div>
              <div class="flex justify-end mb-4">
                <div>
                  <div class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magnam, repudiandae.
                  </div>

                  <div class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, reiciendis!
                  </div>
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div class="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  class="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  happy holiday guys!
                </div>
              </div>
            </div>
            <div class="py-5">
              <input
                class="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
