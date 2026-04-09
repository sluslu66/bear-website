function showFact() {
  const facts = [
    "Beruang bisa berlari hingga 40 km/jam",
    "Beruang memiliki penciuman sangat tajam",
    "Beruang kutub adalah perenang hebat"
  ];
  
  const random = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").innerText = random;
}
