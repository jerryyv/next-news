import Link from 'next/link'

function Pagination({ page, url, total }) {
    const lastPage = Math.ceil(total/8)
    return (
        <div className=" my-4 text-gray-100 hover:text-white">
            {page > 1 && (
                <Link href={`${url}?page=${page-1}`}>
                    <a className="cursor-pointer bg-red-600 hover:bg-red-500 px-3 py-1 rounded-md mx-1">Prev</a>
                </Link>
            )}
            {page < lastPage && (
                <Link href={`${url}?page=${page+1}`}>
                    <a className="cursor-pointer bg-red-600 hover:bg-red-500 px-3 py-1 rounded-md mx-1">Next</a>
                </Link>
            )}
        </div>
    )
}

export default Pagination
