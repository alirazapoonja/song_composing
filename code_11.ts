// Q14 Answer:
let guests: string[] = ["amin sir", "mubashir sir", "daniyal sir"];

guests.forEach(guest => {
    console.log(`Dear ${guest}, Maine coding Hai banai`);
});


// Q15 Answer:
let unableToAttend = "amin sir";
console.log(`${unableToAttend} Phir Kyoon Aaya Na result Harjaayi.`);

// Replace the guest
let newGuest = "zia sir";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, Meri coding Mein Tu Hai Basa, O compliar, Aaja result Na Ab Tarsa?`);
});







