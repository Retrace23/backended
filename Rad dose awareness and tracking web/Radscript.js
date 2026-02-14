function checkDose() {

    const modality = document.getElementById("modality").value;
    const bodyPart = document.getElementById("bodyPart").value;
    const resultDiv = document.getElementById("result");

    if (modality === "" || bodyPart === "") {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "Please select both modality and body part.";
        return;
    }

    // Radiation dose data (mSv) – educational estimates
    const doseDatabase = {
        "Xray_Chest": 0.1,
        "Xray_Skull": 0.1,
        "Xray_Abdomen": 0.7,
        "Xray_LumbarSpine": 1.5,
        "CT_Chest": 7,
        "CT_Abdomen": 10
    };

    const key = modality + "_" + bodyPart;
    const dose = doseDatabase[key];

    if (dose === undefined) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "Dose data not available for this selection.";
        return;
    }

    let riskLevel = "";
    let riskColor = "";

    if (dose < 1) {
        riskLevel = "Low";
        riskColor = "green";
    } else if (dose < 5) {
        riskLevel = "Moderate";
        riskColor = "orange";
    } else {
        riskLevel = "High";
        riskColor = "red";
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Estimated Radiation Dose</h3>
        <p><strong>Dose:</strong> ${dose} mSv</p>
        <p><strong>Risk Level:</strong> 
           <span style="color:${riskColor}">${riskLevel}</span>
        </p>
        <p><em>This estimate is for educational purposes only.</em></p>
    `;
}
