(() => {
  const sheet = (file) => `catalogue/IMG-20260808-${file}.jpg`;
  const groups = [
    {
      id: "hospital-beds-cots",
      eyebrow: "Ward & home care",
      title: "Hospital beds & cots",
      description: "Manual, electric, Fowler, commode and nursing-bed options for hospitals, nursing homes and home care setups.",
      items: [
        ["back-rest-cot", "WA0002", "Back rest cot", "Manual and wheeled variants", "Practical back-rest cot options with adjustable head support for wards, attendants and recovery rooms.", ["Back rest", "Ward care"]],
        ["three-function-electric-abs", "WA0004", "3-function electric cot", "ABS side rail series", "Motorised cot configuration with adjustable sections, protective ABS side rails and mobile castors.", ["Electric", "ABS rails"]],
        ["back-rest-imported-railings", "WA0005", "Back rest cot with railings", "KW 471 / KW 571", "Back-rest cot range with imported railings and wheeled options for safer patient movement.", ["Manual", "Wheeled"]],
        ["three-function-electric-436", "WA0009", "3-function electric cot", "KW 436", "Premium electric cot with motorised adjustment, collapsible side rails and castors for controlled movement.", ["Electric", "3 function"]],
        ["back-rest-boards-railings", "WA0011", "Back rest cot with boards", "KW 461 / KW 462", "Single-function back-rest cots with imported boards, railings and optional castors.", ["Boards", "Railings"]],
        ["commode-cot-wheels", "WA0012", "Commode cot with wheels", "KW 479 / KW 477", "Commode cot options with Fowler-style adjustment and castors for easier patient care.", ["Commode", "Wheeled"]],
        ["turning-electric-cot", "WA0014", "Electric cot with turning option", "Imported multi-function series", "Electric care-bed designs with back and leg adjustment, turning assistance and lockable castors.", ["Electric", "Turning"]],
        ["nursing-bed", "WA0017", "Electric nursing bed", "Fully tiltable with mattress", "Imported nursing bed with multiple adjustments, foldable rails and a comfort mattress for extended care.", ["Nursing", "Home care"]],
        ["three-function-manual-435", "WA0018", "3-function manual cot", "KW 435", "Manual three-function cot with head, foot and height adjustment, rails and castors.", ["Manual", "3 function"]],
        ["plain-attender-cot", "WA0019", "Plain & attender cot", "KW 437 / KW 417", "Straightforward plain cot and attendant cot options for everyday ward and bedside use.", ["Basic", "Attendant"]],
        ["commode-cot-series", "WA0007", "Commode cot series", "KW 579 / KW 577", "Manual commode and Fowler commode cots with side railings, castors and easy-care surfaces.", ["Commode", "Fowler"]],
        ["two-function-electric-cot", "WA0021", "2-function electric cot", "KW 470 / KW 470-1", "Two-function electric cot options, including an electric model with manual crank backup.", ["Electric", "Manual backup"]],
        ["five-function-electric-252", "WA0026", "5-function electric cot", "KW 252", "Fully motorised five-function cot with ABS side rails, castors and four-section adjustment.", ["Electric", "5 function"]],
        ["fowler-cot-472", "WA0027", "Fowler cot", "KW 472 / KW 572", "Manual Fowler cot models with adjustable back and foot sections, including a wheeled version.", ["Fowler", "Wheeled"]],
        ["five-function-manual-438", "WA0028", "5-function manual cot", "KW 438", "Five-function manual cot with head, foot, height and tilt adjustments for flexible ward care.", ["Manual", "5 function"]],
        ["five-function-electric-352", "WA0029", "5-function electric cot", "KW 352", "Motorised five-function electric cot with ABS side rails and four-section positioning.", ["Electric", "5 function"]],
        ["single-function-electric-469", "WA0031", "Single-function electric cot", "KW 469 / KW 469-1", "Imported single-function electric cot with a manual-operation option and mobile castors.", ["Electric", "Manual option"]],
        ["five-function-electric-premium", "WA0016", "5-function electric cot", "Electric cot series", "Motorised four-section bed with control panels, ABS side rails, CPR support and castors for flexible clinical care.", ["Electric", "CPR support"]],
        ["fowler-imported-railings", "WA0032", "Fowler cot with imported railings", "KW 473 / KW 573", "Two-function manual Fowler cots with imported railings and a wheeled version for transport.", ["Fowler", "Railings"]],
        ["fowler-abs-boards", "WA0033", "Fowler cot with ABS boards", "KW 474 / KW 475", "Premium two-function Fowler cots with detachable ABS head and foot boards, including castor options.", ["Fowler", "ABS boards"]],
        ["back-rest-cot-460", "WA0037", "Back rest cot", "KW 460 / KW 560", "Single-function manual and wheeled back-rest cot options with adjustable head support.", ["Back rest", "Wheeled"]]
      ]
    },
    {
      id: "hospital-furniture",
      eyebrow: "Clinic & hospital setup",
      title: "Hospital furniture",
      description: "Furniture and room essentials that make examination, infusion, bedside care and clinical spaces practical.",
      items: [
        ["rollaway-bed", "WA0001", "Rollaway bed", "ANRB001", "Portable foldable bed with mattress, designed for quick setup as an extra bed in hospitals or homes.", ["Portable", "Home care"]],
        ["screens-bedside-lockers", "WA0003", "Screens & bedside lockers", "KW 429 / KW 420 / KW 497", "Three-fold privacy screens and compact bedside storage units for wards and patient rooms.", ["Ward", "Storage"]],
        ["patient-doctor-chairs", "WA0022", "Patient, doctor chairs & stools", "KW 418 / KW 494 / KW 632", "Examination tables, mattresses, revolving stools and foot steps for clinics and consultation rooms.", ["Clinic", "Seating"]],
        ["infusion-attender-chairs", "WA0030", "Infusion & attendant chairs", "KW D40 / KW D41", "Comfortable infusion chair and attendant cot-cum-chair options for treatment rooms and bedside support.", ["Infusion", "Attendant"]],
        ["examination-labour-tables", "WA0035", "Examination & labour tables", "KW 493 / KW 522 / KW 544 / KW 595 / KW 575", "Examination couches, labour tables and U-cut examination tables for clinics and hospitals.", ["Examination", "Labour"]]
      ]
    },
    {
      id: "patient-transport",
      eyebrow: "Emergency & movement",
      title: "Patient transport & rescue",
      description: "Stretchers, evacuation chairs and transport trolleys for safe movement through hospitals, ambulances and stairways.",
      items: [
        ["transport-trolley-range", "WA0013", "Patient transport trolley range", "KW 440 / KW 442 / KW 518 / KW 596", "Transport trolleys and stretchers for ambulance, hi-low and sitting-position requirements.", ["Transport", "Stretcher"]],
        ["fowler-hydraulic-trolley", "WA0015", "Fowler hydraulic transport trolley", "KW 570", "Hydraulic ABS transport trolley with Fowler adjustment, safety rails, central brake and infusion support.", ["Hydraulic", "ABS"]],
        ["evacuation-chairs", "WA0024", "Evacuation chairs", "KW 557 / KW 559", "Manual and electric stair stretchers designed for patient transfer on stairs and flat surfaces.", ["Emergency", "Stair transfer"]],
        ["stretcher-trolley-series", "WA0034", "Stretcher trolley series", "KW 430 / KW 441 / KW 547", "Stainless-steel and mild-steel stretcher trolley options with side rail and cylinder provisions.", ["Stretcher", "SS & MS"]],
        ["patient-transfer-equipment", "WA0036", "Patient transfer equipment", "KW 327 / KW 427 / KW 443 / KW 446 / KW 447 / KW 448 / KW 512 / KW 538", "Patient shifters, scoop stretchers, spine boards, immobilizers and foldable stretchers for transfer support.", ["Transfer", "Rescue"]],
        ["hydraulic-abs-transport", "WA0038", "Hydraulic ABS transport trolley", "KW 569", "Hydraulic ABS transportation trolley with central brake, patient safety rails and adjustable back support.", ["Hydraulic", "Transport"]],
        ["abs-transfer-trolley", "WA0039", "ABS transport trolley with transfer board", "KW 568", "ABS transport trolley with transfer-board support, adjustable back and guardrails for safer patient movement.", ["ABS", "Transfer board"]]
      ]
    },
    {
      id: "trolleys-support",
      eyebrow: "Ward workflow",
      title: "Trolleys & support equipment",
      description: "Mobile support equipment for emergency response, medication rounds, instruments, IV therapy and bedside procedures.",
      items: [
        ["crash-carts", "WA0006", "Crash carts & emergency trolleys", "KW 539 / KW 439", "Mild-steel and stainless-steel crash cart configurations with drawers, shelves, bins and castors.", ["Emergency", "Crash cart"]],
        ["instrument-dressing-trolleys", "WA0008", "Instrument & dressing trolleys", "KW 419 / KW 496 / KW 495 / KW 433 / KW 529 / KW 528", "Instrument, three-shelf, dressing, Mayo and ECG trolley options for clinical workflow.", ["Instrument", "Mobile"]],
        ["drug-laproscopy-trolleys", "WA0010", "Drug & laparoscopy trolleys", "KW 537 / KW 536 / KW 515 / KW 7905 S", "Drug trolley, laparoscopic trolley, overbed ABS top and stainless-steel grab-bar support options.", ["Medication", "Procedure"]],
        ["iv-stands-support", "WA0023", "IV stands & support equipment", "KW 593 / KW 594 / KW 506 / KW 465 / KW 466 / KW 507 / KW 425 / KW 432", "Economy, stainless-steel and imported IV stands with cylinder trolley support for clinical rooms.", ["IV stand", "Cylinder"]],
        ["imported-crash-carts", "WA0025", "Imported crash carts", "KW 592 / KW 591 / KW 491 / KW 590", "Imported anaesthetic and crash cart trolley designs with drawers, shelves, bins and accessories.", ["Emergency", "Imported"]]
      ]
    },
    {
      id: "home-care-mattresses",
      eyebrow: "Comfort & recovery",
      title: "Home-care accessories",
      description: "Comfort-focused additions for home recovery, patient positioning and everyday bedside support.",
      items: [
        ["reclining-back-support", "WA0000", "Motorised reclining back support", "ANERB001", "Plug-and-play reclining back support with wired control, washable cover and removable side grills for home beds.", ["Recliner", "Home care"]],
        ["hospital-mattresses", "WA0020", "Hospital mattresses & pillows", "Back rest, Fowler and commode options", "Three- and four-inch mattress options for back-rest, Fowler and commode cots, plus pillows and plain-cot mattresses.", ["Mattress", "Comfort"]]
      ]
    }
  ];

  const phone = "919449136347";
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  const allItems = groups.flatMap((group) => group.items);
  const nav = document.getElementById("catalogue-nav");
  const content = document.getElementById("catalogue-groups");
  const count = document.getElementById("catalogue-count");
  if (!nav || !content) return;

  count.textContent = allItems.length;
  nav.innerHTML = groups.map((group) => `<a href="#${group.id}">${escapeHtml(group.title)} <span>${group.items.length}</span></a>`).join("");
  content.innerHTML = groups.map((group, groupIndex) => {
    const cards = group.items.map(([id, file, title, model, description, tags]) => {
      const image = sheet(file);
      const enquiry = `https://wa.me/${phone}?text=${encodeURIComponent(`Hello Rajesh Surgicals, I would like to enquire about ${title}. Please share availability, prices and options.`)}`;
      return `<article class="catalogue-card" id="${id}">
        <a class="catalogue-image-link" href="${image}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(title)} catalogue sheet">
          <img src="${image}" alt="${escapeHtml(title)} catalogue sheet" loading="lazy" />
          <span class="catalogue-zoom">View sheet ↗</span>
        </a>
        <div class="catalogue-card-body">
          <div class="catalogue-card-top"><span class="catalogue-model">${escapeHtml(model)}</span><span class="catalogue-index">${String(groupIndex + 1).padStart(2, "0")}</span></div>
          <h4>${escapeHtml(title)}</h4>
          <p>${escapeHtml(description)}</p>
          <div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
          <a class="catalogue-enquiry" href="${enquiry}" target="_blank" rel="noreferrer">Check availability ↗</a>
        </div>
      </article>`;
    }).join("");
    return `<section class="catalogue-group" id="${group.id}">
      <div class="catalogue-group-heading"><div><p class="eyebrow eyebrow-light">${escapeHtml(group.eyebrow)}</p><h3>${escapeHtml(group.title)}</h3></div><p>${escapeHtml(group.description)}</p></div>
      <div class="catalogue-grid">${cards}</div>
    </section>`;
  }).join("");
})();
