// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: [ 'ar', 'kr'],

//     // Used when no locale matches
//     defaultLocale: 'ar'
// });

// export const config = {
//     // Match only internationalized pathnames
//     matcher: ['/', '/(ar|kr)/:path*']
// };

module.exports = {
    locales: ['ar', 'kr'], // Add your supported locales here
    defaultLocale: 'ar', // Set your default locale
  };