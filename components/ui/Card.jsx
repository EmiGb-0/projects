import Image from "next/image"
import Link from "next/link"



export const Card = ({entrada}) => {

    const {img, title, description, technologies, url} = entrada

    return (
        <div className=''>
            <div className='r rounded-md mx-auto'>
                <Image src={img} width='500' height='300' className='w-full' />
            </div>
            <div className='px-2 py-3 flex flex-col gap-2 border-b border-r border-l rounded-b'>
                <h3 className='text-lg font-bold text-gray-300'>{title}</h3>
                <p className='text-sm font-bold text-gray-400'>{description}</p>
                <p className='text-right text-xs uppercase text-blue-400'>{technologies}</p>
                <div className='pb-1'>
                    <Link className='border border-blue-400 hover:border-blue-600 hover:bg-blue-600 px-3 py-2 transition-all' href={`${url}`}>
                        Ver sitio
                    </Link>
                </div>
            </div>
        </div>
    )
}
