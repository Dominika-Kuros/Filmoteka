var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,a.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequired7c6=a);var n=a("fHyLY");n=a("fHyLY");var i=a("i1JLZ"),t=a("g1uI7");a("ibbFR");var l=a("40lI0");t=a("g1uI7");(async()=>{(0,n.showLoader)();const e=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=964358699754c21d74c014b561cf196c");return await e.json()})().then((e=>{const o=e.results;(0,i.displayMovies)(o),(0,t.createPagination)(e,"popular"),(0,l.removeModal)()})).catch((e=>console.error(e))).finally((()=>{(0,n.removeLoader)()}));
//# sourceMappingURL=index.adf2ec8b.js.map
