import React from 'react'

export default function Card( cardTitle, bodyText) {
  return (
  <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70" href="#">
      <img className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image"/>
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {cardTitle}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">
          {bodyText}
        </p>
      </div>
    </a>
  )
}







