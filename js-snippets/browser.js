/**
 * Redirect Function
 * redirect user to a new page
 *
 * @param {String} url URL to send user to
 * @param {Boolean} asLink True: simulate click event; False: simulate HTTP Redirect
 */
const redirect = (url, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);
//redirect('https://google.com');

/**
 * HTTPS Redirect Function
 * If user isn't on HTTPS, redirect user to HTTPS
 */
const httpsRedirect = () => {
    if (location.protocol !== "https:")
        location.replace("https://" + location.href.split("//")[1]);
};
//httpsRedirect(); If you are on http://mydomain.com, you are redirected to https://mydomain.com

/**
 * Sticky Position
 * Fix Element to top of the page. For use when "sticky position" is unsupported
 * Add 'data-scroll' to any anchor element for scrolling effect
 *
 * @param {Object} e    The event object
 */
function sticky(e) {
    e.preventDefault();
    let windowSize = window.outerWidth,
        position =
            document.querySelector(this.getAttribute("href")).offsetTop - 50,
        buffer = document.querySelector(".navbar")
            ? document.querySelector(".navbar").offsetHeight
            : 50;

    windowSize < 768 ? false : (position -= buffer); // cancel on mobile
    window.scrollTo({
        top: position,
        behavior: "smooth",
    });
}
// Loop through all elements with 'data-scroll' apply click event
document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", sticky);
});

/**
 * One Week Date
 * Calculate time for one week from whenever "today" (Date.now()) is.
 * Great for caching/cookies to expire one week from the date set.
 */
const ONE_WEEK = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
