import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, SetStateAction } from 'react';

interface SlideOverProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  formContents: React.ReactElement;
}

export const SlideOver: React.FC<SlideOverProps> = ({ open, setOpen, title, formContents }) => {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="position-fixed inset-0 overflow-hidden" onClose={setOpen} style={{ zIndex: 30 }}>
          <div className="position-absolute inset-0 overflow-hidden">
            <div className="position-fixed inset-y-0 right-0 pl-10 max-w-full d-flex">
              <div className="DummyElement flex-shrink-0" aria-hidden="true">
                {/* Dummy element to leave space on the left on smaller screens */}
              </div>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-100 d-flex flex-column py-5 px-4 bg-white shadow overflow-y-scroll">
                    <div className="">
                      <div className="d-flex align-items-start justify-content-between">
                        <Dialog.Title className="fs-3 fs-md-2 ">{title}</Dialog.Title>
                        <div className="ml-3">
                          <button
                            type="button"
                            className="bg-white"
                            style={{ border: 'none' }}
                            onClick={() => setOpen(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ width: 20, height: 20 }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="black"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 position-relative flex-1">
                      {/* Replace with your content */}
                      {formContents}
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
          transition-duration: 700ms;
        }

        .translate-x-full {
          transform: translateX(100%);
        }

        .translate-x-0 {
          transform: translateX(0);
        }

        @media only screen and (max-width: 768px) {
          .DummyElement {
            width: 15%;
          }
        }
      `}</style>
    </div>
  );
};
