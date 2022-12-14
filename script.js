function uwuify() {
    // Get the user's input
    let input = document.getElementById("input").value;

    // UWUify the input
    let output = input
        .replace(/very/g, "veryuwu")
        .replace(/is/g, "uswu")
        .replace(/bad/g, "bawduwu")
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

    // Randomize the addition of "uwu" to the end of each word
    let wordsUwu = output.split(" ");
    for (let i = 0; i < wordsUwu.length; i++) {
        if (Math.random() > 0.85) {
            wordsUwu[i] += "uwu";
        }
    }
    output = wordsUwu.join(" ");

    // Add some emojis
    let emojis = [, "ð", "ð", "ð", "ðĪ", "ð", "ðą", "ðŦ", "ð", "ð", "(ãĢââŋâ)ãĢ", "(āļ âĒĖ_âĒĖ)āļ","^_^","āē _āē ","(â'âĄ'â)"];
    let words = output.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (Math.random() > 0.78) {
            words[i] += emojis[Math.floor(Math.random() * emojis.length)];
        }
    }

    output = words.join(" ");

    // Display the UWUified text
    document.getElementById("output").innerHTML = output;
}
