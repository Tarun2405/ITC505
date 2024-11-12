const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
    "A group of flamingos is called a 'flamboyance'.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries are not.",
    "A single cloud can weigh more than a million pounds.",
    "Some cats are allergic to humans.",
    "The Eiffel Tower can be 15 cm taller during the summer due to metal expansion.",
    "Your taste buds have a lifespan of about 10 to 14 days."
  ];
  
  
  function generateRandomFact() {
    
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
  
    
    document.getElementById("fact-text").textContent = randomFact;
  }
  
  
  document.getElementById("new-fact").addEventListener("click", generateRandomFact);
