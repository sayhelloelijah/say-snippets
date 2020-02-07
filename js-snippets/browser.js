/**
 * Redirect Function
 * redirect user to a new page
 * 
 * @param {String} url URL to send user to
 * @param {Boolean} asLink True: simulate click event; False: simulate HTTP Redirect
 */
const redirect = (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);
redirect('https://google.com');

/**
 * HTTPS Redirect Function
 * If user isn't on HTTPS, redirect user to HTTPS
 */
const httpsRedirect = () => {if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1])}};
httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com