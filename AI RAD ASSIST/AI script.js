function analyzeXray() {
    const fileInput = document.getElementById("xrayInput");
    const resultDiv = document.getElementById("result");

    if (!fileInput.files.length) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "<p style='color:red;'>Please upload an X-ray image first.</p>";
        return;
    }

    // Show uploaded image
    const imgFile = fileInput.files[0];
    const imgURL = URL.createObjectURL(imgFile);

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Uploaded X-ray</h3>

            <img src="${imgURL}" 
            alt="Uploaded X-ray" 
            style="max-width:500px; border-radius:8px; margin-bottom:10px;">
        <p>Analyzing with AI...</p>
    `;

    // Simulate AI processing
    setTimeout(() => {
        const confidence = Math.floor(Math.random() * 40) + 60; // 60-99%
        const outcome = confidence > 80 ? "Possible abnormality detected" : "No obvious abnormality detected";
        const color = confidence > 80 ? "red" : "green";

            resultDiv.innerHTML += `
        <h3>AI Result</h3>
        <p style="color:${color}; font-weight:bold;">${color};</p>

        <div class="confidence-wrapper">
            <div class="confidence-label">
                Confidence Score: <span>${confidence}%</span>
            </div>
            
             <div class="confidence-bar">
                <div class="confidence-fill" style="width: ${confidence}%;"></div>
            </div>
        </div>
        
        <p class="ai-note">
            AI-assisted screening only. Not a medical diagnosis.
            </p>
        `;
    }, 2000);
}