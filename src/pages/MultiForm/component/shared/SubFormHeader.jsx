import React from 'react'

function SubFormHeader({subForm, subForms}) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-2 justify-between sm:gap-3 sm:items-center">
                <h1 className="font-serif text-[24px] sm:text-[32px] text-white">
                    Ticket Selection
                </h1>
                <span className="text-white text-[16px]">
                    Step {subForm+1}/3
                </span>
            </div>
            <div className="bg-[#0E464F] ">
                <span
                    className="h-1 block bg-[#24A0B5]"
                    style={{ width: `${((subForm+1) / 3) * 100}%` }}
                    role="progressbar"
                    aria-valuenow={((subForm+1) / 3) * 100}
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
        </div>
    )
}

export default SubFormHeader