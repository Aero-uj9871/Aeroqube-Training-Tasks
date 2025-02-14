 import map from "../assets/map.jpg"
function Contact(){
    return(
    <>
    <section className="py-12 w-full">
    <div className="container mx-auto"  style={{ width: '95%' }} id="contact">
        <h2 className="text-xl">Contact</h2>
        <hr className="hr mb-8 mt-[2rem] md:{w-[70%] justify-center} sm:{w-[80%] items-center} "></hr>
        <div className="text-gray-700 leading-normal">
            <p className="text-justify font-semibold">Let's get in touch and talk about your next project.</p>
        </div>

        <form action="#" method="post">
            <div className="mb-4 sm:w-sm">
                <input type="text" id="name" name="name" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" required></input>
            </div>
            <div className="mb-4">
                <input type="email" name="email" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" required></input>
            </div>
            <div className="mb-4">
                <input type="text"  name="subject" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject"></input>
            </div>
            <div className="mb-4">  
                <textarea name="comment" rows={4} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Comment"></textarea>
            </div>
            <button type="submit" className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500">SEND MESSAGE</button>
        </form>

        <div className="mt-10 w-full">
            <img src={map} alt=""></img>
        </div>
    </div>
</section>
    </>
    )
}

export default Contact