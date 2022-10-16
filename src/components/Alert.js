import React from 'react'

export default function Alert(props) {
    return (
        props.alert &&
        <div className='flex origin-top-right fixed justify-center w-full'>
            <div className={` flex absolute  justify-center w-5/6 items-center m-1 text-sm md:font-medium py-1 px-2 bg-green-300 rounded-md text-black  border border-green-700 ${props.alertHide} `}>
                <div slot="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info w-5 h-5 mx-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                </div>
                <div className="text-base font-normal  max-w-full flex-initial">{props.alert.msg}:{props.alert.type}</div>


                {/* dismiss alert button */}
                <div className="flex flex-auto flex-row-reverse">
                    <div>
                        <button onClick={props.toggleAlert}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x cursor-pointer hover:text-gray-400 rounded-full w-5 h-5 ml-2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
