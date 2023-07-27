// --- NETFLIX ANIMATION --- //

/* --- N --- */
 
const n_tl = gsap.timeline();
 n_tl
   .to("#N1-shadow", {opacity: 0, duration: 0.5}, 0.3)
   .to("#N3-shadow", {opacity: 0, duration: 1.5}, 0.3)
   
 
 
/* --- E --- */

const e_ogShape = "M255.1 171.6V208.2L250.5 208.5L250 172L255.1 171.6Z";
const e_tl = gsap.timeline();
e_tl
  .from("#E1-base", {morphSVG:{shape: e_ogShape, type: "linear"}, opacity: 0, duration: 0.15}, 0)
  .from("#E2-base", {scaleY: 0, transformOrigin: "50% 100%", duration: 0.1}, 0.11)
  .from("#E3", {scaleX: 0, duration: 0.06}, 0.21)
  .from("#E4", {scaleX: 0, duration: 0.18}, 0.27)
  .to("#E1-shadow, #E2-shadow", {opacity: 0, duration: 0.8}, 0)


/* --- T --- */

const t_tl = gsap.timeline();
t_tl
  .from("#T1", {scaleX: 0, duration: 0.1}, 0)
  .from("#T2-base", {scaleY: 0, duration: 0.25}, 0.1)
  .to("#T2-shadow", {opacity: 0, duration: 0.82})


/* --- F --- */

const f_tl = gsap.timeline();
f_tl
  .from("#F1", {scaleX: 0, duration: 0.15}, 0)
  .from("#F2-base", {scaleY: 0, duration: 0.33}, 0.1)
  .from("#F3", {scaleX: 0, duration: 0.15}, 0.28)
  .to("#F2-shadow", {opacity: 0, duration: 0.86})


/* --- L --- */

const l_ogShape = "M540.5 167.5L546 167.781V204.371L540.5 204.1V167.5Z";
const l_tl = gsap.timeline();
l_tl
  .from("#L1-base", {scaleY: 0, duration: 0.22}, 0)
  .from("#L2", {morphSVG:{shape: l_ogShape, type: "linear"}, opacity: 0, duration: 0.1}, 0.2)
  .to("#L1-shadow", {opacity: 0, duration: 0.83})


/* --- I --- */

const i_tl = gsap.timeline();
i_tl
  .from("#I", {scaleY: 0, transformOrigin: "50% 100%", duration: 0.18}, 0)


/**/