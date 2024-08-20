const FormProgress = ({stepOne}) => {
    return (
        <section className="grid grid-cols-4 items-center tab:justify-center tab:items-center tab:flex">
            <div className="progressLineActive"></div>
            <h2 className="hidden mobile:block font-bold pr-2">Steps: </h2>
            <div className=" col-span-2 flexAlignCenter tab:gap-6">
                <div className="flexAlignCenter">
                    <span className="progressNumberingActive">1</span>
                    <h1 className="progressLabelActive">Basic Information</h1>
                </div>
                <div className={ stepOne ? `progressLineDormant`: `progressLineActive` }></div>
                <div className="flexAlignCenter mobile:w-full">
                    <span className={stepOne ? `progressNumberingDormant` :`progressNumberingActive`}>2</span>
                    <h1 className= {stepOne ? `progressLabelDormant`: `progressLabelActive` } >Interest Form</h1>
                </div>
            </div>
            <div className={ stepOne ? `progressLineDormant tabView`: `progressLineActive `  }></div>
        </section>
    )
}


export default FormProgress