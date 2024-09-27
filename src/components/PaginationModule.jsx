export default function PaginationModule({ pageNo, setPageNo, workoutsOnPage }) {


    function handleUpClick() {
        if (workoutsOnPage < 5) {
            return
        }
        if (workoutsOnPage === 0) {
            setPageNo(pageNo -= 1)
            return
        }
        setPageNo(pageNo += 1)
    }

    function handleDownClick() {
        if(pageNo === 1) {
            return
        }

        setPageNo(pageNo -= 1)
    }

    console.log(pageNo)
    return(
        <section className="flex flex-row gap-2 place-items-center">
        <img className="h-4 cursor-pointer" src="/svg/left-arrow-pagination.svg" onClick={handleDownClick}/>
        <p className="bg-white rounded-full w-8 text-center text-tiny-orange">{pageNo}</p>
        <img className="h-4 cursor-pointer" src="/svg/right-arrow-pagination.svg" onClick={handleUpClick}/>
        </section>
    )
}