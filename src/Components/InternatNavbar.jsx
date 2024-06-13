import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon,   XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../assets/logo.png";
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Umrah', href: '#', current: true },
  { name: 'Group Tickets', href: '/groupticket', current: false },
  { name: 'Ledger', href: '/ledger', current: false },
  { name: 'Bank Accounts', href: '/bankaccount', current: false },
  { name: 'Bookings', href: '/bookinghistory', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function InternalNavbar() {
  return (
    <div className='bg-[#0869FB] py-2'>   
      <Disclosure as="nav" className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg lg:mx-20 md:mx-20 mx-0 md:rounded-full">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:text-white ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to={"/ledger"}>
                    
                    <img className="h-10 w-auto" src={logo} alt="Your Company" />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-10 sm:block">
                    <div className="flex space-x-4">
                      {/* {navigation.map((item) => (
                        item.name === 'Umrah' ? (
                          <Menu as="div" className="relative inline-block text-left" key={item.name}>
                            <div>
                              <Menu.Button className="rounded-md px-3 py-2 hover:font-semibold text-sm  text-[#FFFFFF] hover:text-white">
                                <Link to={item.href}>

                                {item.name}
                                </Link>
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                      umrah visa
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                      umrah packeges
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/hotelvoucher"
                                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                     hotel booking
                                    </Link>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'text-white' : 'text-[#f3eeee] hover:text-white',
                              'rounded-md px-3 py-2 hover:font-semibold text-sm  text-[#FFFFFF] hover:text-white duration-500'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        )
                      ))} */}

{navigation.map((item) => (
  item.name === 'Umrah' ? (
    <Menu as="div" className="relative inline-block text-left outline-none" key={item.name}>
      <div onMouseEnter={() => document.getElementById("umrah-menu").click()}>
        <Menu.Button id="umrah-menu" className="rounded-md px-3 py-2 hover:font-semibold text-sm outline-none text-[#FFFFFF] hover:text-white">
          {item.name}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {open => (
          <Menu.Items className={`absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg outline-none ${open ? 'block' : 'hidden'}`}
          onMouseLeave={() => document.getElementById("umrah-menu").click()}

          >
            <Menu.Item>
              {({ active }) => (
                <Link
                to="/umrah/visa"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  umrah visa
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/umrah/packages"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  umrah packages
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/hotelvoucher"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  hotel booking
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  ) : (
    <a
      key={item.name}
      href={item.href}
      className={classNames(
        item.current ? 'text-white' : 'text-[#f3eeee] hover:text-white',
        'rounded-md px-3 py-2 hover:font-semibold text-sm text-[#FFFFFF] hover:text-white duration-500'
      )}
      aria-current={item.current ? 'page' : undefined}
    >
      {item.name}
    </a>
  )
))}

                      
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 gap-2 md:flex hidden items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                 
                   <Icon icon="fluent:call-20-regular" width={25} color='#FFFFFF52' />
                 <span className='text-white font-semibold'>+92  7710-29----</span>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full shadow-xl font-bold text-white bg-[#9ec1f8] text-sm px-8 py-3">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                       <button className='flex items-center gap-2'>Profile <Icon icon="pajamas:long-arrow"   /></button>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  item.name === 'Umrah' ? (
                    <Menu as="div" className="relative inline-block text-left w-full" key={item.name}>
                      <div>
                        <Menu.Button className="block w-full rounded-md px-3 py-2 text-base hover:font-semibold  text-[#FFFFFF] hover:text-white">
                          {item.name}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                              to="/umrah/visa"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                               umrah visa
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                              to="/umrah/packages"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                               umrah packeges
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                              to="/hotelvoucher"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                               hotel booking
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? ' text-white' : 'text-white text-center  hover:text-white',
                        'block rounded-md px-3 py-2 text-base hover:font-semibold   text-[#FFFFFF] hover:text-white'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}