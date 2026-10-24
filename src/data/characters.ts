import type { Character } from "../types/characters";

export const characters:Character[] = [
  // MAIN CHARACTERS
  { id: 1, name: "Boyd Stevens", role: "Sheriff", seasons: [1, 2, 3, 4], image: "/images/characters/1.jpg" },
  { id: 2, name: "Donna Raines", role: "Colony House Leader", seasons: [1, 2, 3, 4], image: "/images/characters/2.png" },
  { id: 3, name: "Victor Kavanaugh", role: "Longtime Resident", seasons: [1, 2, 3, 4], image: "/images/characters/3.jpg" },
  { id: 4, name: "Tabitha Matthews", role: "Town Resident", seasons: [1, 2, 3, 4], image: "/images/characters/4.jpg" },
  { id: 5, name: "Jim Matthews", role: "Engineer / Town Resident", seasons: [1, 2, 3, 4], image: "/images/characters/5.png" },
  { id: 6, name: "Julie Matthews", role: "Matthews Family Member", seasons: [1, 2, 3, 4], image: "/images/characters/6.png" },
  { id: 7, name: "Ethan Matthews", role: "Matthews Family Member", seasons: [1, 2, 3, 4], image: "/images/characters/7.png" },
  { id: 8, name: "Jade Herrera", role: "Software Developer", seasons: [1, 2, 3, 4], image: "/images/characters/8.png" },
  { id: 9, name: "Kenny Liu", role: "Deputy Sheriff", seasons: [1, 2, 3, 4], image: "/images/characters/9.jpg" },
  { id: 10, name: "Kristi Miller", role: "Town Medic", seasons: [1, 2, 3, 4], image: "/images/characters/10.png" },
  { id: 11, name: "Fatima Hassan", role: "Colony House Resident", seasons: [1, 2, 3, 4], image: "/images/characters/11.jpg" },
  { id: 12, name: "Ellis Stevens", role: "Artist / Colony House Resident", seasons: [1, 2, 3, 4], image: "/images/characters/12.png" },
  { id: 13, name: "Sara Myers", role: "Town Resident", seasons: [1, 2, 3, 4], image: "/images/characters/13.png" },
  { id: 14, name: "Father Rudra Khatri", role: "Town Priest", seasons: [1, 2, 3, 4], image: "/images/characters/14.jpg" },
  { id: 15, name: "Tian-Chen Liu", role: "Diner Owner", seasons: [1, 2, 3], image: "/images/characters/15.jpg" },
  { id: 16, name: "Nathan Myers", role: "Town Resident", seasons: [1], image: "/images/characters/16.jpg" },

  // SEASON 2 ARRIVALS
  { id: 17, name: "Marielle Sinclair", role: "Pediatric Nurse", seasons: [2, 3, 4], image: "/images/characters/17.jpg" },
  { id: 18, name: "Randall Kirkland", role: "Bus Passenger / Resident", seasons: [2, 3, 4], image: "/images/characters/18.png" },
  { id: 19, name: "Elgin Williams", role: "Bus Passenger / Resident", seasons: [2, 3, 4], image: "/images/characters/19.jpg" },
  { id: 20, name: "Tillie", role: "Bus Passenger / Resident", seasons: [2, 3], image: "/images/characters/20.jpg" },
  { id: 21, name: "Bakta", role: "Bus Driver", seasons: [2, 3, 4], image: "/images/characters/21.jpg" },
  { id: 22, name: "Kelly", role: "Bus Passenger", seasons: [2], image: "/images/characters/22.png" },
  { id: 23, name: "Brian Kelly", role: "Bus Passenger", seasons: [2], image: "/images/characters/23.jpg" },

  // SEASONS 3 AND 4
  { id: 24, name: "Henry Kavanaugh", role: "Victor's Father", seasons: [3, 4], image: "/images/characters/24.jpg" },
  { id: 25, name: "Dani Acosta", role: "Police Officer", seasons: [3, 4], image: "/images/characters/25.jpg" },
  { id: 26, name: "Nicky", role: "Colony House Resident", seasons: [3], image: "/images/characters/26.jpg" },
  { id: 27, name: "Sophia", role: "Season 4 New Arrival", seasons: [4], image: "/images/characters/27.jpg" },

  // TOWN AND COLONY HOUSE RESIDENTS
  { id: 28, name: "Dale", role: "Colony House Resident", seasons: [1, 2, 3], image: "/images/characters/28.jpg" },
  { id: 29, name: "Clara", role: "Colony House Resident", seasons: [1, 2, 3, 4], image: "/images/characters/29.png" },
  { id: 30, name: "Trudy", role: "Colony House Resident", seasons: [1], image: "/images/characters/30.jpg" },
  { id: 31, name: "Tom", role: "Bartender", seasons: [1, 2, 3], image: "/images/characters/31.jpg" },
  { id: 32, name: "Gina", role: "Town Resident", seasons: [1, 2], image: "/images/characters/32.jpg" },
  { id: 33, name: "Matthias", role: "Colony House Resident", seasons: [2, 3], image: "/images/characters/33.jpg" },
  { id: 34, name: "Eric", role: "Colony House Resident", seasons: [1], image: "/images/characters/34.jpg" },
  { id: 35, name: "Kevin", role: "Colony House Resident", seasons: [1], image: "/images/characters/35.jpg" },
  { id: 36, name: "Stacey", role: "Town Resident", seasons: [1], image: "/images/characters/36.jpg" },
  { id: 37, name: "Corey", role: "Town Resident", seasons: [1, 2], image: "/from-favicon.png" },
  { id: 38, name: "Roger", role: "Town Resident", seasons: [1, 2], image: "/images/characters/38.jpg" },
  { id: 39, name: "Paula", role: "Town Resident", seasons: [2], image: "/images/characters/39.jpg" },
  { id: 40, name: "Reggie", role: "Town Resident", seasons: [2], image: "/images/characters/40.jpg" },
  { id: 41, name: "Brick", role: "Town Resident", seasons: [2], image: "/images/characters/41.jpg" },
  { id: 42, name: "Tobey McCray", role: "Jade's Friend", seasons: [1], image: "/images/characters/42.jpg" },
  { id: 43, name: "Brody", role: "Town Resident", seasons: [1], image: "/images/characters/43.jpg" },

  // FAMILY AND BACKSTORY CHARACTERS
  { id: 44, name: "Abby Stevens", role: "Boyd's Wife", seasons: [1, 2, 4], image: "/images/characters/44.jpg" },
  { id: 45, name: "Bing-Qian Liu", role: "Kenny's Father", seasons: [1], image: "/images/characters/45.png" },
  { id: 46, name: "Miranda Kavanaugh", role: "Victor's Mother", seasons: [2, 3, 4], image: "/images/characters/46.jpg" },
  { id: 47, name: "Eloise Kavanaugh", role: "Victor's Sister", seasons: [2, 3, 4], image: "/images/characters/47.jpg" },
  { id: 48, name: "Christopher", role: "Former Town Resident", seasons: [2, 3, 4], image: "/images/characters/48.jpg" },
  { id: 49, name: "Frank Pratt", role: "Town Resident", seasons: [1], image: "/images/characters/49.jpg" },
  { id: 50, name: "Lauren Pratt", role: "Frank's Wife", seasons: [1], image: "/images/characters/50.png" },
  { id: 51, name: "Meagan Pratt", role: "Frank's Daughter", seasons: [1], image: "/images/characters/51.png" },
  { id: 52, name: "Thomas Matthews", role: "Matthews Family Member", seasons: [3], image: "/from-favicon.png" },

  // SUPERNATURAL AND MYSTERIOUS CHARACTERS
  { id: 53, name: "Boy in White", role: "Mysterious Entity", seasons: [1, 2, 3, 4], image: "/images/characters/53.jpg" },
  { id: 54, name: "Man in Yellow", role: "Mysterious Antagonist", seasons: [3, 4], image: "/images/characters/54.jpg" },
  { id: 55, name: "Smiley Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/55.jpg" },
  { id: 56, name: "Cowboy Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/56.jpg" },
  { id: 57, name: "Jasmine", role: "Night Creature", seasons: [1], image: "/images/characters/57.jpg" },
  { id: 58, name: "Kimono Woman", role: "Supernatural Entity", seasons: [2, 3, 4], image: "/images/characters/58.jpg" },
  { id: 59, name: "Music Box Monster", role: "Supernatural Entity", seasons: [2], image: "/images/characters/59.jpg" },
  { id: 60, name: "Martin", role: "Mysterious Prisoner", seasons: [2, 3, 4], image: "/images/characters/60.jpg" },
  { id: 61, name: "Ghoulish Children", role: "Mysterious Children", seasons: [2, 3, 4], image: "/images/characters/61.jpg" },
  { id: 62, name: "Nurse Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/62.jpg" },
  { id: 63, name: "Old Lady Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/63.jpg" },
  { id: 64, name: "Milkman Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/64.jpg" },
  { id: 65, name: "Waitress Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/65.jpg" },
  { id: 66, name: "Cheerleader Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/66.jpg" },
  { id: 67, name: "Jock Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/67.jpg" },
  { id: 68, name: "Mechanic Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/68.jpg" },
  { id: 69, name: "Librarian Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/69.jpg" },
  { id: 70, name: "Swing Coat Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/70.jpg" },
  { id: 71, name: "Mob Guy Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/71.jpg" },
  { id: 72, name: "Tough Guy Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/72.jpg" },
  { id: 73, name: "Professor Creature", role: "Night Creature", seasons: [1, 2, 3, 4], image: "/images/characters/73.jpg" }
];

