const FormProgress = ({stepOne, confirmation}) => {

    const DoubleArrow = () => {
        return (
            <div>
                <i className="bi bi-chevron-double-right text-customred font-bold"></i>
            </div>
        )
    }

    return (
        <section className="flex items-center gap-8 w-[98%] mx-auto py-6 px-4 border-b-2 border-b-gray-100 ">
            <div className="progressLabelContainer">
                <h2 className="progressLabel">Basic Information</h2>
                <span className={confirmation ? 'hidden' : stepOne ? 'block progressLabelUnderline' : 'hidden'}></span>
            </div>
            <DoubleArrow />
            <div className="progressLabelContainer">
                <h2 className="progressLabel">Interest Form</h2>
                <span className={ confirmation || stepOne ? 'hidden' : 'block progressLabelUnderline' }></span>
            </div>
            <DoubleArrow />
            <div className="progressLabelContainer">
                <h2 className="progressLabel">Submit</h2>
                <span className={ confirmation ? 'block progressLabelUnderline' : 'hidden' }></span>
            </div>
        </section>
    )
}


export default FormProgress