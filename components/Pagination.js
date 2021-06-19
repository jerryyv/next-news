import Link from 'next/link'

function Pagination({ page, url, total }) {
    const lastPage = Math.ceil(total/8)
    
    return (
        <div className="my-8 text-gray-100 hover:text-white flex items-center text-lg">
            {page > 1 && (
                <Link href={`${url}?page=${page-1}`}>
                    <a className="cursor-pointer bg-red-600 hover:bg-red-500 px-4 py-1 rounded-md mx-1">Prev</a>
                </Link>
            )}
            <p className="px-2 text-gray-800">{page} / {lastPage}</p>
            {page < lastPage && (
                <Link href={`${url}?page=${page+1}`}>
                    <a className="cursor-pointer bg-red-600 hover:bg-red-500 px-4 py-1 rounded-md mx-1">Next</a>
                </Link>
            )}
        </div>
    )
}

export default Pagination
