function uwuify(input) {
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
    let emojis = ["💗", "😂", "🙄", "🤐", "😏", "😱", "😫", "😙", "😚", "(っ◕‿◕)っ", "(ง •̀_•́)ง","^_^","ಠ_ಠ","(●'◡'●)"];
    let words = output.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (Math.random() > 0.78) {
            words[i] += emojis[Math.floor(Math.random() * emojis.length)];
        }
    }

    output = words.join(" ");

    return output;
}


function sailorify(input) {
    let output = input
        .replace(/a/g, "ar")
        .replace(/e/g, "er")
        .replace(/i/g, "ir")
        .replace(/o/g, "or")
        .replace(/u/g, "ur");
    return output;
}

function cringify(input) {
    let output = input
        .replace(/ /g, " xD ")
        .replace(/\./g, " :3.");
    return output;
}

function checkEasterEgg(input) {
    switch(input.toLowerCase()) {
        case 'liloush':
            return "Oh lord she stinks";
        case 'andro':
            return "La3ziz Elghali";
        case 'shamy':
            return 'Musicien de oof de la mort qui tue <a href="https://open.spotify.com/artist/3aWoohjtzcdzaQQr0jOylx" target="_blank">follow him</a> or I\'ll follow you home and do stuff to your car';
        default:
            return input;  // Return the original input if there's no match
    }
}

function applyEffect(effect) {
    let input = document.getElementById("input").value;
    let easterEggOutput = checkEasterEgg(input);
    if (easterEggOutput !== input) {  // An Easter egg was found
        document.getElementById("output").innerHTML = easterEggOutput;
        return;  // Return early to bypass text transformation
    }
    input = checkEasterEgg(input);
    let output;
    switch(effect) {
        case 'uwuify':
            output = uwuify(input);
            break;
        case 'sailorify':
            output = sailorify(input);
            break;
        case 'cringify':
            output = cringify(input);
            break;
        case 'reverseText':
            output = reverseText(input);
            break;
        case 'randomCase':
            output = randomCase(input);
            break;
        case 'toMorse':
            output = toMorse(input);
            break;
        case 'emojify':
            output = emojify(input);
            break;
        case 'zalgo':
            output = zalgo(input);
            break;
        case 'shuffleWords':
            output = shuffleWords(input);
            break;
        case 'toLeetSpeak':
            output = toLeetSpeak(input);
            break;
        default:
            console.error('Unknown effect: ', effect);
            return;
    }
    document.getElementById("output").innerHTML = output;
}


function reverseText(input) {
    return input.split('').reverse().join('');
}


function randomCase(input) {
    return input.split('').map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join('');
}


const morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'
  };
  
  function toMorse(input) {
    return input.toLowerCase().split('').map(char => morseCode[char] || char).join(' ');
  }

  const emojiMap = {
    'happy': '😀', 'sad': '😢', 'love': '❤️', 'angry': '😡'
  };
  
  function emojify(input) {
    return input.split(' ').map(word => emojiMap[word.toLowerCase()] || word).join(' ');
  }

  function zalgo(input) {
    const zalgoChars = ['̤', '̱', '̲', '̿', '̾', '̯'];
    return input.split('').map(char => {
        if (char === ' ') return char;
        let numChars = Math.floor(Math.random() * 5);
        let zalgoified = char;
        for (let i = 0; i < numChars; i++) {
            zalgoified += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
        }
        return zalgoified;
    }).join('');
}

function shuffleWord(word) {
    if (word.length <= 3) return word;
    const chars = word.slice(1, -1).split('');
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return word[0] + chars.join('') + word[word.length - 1];
  }
  
  function shuffleWords(input) {
    return input.split(' ').map(shuffleWord).join(' ');
  }

  function toLeetSpeak(input) {
    const leetMap = {
        'a': '4', 'e': '3', 'g': '6', 'i': '1', 'o': '0', 's': '5', 't': '7'
    };
    return input.split('').map(char => leetMap[char.toLowerCase()] || char).join('');
}


function cursePage() {
    document.body.style.transition = "all 10s";
    document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    document.body.style.transition = "all 0s";
    document.querySelectorAll('*').forEach(el => {
        el.style.transition = "all 10s";
        el.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    });
    setTimeout(() => {
        document.body.style.transition = "all 0s";
        document.body.style.backgroundColor = '';
        document.body.style.transform = '';
        document.querySelectorAll('*').forEach(el => {
            el.style.transition = "all 0s";
            el.style.transform = '';
        });
    }, 10000);
}

// Add this array of colors to your script.js
const colors = ['#FFC0CB', '#FFD700', '#FF6347', '#8A2BE2', '#20B2AA', '#00FA9A', '#8B4513', '#2E8B57'];

// Add this array of fonts to your script.js
const fonts = ['"Comic Sans MS", cursive, sans-serif', '"Arial", sans-serif', '"Courier New", monospace', '"Georgia", serif', '"Times New Roman", Times, serif', '"Verdana", sans-serif'];

function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function switchStyle() {
    document.body.style.backgroundColor = getRandomArrayElement(colors);
    document.body.style.fontFamily = getRandomArrayElement(fonts);
}


function resetText() {
    document.getElementById("input").value = '';
    document.getElementById("output").innerHTML = '';
}


function checkEasterEgg(input) {
    switch(input.toLowerCase()) {
        case 'liloush':
            return "Oh lord she stinks";
        case 'andro':
            return "La3ziz Elghali";
        case 'shamy':
            return 'Musicien de oof de la mort qui tue <a href="https://open.spotify.com/artist/3aWoohjtzcdzaQQr0jOylx" target="_blank">follow him</a> or I\'ll follow you home and do stuff to your car';
        default:
            return input;  // Return the original input if there's no match
    }
}
