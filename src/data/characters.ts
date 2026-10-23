import type { Character } from "../types/characters";

const characters:Character[] = [
  // MAIN CHARACTERS
  { id: 1, name: "Boyd Stevens", role: "Sheriff", seasons: [1, 2, 3, 4] },
  { id: 2, name: "Donna Raines", role: "Colony House Leader", seasons: [1, 2, 3, 4] },
  { id: 3, name: "Victor Kavanaugh", role: "Longtime Resident", seasons: [1, 2, 3, 4] },
  { id: 4, name: "Tabitha Matthews", role: "Town Resident", seasons: [1, 2, 3, 4] },
  { id: 5, name: "Jim Matthews", role: "Engineer / Town Resident", seasons: [1, 2, 3, 4] },
  { id: 6, name: "Julie Matthews", role: "Matthews Family Member", seasons: [1, 2, 3, 4] },
  { id: 7, name: "Ethan Matthews", role: "Matthews Family Member", seasons: [1, 2, 3, 4] },
  { id: 8, name: "Jade Herrera", role: "Software Developer", seasons: [1, 2, 3, 4] },
  { id: 9, name: "Kenny Liu", role: "Deputy Sheriff", seasons: [1, 2, 3, 4] },
  { id: 10, name: "Kristi Miller", role: "Town Medic", seasons: [1, 2, 3, 4] },
  { id: 11, name: "Fatima Hassan", role: "Colony House Resident", seasons: [1, 2, 3, 4] },
  { id: 12, name: "Ellis Stevens", role: "Artist / Colony House Resident", seasons: [1, 2, 3, 4] },
  { id: 13, name: "Sara Myers", role: "Town Resident", seasons: [1, 2, 3, 4] },
  { id: 14, name: "Father Rudra Khatri", role: "Town Priest", seasons: [1, 2, 3, 4] },
  { id: 15, name: "Tian-Chen Liu", role: "Diner Owner", seasons: [1, 2, 3] },
  { id: 16, name: "Nathan Myers", role: "Town Resident", seasons: [1] },

  // SEASON 2 ARRIVALS
  { id: 17, name: "Marielle Sinclair", role: "Pediatric Nurse", seasons: [2, 3, 4] },
  { id: 18, name: "Randall Kirkland", role: "Bus Passenger / Resident", seasons: [2, 3, 4] },
  { id: 19, name: "Elgin Williams", role: "Bus Passenger / Resident", seasons: [2, 3, 4] },
  { id: 20, name: "Tillie", role: "Bus Passenger / Resident", seasons: [2, 3] },
  { id: 21, name: "Bakta", role: "Bus Driver", seasons: [2, 3, 4] },
  { id: 22, name: "Kelly", role: "Bus Passenger", seasons: [2] },
  { id: 23, name: "Brian Kelly", role: "Bus Passenger", seasons: [2] },

  // SEASONS 3 AND 4
  { id: 24, name: "Henry Kavanaugh", role: "Victor's Father", seasons: [3, 4] },
  { id: 25, name: "Dani Acosta", role: "Police Officer", seasons: [3, 4] },
  { id: 26, name: "Nicky", role: "Colony House Resident", seasons: [3] },
  { id: 27, name: "Sophia", role: "Season 4 New Arrival", seasons: [4] },

  // TOWN AND COLONY HOUSE RESIDENTS
  { id: 28, name: "Dale", role: "Colony House Resident", seasons: [1, 2, 3] },
  { id: 29, name: "Clara", role: "Colony House Resident", seasons: [1, 2, 3, 4] },
  { id: 30, name: "Trudy", role: "Colony House Resident", seasons: [1] },
  { id: 31, name: "Tom", role: "Bartender", seasons: [1, 2, 3] },
  { id: 32, name: "Gina", role: "Town Resident", seasons: [1, 2] },
  { id: 33, name: "Matthias", role: "Colony House Resident", seasons: [2, 3] },
  { id: 34, name: "Eric", role: "Colony House Resident", seasons: [1] },
  { id: 35, name: "Kevin", role: "Colony House Resident", seasons: [1] },
  { id: 36, name: "Stacey", role: "Town Resident", seasons: [1] },
  { id: 37, name: "Corey", role: "Town Resident", seasons: [1, 2] },
  { id: 38, name: "Roger", role: "Town Resident", seasons: [1, 2] },
  { id: 39, name: "Paula", role: "Town Resident", seasons: [2] },
  { id: 40, name: "Reggie", role: "Town Resident", seasons: [2] },
  { id: 41, name: "Brick", role: "Town Resident", seasons: [2] },
  { id: 42, name: "Tobey McCray", role: "Jade's Friend", seasons: [1] },
  { id: 43, name: "Brody", role: "Town Resident", seasons: [1] },

  // FAMILY AND BACKSTORY CHARACTERS
  { id: 44, name: "Abby Stevens", role: "Boyd's Wife", seasons: [1, 2, 4] },
  { id: 45, name: "Bing-Qian Liu", role: "Kenny's Father", seasons: [1] },
  { id: 46, name: "Miranda Kavanaugh", role: "Victor's Mother", seasons: [2, 3, 4] },
  { id: 47, name: "Eloise Kavanaugh", role: "Victor's Sister", seasons: [2, 3, 4] },
  { id: 48, name: "Christopher", role: "Former Town Resident", seasons: [2, 3, 4] },
  { id: 49, name: "Frank Pratt", role: "Town Resident", seasons: [1] },
  { id: 50, name: "Lauren Pratt", role: "Frank's Wife", seasons: [1] },
  { id: 51, name: "Meagan Pratt", role: "Frank's Daughter", seasons: [1] },
  { id: 52, name: "Thomas Matthews", role: "Matthews Family Member", seasons: [3] },

  // SUPERNATURAL AND MYSTERIOUS CHARACTERS
  { id: 53, name: "Boy in White", role: "Mysterious Entity", seasons: [1, 2, 3, 4] },
  { id: 54, name: "Man in Yellow", role: "Mysterious Antagonist", seasons: [3, 4] },
  { id: 55, name: "Smiley Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 56, name: "Cowboy Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 57, name: "Jasmine", role: "Night Creature", seasons: [1] },
  { id: 58, name: "Kimono Woman", role: "Supernatural Entity", seasons: [2, 3, 4] },
  { id: 59, name: "Music Box Monster", role: "Supernatural Entity", seasons: [2] },
  { id: 60, name: "Martin", role: "Mysterious Prisoner", seasons: [2, 3, 4] },
  { id: 61, name: "Ghoulish Children", role: "Mysterious Children", seasons: [2, 3, 4] },
  { id: 62, name: "Nurse Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 63, name: "Old Lady Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 64, name: "Milkman Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 65, name: "Waitress Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 66, name: "Cheerleader Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 67, name: "Jock Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 68, name: "Mechanic Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 69, name: "Librarian Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 70, name: "Swing Coat Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 71, name: "Mob Guy Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 72, name: "Tough Guy Creature", role: "Night Creature", seasons: [1, 2, 3, 4] },
  { id: 73, name: "Professor Creature", role: "Night Creature", seasons: [1, 2, 3, 4] }
];

export default characters;