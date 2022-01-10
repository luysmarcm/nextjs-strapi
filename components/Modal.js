import React from 'react'
  
const Modal = ({ name, description, address, setshowModal, showModal }) => {
	
	return (
		<>
			{showModal ? (
				<div className="max-w-max min-w-min p-6 justify-center flex fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-lg  md:px-2 lg:px-4 lg:justify-center overflow-hidden">
					<div className="relative md:w-1/2 lg:w-auto my-6 xl:w-2/4 ">
						<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none justify-center">
							<div className="flex-row justify-center p-10 sm:py-10 lg:py-16 lg:pl-6">
								<div className="flex flex-wrap items-baseline space-y-6">
									<h3 className="space-y-6">
										<span className="block notranslate text-1xl leading-7 font-bold text-pink-500 md:2xl lg:text-4xl  ">
											{name}
										</span>
										<span className="block notranslate w-full flex-none font-semibold mb-2.5">
											{description}
										</span>
										address
										<span className="block notranslate w-full flex-none font-semibold mb-2.5 space-y-4">
											ADDRESS: {address}
										</span>
									</h3>
								</div>
								<button
									type="button"
									className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
									onClick={() => setshowModal(false)}
								>
									<span className="sr-only">Close</span>x
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal
