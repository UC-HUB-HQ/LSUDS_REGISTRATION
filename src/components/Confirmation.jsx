const Confirmation = ({reset}) => {
    return (
        <section className="flex flex-col items-center justify-center gap-6 text-center">
            <div className=" flex justify-center items-center w-[200px] aspect-square border border-blue rounded-full">
                <div className="w-[120px] h-[60px] border-[1.2em] border-t-0  border-r-0 rotate-[-45deg]  border-blue mb-4"></div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-blue">Submission Successful</h2>
                <p className=" text-grayishBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="px-4 py-3 text-white rounded-md bg-customred" onClick={reset}>Submit Another Response</button>
        </section>
    )
}

export default Confirmation