import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, SetStateAction } from 'react';

interface SlideOverProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const SlideOver: React.FC<SlideOverProps> = ({ open, setOpen }) => {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="position-fixed inset-0 overflow-hidden" onClose={setOpen} style={{ zIndex: 30 }}>
          <div className="position-absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="position-absolute inset-0 bg-red transition-opacity" />
            </Transition.Child>

            <div className="position-fixed inset-y-0 right-0 pl-10 max-w-full d-flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-100 d-flex flex-column py-5 bg-white shadow overflow-y-scroll">
                    <div className="px-5">
                      <div className="d-flex align-items-start justify-content-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Panel title</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 position-relative flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="position-absolute inset-0 px-4 sm:px-6">
                        <div className="h-100 border-2 border-dashed border-gray-200" aria-hidden="true" />
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <style jsx>{`
        .inset-0 {
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
        }
        .inset-y-0 {
          top: 0;
          bottom: 0;
        }
        .right-0 {
          right: 0;
        }
        .w-screen {
          width: 100vw;
        }
        .max-w-md {
          max-width: 35rem;
        }
        .overflow-y-scroll {
          overflow-y: scroll;
        }
        .opacity-0 {
          opacity: 0;
        }

        .opacity-100 {
          opacity: 1;
        }

        .ease-in-out {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-500 {
          transition-duration: 500ms;
        }

        .translate-x-full {
          --tw-translate-x: 100%;
        }

        .translate-x-0 {
          --tw-translate-x: 0px;
        }

        .transform {
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        }

        .transition {
          transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform,
            filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .transition-opacity {
          transition-property: opacity;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
      `}</style>
    </div>
  );
};
