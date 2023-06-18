import {Error, Loader} from '../components'



import { allGenres } from '../assets/genre/allGenres';

const Discover = () => {

    const genreTitles = 'Comedy'

    return (
        <div className='flex flex-col '>
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-[#e9e2e7] text-left'>Discover {genreTitles}</h2>
                <select 
                    onChange={() => {}}
                    value=""
                    className='bg-[#090708] text-[#a07e96] p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                >
                    
                    <option>SORT</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                    <option>NEWEST - OLDEST </option>
                    <option>OLDEST - NEWEST </option>
                </select>
            </div>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            
            </div>

        </div>
    )
} 

export default Discover;
