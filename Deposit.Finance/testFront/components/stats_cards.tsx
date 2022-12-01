import Image from "next/image"
import { useState } from "react"
import HeroImg from "../img/HeroImg.png"

export const StatsCards = () => {
  return (
    <div>
      {/* <h3 className="text-lg font-medium leading-6 text-white">Datas</h3> */}
      <dl className="mt-5 grid grid-cols-1 divide-y divide-purple-500/10 overflow-hidden rounded-lg bg-white/10 shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-white">TVL</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-white">
              71,897
              <span className="ml-2 text-sm font-medium text-gray-500">from 70,946</span>
            </div>

            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              {/* <!-- Heroicon name: mini/arrow-up --> */}
              <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only"> Increased by </span>
              12%
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-white">Avg. Volume</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-white">
              58.16%
              <span className="ml-2 text-sm font-medium text-gray-500">from 56.14%</span>
            </div>

            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
              {/* <!-- Heroicon name: mini/arrow-up --> */}
              <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only"> Increased by </span>
              2.02%
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-white">Avg. Return</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-white">
              24.57%
              <span className="ml-2 text-sm font-medium text-gray-500">from 28.62%</span>
            </div>

            <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
              {/* <!-- Heroicon name: mini/arrow-down --> */}
              <svg className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
              </svg>
              <span className="sr-only"> Decreased by </span>
              4.05%
            </div>
          </dd>
        </div>
      </dl>
    </div>
  )
}