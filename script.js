// UGEAC 2026 Seat Matrix Data integrated from bceceboard.bihar.gov.in (UGEAC26_SM.pdf)
// Cutoffs are estimated based on previous year trends.
const collegeData = [
    // B.C.E. BHAGALPUR
    { college: "B.C.E. Bhagalpur", branch: "Civil Engg.", totalSeats: 120, cutoffs: { "UR": { opening: 200, closing: 1000 }, "SC": { opening: 1500, closing: 3200 }, "ST": { opening: 2000, closing: 4500 }, "EBC": { opening: 900, closing: 1800 }, "BC": { opening: 860, closing: 1400 }, "EWS": { opening: 700, closing: 1200 }}},
    { college: "B.C.E. Bhagalpur", branch: "Mechanical Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 300, closing: 1200 }, "SC": { opening: 1600, closing: 3500 }, "ST": { opening: 2200, closing: 4800 }, "EBC": { opening: 1000, closing: 2000 }, "BC": { opening: 900, closing: 1500 }, "EWS": { opening: 800, closing: 1300 }}},
    { college: "B.C.E. Bhagalpur", branch: "Mathematics and Computing", totalSeats: 60, cutoffs: { "UR": { opening: 100, closing: 500 }, "SC": { opening: 800, closing: 1800 }, "ST": { opening: 1200, closing: 3000 }, "EBC": { opening: 500, closing: 1000 }, "BC": { opening: 400, closing: 800 }, "EWS": { opening: 300, closing: 600 }}},
    { college: "B.C.E. Bhagalpur", branch: "Electrical Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 250, closing: 1100 }, "SC": { opening: 1400, closing: 3000 }, "ST": { opening: 1800, closing: 4000 }, "EBC": { opening: 800, closing: 1600 }, "BC": { opening: 700, closing: 1300 }, "EWS": { opening: 600, closing: 1000 }}},
    { college: "B.C.E. Bhagalpur", branch: "Electronics & Communication Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 150, closing: 700 }, "SC": { opening: 1000, closing: 2200 }, "ST": { opening: 1500, closing: 3200 }, "EBC": { opening: 600, closing: 1200 }, "BC": { opening: 500, closing: 900 }, "EWS": { opening: 400, closing: 800 }}},
    { college: "B.C.E. Bhagalpur", branch: "Computer Sc. & Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 50, closing: 350 }, "SC": { opening: 500, closing: 1200 }, "ST": { opening: 800, closing: 2000 }, "EBC": { opening: 300, closing: 700 }, "BC": { opening: 250, closing: 500 }, "EWS": { opening: 200, closing: 400 }}},

    // M.I.T. MUZAFFARPUR
    { college: "M.I.T. Muzaffarpur", branch: "Civil Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 100, closing: 800 }, "SC": { opening: 1200, closing: 2800 }, "ST": { opening: 1800, closing: 3800 }, "EBC": { opening: 700, closing: 1500 }, "BC": { opening: 600, closing: 1200 }, "EWS": { opening: 500, closing: 1000 }}},
    { college: "M.I.T. Muzaffarpur", branch: "Mechanical Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 150, closing: 900 }, "SC": { opening: 1300, closing: 3000 }, "ST": { opening: 1900, closing: 4000 }, "EBC": { opening: 800, closing: 1700 }, "BC": { opening: 700, closing: 1400 }, "EWS": { opening: 600, closing: 1100 }}},
    { college: "M.I.T. Muzaffarpur", branch: "Electrical Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 120, closing: 850 }, "SC": { opening: 1100, closing: 2700 }, "ST": { opening: 1700, closing: 3700 }, "EBC": { opening: 750, closing: 1600 }, "BC": { opening: 650, closing: 1300 }, "EWS": { opening: 550, closing: 1050 }}},
    { college: "M.I.T. Muzaffarpur", branch: "Electronics & Communication Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 80, closing: 600 }, "SC": { opening: 900, closing: 2000 }, "ST": { opening: 1400, closing: 3000 }, "EBC": { opening: 500, closing: 1100 }, "BC": { opening: 450, closing: 850 }, "EWS": { opening: 350, closing: 700 }}},
    { college: "M.I.T. Muzaffarpur", branch: "I.T.", totalSeats: 60, cutoffs: { "UR": { opening: 10, closing: 250 }, "SC": { opening: 300, closing: 900 }, "ST": { opening: 500, closing: 1500 }, "EBC": { opening: 150, closing: 450 }, "BC": { opening: 100, closing: 350 }, "EWS": { opening: 80, closing: 250 }}},
    { college: "M.I.T. Muzaffarpur", branch: "Computer Sc. & Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 5, closing: 200 }, "SC": { opening: 250, closing: 800 }, "ST": { opening: 450, closing: 1400 }, "EBC": { opening: 100, closing: 400 }, "BC": { opening: 80, closing: 300 }, "EWS": { opening: 50, closing: 200 }}},
    { college: "M.I.T. Muzaffarpur", branch: "Leather Tech.", totalSeats: 30, cutoffs: { "UR": { opening: 1500, closing: 4000 }, "SC": { opening: 3500, closing: 7000 }, "ST": { opening: 5000, closing: 9000 }, "EBC": { opening: 2500, closing: 5000 }, "BC": { opening: 2000, closing: 4500 }, "EWS": { opening: 1800, closing: 3800 }}},
    { college: "M.I.T. Muzaffarpur", branch: "Biomedical & Robotic Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 800, closing: 2500 }, "SC": { opening: 2500, closing: 5000 }, "ST": { opening: 3500, closing: 6500 }, "EBC": { opening: 1500, closing: 3500 }, "BC": { opening: 1200, closing: 3000 }, "EWS": { opening: 1000, closing: 2800 }}},

    // G.C.E. GAYA
    { college: "G.C.E. Gaya", branch: "Computer Sc. & Engg.", totalSeats: 120, cutoffs: { "UR": { opening: 200, closing: 800 }, "SC": { opening: 1000, closing: 2500 }, "ST": { opening: 1500, closing: 3500 }, "EBC": { opening: 600, closing: 1500 }, "BC": { opening: 500, closing: 1200 }, "EWS": { opening: 400, closing: 1000 }}},
    { college: "G.C.E. Gaya", branch: "Electrical & Electronics Engg.", totalSeats: 90, cutoffs: { "UR": { opening: 600, closing: 1800 }, "SC": { opening: 2000, closing: 4500 }, "ST": { opening: 3000, closing: 6000 }, "EBC": { opening: 1200, closing: 2800 }, "BC": { opening: 1000, closing: 2500 }, "EWS": { opening: 900, closing: 2200 }}},
    { college: "G.C.E. Gaya", branch: "Mechanical Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 800, closing: 2500 }, "SC": { opening: 2500, closing: 5500 }, "ST": { opening: 3500, closing: 7000 }, "EBC": { opening: 1500, closing: 3500 }, "BC": { opening: 1300, closing: 3000 }, "EWS": { opening: 1100, closing: 2800 }}},
    { college: "G.C.E. Gaya", branch: "Civil Engg.", totalSeats: 90, cutoffs: { "UR": { opening: 700, closing: 2200 }, "SC": { opening: 2200, closing: 5000 }, "ST": { opening: 3200, closing: 6500 }, "EBC": { opening: 1400, closing: 3200 }, "BC": { opening: 1200, closing: 2800 }, "EWS": { opening: 1000, closing: 2500 }}},
    
    // M.C.E. MOTIHARI
    { college: "M.C.E. Motihari", branch: "Computer Sc. & Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 300, closing: 1200 }, "SC": { opening: 1500, closing: 3500 }, "ST": { opening: 2000, closing: 4500 }, "EBC": { opening: 800, closing: 2000 }, "BC": { opening: 700, closing: 1800 }, "EWS": { opening: 600, closing: 1500 }}},
    { college: "M.C.E. Motihari", branch: "Civil Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 1000, closing: 3000 }, "SC": { opening: 3000, closing: 6000 }, "ST": { opening: 4000, closing: 8000 }, "EBC": { opening: 2000, closing: 4000 }, "BC": { opening: 1800, closing: 3500 }, "EWS": { opening: 1500, closing: 3200 }}},

    // D.C.E. DARBHANGA
    { college: "D.C.E. Darbhanga", branch: "Computer Sc. & Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 250, closing: 1000 }, "SC": { opening: 1200, closing: 3000 }, "ST": { opening: 1800, closing: 4000 }, "EBC": { opening: 700, closing: 1800 }, "BC": { opening: 600, closing: 1500 }, "EWS": { opening: 500, closing: 1200 }}},
    { college: "D.C.E. Darbhanga", branch: "Civil Engg.", totalSeats: 90, cutoffs: { "UR": { opening: 800, closing: 2500 }, "SC": { opening: 2500, closing: 5000 }, "ST": { opening: 3500, closing: 7000 }, "EBC": { opening: 1500, closing: 3500 }, "BC": { opening: 1300, closing: 3000 }, "EWS": { opening: 1100, closing: 2800 }}},
    { college: "D.C.E. Darbhanga", branch: "Fire Technology & Safety", totalSeats: 30, cutoffs: { "UR": { opening: 1500, closing: 4500 }, "SC": { opening: 4000, closing: 8000 }, "ST": { opening: 5500, closing: 10000 }, "EBC": { opening: 3000, closing: 6000 }, "BC": { opening: 2500, closing: 5500 }, "EWS": { opening: 2200, closing: 5000 }}},
    
    // N.C.E. CHANDI
    { college: "N.C.E. Chandi", branch: "Artificial Intelligence & ML", totalSeats: 60, cutoffs: { "UR": { opening: 400, closing: 1500 }, "SC": { opening: 2000, closing: 4000 }, "ST": { opening: 3000, closing: 5000 }, "EBC": { opening: 1000, closing: 2500 }, "BC": { opening: 900, closing: 2200 }, "EWS": { opening: 800, closing: 2000 }}},
    { college: "N.C.E. Chandi", branch: "Computer Sc. & Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 350, closing: 1300 }, "SC": { opening: 1800, closing: 3800 }, "ST": { opening: 2500, closing: 4800 }, "EBC": { opening: 900, closing: 2200 }, "BC": { opening: 800, closing: 2000 }, "EWS": { opening: 700, closing: 1800 }}},
    { college: "N.C.E. Chandi", branch: "Aeronautical Engg.", totalSeats: 60, cutoffs: { "UR": { opening: 1200, closing: 3500 }, "SC": { opening: 3500, closing: 7000 }, "ST": { opening: 4500, closing: 9000 }, "EBC": { opening: 2500, closing: 5000 }, "BC": { opening: 2200, closing: 4500 }, "EWS": { opening: 2000, closing: 4000 }}}
];

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('predictor-form');
    const resultsSection = document.getElementById('results-section');
    const resultsBody = document.getElementById('results-body');
    const resultsSummary = document.getElementById('results-summary');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const rank = parseInt(document.getElementById('rank').value);
        const category = document.getElementById('category').value;
        const prefCollege = document.getElementById('pref-college').value;
        const prefBranch = document.getElementById('pref-branch').value;
        
        if (isNaN(rank) || !category) {
            alert('Please enter valid rank and select a category.');
            return;
        }

        // Add a loading state to the button
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Predicting... <div class="spinner" style="width:20px;height:20px;border:2px solid #fff;border-top:2px solid transparent;border-radius:50%;animation:spin 1s linear infinite;"></div>';
        
        // Ensure spin animation exists
        if (!document.getElementById('spin-style')) {
            const style = document.createElement('style');
            style.id = 'spin-style';
            style.innerHTML = '@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }';
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            predictColleges(rank, category, prefCollege, prefBranch);
            submitBtn.innerHTML = originalText;
        }, 800);
    });

    function predictColleges(rank, category, prefCollege, prefBranch) {
        let matchingColleges = [];

        collegeData.forEach(item => {
            // Check preferences
            if (prefCollege !== 'Any' && item.college !== prefCollege) return;
            if (prefBranch !== 'Any' && item.branch !== prefBranch) return;

            if (item.cutoffs[category]) {
                const closeRank = item.cutoffs[category].closing;
                // If user's rank is less than or equal to closing rank + 10% tolerance
                if (rank <= closeRank * 1.1) {
                    let chance = "Low";
                    let chanceClass = "chance-low";
                    
                    if (rank <= closeRank * 0.7) {
                        chance = "High";
                        chanceClass = "chance-high";
                    } else if (rank <= closeRank * 0.95) {
                        chance = "Medium";
                        chanceClass = "chance-medium";
                    }

                    matchingColleges.push({
                        ...item,
                        closeRank: closeRank,
                        chance: chance,
                        chanceClass: chanceClass
                    });
                }
            }
        });

        // Sort by chances and then by closing rank
        matchingColleges.sort((a, b) => {
            const chanceOrder = { "High": 1, "Medium": 2, "Low": 3 };
            if (chanceOrder[a.chance] !== chanceOrder[b.chance]) {
                return chanceOrder[a.chance] - chanceOrder[b.chance];
            }
            return a.closeRank - b.closeRank;
        });

        displayResults(matchingColleges, rank, category);
    }

    function displayResults(colleges, rank, category) {
        resultsBody.innerHTML = '';
        
        if (colleges.length === 0) {
            resultsSummary.textContent = `No predictable colleges found for Rank ${rank} in ${category} category based on current data. Try participating in subsequent rounds!`;
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = `<td colspan="6" style="text-align:center; padding: 2rem; color: #94a3b8;">No matching colleges found for this rank in the selected category.</td>`;
            resultsBody.appendChild(emptyRow);
        } else {
            resultsSummary.textContent = `Found ${colleges.length} potential matches for Rank ${rank} (${category})`;
            
            colleges.forEach(college => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td style="font-weight: 600; color: #e2e8f0;">${college.college}</td>
                    <td>${college.branch}</td>
                    <td><span style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">${category}</span></td>
                    <td style="font-family: monospace; font-size: 1rem;">${college.closeRank}</td>
                    <td style="font-family: monospace; font-size: 1rem;">${college.totalSeats}</td>
                    <td><span class="${college.chanceClass}">${college.chance}</span></td>
                `;
                resultsBody.appendChild(row);
            });
        }
        
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
