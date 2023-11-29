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
        inputFields: {
            Apartments: {
                buildings_id: "קוד בניין",
                apartments_number: "מספר דירה",
                entrance: "כניסה",
                zipcode: "מיקוד",
                size_meter: "גודל במטרים",
                size_bedrooms: "חדרים",
                balance: "עובר ושב",
                remarks: "הערות",
            },
            Buildings: {
                street: "רחוב",
                street_number: "בספר בית",
                city: "עיר",
                representative: "נציג",
                representative_phone: "טלפון נציג",
                representative_email: "אמייל נציג",
                balance: "עובר ושב",
                remarks: "הערות",
            },
            People: {
                id_number: "ת.ז.",
                first_name: "שם פרטי",
                last_name: "שם משפחה",
                nickname: "כינוי",
                phone: "טלפון",
                second_phone: "טלפון שני",
                email: "אמייל",
                remarks: "הערות",
                partner_id_number: "ת.ז. שוטף",
                partner_first_name: "שם פרטי שוטף",
                partner_last_name: "שם משפחה שוטף",
                partner_nickname: "כינוי שוטף",
                partner_phone: "טלפון שוטף",
                partner_second_phone: "טלפון שני שוטף",
                partner_email: "אמייל שוטף",
                partner_remarks: "הערות שוטף",
            },
            Todos: {
                connection_id: "קוד שייכות",
                connection_id_type: "סוגה שייכות",
                date_created: "תאריך",
                body: "גוף",
                remarks: "הערות",
                todo_status: "מצוב",
            },
            Transactions: {
                connection_id: "קוד שייכות",
                connection_id_type: "סוגה שייכות",
                transaction_reason: "סיבה",
                date_created: "תאריך",
                type_transaction: "סוגה עמצאי התשלום",
                bill_type: "סוגה התשלום",
                amount: "סכום",
                remarks: "הערות",
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
