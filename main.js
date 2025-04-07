// ==UserScript==
// @name           BetterTeenChat
// @version        1.4
// @namespace      https://github.com/pog-bot-dot-lot-tot-got-rot-mot-pot-not/betterteenchat/blob/main/main.js
// @description    makes teenchat better!! :3
// @author         magmadiver / elli
// @license        MIT
// @match          https://www.teen-chat.org/chat/
// ==/UserScript==

(function() {

    var ver = 1.4
    console.log("loading betterteenchat ", ver, "...")

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    'use strict';

    const observer = new MutationObserver((mutationsList, observer) => {
        const modal = document.querySelector('#large_modal');
        if (modal) {
            modal.style.backgroundColor = 'transparent';
            modal.style.pointerEvents = 'none';
            Array.from(modal.children).forEach(child => { // ts so fugly someone end me:3
                child.style.pointerEvents = 'auto';
            });
            console.log("betterteenchat ", ver, ": ", "read mutations, eated the background on modals")
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    function betterdark() {
        const footer = document.querySelector('div#wrap_footer');
        if (footer) {
            footer.style.backgroundImage = 'none';
            footer.style.backgroundColor = '#101010';
        }

        const chatHead = document.querySelector('div#chat_head');
        if (chatHead) {
            chatHead.style.backgroundImage = 'none';
            chatHead.style.backgroundColor = '#101010';
        }
    }
    console.log("betterteenchat ", ver, ": ", "made topbar and footer dark")

    function isInnactive() { // credits c418 for finding this
        console.log("no")
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            betterdark();
        });
    } else {
        betterdark();
    }

    sleep(5).then(() => { // idfk why but if i remove this half the script stops working and idgaf about a 5ms delay 😔🥀
        var theme = "Dark";
        $.ajax({ // ignore the warnings eslint is kinda stupid
            url: "system/action/action_profile.php",
            type: "post",
            cache: false,
            dataType: 'json',
            data: {
                set_user_theme: theme,
            },
            success: function(response) {
                const bbfv = ""; // this is VERY VERY important and if it isnt set everything fucking explodes :(
                $("#actual_theme").attr("href", "css/themes/" + response.theme + "/" + response.theme + ".css" + bbfv);
                $('#main_logo').attr('src', response.logo);
                console.log("betterteenchat ", ver, ": ", "sent http rq to set the theme to dark")
                    const newSrc = 'https://raw.githubusercontent.com/pog-bot-dot-lot-tot-got-rot-mot-pot-not/betterteenchat/refs/heads/main/logo4.png';
                    const logo = document.querySelector('#main_logo');
                    if (logo) {
                        logo.src = newSrc;
                        console.log("betterteenchat ", ver, ": ", "set new logo from src")
                        const data = {
                            newSrc: logo.src
                        };
                        console.log("betterteenchat ", ver, ": ", "loaded!!!!!!! :3c enjoy - elli")
                    }
            },
        });
    });
})();


// FEATURES!!
/*
- disables auto logout on inactivity
- removes the black background you get when opening profiles or getting warned
- makes dark theme default, makes top and bottom bars dark automatically, improving readability
- makes the logo white to contrast with the rest of the site
*/
