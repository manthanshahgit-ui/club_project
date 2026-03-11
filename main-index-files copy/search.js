const moods = document.querySelectorAll(".mood_section");
function searchMood() {
  const input = document.getElementById("search").value.toLowerCase().trim();

  // show all moods first
  moods.forEach(m => m.classList.remove("hidden"));

  if (input === "") return;

  const validMoods = ["happy", "sad", "energetic", "relaxed","god","chill","garba","focus","melancholy","nostalgic","motivational","sleepy"];
  if (validMoods.includes(input)) {
    moods.forEach(m => {
      if (m.id !== input) {
        m.classList.add("hidden");
      }
    });
  } else {
    alert("Mood not found! Try: happy, sad, energetic, relaxed");
  }
}

let se=document.getElementById("search")
if(se){
se.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { 
    searchMood(); 
  }
});}


//reset button

function resetmood(){
const input =document.getElementById("search");
input.value="";
const moods=document.querySelectorAll(".mood_section");
  moods.forEach(m => m.classList.remove("hidden"));
}

let mood_new=document.querySelector("#mood");

moods.forEach(link => {
    link.addEventListener("click", () => {
        localStorage.setItem("mood", link.id);
    });
});