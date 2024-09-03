const FormProgress = ({stepOne, confirmation}) => {

    const DoubleArrow = () => {
        return (
            <div>
                <i className="font-bold bi bi-chevron-double-right text-customred"></i>
            </div>
        )
    }

    return (
        <section className=" overflow-hidden flex  items-center gap-8 w-[98%] mx-auto py-6 px-4 border-b-2 border-b-gray-100 tab:justify-center mobile:w-full mobile:px-1 mobile:justify-evenly mobile:gap-4 ">
            <div className="progressLabelContainer">
                <h2 className="progressLabel">Basic Information</h2>
                <h2 className=" mobileProgressLabel">Step 1</h2>
                <span className={confirmation ? 'hidden' : stepOne ? 'block progressLabelUnderline' : 'hidden'}></span>
            </div>
            <TrippleArrow />
            <div className="progressLabelContainer">
                <h2 className="progressLabel">Interest Form</h2>
                <h2 className="mobileProgressLabel">Step 2</h2>
                <span className={ confirmation || stepOne ? 'hidden' : 'block progressLabelUnderline' }></span>
            </div>
            <TrippleArrowArrow />
            <div className="progressLabelContainer">
                <h2 className="progressLabel">Submit</h2>
                <h2 className="mobileProgressLabel">Step 3</h2>
                <span className={ confirmation ? 'block progressLabelUnderline' : 'hidden' }></span>
            </div>
        </section>
    )
}


export default FormProgress