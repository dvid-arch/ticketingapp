import { useState } from "react"
import Button from "../../../components/Button"

import Header from "../../../components/Header"
import Logo from "../../../components/Logo"
import Attendees from "./Attendees"
import Ready from "./Ready"

function Ticket() {
    return (
        <div className="p-6 rounded-[24px] bg-[radial-gradient(ellipse_at_top_left,rgba(36,160,181,0.3)_20%,rgba(36,160,181,0)_70%)] flex justify-center gap-2 flex-col items-center text-center bg-[#0A0C11]/10 text-white">
            <h1 className="text-[62px]">Techember Fest "25</h1>
            <p className="max-w-[340px] text-[16px]">Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
            <div className="flex gap-4"><p><code>[</code>Event Location <code>]</code></p> <span>|  |</span> <p>March 15, 2025 | 7:00 PM</p></div>
        </div>
    )
}

function SelectType({ selectedTicketType, setSelectedTicketType, error }) {
    const tickets = [{ type: "Regular Access", nLeft: 20 }, { type: "VIP Access", nLeft: 20 }, { type: "VVIP Access", nLeft: 20 }]
    return (
        <div className="flex flex-col gap-2 text-white">
            <h2 className="text-[16px]">Select Ticket Type:</h2>
            <div className="p-4 grid sm:grid-cols-2 rounded-[24px] text-white gap-6 bg-[#052228]">
                {tickets.map((n, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedTicketType(i)}
                        className={`flex gap-8 hover:bg-[#197686] justify-between bg-[#052228] p-2 rounded-[12px] ${selectedTicketType === i ? 'bg-[#197686]' : ''}`}
                    >
                        <p>
                            {n.type} <br /> <span className="text-sm"><span>{n.nLeft}</span>! left</span>
                        </p>
                        <span className="w-20 border border-[#2BA4B9] text-right bg-[#0E464F] p-2 rounded-[8px]">Free</span>
                    </div>
                ))}
            </div>
            {(error && !(selectedTicketType+1)) && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}

function NumberOfTickets({ numberOfTickets, setNumberOfTickets, error }) {
    return (
        <div className="flex flex-col gap-2 text-white">
            <h2>Number of Tickets</h2>
            <select
                name="number_of_tickets"
                value={numberOfTickets}
                onChange={(e) => setNumberOfTickets(e.target.value)}
                className="block w-full p-3 bg-transparent border overflow-hidden  border-[#2BA4B9] rounded-[12px]"
                id="not"
            >
                <option className="text-black border rounded-md block" value="">Select a number</option>
                <option className="text-black border" value="1">1</option>
                <option className="text-black border" value="2">2</option>
                <option className="text-black border" value="3">3</option>
            </select>
            {(error && !(numberOfTickets)) && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}


function Next({ handleCancel, handleNext }) {
    return (
        <div className="border rounded-[24px] px-12 border-[#2BA4B9] flex justify-center gap-8">
            <button 
                onClick={handleCancel} 
                className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#041E23] text-white"
            >
                Cancel
            </button>
            <button 
                onClick={handleNext} 
                className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#2BA4B9] text-white"
            >
                Next
            </button>
        </div>
    )
}

function SelectTicket({ subForm, setSubForm }) {
    const steps = ["Ticket Selection", "Attendee Details", "Ready"]
    const [currentStep, setCurrentStep] = useState(1)

    const [selectedTicketType, setSelectedTicketType] = useState(null)
    const [numberOfTickets, setNumberOfTickets] = useState('')
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}
        if (!selectedTicketType) {
            newErrors.ticketType = "Please select a ticket type."
        }
        if (!numberOfTickets) {
            newErrors.numberOfTickets = "Please select the number of tickets."
        }
        setErrors(newErrors)
        return true
    }

    const handleNext = (e) => {
        e.preventDefault()
        console.log('pressed')
        if (validate()) {
            // Proceed to the next step
            console.log(subForm)
            setSubForm(1)
            console.log("Proceeding with:", { selectedTicketType, numberOfTickets })
        }
    }

    const handleCancel = () => {
        // Handle cancelation if needed
        console.log("Cancelled")
    }

    return (
        <div className="bg-[#041E23]  p-12 rounded-[40px] flex flex-col gap-8 mx-auto w-full max-w-[700px]">
            <div className="flex flex-col gap-3 ">

                <div className="flex justify-between gap-3 items-center">
                    <h1 className="font-serif text-[32px] text-white">{steps[currentStep - 1]}</h1>
                    <span className="text-white ">Step <span>{currentStep}</span>/<span>3</span></span>
                </div>
                <div className="bg-[#0E464F]">
                    <span className={`h-1 block bg-[#24A0B5]`} style={{ width: `${(currentStep / 3) * 100}%` }} ></span>
                </div>
            </div>

            <div className="p-6 w-fit  flex flex-col gap-8 bg-[#08252B] rounded-[32px] border border-[#0E464F]">
                <Ticket />
                <hr className="h-1 bg-[#07373F]"></hr>
                <SelectType
                    selectedTicketType={selectedTicketType}
                    setSelectedTicketType={setSelectedTicketType}
                    error={errors.ticketType}
                />
                <NumberOfTickets
                    numberOfTickets={numberOfTickets}
                    setNumberOfTickets={setNumberOfTickets}
                    error={errors.numberOfTickets}
                />
                <Next handleCancel={handleCancel} handleNext={handleNext} />
            </div>
        </div>
    )
}

export default SelectTicket