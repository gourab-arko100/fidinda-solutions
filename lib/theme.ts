/** Inline script (in <head>) that applies the saved/system theme before paint — avoids a flash. */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;if(d){e.classList.add('dark')}else{e.classList.remove('dark')}}catch(_){}})();`;
