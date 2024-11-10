const WordCount = ({wordCount}) => {
    return (
        <div className="flex justify-end items-end text-xs">
            <p className="text-customred">{wordCount}/300</p>
        </div>
    )
}

export default WordCount