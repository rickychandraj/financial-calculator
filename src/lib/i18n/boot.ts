export const STORAGE_KEY = "mb-lang";
export const LANG_PENDING_ATTR = "data-lang-pending";

/**
 * Inline, pre-paint script: if the visitor previously chose a non-default language,
 * hide the page (see .home-page rule in globals.css) until LanguageProvider has rendered it.
 * Self-clears after 1.5s so the page can never stay hidden if JavaScript fails to load.
 */
export const LANG_BOOT_SCRIPT = `(function(){try{var l=localStorage.getItem("${STORAGE_KEY}");if(l==="en"){var d=document.documentElement;d.lang=l;d.setAttribute("${LANG_PENDING_ATTR}","");setTimeout(function(){d.removeAttribute("${LANG_PENDING_ATTR}")},1500)}}catch(e){}})();`;
