const dict = {
    hello: "bonjour",
    world: "monde",
    cat: "chat",
    dog: "chien",
    how: "comment",
    you: "toi",
    good: "bon / bien",
    morning: "matin",
    evening: "soir",
    thanks: "merci",
    start : "commencer"
};

function translate(text) {
    const words = text.split(/\s+/);
    //took me so long for this one lmao 
    const translated = words.map((w) => dict[w.toLowerCase()] || w);
    return translated.join(" ");
}

//i googled this part cuz its my first time trying to build extensions 

    chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.type === "TRANSLATE" && sender.tab && sender.tab.id) {
        const result = translate(msg.text);
        chrome.tabs.sendMessage(sender.tab.id, {
        type: "RESULT",
        translation: result,
        });
    }
    });
