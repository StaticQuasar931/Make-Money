/*

    __  __    _    _  _______    
   |  \/  |  / \  | |/ / ____|   
   | |\/| | / _ \ | ' /|  _|     
   | |  | |/ ___ \| . \| |___    
  _|_|__|_/_/  _\_\_|\_\_____| __
 |  \/  |/ _ \| \ | | ____\ \ / /
 | |\/| | | | |  \| |  _|  \ V / 
 | |  | | |_| | |\  | |___  | |  
 |_|  |_|\___/|_| \_|_____| |_|  
                                 
Developed by Economical Games
                                 
*/
!function(){
    var e, t, n, o, l, i, s, a, d, c = {
        1: [1, "Water Bottle", 10], 2: [1, "Backpack", 50], 3: [1, "Cart", 100], 
        4: [2, "Bicycle", 200], 5: [3, "Smartphone", 750], 6: [3, "Gaming Laptop", 2000], 
        7: [5, "Plasma TV", 5000], 8: [10, "Motorcycle", 15000], 9: [15, "Car", 35000], 
        10: [20, "Luxury Car", 100000], 11: [50, "Apartment", 300000], 12: [250, "House", 1000000], 
        13: [1000, "Mansion", 10000000], 14: [3000, "Rocket", 100000000], 15: [5000, "Space Shuttle", 1000000000], 
        16: [10000, "Saturn V", 5000000000], 17: [100000, "Moon Landing", 25000000000], 
        18: [1000000, "McDonald's", 100000000000], 19: [10000000, "Apple", 1000000000000], 
        20: [50000000, "Fortune 500", 20000000000000], 21: [1000000000, "United States", 200000000000000], 
        22: [10000000000, "Everything on Earth", 1000000000000000], 23: [100000000000000000, "Earth", 100000000000000000]
    }, r = [], u = 1, y = 3, m = 1, g = 23, p = !1;

    function _(e){
        var t;
        if (2 == i) 
            t = e >= 1e33 ? "$" + Math.round(100 * e / 1e33) / 100 + " Decillion" : 
                e >= 1e30 ? "$" + Math.round(100 * e / 1e30) / 100 + " Nonillion" : 
                e >= 1e27 ? "$" + Math.round(100 * e / 1e27) / 100 + " Octillion" : 
                e >= 1e24 ? "$" + Math.round(100 * e / 1e24) / 100 + " Septillion" : 
                e >= 1e21 ? "$" + Math.round(100 * e / 1e21) / 100 + " Sextillion" : 
                e >= 1e18 ? "$" + Math.round(100 * e / 1e18) / 100 + " Quintillion" : 
                e >= 1e15 ? "$" + Math.round(100 * e / 1e15) / 100 + " Quadrillion" : 
                e >= 1e12 ? "$" + Math.round(100 * e / 1e12) / 100 + " Trillion" : 
                e >= 1e9 ? "$" + Math.round(100 * e / 1e9) / 100 + " Billion" : 
                e >= 1e6 ? "$" + Math.round(100 * e / 1e6) / 100 + " Million" : "$" + e;
        else if (3 == i){
            t = e >= 1e33 ? "$" + Math.round(1e3 * e / 1e33) / 1e3 + " Decillion" : 
                e >= 1e30 ? "$" + Math.round(1e3 * e / 1e30) / 1e3 + " Nonillion" : 
                e >= 1e27 ? "$" + Math.round(1e3 * e / 1e27) / 1e3 + " Octillion" : 
                e >= 1e24 ? "$" + Math.round(1e3 * e / 1e24) / 1e3 + " Septillion" : 
                e >= 1e21 ? "$" + Math.round(1e3 * e / 1e21) / 1e3 + " Sextillion" : 
                e >= 1e18 ? "$" + Math.round(1e3 * e / 1e18) / 1e3 + " Quintillion" : 
                e >= 1e15 ? "$" + Math.round(1e3 * e / 1e15) / 1e3 + " Quadrillion" : 
                e >= 1e12 ? "$" + Math.round(1e3 * e / 1e12) / 1e3 + " Trillion" : 
                e >= 1e9 ? "$" + Math.round(1e3 * e / 1e9) / 1e3 + " Billion" : 
                e >= 1e6 ? "$" + Math.round(1e3 * e / 1e6) / 1e3 + " Million" : "$" + e;
        }
        return t;
    }

    function b(){
        // Using localStorage instead of Chrome storage
        localStorage.setItem("game_data", JSON.stringify({
            balance: e,
            bonus_clicks: o,
            items: t,
            decimal_digits: i,
            upgrade_details: s,
            prestige_points: a
        }));
    }

    function loadGameData(){
        var savedData = localStorage.getItem("game_data");
        if (savedData){
            var data = JSON.parse(savedData);
            e = data.balance;
            o = data.bonus_clicks;
            t = data.items;
            i = data.decimal_digits;
            s = data.upgrade_details;
            a = data.prestige_points || 0;
        } else {
            e = 0;
            o = 0;
            t = {
                1: !1, 2: !1, 3: !1, 4: !1, 5: !1, 6: !1, 7: !1, 8: !1, 9: !1, 10: !1, 11: !1, 
                12: !1, 13: !1, 14: !1, 15: !1, 16: !1, 17: !1, 18: !1, 19: !1, 20: !1, 21: !1, 22: !1
            };
            i = 3;
            s = {
                income_boost: {
                    levels: 25,
                    costs: [100000, 1000000, 5000000, 10000000, 25000000],
                    bought: {
                        1: !1, 2: !1, 3: !1, 4: !1, 5: !1, 6: !1, 7: !1, 8: !1, 9: !1, 10: !1
                    }
                },
                bonus_clicks: {
                    levels: 50,
                    costs: [1000, 10000, 50000, 100000, 500000],
                    bought: {
                        1: !1, 2: !1, 3: !1, 4: !1, 5: !1, 6: !1, 7: !1, 8: !1, 9: !1, 10: !1
                    }
                }
            };
            a = 0;
        }
    }

    function updateDisplays(){
        var moneyDisplay = document.getElementById("moneyscreen_money");
        var incomeDisplay = document.getElementById("moneyscreen_income");
        var prestigeDisplay = document.getElementById("prestige_points_info");

        moneyDisplay.innerHTML = _(e);
        incomeDisplay.innerHTML = _(n);
        prestigeDisplay.innerHTML = a + " (+" + (50 * a) + "%)";
    }

// Function to load game data and initialize the game
document.addEventListener("DOMContentLoaded", function() {
    // Check if the necessary elements exist before interacting with them
    const saveButton = document.getElementById("save_button");
    
    // Load game data and update display after DOM is ready
    loadGameData();
    updateDisplays();

    // Ensure the save button exists before attaching the event listener
    if (saveButton) {
        // Event listener to save the game when the save button is clicked
        saveButton.addEventListener("click", function() {
            b();  // Call save function (assuming b() is the save function)
            alert("Game saved successfully!");  // Alert to inform the user
        });
    } else {
        console.error("Save button with id 'save_button' not found.");
    }

    // Automatically save the game every 10 seconds
    setInterval(b, 10000);
});


