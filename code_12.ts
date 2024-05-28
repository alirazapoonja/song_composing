let guests: string[] = ["Asim Azhar", "sahir ali bagga,", "ali zafar,"];
console.log("A new song  yaariyan ehd e wafa!");

// Adding more guests
guests.unshift("aima baig");
guests.splice(guests.length / 2, 0, "Ahad Raza");
guests.push("Osman Khalid");

guests.forEach(guest => {
    console.log(`Dear ${guest}, Haan yaad hai wo dosti ka har maza, Muhabbatain, wo ronaqain, wo mastiyan?`);
});







