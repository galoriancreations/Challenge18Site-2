import worldLanguages from "world-languages";

export const languageOptions = [];
for (let key in worldLanguages) {
    const trimmedName = worldLanguages[key].split(" - ")[0].split(" (")[0];
    const existingItem = languageOptions.find(language => language.name === trimmedName);
    if (!existingItem) {
        languageOptions.push({
            code: key,
            name: trimmedName,
            label: worldLanguages[key].replace(" - ", " – ")
        });
    }
}

export const planOptions = [
    { type: "3-years", price: 150, label: "Three Years", years: 3 },
    { type: "2-years", price: 250, label: "Two Years", years: 2 },
    { type: "1-year", price: 350, label: "One Year", years: 1 }
];

export const labels = {
    individual: {
        username: "Username",
        phone: "Phone number",
        fullName: "Full name",
        email: "Email",
    },
    organization: {
        username: "Username",
        memberName: "Lead staff member's name",
        memberRole: "Lead staff member's role",
        organization: "Organization/school name",
        city: "City/town",
        country: "Country",
        email: "Lead contact email",
        phone: "Lead contact phone number",
    },
    admin: {},
};