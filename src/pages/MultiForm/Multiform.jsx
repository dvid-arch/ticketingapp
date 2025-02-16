import { useEffect, useState } from "react"
import Ready from "./component/Ready"
import SelectTicket from "./component/SelectTicket"
import AttendeesForm from "./component/Attendees"

function MultiForm() {
    const [subForm, setSubForm] = useState(0)
    const [selectedTicketType, setSelectedTicketType] = useState(null)
    const [numberOfTickets, setNumberOfTickets] = useState(1)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [aboutProject, setAboutProject] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [errors, setErrors] = useState({});

    const subForms = ["Ticket Selection", "Attendees", "Ready"]

    function clearLocaleStorage() {
        localStorage.removeItem('selectedTicketType')
        localStorage.removeItem("numberOfTickets")
        localStorage.removeItem("subForm")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("aboutProject")
    }

    useEffect(() => {
        localStorage.getItem("selectedTicketType") && setSelectedTicketType(Number(localStorage.getItem('selectedTicketType')))
        localStorage.getItem("numberOfTickets") && setNumberOfTickets(localStorage.getItem("numberOfTickets"))
        localStorage.getItem("previewUrl") && setPreviewUrl(String(localStorage.getItem("previewUrl")))
        localStorage.getItem("subForm") && setSubForm(Number(localStorage.getItem("subForm")))
        localStorage.getItem("name") && setName(localStorage.getItem("name"))
        localStorage.getItem("email") && setEmail(localStorage.getItem("email"))
        localStorage.getItem("aboutProject") && setAboutProject(localStorage.getItem("aboutProject"))
    }, [])




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
                    clearLocaleStorage={clearLocaleStorage}
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
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        previewUrl={previewUrl}
                        setPreviewUrl={setPreviewUrl}
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