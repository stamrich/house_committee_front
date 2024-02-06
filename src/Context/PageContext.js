import { createContext } from "react";

export const PageContext = createContext(null);

function PageContextProvider({ children }) {
    const hebrewNames = {
        pageNames: {
            Dashboard: "דשבורד",
            Buildings: "בניינים",
            Apartments: "דירות",
            People: "אנשים",
            Transactions: "תשלומים",
            Todos: "משימות",
            Settings: "הגדרות",
        },
        pageInfo: {
            Apartments: {
                addNew: "דירה חדשה",
                inputFields: {
                    id: { name: "קוד", type: "None" },
                    address: { name: "כתובת", type: "BuildingSelect" },
                    balance: { name: "קופה", type: "number" },
                    tenant: { name: "דייר", type: "None" },
                    boss: { name: "בעל הבית", type: "None" },
                    buildings_id: { name: "קוד בניין", type: "text" },
                    apartments_number: { name: "מספר דירה", type: "text" },
                    entrance: { name: "כניסה", type: "text" },
                    zipcode: { name: "מיקוד", type: "text" },
                    size_meter: { name: "גודל במטרים", type: "text" },
                    size_bedrooms: { name: "חדרים", type: "text" },
                    remarks: { name: "הערות", type: "textArea" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                    ConnectionsTab: "חיבורים",
                },
            },
            Buildings: {
                addNew: "בניין חדש",
                inputFields: {
                    id: { name: "קוד", type: "None" },
                    street: { name: "רחוב", type: "text" },
                    street_number: { name: "מספר בניין", type: "number" },
                    city: { name: "עיר", type: "text" },
                    balance: { name: "קופה", type: "number" },
                    representative: { name: "שם נציג", type: "text" },
                    representative_phone: { name: "טלפון נציג", type: "tel" },
                    representative_email: { name: "מייל נציג", type: "text" },
                    apartment_amount: { name: "סך הכול דירות", type: "None" },
                    remarks: { name: "הערות", type: "textArea" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                    ApartmentsTab: "דירות",
                },
            },
            People: {
                addNew: "איש קשר חדש",
                inputFields: {
                    id: { name: "קוד", type: "None" },
                    first_name: { name: "שם פרטי", type: "text" },
                    last_name: { name: "שם משפחה", type: "text" },
                    nickname: { name: "כינוי", type: "text" },
                    balance: { name: "קופה", type: "number" },
                    city: { name: "עיר", type: "None" },
                    address: { name: "כתובת", type: "None" },
                    type_connection: { name: "קשר לדירה", type: "None" },
                    phone: { name: "טלפון", type: "tel" },
                    second_phone: { name: "טלפון שני", type: "tel" },
                    email: { name: "מייל", type: "text" },
                    id_number: { name: "ת.ז.", type: "text" },
                    remarks: { name: "הערות", type: "textArea" },
                    partner_id_number: { name: "ת.ז. שוטף", type: "text" },
                    partner_first_name: { name: "שם פרטי שוטף", type: "text" },
                    partner_last_name: { name: "שם משפחה שוטף", type: "text" },
                    partner_nickname: { name: "כינוי שוטף", type: "text" },
                    partner_phone: { name: "טלפון שוטף", type: "tel" },
                    partner_second_phone: {
                        name: "טלפון שני שוטף",
                        type: "tel",
                    },
                    partner_email: { name: "מייל שוטף", type: "text" },
                    partner_remarks: { name: "הערות שוטף", type: "text" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
            Todos: {
                addNew: "משימה חדשה",
                inputFields: {
                    connection_id: { name: "קוד שייכות", type: "text" },
                    connection_id_type: { name: "סוגה שייכות", type: "text" },
                    body: { name: "משימה", type: "textArea" },
                    remarks: { name: "הערות", type: "textArea" },
                    todo_status: { name: "מצב", type: "text" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
            Transactions: {
                addNew: "תשלום חדש",
                inputFields: {
                    id: { name: "קוד", type: "None" },
                    connection_id: { name: "קוד שייכות", type: "text" },
                    connection_id_type: {
                        name: "סוגה שייכות",
                        type: "select",
                        options: ["בניין", "דירה", "איש"],
                    },
                    transaction_reason: { name: "סיבה", type: "text" },
                    type_transaction: {
                        name: "סוגה עמצאי התשלום",
                        type: "text",
                    },
                    bill_type: { name: "סוגה התשלום", type: "text" },
                    amount: { name: "סכום", type: "number" },
                    remarks: { name: "הערות", type: "textArea" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
            Connections: {
                inputFields: {
                    person_id: { name: "קוד איש", type: "None" },
                    first_name: { name: "שם פרטי", type: "text" },
                    last_name: { name: "שם משפחה", type: "text" },
                    nickname: { name: "כינוי", type: "text" },
                    type_connection: { name: "קשר לדירה", type: "None" },
                    phone: { name: "טלפון", type: "tel" },
                    second_phone: { name: "טלפון שני", type: "tel" },
                    entered: { name: "נכנס", type: "date" },
                    exited: { name: "יצא", type: "date" },
                },
            },
            Payments: {},
        },
    };

    return (
        <PageContext.Provider value={hebrewNames}>
            {children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;
