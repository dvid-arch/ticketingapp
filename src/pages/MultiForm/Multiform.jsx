import { useEffect, useState } from "react"
import Ready from "./component/Ready"
import SelectTicket from "./component/SelectTicket"
import AttendeesForm from "./component/Attendees"

function MultiForm() {
    const [subForm, setSubForm] = useState(0)
    const [selectedTicketType, setSelectedTicketType] = useState(null)
    const [numberOfTickets, setNumberOfTickets] = useState('1')
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [aboutProject, setAboutProject] = useState("");
    const [errors, setErrors] = useState({});
    const subForms = ["Ticket Selection","Attendees","Ready"]
    
    useEffect(() => {
     
        if (localStorage.getItem("subForm")) {
            setSubForm(localStorage.getItem("subForm"))
        }
    }, [])


    return (
        <form>
            {
                (subForm == 0) ? <SelectTicket
                    subForm={subForm}
                    subForms={subForms}
                    setSubForm={setSubForm}
                    selectedTicketType={selectedTicketType}
                    setSelectedTicketType={setSelectedTicketType}
                    numberOfTickets={numberOfTickets}
                    setNumberOfTickets={setNumberOfTickets}
                    errors={errors}
                    setErrors={setErrors}
                />
                    : subForm == 1 ? <AttendeesForm
                        subForm={subForm}
                        subForms={subForms}
                        setSubForm={setSubForm}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        aboutProject={aboutProject}
                        setAboutProject={setAboutProject}
                        errors={errors}
                        setErrors={setErrors}
                    />
                        : <Ready
                            subForm={subForm}
                            subForms={subForms}
                            setSubForm={setSubForm}
                        />
            }
        </form>
    )
}

export default MultiForm