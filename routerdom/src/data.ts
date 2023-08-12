let invoices = [
    {
        id: 1,
        name: "Aglayrton Julião",
        number: 1992,
        profession: "Developer full-stack",
        due: "12/05/1992",
    },
    {
        id: 2,
        name: "Kayo Guilherme",
        number: 2005,
        profession: "Developer full-stack",
        due: "11/11/2006",
    },
    {
        id: 3,
        name: "Pedro Victor",
        number: 2007,
        profession: "Developer Mobile",
        due: "03/04/2007",
    },
    {
        id: 4,
        name: "Gustavo Nogueira",
        number: 2007,
        profession: "Developer back-end",
        due: "10/04/2007",
    },
    {
        id: 5,
        name: "Gabriel Silva",
        number: 2007,
        profession: "Developer front-end",
        due: "14/04/2007",
    },
];

export function getInvoices() {
    return invoices;
}

export function getInvoice(id: any) {
    return invoices.find((invoice) => invoice.id === id)
}

export function DeleteInvoice(id: any) {
    invoices = invoices.filter(
        (invoice)  => invoice.id !== id
    )
}