function gladiator(lostF, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let trashedHelmet = Math.floor(lostF / 2);
    let trashedSword = Math.floor(lostF / 3);
    let trashedShield = Math.floor(lostF / 6); // Every 6th fight, both helmet and sword are trashed, so shield is also trashed
    let trashedArmor = Math.floor(trashedShield / 2); // Every 6th fight, shield is trashed, so armor is also trashed
    
    let totalExpenses = (trashedHelmet * helmetPrice) + (trashedSword * swordPrice) + (trashedShield * shieldPrice) + (trashedArmor * armorPrice);
    
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiator(7,2,3,4,5)
    