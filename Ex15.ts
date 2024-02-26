// Q: 15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let GuestList : Array<string>=[
    "Abdul Razzaq",
    "Lubna",
    "Unzila",
    "Arsala",
    "Feroze Khan",
    "Zain Imam",
    "Andrew tate",
    "Candra",
    ];

// Step:1 Print the name of a person who cant make to the dinner


let guestwhocant:string="Candra";
console.log(`Today ${guestwhocant} can't make it to the dinner.`)

// Step:2 Replace the name of the guest who can't make it to the dinner

let replaceguest : string ="Zain Imam";
let indexofguestwhocant : number= GuestList.indexOf(guestwhocant);
// console.log(indexofguestwhocant)/;
if(indexofguestwhocant !== -1)
{
GuestList[indexofguestwhocant]=replaceguest
}

//Step 3 Pint a second set of invitation messages 

console.log("Second set of invitation messages:");
GuestList.forEach(( guest:string) =>
{console.log(`Dear ${guest}, you are invited to dine with us`)})

export{GuestList}