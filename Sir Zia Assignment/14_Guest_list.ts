/* Guest list: If you could invite anyone, living or deceased, to 
dinner, who would you invited? Make a list that includes at least 
three people you'd like to invite to dinner. Then use your list 
to print a message to each person, inviting them to dinner. */

const guest : string[] = ["Haris", "Nabeel", "Zain"];


for (let i = 0; i < guest.length; i++){

    console.log(`I would like to invite you tonight dinner at my home, ${guest[i]}`);
    
}

