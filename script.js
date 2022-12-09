
function uwuify() {
    // Get the user's input
    let input = document.getElementById("input").value;

    // UWUify the input
    let output = input
        .replace(/[rl]/g, "w")
        .replace(/[RL]/g, "W")
        .replace(/th/g, "d")
        .replace(/TH/g, "D")
        .replace(/the/g, "teh")
        .replace(/THE/g, "TEH")
        .replace(/you/g, "uwu")
        .replace(/YOU/g, "UWU")      
        .replace(/my/g, "mai")
        .replace(/MY/g, "MAI");

    // Add some emojis
    let emojis = [, "💗", "😂", "🙄", "🤐", "😏", "😱", "😫", "😙", "😚","(っ◕‿◕)っ","(ง •̀_•́)ง"];
    let words = output.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (Math.random() > 0.5) {
            words[i] += emojis[Math.floor(Math.random() * emojis.length)];
        }
    }
    output = words.join(" ");

    // Display the UWUified text
    document.getElementById("output").innerHTML = output;
}
