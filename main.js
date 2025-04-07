// ==UserScript==
// @name           tc better dark theme
// @version        the-one-and-only
// @description    penis
// @author         magmadiver
// @license        MIT
// @match          https://www.teen-chat.org/chat/
// ==/UserScript==

(function () {

    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    'use strict';

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
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            betterdark();
        });
    } else {
        betterdark();
    }



sleep(100).then(() => {
    var theme = "Dark";
        $.ajax({
            url: "system/action/action_profile.php",
            type: "post",
            cache: false,
            dataType: 'json',
            data: {
                set_user_theme: theme,
            },
            success: function (response) {
                const bbfv = "";
                $("#actual_theme").attr("href", "css/themes/" + response.theme + "/" + response.theme + ".css" + bbfv);  // kicking my feet and giggling i feel smart
                $('#main_logo').attr('src', response.logo);
            },
        });
 });
})();

