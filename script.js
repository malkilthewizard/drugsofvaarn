document.getElementById('generateButton').addEventListener('click', function() {
    // Data for each column
    const colourData = ["Red", "Blue", "Yellow", "White", "Black", "Pink", "Orange", "Viridian", "Olive", "Silver", "Gold", "Bronze", "Umber", "Steel", "Smoke", "Indigo", "Azure", "Violet", "Octarine", "Ulfire"];
    const formData = ["Sugar", "Leaf", "Crystal", "Cactus", "Fungus", "Brain", "Pearl", "Slime", "Meat", "Honey", "Insect", "Liquid", "Stone", "Glyph", "Biotech", "Sand", "Root", "Blood", "Clay", "Tooth"];
    const ingestedbyData = ["Snorting", "Injected", "Stewed", "Boiled in Tea", "Swallow Whole", "Lick It", "Brain Interface", "Hold on Tongue", "Smoke It", "Touch to Eyes", "Absorbed in Skin", "Stare at It", "Burn and Watch the Flames", "Infused into Honey", "Drunk in Urine", "Burn and Eat the Ash", "Bake in Bread", "Place in Ear", "Only Affects Synths", "Smell It"];
    const effect1Data = ["Euphoria", "Paranoia", "Auditory Hallucinations", "Visual Hallucinations", "No Pain", "Fearless", "Ego Death", "Levitation", "Anxious Sweats", "Itchy Eyeballs", "Nasal Drip", "Split Personality", "Nausea", "Behold Azathoth", "Supernatural Hearing", "Paralyzed", "Murderous Rage", "Can't Stop Dancing", "Very Mellow", "Heightened Empathy"];
    const effect2Data = ["Euphoria", "Paranoia", "Auditory Hallucinations", "Visual Hallucinations", "No Pain", "Fearless", "Ego Death", "Levitation", "Anxious Sweats", "Itchy Eyeballs", "Nasal Drip", "Split Personality", "Nausea", "Behold Azathoth", "Supernatural Hearing", "Paralyzed", "Murderous Rage", "Can't Stop Dancing", "Very Mellow", "Heightened Empathy"];

    // Access the table body
    const tableBody = document.querySelector('#drugsTable tbody');

    // Remove the row with column names
    tableBody.innerHTML = '';

    // Generate random indices for each column
    const randomIndexColour = Math.floor(Math.random() * colourData.length);
    const randomIndexForm = Math.floor(Math.random() * formData.length);
    const randomIndexIngestedBy = Math.floor(Math.random() * ingestedbyData.length);
    const randomIndexEffect1 = Math.floor(Math.random() * effect1Data.length);
    const randomIndexEffect2 = Math.floor(Math.random() * effect2Data.length);

    // Create a new row with the random entries
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${colourData[randomIndexColour]}</td>
        <td>${formData[randomIndexForm]}</td>
        <td>${ingestedbyData[randomIndexIngestedBy]}</td>
        <td>${effect1Data[randomIndexEffect1]}</td>
        <td>${effect2Data[randomIndexEffect2]}</td>
    `;

    // Append the new row to the table
    tableBody.appendChild(newRow);
});