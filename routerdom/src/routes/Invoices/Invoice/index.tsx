import { useNavigate, useParams } from "react-router-dom"
import { DeleteInvoice, getInvoice } from "../../../data"

export default function Invoice() {

    const params = useParams()
    const navigate = useNavigate()
    const invoices = getInvoice(Number(params.invoiceId))

    return (
        <>
            {invoices &&
                <main style={{ padding: '1rem' }}>
                    <h3>Profession: {invoices.profession}</h3>
                    <p>{invoices.name}: {invoices.number}</p>
                    <p>{invoices.due}</p>
                    <button
                        onClick={() => {
                            DeleteInvoice(invoices.id)
                            navigate("/invoices" + location.search)
                        }
                        }
                    >
                        delete
                    </button>
                </main >}
        </>
    )
}