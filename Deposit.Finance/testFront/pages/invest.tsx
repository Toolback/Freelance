import type { NextPage } from 'next'
import Link from 'next/link'
import { CalculateEarnings } from '../components/calculate_earnings'
import { ExempleChart } from '../components/ex_chart'
import { StatsCards } from '../components/stats_cards'
import { TwoColumnsCards } from '../components/two_columns_cards'

const Invest: NextPage = () => {
  return (
    <>
      <div className='md:mx-80 md:mt-20 '>
      {/* <h3 className="text-2xl text-center mb-20 font-2xl leading-6 text-white">Statistics</h3> */}
        {/* <div className="flex justify-center">
      <ExempleChart />
        </div> */}
              <h3 className="text-center mt-10 text-lg font-medium leading-6 text-white">Connect for more details</h3>

      <StatsCards />
        {/* <TwoColumnsCards /> */}
      </div>

      <CalculateEarnings />
      <div className='flex justify-center'>
            <Link href="https://dexscreener.com/" target="_blank" >
      <button type="button" className="flex  rounded px-10 py-2 text-white bg-gradient-to-r from-pink-400 to-indigo-500 hover:from-pink-500 hover:to-purple-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            Buy
          </button>
            </Link>

      </div>
      
    </>
  )
}

export default Invest