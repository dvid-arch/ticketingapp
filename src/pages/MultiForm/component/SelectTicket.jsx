import { useEffect, useState } from "react"
import Button from "../../../components/Button"
import Header from "../../../components/Header"
import Logo from "../../../components/Logo"
import Attendees from "./Attendees"
import Ready from "./Ready"
import Hr from "../../../components/Hr"
import SubFormHeader from "./shared/subFormHeader"

// Constants
const TICKET_TYPES = [
  { type: "Regular Access", nLeft: 20, amt: 'Free' },
  { type: "VIP Access", nLeft: 20, amt: '$50' },
  { type: "VVIP Access", nLeft: 20, amt: '$150' }
]



// Subcomponents
const Ticket = () => (
  <div className="p-6 rounded-[24px] bg-[radial-gradient(ellipse_at_top_left,rgba(36,160,181,0.3)_20%,rgba(36,160,181,0)_70%)] flex justify-center gap-2 flex-col items-center text-center bg-[#0A0C11]/10 text-white">
    <h1 className="text-[32px] sm:text-[48px]">Techember Fest "25</h1>
    <p className="max-w-[340px] text-[16px]">
      Join us for an unforgettable experience at [Event Name]! Secure your spot now.
    </p>
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
      <p><code>[</code>Event Location <code>]</code></p>
      <span className="hidden sm:block">|  |</span>
      <p>March 15, 2025 | 7:00 PM</p>
    </div>
  </div>
)

const SelectType = ({ selectedTicketType, setSelectedTicketType, error }) => {

  function handleSelect(index) {
    setSelectedTicketType(index)
    localStorage.setItem('selectedTicketType', index)
  }

  return (

    <div className="flex flex-col gap-2 text-white">
      <h2 className="text-[16px]">Select Ticket Type:</h2>
      <div className="p-4 grid sm:grid-cols-2 rounded-[24px] text-white gap-6 bg-[#052228]">
        {TICKET_TYPES.map((ticket, index) => (
          <button
            key={ticket.type}
            onClick={() => handleSelect(index)}
            className={`flex items-start border border-[#07373F] gap-2 sm:gap-8 hover:bg-[#197686] justify-between bg-[#052228] p-2 rounded-[12px] ${selectedTicketType === index ? 'bg-[#197686]' : ''
              }`}
            type="button"
            aria-selected={selectedTicketType === index}
          >
            <p>
              {ticket.type}<br />
              <span className="text-sm"><span>{ticket.nLeft}</span>! left</span>
            </p>
            <span className="w-20 border font-semibold border-[#2BA4B9] text-right bg-[#0E464F] p-2 rounded-[8px]">
              {ticket.amt}
            </span>
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1" role="alert">{error}</p>}
    </div>
  )
}

const NumberOfTickets = ({ numberOfTickets, setNumberOfTickets, error }) => {

  function handleOnChange(e) {
    setNumberOfTickets(e.target.value)
    localStorage.setItem('numberOfTickets', e.target.value)
  }

  return (
    <div className="flex flex-col gap-2 text-white">
      <label htmlFor="number_of_tickets">Number of Tickets</label>
      <select
        name="number_of_tickets"
        value={numberOfTickets}
        onChange={handleOnChange}
        className="block w-full p-3 bg-transparent border overflow-hidden border-[#2BA4B9] rounded-[12px]"
        id="number_of_tickets"
        aria-invalid={error ? "true" : "false"}
      >
        {[1, 2, 3].map((num) => (
          <option key={num} className="text-black border" value={num}>
            {num}
          </option>
        ))}
      </select>
      {error && !numberOfTickets && (
        <p className="text-red-500 text-sm mt-1" role="alert">{error}</p>
      )}
    </div>
  )
}

const ActionButtons = ({ onCancel, onNext }) => (
  <div className="sm:border rounded-[24px] sm:px-12 sm:border-[#2BA4B9] flex flex-col sm:flex-row gap-2 justify-center sm:gap-8">
    <button
      onClick={onCancel}
      type="button"
      className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#041E23] text-[#24A0B5]"
    >
      Cancel
    </button>
    <button
      onClick={onNext}
      type="submit"
      className="rounded-[8px] capitalize block w-full py-3 px-6 bg-[#2BA4B9] text-white"
    >
      Next
    </button>
  </div>
)

// Main component
const SelectTicket = ({
  subForm,
  subForms,
  setSubForm,
  selectedTicketType,
  setSelectedTicketType,
  numberOfTickets,
  setNumberOfTickets,
  errors,
  setErrors,
  clearLocaleStorage
}) => {

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);



  const validate = () => {
    const newErrors = {}

    if (selectedTicketType === null) {
      newErrors.ticketType = "Please select a ticket type."
    }
    if (!numberOfTickets) {
      newErrors.numberOfTickets = "Please select the number of tickets."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (e) => {
    e.preventDefault()
    if (validate()) {
      localStorage.setItem("subForm", 1)
      setSubForm(1)
      console.log("Proceeding with:", { selectedTicketType, numberOfTickets })
    }
  }

  function clearChoices() {
    clearLocaleStorage()
  }

  const handleCancel = () => {
    console.log("Cancelled")
    clearChoices()

  }

  return (
    <div className="bg-[#041E23] px-6 py-8 sm:p-12 rounded-[40px] flex flex-col gap-8 mx-auto  max-w-[700px]">

      <SubFormHeader subForm={subForm} subForms={subForms} />

      <div className="p-6 flex flex-col gap-8 bg-[#08252B] rounded-[32px] border border-[#0E464F]">
        <Ticket />
        <Hr />
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
        <ActionButtons
          onCancel={handleCancel}
          onNext={handleNext}
        />
      </div>
    </div>
  )
}

export default SelectTicket