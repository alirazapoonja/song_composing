let guests: string[] = ["Ameen Sir", "Mubasir Sir", "Amjad Sir"];


// Adding more guests
guests.unshift("Zia Sir");
guests.splice(guests.length / 3, 0, "Daniel Sir");
guests.push("Imran Sir");

guests.forEach(guest => {
    console.log(`Dear ${guest}, Main Koi Aisa typescript per Geet Gaoon?`);
});