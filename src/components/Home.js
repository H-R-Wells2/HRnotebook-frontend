import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";



function Home(props) {


    const context = useContext(noteContext);
    const { addNote } = context;



    const [note, setNote] = useState({ title: "", description: "", tag: "" })



    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }



    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }








    return (
        <>
            {/* <!-- main  --> */}
            <div className={`flex ${props.backG} transition ease-in-out duration-500 justify-center `}>

                <div className="flex w-full max-w-lg justify-center py-12">

                    <div className={`mx-8 block  container max-w-xs px-9 py-10 md:px-12 lg:py-12 rounded-lg shadow-lg  w-full lg:max-w-2xl transition  ease-in-out duration-500 ${props.mainBox} `}>
                        <form  onSubmit={handleClick}>


                            {/* Title */}
                            <div id="titlediv" className="form-group mb-6">
                                <label className={`text-2xl form-label transition ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Title</label>

                                <input value={note.title} id="title" type="text" onChange={onChange} minLength={3} required name="title"
                                    className="form-control block w-full px-3 py-1.5 text-base font-medium text-gray-900 bg-white bg-clip-padding  border border-solid border-gray-300  rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                                    placeholder="Title" autoComplete="off" />
                            </div>


                            {/* Description */}
                            <div className="form-group mb-6">
                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Description</label>

                                <textarea value={note.description} id="description" name="description" onChange={onChange} minLength={3}
                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                    rows="2" placeholder="Description"></textarea>
                            </div>


                            {/* Tag */}
                            <div className="form-group mb-6">
                                <label className={`text-xl form-label transition  ease-in-out duration-500 inline-block mb-2 font-semibold ${props.textMain}`}>Tag</label>

                                <input value={note.tag} id="tag" name="tag" onChange={onChange}
                                    className={`form-control block  w-full  px-3  py-1.5  text-base  font-normal text-gray-900   bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out duration-500  focus:text-gray-700 focus:border-blue-600 focus:outline-none ${props.textArea}`}
                                    rows="1" autoComplete="off" placeholder="Tag"></input>
                            </div>







                            {/* Button */}
                            <div className="flex">

                                <button disabled={note.title.length < 3 || note.description.length < 3} type="submit"
                                    className={` w-full px-2 py-3 md:py-2.5 font-medium text-sm leading-tight uppercase rounded shadow-md  transition  duration-150 ease-in-out  md:hover:bg-blue-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg active:text-gray-400 bg-blue-600 text-white 
                                    disabled:bg-blue-500 disabled:md:hover:bg-blue-500 disabled:focus:bg-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed`}>
                                    Add to Notes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Home
