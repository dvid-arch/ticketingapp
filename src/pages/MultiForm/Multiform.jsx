import { useState } from "react"
import Attendees from "./component/Attendees"
import Ready from "./component/Ready"
import SelectTicket from "./component/SelectTicket"

function MultiForm() {
    const [subForm, setSubForm] = useState(0)
    
    return (
        <form>
            {
                (subForm == 0)?<SelectTicket subForm={subForm} setSubForm={setSubForm}  />:subForm == 1?<Attendees subForm={subForm} setSubForm={setSubForm} />:<Ready subForm={subForm} setSubForm={setSubForm} />
            }
        </form>
  )
}

export default MultiForm