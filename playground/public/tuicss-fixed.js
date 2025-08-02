/**
 * Replacement for jQuery's $(document).ready() function.
 * This is handy in making sure stuff fires after the DOM is ready to be touched.
 * Stolen from:https://stackoverflow.com/a/53601942/344028
 *
 * @param fn Callback.
 */
function domReady(fn) {
    // If we're early to the party
    document.addEventListener('DOMContentLoaded', fn);

    // If late; I mean on time.
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        fn();
    }
}

/**
 * TuiTabs controller
 */
function tabsController() {
    // Get all the tab elements (typically li tags).
    const tabs = document.getElementsByClassName('tui-tab');

    if (!tabs.length) {
        // No tabs found, return early and save a couple CPU cycles.
        return;
    }

    for (const tab of tabs) {
        // Add click listeners to them.
        tab.addEventListener('click', function (e) {

            // Check if the clicked tab is disabled
            if(e.target.classList.contains("disabled")) {
                return;
            }

            // Remove the 'active' class from any and all tabs.
            for (const otherTab of tabs) {
                otherTab.classList.remove('active');
            }

            // Get the content element.
            const tabContents = document.getElementsByClassName('tui-tab-content');

            if (tabContents) {
                for (const tabContent of tabContents) {
                    // Hide all tab contents.
                    tabContent.style.display = 'none';
                }
            }

            // Get the id of the tab content we want to display.
            const contentId = e.target.getAttribute('data-tab-content');

            if (contentId) {
                // Get the content element.
                const content = document.getElementById(contentId);

                if (content) {
                    // Show this tab's content
                    content.style.display = 'block';
                }
            }

            // Make the clicked tab active.
            e.target.classList.add('active');
        });
    }

    // Initialize by clicking the first active tab or the first tab.
    const activeTab = document.querySelector('.tui-tab.active');
    if (activeTab) {
        activeTab.click();
    } else if (tabs[0]) {
        tabs[0].click();
    }
}

/**
 * Date/time field controller
 */
function datetimeController() {
    // Get date/time elements.
    const clocks = document.getElementsByClassName('tui-datetime');

    if (!clocks.length) {
        // No date time elements found, return early and save a couple CPU cycles.
        return;
    }

    // Kick off our clock interval stuff.
    datetimeInterval();

    // Synchronize time and set interval to control the clocks
    setTimeout(() => {
        setInterval(datetimeInterval, 1000);
    }, 1000 - new Date().getMilliseconds());

    function datetimeInterval() {
        for (const clock of clocks) {
            if (clock === null) {
                continue;
            }

            // Get the format we want to display in the element.
            let format = clock.getAttribute('data-format');
            
            // If no format is specified, use default
            if (!format) {
                format = 'h:m:s a';
            }

            // parse out the date and time into constants.
            const today     = new Date();
            const month     = (today.getMonth() + 1).toString().padStart(2, '0');
            const day       = today.getDate().toString().padStart(2, '0');
            const dayOfWeek = (today.getDay() + 1).toString().padStart(2, '0');
            const year      = today.getFullYear().toString();
            const hour      = today.getHours().toString().padStart(2, '0');
            // Fix the hour12 calculation
            const hour12    = ((parseInt(hour) + 11) % 12 + 1).toString().padStart(2, '0');
            const minute    = today.getMinutes().toString().padStart(2, '0');
            const second    = today.getSeconds().toString().padStart(2, '0');
            const ampm      = parseInt(hour) >= 12 ? 'PM' : 'AM';

            // Replace based on the format.
            format = format.replace('M', month);
            format = format.replace('d', day);
            format = format.replace('e', dayOfWeek);
            format = format.replace('y', year);
            format = format.replace('H', hour);
            format = format.replace('h', hour12);
            format = format.replace('m', minute);
            format = format.replace('s', second);
            format = format.replace('a', ampm);

            // Show it in the element.
            clock.innerHTML = format;
        }
    }
}

/**
 * Sidenav Controller
 * There should only side navigation element at the moment.
 */
function sidenavController() {
    const sidenavButton = document.querySelector('.tui-sidenav-button');

    if (!sidenavButton) {
        return;
    }

    sidenavButton.addEventListener('click', () => {
        const sidenav = document.querySelector('.tui-sidenav');

        if (!sidenav) {
            throw 'No sidenav element found.';
        }

        if (sidenav.classList.contains('active')) {
            sidenav.classList.remove('active');
        } else {
            sidenav.classList.add('active');
        }
    });
}

/**
 * Modal Controller
 */
function modalController() {
    const overlap = document.querySelector('.tui-overlap');

    if (!overlap) {
        // No overlap found, probably no modals on this page.
        return;
    }

    // Get modal buttons (open)
    const modalButtons = document.getElementsByClassName('tui-modal-button');

    for (const modalButton of modalButtons) {
        modalButton.addEventListener('click', (e) => {
            overlap.classList.add('active');

            const modalIdToOpen = e.target.getAttribute('data-modal');

            if (!modalIdToOpen) {
                throw 'Modal button data-modal attribute is empty or not set.';
            } else {
                const modal = document.getElementById(modalIdToOpen);

                if (!modal) {
                    throw 'No modal element with id of "' + modalIdToOpen + '" found.';
                }

                modal.classList.add('active');
            }
        });
    }

    // Get modal close buttons
    const modalCloseButtons = document.getElementsByClassName('tui-modal-close-button');

    if (modalButtons.length > 0 && !modalCloseButtons.length) {
        throw 'No modal close buttons found.';
    }

    for (const modalCloseButton of modalCloseButtons) {
        modalCloseButton.addEventListener('click', (e) => {
            overlap.classList.remove('active');

            const modalIdToClose = e.target.getAttribute('data-modal');

            if (!modalIdToClose) {
                throw 'Modal close button data-modal attribute is empty or not set.';
            } else {
                const modal = document.getElementById(modalIdToClose);

                if (!modal) {
                    throw 'No modal element with id of "' + modalIdToClose + '" found.';
                }

                modal.classList.remove('active');
            }
        });
    }

    // Close modal when clicking on overlap
    overlap.addEventListener('click', (e) => {
        if (e.target === overlap) {
            overlap.classList.remove('active');
            const activeModals = document.querySelectorAll('.tui-modal.active');
            for (const modal of activeModals) {
                modal.classList.remove('active');
            }
        }
    });
}

/**
 * Init: This is at the bottom to make sure it is fired correctly.
 */
domReady(function () {
    tabsController();
    datetimeController();
    sidenavController();
    modalController();
});