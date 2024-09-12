export default function PaginationModule({ pageNo, setPageNo }) {


    return(
        <section className="flex flex-row gap-2 place-items-center">
        <img className="h-4" src="src/assets/SVG/left-arrow-pagination.svg" onClick={() => {setPageNo(pageNo -= 1)}}/>
        <p className="bg-white rounded-full w-8 text-center text-tiny-orange">{pageNo}</p>
        <img className="h-4 cursor-pointer" src="src/assets/SVG/right-arrow-pagination.svg" onClick={() => {setPageNo(pageNo += 1)}}/>
        </section>
    )
}