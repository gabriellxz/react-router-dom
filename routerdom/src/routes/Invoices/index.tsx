import './style.css'
import { Outlet, useSearchParams } from "react-router-dom"
import { getInvoices } from "../../data"
import QueryLink from '../../assets/components'

export default function Invoices() {

    let invoices = getInvoices()

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <div style={{ display: 'flex' }}>
            <nav style={{
                borderRight: '1px solid',
                padding: '1rem'
            }}>
                <input
                    value={searchParams.get("name") || ""}
                    type="search"
                    onChange={(e) => {
                        const name = e.target.value;
                        if (name) {
                            setSearchParams({ name })
                        } else {
                            setSearchParams({})
                        }
                    }}
                />
                {invoices
                .filter((invoice) => {
                    let name = searchParams.get("name")
                    if (!name) return true
                    let invoiceName = invoice.name.toLowerCase()
                    return invoiceName.startsWith(name.toLowerCase())
                })
                .map(invoice => (
                    <QueryLink
                        className={({ isActive } : any) => isActive ? "db color-green" : "db color-blue"}
                        to={`/invoices/${invoice.id}`}
                        key={invoice.id}
                    >
                        {invoice.name}
                    </QueryLink>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}