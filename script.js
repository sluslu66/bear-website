function showFact() {
const facts = [
"Bears can run up to 40 km/h",
"Bears have a very keen sense of smell",
"Polar bears are excellent swimmers"
];

const random = facts[Math.floor(Math.random() * facts.length)];
document.getElementById("fact").innerText = random;
}
