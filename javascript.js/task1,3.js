async function translateText() {
    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if (!text.trim()) {
        alert("Please enter text");
        return;
    }

    try {
        const response = await fetch(
            "https://libretranslate.de/translate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    q: text,
                    source: source,
                    target: target,
                    format: "text"
                })
            }
        );

        const data = await response.json();

        document.getElementById("translatedText").innerText =
            data.translatedText;

    } catch (error) {
        console.error(error);
        alert("Translation failed!");
    }
}

function copyText() {
    const text =
        document.getElementById("translatedText").innerText;

    navigator.clipboard.writeText(text);

    alert("Copied Successfully!");
}