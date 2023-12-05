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
                inputFields: {
                    buildings_id: { name: "קוד בניין", type: "text" },
                    apartments_number: { name: "מספר דירה", type: "text" },
                    entrance: { name: "כניסה", type: "text" },
                    zipcode: { name: "מיקוד", type: "text" },
                    size_meter: { name: "גודל במטרים", type: "text" },
                    size_bedrooms: { name: "חדרים", type: "text" },
                    balance: { name: "עובר ושב", type: "number" },
                    remarks: { name: "הערות", type: "text" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
            Buildings: {
                inputFields: {
                    street: { name: "רחוב", type: "text" },
                    street_number: { name: "בספר בית", type: "number" },
                    city: { name: "עיר", type: "text" },
                    representative: { name: "נציג", type: "text" },
                    representative_phone: { name: "טלפון נציג", type: "tel" },
                    representative_email: { name: "אמייל נציג", type: "text" },
                    balance: { name: "עובר ושב", type: "number" },
                    remarks: { name: "הערות", type: "text" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                    ApartmentsTab: "דירות",
                },
            },
            People: {
                inputFields: {
                    id_number: { name: "ת.ז.", type: "text" },
                    first_name: { name: "שם פרטי", type: "text" },
                    last_name: { name: "שם משפחה", type: "text" },
                    nickname: { name: "כינוי", type: "text" },
                    phone: { name: "טלפון", type: "tel" },
                    second_phone: { name: "טלפון שני", type: "tel" },
                    email: { name: "אמייל", type: "text" },
                    remarks: { name: "הערות", type: "text" },
                    partner_id_number: { name: "ת.ז. שוטף", type: "text" },
                    partner_first_name: { name: "שם פרטי שוטף", type: "text" },
                    partner_last_name: { name: "שם משפחה שוטף", type: "text" },
                    partner_nickname: { name: "כינוי שוטף", type: "text" },
                    partner_phone: { name: "טלפון שוטף", type: "tel" },
                    partner_second_phone: {
                        name: "טלפון שני שוטף",
                        type: "tel",
                    },
                    partner_email: { name: "אמייל שוטף", type: "text" },
                    partner_remarks: { name: "הערות שוטף", type: "text" },
                    balance: { name: "עובר ושב", type: "number" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
            Todos: {
                inputFields: {
                    connection_id: { name: "קוד שייכות", type: "text" },
                    connection_id_type: { name: "סוגה שייכות", type: "text" },
                    body: { name: "גוף", type: "text" },
                    remarks: { name: "הערות", type: "text" },
                    todo_status: { name: "מצוב", type: "text" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
            Transactions: {
                inputFields: {
                    connection_id: { name: "קוד שייכות", type: "text" },
                    connection_id_type: { name: "סוגה שייכות", type: "text" },
                    transaction_reason: { name: "סיבה", type: "text" },
                    type_transaction: {
                        name: "סוגה עמצאי התשלום",
                        type: "text",
                    },
                    bill_type: { name: "סוגה התשלום", type: "text" },
                    amount: { name: "סכום", type: "number" },
                    remarks: { name: "הערות", type: "text" },
                },
                Tabs: {
                    InputTab: "פרטים",
                    TransactionsTab: "תשלומים",
                },
            },
        },
    };

    return (
        <PageContext.Provider value={hebrewNames}>
            {children}
        </PageContext.Provider>
    );
}

export default PageContextProvider;
