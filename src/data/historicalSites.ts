import { HistoricalSite, Era } from '../types/history';

export const HISTORICAL_SITES: HistoricalSite[] = [
  {
    id: 'colosseum-rome',
    name: 'The Flavian Amphitheatre (Colosseum)',
    ancientName: 'Amphitheatrum Flavium',
    location: {
      city: 'Rome',
      country: 'Italy',
      region: 'Europe',
      coordinates: { lat: 41.8902, lng: 12.4922 }
    },
    eraCategory: 'Classical Antiquity (500 BCE - 500 CE)',
    timePeriod: '70 – 80 CE',
    civilization: 'Roman Empire',
    heritageStatus: 'UNESCO World Heritage (1980) · New 7 Wonders',
    heroImage: '/src/assets/images/hero_colosseum_ancient_splendour_1792381178811.jpg',
    tagline: 'The monumental stone stage where imperial spectacles and gladiator contests shaped Roman civic life.',
    summary: 'Commissioned by Emperor Vespasian and inaugurated by Titus with 100 days of games, the Colosseum could host over 50,000 spectators beneath a retractable canvas velarium.',
    reconstruction: {
      ancientTitle: 'Imperial Splendour (80 CE)',
      ancientDescription: 'Clad in glistening white Tivoli travertine, adorned with 160 gilded bronze statues framing each arcade, and shielded from the Mediterranean sun by a massive crimson velarium awning operated by imperial sailors.',
      modernTitle: 'Preserved Monumental Ruin',
      modernDescription: 'Centuries of medieval stone quarrying, earthquake damage, and lime burning stripped the exterior marble, exposing the hypogeum subterranean labyrinth of animal cages and staging elevators.',
      keyChanges: [
        'Travertine facade stripped during Renaissance construction of St. Peter’s and palazzo palaces',
        'Arena wooden floor collapsed, exposing the multi-level hypogeum tunnels beneath',
        'Colossal bronze statue of Nero (which gave the Colosseum its name) melted down in antiquity',
        'Consolidated with modern brick buttresses engineered by 19th-century papal architects'
      ]
    },
    deepHistory: {
      originNarrative: 'Constructed on the reclaimed marshland site of Emperor Nero’s extravagant Domus Aurea artificial lake, the Colosseum was an intentional political statement by the new Flavian dynasty to return public land to the citizens of Rome. Vespasian funded the colossal building using the plunder of the Jewish War and the sack of Jerusalem in 70 CE.',
      architecturalMarvel: 'Engineered with barrel and groin vaults cast in Roman pozzolanic concrete and faced with 100,000 cubic meters of travertine held together by 300 tons of iron clamps. Its eighty entrance arches (vomitoria) allowed the vast crowd to enter or evacuate in under ten minutes.',
      declineOrPreservation: 'Gladiatorial combats ceased in 435 CE, and animal hunts ended by 523 CE. Successive earthquakes in 847 and 1349 caused the south facade to collapse into a quarry for Rome’s medieval churches. In 1749, Pope Benedict XIV declared it a consecrated holy site commemorating early Christian martyrs, bringing systematic preservation.',
      culturalSignificance: 'The ultimate symbol of Roman urban architecture, civic engineering, and imperial patronage, influencing every sports stadium constructed in the modern era.'
    },
    keyEventsTimeline: [
      { year: '70–72 CE', title: 'Construction Begins', description: 'Emperor Vespasian initiates construction on the drained site of Nero’s private lake.', eraTag: 'Flavian Era' },
      { year: '80 CE', title: 'Grand Inauguration', description: 'Emperor Titus opens the arena with 100 days of games, including naval sea battles and mock hunts.', eraTag: 'Inaugural Games' },
      { year: '217 CE', title: 'The Great Fire', description: 'Lightning strikes destroy the wooden upper levels; extensive repairs ordered by Elagabalus and Alexander Severus.', eraTag: 'Restoration' },
      { year: '404 CE', title: 'Gladiator Contests Banned', description: 'Emperor Honorius officially abolishes gladiatorial combat following the martyrdom of Saint Telemachus.', eraTag: 'Late Antiquity' },
      { year: '1349 CE', title: 'Catastrophic Earthquake', description: 'Massive tremor collapses the entire outer southern wall, creating the iconic asymmetrical profile seen today.', eraTag: 'Middle Ages' },
      { year: '2021 CE', title: 'Hypogeum Public Access', description: 'Following a meticulous multi-year restoration, the subterranean hypogeum floor opens to public exploration.', eraTag: 'Modern Era' }
    ],
    excavatedArtifacts: [
      { name: 'Imperial Gladiator Helmet', estimatedDate: '1st Century CE', foundAt: 'Ludus Magnus Barracks', currentHome: 'National Roman Museum, Palazzo Massimo', significance: 'Elaborately embossed bronze parade helmet depicting scenes from the Trojan War.', material: 'Embossed Bronze' },
      { name: 'Flavian Inaugural Commemorative Sestertius', estimatedDate: '80 CE', foundAt: 'Forum Romanum deposits', currentHome: 'Capitoline Museums', significance: 'Coin depicting the three-tiered Colosseum arcade, spectators, and the adjacent Meta Sudans fountain.', material: 'Struck Bronze' },
      { name: 'Hypogeum Bone Dice & Game Markers', estimatedDate: '2nd–3rd Century CE', foundAt: 'Underground spectator drains', currentHome: 'Colosseum Antiquarium', significance: 'Personal gaming pieces used by Roman spectators waiting between arena events.', material: 'Carved Animal Bone' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Early morning (08:30) or late afternoon during golden hour; October to April offers cooler weather and fewer crowds.',
      openingHours: 'Daily 08:30 – 19:15 (Summer) / 08:30 – 16:30 (Winter). Closed Dec 25 and Jan 1.',
      admissionInsight: 'Combined ticket includes the Roman Forum and Palatine Hill. Timed entry slots must be reserved in advance.',
      dressCodeAndEtiquette: 'Comfortable walking shoes essential for uneven cobblestones and ancient stone stairs. Large backpacks and tripods prohibited.',
      mustSeeSightsOnSite: ['Subterranean Hypogeum elevator shafts', 'Tier 2 panoramic terrace overlooking Arch of Constantine', 'Exhibition gallery in outer ambulatory', 'Imperial entrance axis'],
      travelTip: 'Enter via the Stern Gate if you have a Hypogeum pass to bypass the main security lines.',
      conservationRule: 'Strictly prohibited to touch or remove ancient travertine fragments. Monitored under 24/7 heritage surveillance.',
      climateNote: 'Summer temperatures in the stone arena can exceed 38°C (100°F). Bring reusable water bottles for Rome’s historic nasoni fountains.'
    },
    audioTour: {
      title: 'Echoes of the Flavian Arena: From Imperial Splendour to Sacred Ruin',
      duration: '4 min 15 sec',
      transcript: 'You are standing inside the monumental heart of the Roman world. Imagine the roar of fifty thousand citizens seated along gleaming tiers of marble. Above you, crimson awnings billow in the Roman breeze, shaded by ropes manned by imperial sailors. Beneath the sand of the arena floor, a clockwork labyrinth of brass pulleys, trapdoors, and animal cages hummed with lethal choreography. Vespasian transformed a tyrant’s private lagoon into a civic colosseum, forever marrying Roman engineering to imperial spectacle.',
      soundscapeType: 'roman_colosseum'
    },
    architecturalThemes: ['monumental-stone', 'classical-antiquity', 'civic-spectacle', 'amphitheatre', 'roman-concrete', 'imperial-dynasty']
  },
  {
    id: 'petra-jordan',
    name: 'Al-Khazneh & The Rose City of Petra',
    ancientName: 'Raqmu',
    location: {
      city: 'Wadi Musa',
      country: 'Jordan',
      region: 'Middle East',
      coordinates: { lat: 30.3285, lng: 35.4444 }
    },
    eraCategory: 'Classical Antiquity (500 BCE - 500 CE)',
    timePeriod: '1st Century BCE – 1st Century CE',
    civilization: 'Nabataean Kingdom',
    heritageStatus: 'UNESCO World Heritage (1985) · New 7 Wonders',
    heroImage: '/src/assets/images/petra_treasury_rose_stone_1792381179584.jpg',
    tagline: 'The fabled desert metropolis carved directly into sheer crimson sandstone cliffs at the crossroads of ancient spice routes.',
    summary: 'Capital of the nomadic Nabataeans who mastered desert hydrology, Petra flourished as a cosmopolitan trading hub for frankincense, myrrh, silk, and spices between Arabia, Egypt, and Rome.',
    reconstruction: {
      ancientTitle: 'The Hellenistic Sandstone Facade',
      ancientDescription: 'The Treasury (Al-Khazneh) shone with painted polychromatic plaster, surrounded by lush terraced oasis gardens, public fountains flowing with fresh spring water piped through pressurized ceramic terracotta conduits, and vibrant market bazaars.',
      modernTitle: 'Weathered Rose Canyon Wonder',
      modernDescription: 'Centuries of flash floods, blowing desert sand, and seismic activity eroded the delicate floral carvings and stucco, leaving the raw mineral-banded red, amber, and purple sandstone exposed in the Siq canyon.',
      keyChanges: [
        'Elaborate terracotta aqueduct and cistern network largely buried under desert sediment',
        'Bullet indentations visible on the upper funerary urn from bedouin searches for legendary gold treasure',
        'Subterranean tomb chambers beneath the Treasury forecourt rediscovered only in 2003 excavations',
        'Surrounding residential quarters built of mudbrick have eroded, highlighting rock-hewn monuments'
      ]
    },
    deepHistory: {
      originNarrative: 'The Nabataeans, an Arab nomadic tribe, settled in the Shara Mountains around the 6th century BCE. By engineering ingenious dams, cisterns, and water conduits, they conquered the arid desert and levied trade taxes on caravans carrying aromatics from South Arabia to the Mediterranean ports.',
      architecturalMarvel: 'Unlike Greek or Roman temples constructed from quarried stone blocks, Petra’s monumental facades—including Al-Khazneh and Ad Deir (The Monastery)—were carved from the top down directly into living rock cliffs. Master masons used scaffolding and rock chisels to shape Hellenistic pediments, Corinthian capitals, and Amazonian bas-reliefs.',
      declineOrPreservation: 'Annexed into the Roman Empire by Emperor Trajan in 106 CE as Arabia Petraea. A catastrophic earthquake in 363 CE damaged water systems, and shifting maritime trade routes caused gradual abandonment. The Western world learned of Petra only in 1812 when Swiss explorer Johann Ludwig Burckhardt disguised himself as an Arab scholar.',
      culturalSignificance: 'A supreme testament to human adaptation, hydraulic engineering in hyper-arid terrain, and cultural synthesis between Hellenistic, Egyptian, and Mesopotamian artistic traditions.'
    },
    keyEventsTimeline: [
      { year: '312 BCE', title: 'Antigonid Invasions Repelled', description: 'Nabataeans successfully defend their mountain stronghold against Greek generals following Alexander the Great.', eraTag: 'Hellenistic Era' },
      { year: 'c. 9 BCE – 40 CE', title: 'Reign of King Aretas IV', description: 'Peak of Petra’s architectural golden age; Al-Khazneh is carved as a royal mausoleum and monument.', eraTag: 'Nabataean Zenith' },
      { year: '106 CE', title: 'Roman Annexation', description: 'Trajan incorporates Petra into the Roman province of Arabia; the colonnaded street is widened and rebuilt.', eraTag: 'Pax Romana' },
      { year: '363 CE', title: 'The Great Galilee Earthquake', description: 'Massive tremor destroys more than half of the city’s residential structures and breaks the vital aqueducts.', eraTag: 'Byzantine Era' },
      { year: '1812 CE', title: 'Burckhardt’s Rediscovery', description: 'Swiss orientalist Johann Ludwig Burckhardt penetrates the Siq disguised as Sheikh Ibrahim Ibn Abdallah.', eraTag: 'Modern Rediscovery' },
      { year: '2007 CE', title: 'New 7 Wonders Designation', description: 'Global polling names Petra among the New Seven Wonders of the World, establishing strict conservation protocols.', eraTag: 'Modern Conservation' }
    ],
    excavatedArtifacts: [
      { name: 'Nabataean Eggshell Painted Ceramic Bowl', estimatedDate: '1st Century CE', foundAt: 'Petra Residential Quarters', currentHome: 'Petra Museum, Wadi Musa', significance: 'Micro-thin terracotta painted with delicate palmettes and pomegranate vines, unique to Nabataean workshops.', material: 'Fine Wheel-Thrown Terracotta' },
      { name: 'Betyl Cult Stela of Dushara', estimatedDate: '1st Century BCE', foundAt: 'High Place of Sacrifice', currentHome: 'Jordan Archaeological Museum, Amman', significance: 'Aniconic sacred sandstone monolith representing the supreme Nabataean mountain deity.', material: 'Carved Rose Sandstone' },
      { name: 'Bronze Statuette of Aphrodite-Al-Uzza', estimatedDate: '1st Century CE', foundAt: 'Great Temple Complex', currentHome: 'Petra Museum', significance: 'Demonstrates syncretism between Greco-Roman goddess of love and the Arabian morning star deity.', material: 'Cast Bronze' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Spring (March to May) and Autumn (September to November) offer pleasant desert temperatures; enter at 06:00 sunrise.',
      openingHours: 'Visitor Centre opens daily 06:00 – 18:00 (Summer) / 06:00 – 16:00 (Winter). Petra by Night operates Mon/Wed/Thu.',
      admissionInsight: 'A Jordan Pass includes entry. Multi-day passes (2 or 3 days) are highly recommended due to the vast 264 sq km site.',
      dressCodeAndEtiquette: 'Sturdy hiking boots, wide-brim hat, modest lightweight clothing covering shoulders and knees out of respect for local communities.',
      mustSeeSightsOnSite: ['The winding 1.2 km Bab as-Siq gorge', 'Al-Khazneh (Treasury)', 'The 850-step climb to Ad Deir (Monastery)', 'The Royal Tombs and High Place of Sacrifice'],
      travelTip: 'Walk the full Siq quietly at 06:30 before tour groups arrive to hear the morning desert echoes through the canyon fissures.',
      conservationRule: 'Do not climb rock carvings or purchase antique coins from unauthorized vendors inside the park.',
      climateNote: 'Desert evenings can become brisk rapidly after sunset. Carry warm layers and at least 2 liters of water per person.'
    },
    audioTour: {
      title: 'Through the Rose Fissure: The Hydrology and Secrets of Petra',
      duration: '4 min 45 sec',
      transcript: 'You are emerging from the shaded depths of the Siq, where soaring canyon walls 80 meters high suddenly part to reveal the glowing rose-amber columns of the Treasury. Two thousand years ago, this canyon echoed with the clatter of spice-laden camel trains, trickling aqueducts lined with waterproof cement, and songs in Aramaic and Greek. The Nabataeans pulled water from stone and carved an empire into bedrock, hiding their grandest sanctuary behind the world’s most dramatic natural gate.',
      soundscapeType: 'desert_canyon'
    },
    architecturalThemes: ['rock-cut-facade', 'desert-hydrology', 'classical-antiquity', 'trade-caravans', 'hellenistic-syncretism', 'sacred-tombs']
  },
  {
    id: 'machu-picchu-peru',
    name: 'Machu Picchu Sacred Citadel',
    ancientName: 'Pikchu / Llaqtapata',
    location: {
      city: 'Urubamba Valley',
      country: 'Peru',
      region: 'Americas',
      coordinates: { lat: -13.1631, lng: -72.5450 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: 'c. 1450 – 1572 CE',
    civilization: 'Inca Empire (Tawantinsuyu)',
    heritageStatus: 'UNESCO World Heritage (1983) · New 7 Wonders',
    heroImage: '/src/assets/images/machu_picchu_cloud_forest_1792381179825.jpg',
    tagline: 'The royal estate and cosmic observatory of Inca Emperor Pachacuti, suspended between the Andes and the Amazon cloud forest.',
    summary: 'Perched 2,430 meters above sea level on an emerald ridge between Huayna Picchu and Machu Picchu mountains, this masterpiece of dry-stone ashlar masonry integrated architecture with celestial astronomy.',
    reconstruction: {
      ancientTitle: 'The Imperial Royal Estate (c. 1480 CE)',
      ancientDescription: 'Steep pitched roofs of golden Peruvian ichu thatch crowned the stone palaces. Intricately carved granite fountains flowed continuously from mountain springs, while hundreds of agricultural terraces grew maize, coca, and medicinal tubers.',
      modernTitle: 'Mist-Shrouded Granite Citadel',
      modernDescription: 'The perishable thatched roofs vanished over centuries of tropical rains, but the seismic-resistant mortarless ashlar granite walls stand intact, nestled in lush cloud forest flora and orchids.',
      keyChanges: [
        'Ichu grass thatched roofs decayed after the citadel was abandoned during the Spanish conquest',
        'Terraces cleared of dense cloud forest jungle vegetation during Hiram Bingham’s 1911–1912 expeditions',
        'Intihuatana sundial stone slightly damaged in 2000 during a commercial filming accident, now closely cordoned',
        'Strict visitor circuits and wooden boardwalk paths installed to prevent soil erosion'
      ]
    },
    deepHistory: {
      originNarrative: 'Constructed around 1450 CE under the reign of Pachacuti Inca Yupanqui, the transformative ruler who forged the Inca Empire. Machu Picchu served as an imperial royal estate, ceremonial sanctuary, and astronomical observatory honoring Inti (the Sun God) and Pachamama (Mother Earth).',
      architecturalMarvel: 'Built without the wheel, iron tools, or mortar, the Inca used bronze chisels, hematite hammers, and wet sand polishing to shape massive granite blocks that fit together so snugly that a knife blade cannot slip between them. The trapezoidal doors, tilted inward walls, and L-shaped corner stones absorb severe seismic shocks.',
      declineOrPreservation: 'Abandoned approximately 100 years after construction during the Spanish Conquest of Peru, likely due to smallpox epidemics that decimated the population before conquistadors ever reached the ridge. Because the Spanish never found Machu Picchu, it was spared the systematic destruction suffered by Cusco.',
      culturalSignificance: 'A sublime harmony between human monumental architecture and wild natural topography, reflecting the Andean worldview where mountains (Apus) are living spiritual protectors.'
    },
    keyEventsTimeline: [
      { year: 'c. 1450 CE', title: 'Construction by Pachacuti', description: 'Emperor Pachacuti commissions the royal estate following military conquests in the Vilcabamba valley.', eraTag: 'Imperial Incan Zenith' },
      { year: '1532 CE', title: 'Arrival of Pizarro', description: 'Spanish conquistadors capture Emperor Atahualpa at Cajamarca; civil unrest begins across Tawantinsuyu.', eraTag: 'Spanish Incursion' },
      { year: 'c. 1572 CE', title: 'Abandonment & Concealment', description: 'With the fall of the neo-Inca state at Vilcabamba, inhabitants depart; the jungle envelops the citadel.', eraTag: 'Lost to the Jungle' },
      { year: '1911 CE', title: 'Hiram Bingham Expedition', description: 'Yale historian Hiram Bingham is guided to the ruins by local Quechua farmer Melchor Arteaga.', eraTag: 'Global Scientific Rediscovery' },
      { year: '1983 CE', title: 'UNESCO Sanctuary Designation', description: 'Inscribed as a mixed cultural and natural UNESCO World Heritage Sanctuary.', eraTag: 'Heritage Protection' },
      { year: '2012 CE', title: 'Repatriation of Artifacts', description: 'Yale University returns thousands of excavated ceramic and skeletal artifacts to UNSAAC University in Cusco.', eraTag: 'Cultural Justice' }
    ],
    excavatedArtifacts: [
      { name: 'Ceramic Aryballos (Urpu) Storage Vessel', estimatedDate: 'c. 1480 CE', foundAt: 'Temple of the Three Windows', currentHome: 'Museo Machu Picchu Casa Concha, Cusco', significance: 'Pointed-base amphora decorated with geometric fern patterns used for brewing and serving sacred maize chicha.', material: 'Polychrome Glazed Terracotta' },
      { name: 'Inca Bronze Tumi Ceremonial Knife', estimatedDate: '15th Century CE', foundAt: 'Royal Enclosure', currentHome: 'Larco Museum, Lima', significance: 'Half-moon surgical and ritual bronze blade with an alpaca totem finial.', material: 'Arsenical Bronze' },
      { name: 'Polished Granite Astronomical Mirror Water Bowl', estimatedDate: 'c. 1470 CE', foundAt: 'Mortar Room (Hall of the Mirrors)', currentHome: 'On-site in Sacred Quarter', significance: 'Two shallow granite basins filled with water to reflect night constellations like the Southern Cross.', material: 'Carved Granite Bedrock' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Dry season between May and September; clear skies with iconic mountain backdrops. Dawn (Circuit 1 & 2) offers morning sun rays.',
      openingHours: 'Daily 06:00 – 17:30. Entry is strictly governed by pre-booked 60-minute time slots and 4 specific circuits.',
      admissionInsight: 'Book official tickets at least 2 to 3 months in advance. Circuit 2 is the most comprehensive classic route.',
      dressCodeAndEtiquette: 'Layered clothing (cool mornings, hot afternoons), insect repellent, rain poncho, walking poles must have rubber tips.',
      mustSeeSightsOnSite: ['The Intihuatana Hitching Post of the Sun', 'The Temple of the Sun (Torreón)', 'The Sacred Rock resembling Yanantin peak', 'The Royal Tomb and Princess Palace'],
      travelTip: 'Acclimatize in Cusco (3,400m) or the Sacred Valley (2,870m) for at least 48 hours before hiking or visiting.',
      conservationRule: 'Strictly prohibited to touch the sacred granite masonry, lean on walls, or carry food into the citadel.',
      climateNote: 'Cloud forest micro-climate brings sudden shifts between misty cloud envelopes and intense high-altitude UV radiation.'
    },
    audioTour: {
      title: 'Above the Clouds: Pachacuti’s Cosmic Sanctuary and Granite Symphony',
      duration: '4 min 30 sec',
      transcript: 'You are standing upon the upper agricultural terraces of Machu Picchu. Below you, the sacred Urubamba River carves an emerald horseshoe around granite cliffs wrapped in orchids and bamboo. Notice how the stone walls do not oppose the mountains; they mirror the slopes of Huayna Picchu and Yanantin. On the morning of the winter solstice, the rising sun shoots through the window of the Torreón temple, landing directly upon a carved bedrock altar. Here, stone, mountain, and cosmos were woven into a single living tapestry.',
      soundscapeType: 'cloud_forest'
    },
    architecturalThemes: ['ashlar-granite', 'high-altitude-terrace', 'sacred-astronomy', 'seismic-engineering', 'mountain-sanctuary', 'sacred-waterways']
  },
  {
    id: 'taj-mahal-india',
    name: 'The Taj Mahal of Agra',
    ancientName: 'Rauza-i-Munawwara (The Illumined Tomb)',
    location: {
      city: 'Agra',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 27.1751, lng: 78.0421 }
    },
    eraCategory: 'Early Modern & Renaissance (1500 - 1850 CE)',
    timePeriod: '1632 – 1653 CE',
    civilization: 'Mughal Empire',
    heritageStatus: 'UNESCO World Heritage (1983) · New 7 Wonders',
    heroImage: '/src/assets/images/taj_mahal_reflecting_pool_1792381180267.jpg',
    tagline: 'The supreme jewel of Indo-Islamic architecture, built as an immortal monument to eternal love and celestial paradise.',
    summary: 'Commissioned by Mughal Emperor Shah Jahan for his beloved empress Mumtaz Mahal, the monument required 20,000 artisans and master stone cutters using translucent Makrana white marble inlaid with 28 varieties of precious gemstones.',
    reconstruction: {
      ancientTitle: 'The Imperial Paradise Garden (1650 CE)',
      ancientDescription: 'The four-part Charbagh gardens overflowed with fragrant fruit trees, date palms, climbing jasmine, and roses, fed by the Yamuna River via Persian waterwheels, while silver doors led into the incense-perfumed cenotaph chamber.',
      modernTitle: 'The Pristine White Marble Mausoleum',
      modernDescription: 'The Victorian formal lawns introduced during Lord Curzon’s 1900 British restoration replaced the lush Mughal orchard, leaving the pristine marble dome and reflecting water pool unobstructed.',
      keyChanges: [
        'Densely planted Persian fruit orchard replaced with open manicured English-style lawns in 1900',
        'Pure silver entry doors and gold finial (originally on the central dome) replaced with brass replicas',
        'Strict environmental zone (Taj Trapezium) established to protect the Makrana marble from industrial discoloration',
        'Wooden foundation wells periodically monitored to maintain subterranean moisture from the Yamuna River'
      ]
    },
    deepHistory: {
      originNarrative: 'When Mumtaz Mahal died in 1631 during the birth of her fourteenth child in Burhanpur, Emperor Shah Jahan was grief-stricken. He vowed to erect a mausoleum without parallel anywhere on earth. Chief architect Ustad Ahmad Lahori led a guild of Persian, Ottoman, and Indian master builders to realize the vision of the Rauza-i-Munawwara.',
      architecturalMarvel: 'The entire complex embodies rigorous bilateral symmetry along a central axis, with the sole exception of Shah Jahan’s off-center tomb placed beside Mumtaz Mahal after his death. The four 40-meter minarets tilt slightly outward (by two degrees) so that in an earthquake, they would fall away from the central dome.',
      declineOrPreservation: 'After Shah Jahan was deposed and imprisoned in the Agra Fort by his son Aurangzeb, the complex fell into neglect. During the 1857 rebellion, British troops chiseled precious stones from its walls. In 1899, Viceroy Lord Curzon launched a comprehensive restoration program that restored the gardens and marble lattice jali screens.',
      culturalSignificance: 'Regarded globally as the pinnacle of Mughal architectural achievement, combining Persian balance, Hindu floral ornamentation, and Islamic calligraphy in flawless harmonious union.'
    },
    keyEventsTimeline: [
      { year: '1631 CE', title: 'Passing of Mumtaz Mahal', description: 'Empress Mumtaz Mahal dies; Shah Jahan commissions the mausoleum on the banks of the Yamuna.', eraTag: 'Mughal Golden Age' },
      { year: '1632 CE', title: 'Foundation Wells Begun', description: 'Engineers sink deep masonry wells reinforced with ebony timber along the riverbank to support the marble plinth.', eraTag: 'Engineering Phase' },
      { year: '1648 CE', title: 'Main Mausoleum Completed', description: 'The central domed tomb chamber and intricate marble jali screens are formally consecrated.', eraTag: 'Dedication' },
      { year: '1653 CE', title: 'Full Complex Finished', description: 'The mosque, jawab (guest house), main gateway (Darwaza-i-Rauza), and gardens are completed after 22 years.', eraTag: 'Complex Completion' },
      { year: '1666 CE', title: 'Burial of Shah Jahan', description: 'Following his death under house arrest at Agra Fort, Shah Jahan is laid to rest beside Mumtaz Mahal.', eraTag: 'Imperial Burial' },
      { year: '1983 CE', title: 'Inscribed on World Heritage List', description: 'UNESCO designates the Taj Mahal as "the jewel of Muslim art in India and one of the universally admired masterpieces".', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Pietra Dura (Parchin Kari) Inlaid Floral Panel', estimatedDate: 'c. 1640 CE', foundAt: 'Main Gateway Workshop', currentHome: 'Taj Museum, Western Gate', significance: 'Delicate marble panel inlaid with lapis lazuli, carnelian, jade, and malachite creating botanical blooms.', material: 'Makrana Marble & Semi-Precious Gems' },
      { name: 'Imperial Farman Architectural Decree', estimatedDate: '1632 CE', foundAt: 'Royal Mughal Archives', currentHome: 'National Museum, New Delhi', significance: 'Royal decree bearing Shah Jahan’s seal purchasing the prime riverfront land from Raja Jai Singh of Amber.', material: 'Gold-Illuminated Parchment' },
      { name: '17th-Century Brass Celestial Astrolabe', estimatedDate: '1645 CE', foundAt: 'Court Architect’s Quarter', currentHome: 'Taj Museum, Agra', significance: 'Precision astronomical instrument used by royal stargazers to calculate celestial alignments and prayer directions.', material: 'Engraved Brass' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Sunrise offers mystical soft pink light and lower temperatures; November to February is the most pleasant season.',
      openingHours: 'Open 30 minutes before sunrise until 30 minutes after sunset. Closed every Friday for prayer.',
      admissionInsight: 'Foreign tourist tickets include high-priority entry, shoe covers, and a water bottle. Night viewing is allowed on full moon nights.',
      dressCodeAndEtiquette: 'Modest attire covering shoulders and knees. Shoe covers must be worn on the elevated marble plinth (provided with ticket).',
      mustSeeSightsOnSite: ['The Great Gate (Darwaza-i-Rauza) framing the initial view', 'The pristine symmetry of the marble plinth', 'The delicate perforated marble jali screens around the cenotaphs', 'The red sandstone mosque and guest house'],
      travelTip: 'Visit Mehtab Bagh (Moonlight Garden) across the Yamuna River at sunset for an unforgettable silhouette reflection.',
      conservationRule: 'Drones, smoking, tripods, and external food are prohibited. Pollution-free electric battery vehicles ferry visitors from outer parking.',
      climateNote: 'Morning fog can occur in December and January; afternoon visits during winter ensure clear photography.'
    },
    audioTour: {
      title: 'Symphony in White Marble: The Pietra Dura and Paradise of Shah Jahan',
      duration: '4 min 20 sec',
      transcript: 'Step through the great arched portal, and allow your gaze to rest on the radiant white dome reflected in the long lotus pool. What appears as pristine white stone is actually alive with light: at dawn it blushes with soft gold; at midday it gleams a brilliant white; under a full moon it shimmers like pale pearl. Run your eyes along the calligraphy inscribed in black jasper; as the verses ascend forty meters into the sky, the letters are subtly enlarged by optical design so they appear equal in size from the ground below. This is not merely architecture; it is poetry sculpted in stone.',
      soundscapeType: 'palace_fountains'
    },
    architecturalThemes: ['marble-inlay', 'pietra-dura', 'islamic-geometry', 'reflecting-pools', 'paradise-gardens', 'bilateral-symmetry']
  },
  {
    id: 'angkor-wat-cambodia',
    name: 'Angkor Wat Sacred Temple City',
    ancientName: 'Vrah Vishnuloka',
    location: {
      city: 'Siem Reap',
      country: 'Cambodia',
      region: 'Asia',
      coordinates: { lat: 13.4125, lng: 103.8670 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: 'Early 12th Century CE (c. 1113 – 1150 CE)',
    civilization: 'Khmer Empire',
    heritageStatus: 'UNESCO World Heritage (1992)',
    heroImage: '/src/assets/images/angkor_wat_lotus_towers_1792381180300.jpg',
    tagline: 'The largest religious monument on Earth, designed as a stone microcosm of Mount Meru, the cosmic abode of Hindu and Buddhist deities.',
    summary: 'Built by King Suryavarman II over 30 years, Angkor Wat spans 162 hectares encircled by a 190-meter wide moat. Its gallery walls hold over 1,200 square meters of stone bas-reliefs depicting epic churnings of the ocean of milk and royal armies.',
    reconstruction: {
      ancientTitle: 'The Gilded Capital of Suryavarman II (1150 CE)',
      ancientDescription: 'The five central lotus towers were crowned with shimmering gold leaf, and the surrounding stone galleries were painted in vivid vermilion, gold, and indigo pigments, filled with chanting priests and court dancers.',
      modernTitle: 'Aged Sandstone Sanctuary',
      modernDescription: 'The gold leaf and organic pigments washed away over centuries of tropical monsoon rains, revealing warm moss-tinted sandstone embraced by towering silk-cotton and strangler fig trees.',
      keyChanges: [
        'Gold plating on the central quincunx towers stripped following Cham invasions in 1177 CE',
        'Transitioned smoothly from a Hindu Vaishnavite sanctuary to an active Theravada Buddhist monastery by the 14th century',
        'Wooden royal palaces inside the stone outer enclosure have decomposed, leaving the stone temples',
        'Extensive international hydraulic restoration stabilized the temple plinths against subterranean water-table shifts'
      ]
    },
    deepHistory: {
      originNarrative: 'Unlike most Khmer temples facing east toward the rising sun, Angkor Wat uniquely faces west. Scholars believe Suryavarman II oriented the temple toward Vishnu’s cardinal direction and designed it as his personal funerary temple (Vrah Vishnuloka), so his spirit could ascend to the heavens with the setting sun.',
      architecturalMarvel: 'The temple comprises three concentric rectangular galleries rising to a central quincunx of five lotus-bud towers that replicate Mount Meru’s five sacred peaks. Over 5 million tons of sandstone were quarried from Mount Kulen 40 km away and floated on bamboo rafts along canals.',
      declineOrPreservation: 'When King Jayavarman VII moved the administrative center to Angkor Thom, Angkor Wat remained revered. Unlike other Angkor ruins consumed entirely by jungle roots, Angkor Wat was continuously maintained by Buddhist monks, preserving its bas-reliefs through the centuries.',
      culturalSignificance: 'The soul and national emblem of Cambodia, proudly depicted on the national flag and serving as the pinnacle of classical Khmer architecture.'
    },
    keyEventsTimeline: [
      { year: '1113 CE', title: 'Ascension of Suryavarman II', description: 'Suryavarman II unifies the Khmer kingdom and initiates construction of the monumental sanctuary.', eraTag: 'Angkorian Zenith' },
      { year: 'c. 1150 CE', title: 'Sanctuary Consecrated', description: 'The central shrine to Vishnu is consecrated shortly before the king’s death.', eraTag: 'Temple Completion' },
      { year: '1177 CE', title: 'Cham Invasion', description: 'The Cham fleet sails up the Mekong and Tonlé Sap to sack Angkor, leading to subsequent fortification.', eraTag: 'Conflict' },
      { year: 'Late 13th C.', title: 'Buddhist Transition', description: 'Under King Srindravarman, Angkor Wat transitions gradually to a Theravada Buddhist pilgrimage temple.', eraTag: 'Religious Transition' },
      { year: '1860 CE', title: 'Henri Mouhot’s Memoirs', description: 'French naturalist Henri Mouhot publishes detailed accounts and drawings that introduce Angkor to the world.', eraTag: 'Western Exploration' },
      { year: '1992 CE', title: 'Emergency UNESCO Listing', description: 'Inscribed simultaneously on the World Heritage List and World Heritage in Danger to protect against looting.', eraTag: 'International Rescue' }
    ],
    excavatedArtifacts: [
      { name: 'Khmer Bronze Visnu Anantasayin', estimatedDate: '12th Century CE', foundAt: 'Western Mebon Reservoir nearby', currentHome: 'National Museum of Cambodia, Phnom Penh', significance: 'Monumental bronze sculpture depicting Vishnu reclining on the serpent of eternity amidst the primordial cosmic ocean.', material: 'Cast Bronze with Gold Leaf Traces' },
      { name: 'Devata Apsara Relief Fragment', estimatedDate: 'c. 1130 CE', foundAt: 'Angkor Wat Inner Gallery', currentHome: 'Guimet Museum, Paris', significance: 'Intricate sandstone relief carving depicting celestial apsara dancers with ornate hair ornaments and traditional sampot robes.', material: 'Grey Sandstone' },
      { name: 'Stele of Suryavarman II Inscription', estimatedDate: '1120 CE', foundAt: 'Royal Causeway Pillar', currentHome: 'Angkor Conservation Centre, Siem Reap', significance: 'Sanskrit and Old Khmer inscriptions detailing royal lineages, temple rituals, and hydraulic donations.', material: 'Carved Basalt Stele' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Cool dry season from November to February. Sunrise at the northern reflection pond (05:15 AM) is world-famous.',
      openingHours: 'Angkor Wat opens 05:00 – 17:30 daily. The upper Bakan tower opens at 06:30.',
      admissionInsight: 'Angkor Pass required (1-day, 3-day, or 7-day). Purchase at the official Angkor Enterprise ticket center or online.',
      dressCodeAndEtiquette: 'Strict dress code: Shoulders and knees MUST be covered (scarves not accepted for the Bakan tower). Remove hats inside shrines.',
      mustSeeSightsOnSite: ['The 800m continuous bas-relief galleries (Battle of Kurukshetra & Churning of the Ocean of Milk)', 'The central Bakan sanctuary climb', 'The morning reflection pond lotus flowers', 'The 2,000 individually unique carved Apsara dancers'],
      travelTip: 'Visit the bas-relief galleries in counterclockwise order (prasavya) as intended by the ancient Khmer architects.',
      conservationRule: 'Never touch the delicate sandstone apsara carvings; skin oils cause irreparable stone degradation.',
      climateNote: 'High humidity year-round. Carry electrolyte water and lightweight cotton clothing.'
    },
    audioTour: {
      title: 'Cosmic Axis of the Khmers: Churning the Primordial Ocean of Milk',
      duration: '4 min 10 sec',
      transcript: 'You are standing on the stone causeway crossing the monumental moat of Angkor Wat. This water is not merely defensive; it represents the cosmic ocean that separates humanity from the celestial realms. Look toward the five lotus towers on the horizon. In Khmer cosmology, they are the five peaks of Mount Meru. As you walk through the long gallery of bas-reliefs, observe eighty-eight gods and ninety-two demons locked in an eternal tug-of-war, churning the ocean with the serpent Vasuki to release the elixir of immortality. Here, stone becomes myth made solid.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['quincunx-towers', 'monsoon-hydrology', 'hindu-buddhist-syncretism', 'cosmic-axis', 'bas-reliefs', 'mountain-sanctuary']
  },
  {
    id: 'pyramids-giza-egypt',
    name: 'The Great Pyramids & Sphinx of Giza',
    ancientName: 'Akhet Khufu (Khufu’s Horizon)',
    location: {
      city: 'Giza, Cairo',
      country: 'Egypt',
      region: 'Africa',
      coordinates: { lat: 29.9792, lng: 31.1342 }
    },
    eraCategory: 'Bronze & Ancient (Pre-500 BCE)',
    timePeriod: 'c. 2580 – 2510 BCE',
    civilization: 'Ancient Egypt (Old Kingdom)',
    heritageStatus: 'UNESCO World Heritage (1979) · Ancient 7 Wonders (Sole Surviving)',
    heroImage: '/src/assets/images/hero_colosseum_ancient_splendour_1792381178811.jpg',
    tagline: 'The sole surviving wonder of the ancient world, engineered 4,500 years ago as a staircase to the imperishable stars.',
    summary: 'The Great Pyramid of Khufu originally stood 146.6 meters tall and was the tallest man-made structure on Earth for over 3,800 years, constructed from 2.3 million megalithic limestone blocks aligned precisely to true north.',
    reconstruction: {
      ancientTitle: 'The Gleaming White Horizon (c. 2560 BCE)',
      ancientDescription: 'The entire pyramid was encased in polished fine Tura white limestone that reflected the desert sun like a blinding mirror, topped by a shining electrum-coated gold-silver capstone (pyramidion).',
      modernTitle: 'The Enduring Stepped Colossus',
      modernDescription: 'A massive earthquake in 1303 CE loosened the outer casing stones, which were subsequently harvested by Bahri Mamluk sultans to construct mosques and palaces in Cairo, revealing the stepped core blocks.',
      keyChanges: [
        'Polished Tura limestone casing stripped for medieval Cairo construction (only a small cap remains atop Khafre’s pyramid)',
        'Golden pyramidion capstone missing from the apex since antiquity',
        'The Great Sphinx lost its ceremonial braided beard and nose over millennia of desert sand burial and weathering',
        'Discovery of the Khufu Solar Boat in a sealed pit beside the pyramid in 1954'
      ]
    },
    deepHistory: {
      originNarrative: 'Built during the 4th Dynasty of Egypt’s Old Kingdom, the Giza necropolis served as the resurrection complexes for Pharaohs Khufu, Khafre, and Menkaure. The pyramids were not built by slaves, as ancient Greek historian Herodotus claimed, but by tens of thousands of skilled Egyptian conscripts and artisans housed in nearby worker villages with medical care and high-protein rations.',
      architecturalMarvel: 'The Great Pyramid aligns with cardinal true north with an accuracy of one-tenth of a degree. Inside, the Grand Gallery ascends 47 meters with a corbelled ceiling of seven overlapping limestone layers, leading to the King’s Chamber roofed with nine monolithic granite beams weighing up to 50 tons each.',
      declineOrPreservation: 'Robbed of grave goods during political instability in the First Intermediate Period. In 820 CE, Abbasid Caliph Al-Ma’mun chiseled a tunneling breach into the north face, now used as the main tourist entrance. Today, the plateau is protected with state-of-the-art radar monitoring and the newly opened Grand Egyptian Museum nearby.',
      culturalSignificance: 'The ultimate symbol of ancient civilization’s mathematical prowess, astronomical precision, and enduring architectural ambition.'
    },
    keyEventsTimeline: [
      { year: 'c. 2580 BCE', title: 'Quarrying Begins', description: 'Pharaoh Khufu ascends the throne and master architect Hemiunu plans the Great Pyramid.', eraTag: 'Old Kingdom' },
      { year: 'c. 2560 BCE', title: 'Khufu’s Pyramid Completed', description: 'The 2.3-million block monument is capped with the shining electrum pyramidion.', eraTag: 'Dedication' },
      { year: 'c. 2530 BCE', title: 'Carving of the Great Sphinx', description: 'Pharaoh Khafre orders the Great Sphinx carved from a single limestone outcrop in the quarry.', eraTag: 'Sphinx Creation' },
      { year: '1303 CE', title: 'Great Cairo Earthquake', description: 'Earthquake shakes loose thousands of Tura casing stones, harvested by Sultan An-Nasir Hasan.', eraTag: 'Mamluk Era' },
      { year: '1954 CE', title: 'Khufu Solar Boat Discovered', description: 'Archaeologist Kamal el-Mallakh unearths a disassembled 43-meter cedar solar barque in a sealed rock trench.', eraTag: 'Archaeological Discovery' },
      { year: '2023 CE', title: 'ScanPyramids Void Discovery', description: 'Cosmic-ray muon radiography confirms a 9-meter long hidden corridor above the main entrance.', eraTag: 'Muon Tomography' }
    ],
    excavatedArtifacts: [
      { name: 'Khufu Royal Solar Barque', estimatedDate: 'c. 2566 BCE', foundAt: 'Sealed Pit South of Great Pyramid', currentHome: 'Grand Egyptian Museum, Giza', significance: 'A 43.6-meter intact royal cedar ship designed to carry the pharaoh’s soul across the celestial sky with the sun god Ra.', material: 'Lebanese Cedar Wood' },
      { name: 'Diorite Statuette of King Khafre', estimatedDate: 'c. 2520 BCE', foundAt: 'Giza Valley Temple', currentHome: 'Egyptian Museum, Tahrir Square', significance: 'Flawlessly carved hard diorite statue showing the falcon god Horus wrapping protective wings around Khafre’s head.', material: 'Anorthosite Gneiss Diorite' },
      { name: 'Ivory Statuette of Khufu', estimatedDate: 'c. 2570 BCE', foundAt: 'Abydos Temple', currentHome: 'Egyptian Museum, Cairo', significance: 'The only confirmed three-dimensional portrait of Khufu, ironically only 7.5 cm tall.', material: 'Carved Hippopotamus Ivory' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'November to February offers mild desert sunshine. Arrive at 08:00 AM before midday desert heat.',
      openingHours: 'Giza Plateau open daily 07:00 – 17:00 (Summer) / 08:00 – 16:00 (Winter).',
      admissionInsight: 'Plateau general admission ticket covers the area and Sphinx. Entering the inside of the Great Pyramid requires a separate ticket.',
      dressCodeAndEtiquette: 'Sturdy walking shoes, high-SPF sun protection, breathable linen clothing, sunglasses. Respectful behaviour at all times.',
      mustSeeSightsOnSite: ['The Great Pyramid of Khufu', 'The Great Sphinx and Valley Temple', 'Panorama Point for the iconic three-pyramid alignment', 'The Workers Village excavations at Heit el-Ghurab'],
      travelTip: 'Walk to the Desert Panorama viewpoint behind Menkaure for an uncluttered view of all three pyramids rising from the sands.',
      conservationRule: 'Strictly forbidden to climb any exterior stone blocks of the pyramids (penalty includes arrest and heavy fines).',
      climateNote: 'Intense dry desert heat in summer (often over 42°C / 107°F). Drink water constantly.'
    },
    audioTour: {
      title: 'Stairway to the Imperishable Stars: The Geometry of Khufu',
      duration: '4 min 15 sec',
      transcript: 'You are gazing upon the only remaining wonder of the ancient world. Four thousand five hundred years ago, when the rest of humanity was in the Bronze Age, Egyptian architects placed stone blocks weighing up to fifty tons with a precision that rivals modern laser measurement. Look closely at how the pyramid corners point to the four cardinal directions of the universe. In ancient Egyptian faith, death was not an end, but a transformation: this mountain of stone was a launching ramp, aligning the king with the circumpolar stars that never set in the desert night sky.',
      soundscapeType: 'desert_canyon'
    },
    architecturalThemes: ['megalithic-stone', 'sacred-astronomy', 'ancient-funerary', 'electrum-apex', 'solar-alignment', 'monumental-scale']
  },
  {
    id: 'acropolis-athens-greece',
    name: 'The Acropolis & Parthenon',
    ancientName: 'Akropolis Athinon',
    location: {
      city: 'Athens',
      country: 'Greece',
      region: 'Europe',
      coordinates: { lat: 37.9715, lng: 23.7257 }
    },
    eraCategory: 'Classical Antiquity (500 BCE - 500 CE)',
    timePeriod: '447 – 432 BCE',
    civilization: 'Classical Greece (Golden Age of Pericles)',
    heritageStatus: 'UNESCO World Heritage (1987)',
    heroImage: '/src/assets/images/hero_colosseum_ancient_splendour_1792381178811.jpg',
    tagline: 'The supreme summit of democracy, classical philosophy, and architectural harmony in Western civilization.',
    summary: 'Conceived by statesman Pericles and sculpted under master artist Phidias, the Parthenon on its rocky Athenian plateau embodied mathematical optical refinements that have inspired world architecture for millennia.',
    reconstruction: {
      ancientTitle: 'The Polychrome Sanctuary of Athena (432 BCE)',
      ancientDescription: 'The marble pediments and metopes were painted in brilliant azure, scarlet, and gold. Inside stood the monumental 12-meter Chryselephantine statue of Athena Parthenos made of gold sheets and ivory by Phidias.',
      modernTitle: 'The White Pentelic Marble Crown',
      modernDescription: 'The 1687 Venetian bombardment ignited gunpowder stored inside, blowing out the central cella walls and columns. Today, the Acropolis Restoration Service meticulously reconstructs the columns with titanium dowels.',
      keyChanges: [
        'Explosion of 1687 destroyed the central roof and cella during the Venetian siege',
        'Lord Elgin removed half of the surviving sculptures (Parthenon Marbles) between 1801 and 1812',
        'Modern Anastylosis restoration uses white Pentelic marble from the original Mount Pentelicus quarry',
        'Caryatid porch sculptures on the Erechtheion moved to the climate-controlled Acropolis Museum and replaced with exact replicas'
      ]
    },
    deepHistory: {
      originNarrative: 'Following the Persian sack of Athens in 480 BCE, the Athenians swore not to rebuild their ruined temples until the Persian threat was quelled. When peace was secured, Pericles used funds from the Delian League to rebuild the Acropolis as a monument to Athenian democracy and patron goddess Athena.',
      architecturalMarvel: 'Engineered by Ictinus and Callicrates, the Parthenon contains virtually no straight lines. The stylobate base curves upward toward the center, the Doric columns swell slightly in the middle (entasis), and all columns lean inward by several centimeters to counteract optical illusions that make straight pillars appear sagging.',
      declineOrPreservation: 'Converted into a Christian church of the Virgin Mary in the 6th century, and later an Ottoman mosque in the 1460s. The devastating explosion in 1687 during the Morean War caused catastrophic damage. The Greek state has conducted state-of-the-art architectural restoration since 1975.',
      culturalSignificance: 'The cradle of Western democracy, philosophy, and classical drama, embodying the Greek ideals of reason, proportion, and civic beauty.'
    },
    keyEventsTimeline: [
      { year: '447 BCE', title: 'Parthenon Construction Commenced', description: 'Pericles oversees the laying of the Pentelic marble foundations.', eraTag: 'Golden Age of Athens' },
      { year: '438 BCE', title: 'Dedication of Athena Parthenos', description: 'Phidias unveils the monumental gold and ivory statue of the warrior goddess.', eraTag: 'Dedication' },
      { year: '406 BCE', title: 'Completion of the Erechtheion', description: 'The asymmetric temple housing the sacred olive tree and Porch of the Caryatids is finished.', eraTag: 'Erechtheion' },
      { year: '1687 CE', title: 'Venetian Powder Bombardment', description: 'A Venetian mortar shell strikes the Parthenon powder magazine, destroying the central nave.', eraTag: 'Morean War' },
      { year: '1801 CE', title: 'Elgin Sculptures Removal', description: 'Lord Elgin removes friezes and pedimental sculptures, later acquired by the British Museum.', eraTag: 'Colonial Era' },
      { year: '2009 CE', title: 'New Acropolis Museum Inauguration', description: 'A state-of-the-art museum opens at the base of the rock with direct visual dialogue to the monument.', eraTag: 'Modern Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Original Erechtheion Caryatids (5 Sisters)', estimatedDate: 'c. 420 BCE', foundAt: 'Erechtheion South Porch', currentHome: 'Acropolis Museum, Athens', significance: 'Maidens in peplos garments functioning as structural columns, preserved under laser cleaning.', material: 'Pentelic Marble' },
      { name: 'The Parthenon Panathenaic Frieze Block', estimatedDate: '440 BCE', foundAt: 'Outer Parthenon Cella Wall', currentHome: 'Acropolis Museum & British Museum', significance: 'Depicts the grand quadriennial civic procession of citizens, cavalry, and water-bearers honoring Athena.', material: 'High-Relief Pentelic Marble' },
      { name: 'Bronze Helmet of Miltiades', estimatedDate: 'c. 490 BCE', foundAt: 'Olympia Sanctuary deposits', currentHome: 'Archaeological Museum of Olympia', significance: 'The actual battle helmet dedicated by general Miltiades after defeating the Persians at Marathon.', material: 'Corinthian Form Bronze' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Early morning (08:00 AM) or late afternoon (17:00) when the Athenian sun casts long golden shadows across the columns.',
      openingHours: 'Daily 08:00 – 20:00 (Summer) / 08:00 – 17:00 (Winter). Last admission 30 minutes before closing.',
      admissionInsight: 'Combined tickets include Ancient Agora, Roman Agora, Temple of Olympian Zeus, and Kerameikos.',
      dressCodeAndEtiquette: 'Flat, non-slip footwear is mandatory. The limestone rock of the Acropolis is polished glass-smooth from millions of footsteps.',
      mustSeeSightsOnSite: ['The monumental Propylaea gateway', 'The exquisite Temple of Athena Nike perched on the bastion', 'The Erechtheion and Porch of the Caryatids', 'The Theater of Dionysus at the southern slope'],
      travelTip: 'Visit the glass-floored Acropolis Museum first to understand the architectural geometry before climbing the sacred rock.',
      conservationRule: 'Strictly prohibited to touch the marble columns or cross protective roped cordons.',
      climateNote: 'Summer temperatures in Athens frequently surpass 40°C (104°F). The Acropolis may close during midday heatwaves.'
    },
    audioTour: {
      title: 'Harmony in Marble: The Optical Miracles of the Parthenon',
      duration: '4 min 05 sec',
      transcript: 'You are ascending the steep marble ramp of the Propylaea. As you crest the summit of the sacred rock, the Parthenon emerges against the blue Aegean sky. Stand before its columns and look closely along the base: what seems like a level line actually bows upward by eleven centimeters in the center. If the ancient masons had carved it mathematically straight, your eyes would perceive it as sagging under its own weight. Here in classical Athens, artists did not copy nature; they corrected human perception to create the illusion of absolute geometric perfection.',
      soundscapeType: 'roman_colosseum'
    },
    architecturalThemes: ['classical-antiquity', 'pentelic-marble', 'optical-refinements', 'chryselephantine', 'civic-democracy', 'hellenistic-syncretism']
  },
  {
    id: 'great-wall-china',
    name: 'The Great Wall of Mutianyu',
    ancientName: 'Wanli Changcheng (Ten-Thousand Li Long Wall)',
    location: {
      city: 'Huairou, Beijing',
      country: 'China',
      region: 'Asia',
      coordinates: { lat: 40.4319, lng: 116.5704 }
    },
    eraCategory: 'Early Modern & Renaissance (1500 - 1850 CE)',
    timePeriod: 'Ming Dynasty (1368 – 1644 CE) on Qin Origins (3rd C. BCE)',
    civilization: 'Imperial China (Ming Dynasty)',
    heritageStatus: 'UNESCO World Heritage (1987) · New 7 Wonders',
    heroImage: '/src/assets/images/angkor_wat_lotus_towers_1792381180300.jpg',
    tagline: 'The colossal stone dragon winding over sheer mountain ridges, representing twenty centuries of imperial defense and craftsmanship.',
    summary: 'Snaking across more than 21,000 kilometers of northern mountain frontiers, the Great Wall was perfected during the Ming Dynasty with stone-block masonry, granite parapets, and 22 watchtowers at the strategically vital Mutianyu pass.',
    reconstruction: {
      ancientTitle: 'The Manned Frontier Fortress (1570 CE)',
      ancientDescription: 'Garrisoned by thousands of Ming soldiers, cannon batteries, and beacon tower keepers who signaled military alerts across hundreds of miles in minutes using smoke by day and beacon fires by night.',
      modernTitle: 'Restored Mountain Rampart',
      modernDescription: 'Surrounded by pine and chestnut forests, the Mutianyu section is one of the best-preserved and restored stretches, featuring double battlements and watchtower platforms spanning rugged ridges.',
      keyChanges: [
        'Smoke and beacon fire alert system replaced with cable car and toboggan track for visitors',
        'Consolidation of crumbling Ming-era grey kiln-fired bricks with traditional sticky rice-lime mortar',
        'Wild and unrestored sections (Jiankou) nearby reveal the natural weathering of mortarless battlements',
        'Designation of ecological buffer zones to protect the surrounding mountain biosphere'
      ]
    },
    deepHistory: {
      originNarrative: 'The first unified wall was linked under Qin Shi Huang around 221 BCE, who connected earlier defensive walls of the Warring States. Over 1,500 years later, the Ming emperors rebuilt the northern defenses on a grander scale using kiln-fired bricks bound with sticky-rice mortar, creating an impassable barrier against northern nomadic armies.',
      architecturalMarvel: 'The Mutianyu section features double parapets on both sides of the wall, allowing soldiers to fire arrows or matchlocks in both directions. Built atop sheer granite ridges, watchtowers were spaced at arrow-shot distances (roughly 150 to 200 meters apart) to eliminate blind spots.',
      declineOrPreservation: 'After the Manchu established the Qing Dynasty in 1644, their empire extended far north beyond the wall, rendering it obsolete for frontier defense. Decades of weathering and brick-salvaging by local villagers took a toll until premier Deng Xiaoping initiated the "Love Our China, Restore Our Great Wall" campaign in 1984.',
      culturalSignificance: 'The ultimate symbol of Chinese endurance, collective civil mobilization, and military architectural triumph over mountainous terrain.'
    },
    keyEventsTimeline: [
      { year: '221 BCE', title: 'Qin Dynasty Unification', description: 'First Emperor Qin Shi Huang orders general Meng Tian to link northern state walls.', eraTag: 'Qin Dynasty' },
      { year: '1404 CE', title: 'Ming Mutianyu Construction', description: 'The Mutianyu pass is fortified under Emperor Yongle to protect the capital of Beijing.', eraTag: 'Ming Expansion' },
      { year: '1569 CE', title: 'General Qi Jiguang Upgrades', description: 'Legendary general Qi Jiguang rebuilds watchtowers with multi-tier arrow slits and cannon ports.', eraTag: 'Fortification Zenith' },
      { year: '1644 CE', title: 'Fall of the Ming Dynasty', description: 'General Wu Sangui opens the Shanhai Pass to the Manchus, ending the wall’s defensive role.', eraTag: 'Dynastic Shift' },
      { year: '1987 CE', title: 'UNESCO Inscription', description: 'The Great Wall system is recognized as a UNESCO World Heritage site.', eraTag: 'World Heritage' },
      { year: '2020 CE', title: 'High-Tech Drone Conservation', description: 'AI and photogrammetry drones deployed to inspect inaccessible crumbling sections along the jagged ridges.', eraTag: 'Digital Preservation' }
    ],
    excavatedArtifacts: [
      { name: 'Ming Dynasty Bronze Breech-Loading Swivel Gun', estimatedDate: 'c. 1580 CE', foundAt: 'Mutianyu Watchtower No. 14', currentHome: 'Military Museum of Chinese People’s Revolution, Beijing', significance: 'Early gunpowder field artillery mounted on swivel pivots to defend against rampart breaches.', material: 'Cast Bronze & Iron' },
      { name: 'Numbered Ming Kiln Brick with Official Stamp', estimatedDate: '1572 CE', foundAt: 'Granite Wall Foundation', currentHome: 'Great Wall Museum, Badaling', significance: 'Stamped with the name of the supervising military officer and kiln location for strict quality accountability.', material: 'Kiln-Fired Grey Clay' },
      { name: 'Garrison Soldier Bone Dice & Iron Crossbow Bolts', estimatedDate: '16th Century CE', foundAt: 'Watchtower living barracks', currentHome: 'Huairou Heritage Archive', significance: 'Everyday artifacts of soldier life along the windswept northern perimeter.', material: 'Wrought Iron & Bone' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Autumn (September to November) offers crisp mountain air, golden foliage, and clear skies with great visibility.',
      openingHours: 'Daily 07:30 – 17:30 (Peak Season) / 08:00 – 17:00 (Off-Peak).',
      admissionInsight: 'Includes shuttle bus from the visitor valley. Cable cars and a thrilling downhill wheeled toboggan are available.',
      dressCodeAndEtiquette: 'Sturdy hiking boots with strong grip; the stone steps can be extraordinarily steep (some at 45-degree angles).',
      mustSeeSightsOnSite: ['Watchtower No. 4 (Zhengguantai) with three hollow towers', 'The scenic climb between Watchtower 14 and 20', 'The transition to the wild unrestored Jiankou wall', 'The expansive panorama of the Yanshan mountain ridges'],
      travelTip: 'Choose Mutianyu over Badaling for significantly fewer tour bus crowds and superior restored mountain scenery.',
      conservationRule: 'Strictly forbidden to carve names on ancient bricks; heavy fines and entry bans are enforced.',
      climateNote: 'Ramparts can be very windy and exposed to sun. Wear windproof layers and sun protection.'
    },
    audioTour: {
      title: 'The Stone Dragon: Signal Fires and Sentinel Watchtowers',
      duration: '4 min 20 sec',
      transcript: 'You are standing upon the stone battlements of Mutianyu, looking out over crest after crest of the Yanshan Mountains. Notice how the wall conforms to the knife-edge of the ridge, transforming the natural topography into an insurmountable defensive barrier. Five centuries ago, garrison guards stood vigil on this very stone platform. When enemy horsemen were sighted in the northern valleys, soldiers lit wolf dung beacon fires: one puff of smoke for one hundred foes, two for five hundred. Within a single hour, that signal would leap hundreds of miles from tower to tower, warning the Forbidden City in Beijing.',
      soundscapeType: 'desert_canyon'
    },
    architecturalThemes: ['frontier-ramparts', 'mountain-defense', 'kiln-fired-brick', 'beacon-signal-network', 'monumental-scale', 'imperial-dynasty']
  },
  {
    id: 'ellora-kailasa-temple',
    name: 'Kailasa Temple at Ellora Caves',
    ancientName: 'Kailasanatha / Manikeshwar',
    location: {
      city: 'Chhatrapati Sambhajinagar (Aurangabad)',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 20.0238, lng: 75.1793 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '8th Century CE (c. 756 – 773 CE)',
    civilization: 'Rashtrakuta Dynasty (King Krishna I)',
    heritageStatus: 'UNESCO World Heritage (1983)',
    heroImage: '/src/assets/images/ellora_kailasa_temple_monolith_1792382537704.jpg',
    tagline: 'The world’s largest monolithic rock-cut monument, carved top-down from a single basalt mountain cliff without scaffolding.',
    summary: 'Commissioned by Rashtrakuta King Krishna I, Cave 16 (Kailasa) is an awe-inspiring engineering marvel: 200,000 tons of solid volcanic basalt were chiseled out of the vertical cliff-face to reveal a multi-story Dravidian temple replicating Mount Kailash, the abode of Shiva.',
    reconstruction: {
      ancientTitle: 'The White Plastered Himalayan Monolith (780 CE)',
      ancientDescription: 'The entire basalt temple exterior was coated in brilliant white lime-gypsum plaster with painted frescoes, giving it the appearance of snow-covered Mount Kailash glowing amidst the green Sahyadri hills.',
      modernTitle: 'Exposed Volcanic Basalt Wonder',
      modernDescription: 'While the white lime plaster has weathered over twelve centuries, the crisp chisel lines of the stone elephants, victory pillars (dhwajasthambhas), and multi-tier vimana carvings remain breathtakingly sharp.',
      keyChanges: [
        'White lime plaster mimicking snow worn away, revealing dark Sahyadri basalt bedrock',
        'Connecting overhead rock bridges between the gateway, Nandi mandapa, and main shrine partially fractured',
        'Intricate painted ceiling murals in the porticos now preserved in subtle pigment patches',
        'Protective drainage channels cleared to prevent monsoon rainwater pooling inside the courtyard'
      ]
    },
    deepHistory: {
      originNarrative: 'According to medieval Marathi epics and copper-plate inscriptions of Baroda (812 CE), King Krishna I of the Rashtrakuta dynasty vowed to construct a temple so extraordinary that even the celestial architect Viswakarma would marvel. Masons started from the crest of the mountain, cutting three deep trenches into the rock and carving every roof, shikhara, column, and elephant plinth as they descended.',
      architecturalMarvel: 'The temple measures 91 meters in length, 53 meters in width, and 33 meters in height—twice the footprint of the Parthenon in Athens. Because it was carved from a single living rock from top to bottom, there was zero margin for error: a single broken column could not be replaced with a fresh quarry block. The base of the temple is ringed by monumental life-sized stone elephants who appear to lift the entire mountain sanctuary on their backs.',
      declineOrPreservation: 'Following the decline of the Rashtrakutas, the caves were protected under the Yadavas of Deogiri and later revered by Maratha rulers including Ahilyabai Holkar, who restored the shrines. Inscribed as a UNESCO World Heritage site in 1983, it is monitored by the Archaeological Survey of India.',
      culturalSignificance: 'Regarded worldwide as the absolute pinnacle of rock-cut architecture, combining civilizational daring, structural mathematics, and supreme spiritual devotion.'
    },
    keyEventsTimeline: [
      { year: '756 CE', title: 'Excavation Commenced', description: 'King Krishna I orders master masons to cut vertical trenches into the Charanandri hills.', eraTag: 'Rashtrakuta Dynasty' },
      { year: 'c. 774 CE', title: 'Sanctuary Consecrated', description: 'The central garbha-griha (inner sanctum) housing the monolithic Shiva lingam is consecrated.', eraTag: 'Consecration' },
      { year: '812 CE', title: 'Baroda Inscription Praise', description: 'Copper plates describe the architect looking at the temple saying, "Oh how was it that I made it!"', eraTag: 'Historical Praise' },
      { year: '1682 CE', title: 'Aurangzeb’s Vain Assault', description: 'Mughal attempts to demolish the solid mountain temple fail due to the colossal thickness of the bedrock.', eraTag: 'Defiance in Stone' },
      { year: '1983 CE', title: 'UNESCO Inscription', description: 'Designated as a masterpiece of human creative genius and inscribed on the World Heritage List.', eraTag: 'Global Recognition' }
    ],
    excavatedArtifacts: [
      { name: 'Ravana Shaking Mount Kailash High-Relief Panel', estimatedDate: 'c. 770 CE', foundAt: 'South courtyard outer wall', currentHome: 'In-situ Cave 16, Ellora', significance: 'A world-famous dynamic sculpture depicting the 10-headed demon king Ravana trapped beneath Kailash while Parvati clings to Shiva.', material: 'Monolithic Basalt' },
      { name: 'Rashtrakuta Royal Copper Plate Inscriptions', estimatedDate: '812 CE', foundAt: 'Deccan Royal Archive deposits', currentHome: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai', significance: 'Sanskrit inscriptions detailing royal land grants and the engineering victory of King Krishna I at Ellora.', material: 'Engraved Copper Plates' },
      { name: 'Gajalakshmi Monolithic Entrance Panel', estimatedDate: 'c. 760 CE', foundAt: 'Western entrance gopuram', currentHome: 'In-situ Cave 16, Ellora', significance: 'Depicts Goddess Lakshmi seated on a lotus, bathed by four celestial elephants pouring water from sacred urns.', material: 'Carved Basalt' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Winter months from October to March offer pleasant weather; monsoon (July to September) reveals lush green Sahyadri waterfalls around the cliffs.',
      openingHours: 'Open sunrise to sunset (06:00 – 18:00). Closed every Tuesday.',
      admissionInsight: 'Combined ticket includes all 34 Ellora caves (Buddhist, Hindu, and Jain). Battery vehicles available across the 2 km complex.',
      dressCodeAndEtiquette: 'Remove shoes before stepping into the inner sanctum of Cave 16. Carry torch/flashlight for deep interior galleries.',
      mustSeeSightsOnSite: ['Cave 16 Kailasa Temple', 'The twin monolithic victory pillars (Dhwajasthambhas)', 'The upper circumambulatory balcony overlooking the elephant plinth', 'Cave 32 (Indra Sabha) and Cave 10 (Vishwakarma Buddhist Chaitya)'],
      travelTip: 'Climb the cliff path around the rim of Cave 16 for a breathtaking bird’s-eye perspective of the excavated courtyard chasm.',
      conservationRule: 'Strictly forbidden to touch or lean on ancient stone carvings or apply water to historic paint fragments.',
      climateNote: 'Deccan afternoons can be warm. Carry drinking water and wear wide-brim head protection.'
    },
    audioTour: {
      title: 'Carved from the Living Mountain: The Top-Down Miracle of Kailasa',
      duration: '4 min 50 sec',
      transcript: 'You are standing inside a monumental canyon that did not exist twelve hundred years ago. Look up at the sheer rock cliffs surrounding you: every single inch of this space was once solid volcanic stone. Rashtrakuta master sculptors did not build this temple with bricks; they revealed it by subtracting the mountain. Starting from the sky and working down into the earth, they carved sixty-foot victory pillars, life-sized elephants, and soaring temple towers out of living basalt. As you walk through the colonnaded halls, listen to the resonance of your footsteps against bedrock that has stood firm since the prehistoric eruptions of the Deccan traps.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['monolithic-rock-cut', 'basalt-carving', 'top-down-excavation', 'dravidian-shikhara', 'sacred-mountain', 'medieval-golden-age']
  },
  {
    id: 'hampi-vittala-temple',
    name: 'Hampi & Vittala Temple Complex',
    ancientName: 'Vijayanagara (City of Victory) / Pampa Kshetra',
    location: {
      city: 'Vijayanagara, Bellary District, Karnataka',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 15.3350, lng: 76.4600 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '14th – 16th Century CE (Peak: 1509 – 1529 CE)',
    civilization: 'Vijayanagara Empire (Emperor Krishnadevaraya)',
    heritageStatus: 'UNESCO World Heritage (1986)',
    heroImage: '/src/assets/images/hampi_stone_chariot_vijayanagara_1792382538440.jpg',
    tagline: 'The magnificent granite metropolis and stone chariot temple of South India’s greatest imperial golden age.',
    summary: 'Capital of the wealthy Vijayanagara Empire that spanned all of South India, Hampi flourished along the boulder-strewn Tungabhadra River. The Vittala Temple is world-renowned for its iconic monolithic Stone Chariot and the 56 SaReGaMa musical pillars of the Ranga Mandapa.',
    reconstruction: {
      ancientTitle: 'The Imperial City of Victory (1520 CE)',
      ancientDescription: 'The granite mandapas were roofed with gilded copper tiles, silk tapestries hung between musical stone pillars, and the stone chariot’s wheels turned on wooden axles as temple processions carried bronze deities amidst open gemstone markets.',
      modernTitle: 'The Golden Granite Ruin of Hampi',
      modernDescription: 'Following the 1565 Battle of Talikota, the city was sacked and abandoned, leaving an extraordinary 4,100-hectare open-air museum of granite temples, stepwells, royal elephant stables, and boulder mountains.',
      keyChanges: [
        'Brick-and-lime shikhara atop the Stone Chariot removed during 1940s conservation for structural stabilization',
        'Stone chariot wheels (originally capable of rotating) fixed in place to prevent ongoing tourist wear',
        'Tapping of musical pillars now prohibited and cordoned to protect fragile acoustic stone columns',
        'Restoration of the Pushkarani stepped water tank and aqueducts supplying the royal enclosures'
      ]
    },
    deepHistory: {
      originNarrative: 'Founded in 1336 by brothers Harihara and Bukka under the spiritual mentorship of sage Vidyaranya, the Vijayanagara Empire stood as a bulwark protecting southern culture and trade. Portuguese travelers Domingo Paes and Fernão Nunes recorded that Hampi was as large as Rome, with gardens, lakes, orchards, and bazaars where diamonds, rubies, and pearls were weighed in public markets.',
      architecturalMarvel: 'The Vittala Temple’s Ranga Mandapa contains 56 musical pillars (known as the SaReGaMa pillars). When tapped lightly with fingers, each slender granite column emits a distinct pure acoustic frequency matching classical Indian musical instruments (ghatam, damaru, mridangam). The famous Stone Chariot is actually a dedicated shrine to Garuda, built of precision-jointed granite blocks disguised as a single mobile vehicle.',
      declineOrPreservation: 'In 1565, an allied coalition of Deccan Sultanates defeated Emperor Aliya Rama Raya at Talikota. The victorious armies spent six months methodically destroying the capital with fire and iron levers. In 1986, Hampi was recognized as a UNESCO World Heritage site and has undergone state-of-the-art conservation by the Archaeological Survey of India.',
      culturalSignificance: 'A majestic testimony to late classical Dravidian architectural zenith, urban water engineering, and the cultural synthesis of the Vijayanagara golden age.'
    },
    keyEventsTimeline: [
      { year: '1336 CE', title: 'Vijayanagara Empire Founded', description: 'Harihara I and Bukka Raya establish the capital on the banks of the Tungabhadra.', eraTag: 'Sangama Dynasty' },
      { year: '1509 CE', title: 'Coronation of Krishnadevaraya', description: 'The golden age begins; Krishnadevaraya commissions the Stone Chariot and Kalyana Mandapa at Vittala Temple.', eraTag: 'Tuluva Zenith' },
      { year: '1520 CE', title: 'Domingo Paes Visits Hampi', description: 'Portuguese chronicler documents the immense wealth, diamond markets, and monumental architecture.', eraTag: 'European Chronicler' },
      { year: '1565 CE', title: 'Battle of Talikota & Sacking', description: 'Deccan Sultanate armies conquer the capital; six months of devastation forces abandonment of the city.', eraTag: 'Fall of the Capital' },
      { year: '1986 CE', title: 'UNESCO Inscription', description: 'Inscribed as a World Heritage site comprising over 1,600 surviving monuments across 41 sq km.', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Vijayanagara Gold Varaha Coin (Pagoda)', estimatedDate: 'c. 1515 CE', foundAt: 'Hampi Royal Mint ruins', currentHome: 'Government Archaeological Museum, Kamalapura', significance: 'Imperial gold currency struck with the boar avatar (Varaha) and Devanagari legend of King Krishnadevaraya.', material: 'Solid Struck Gold' },
      { name: 'Monolithic Ugra Narasimha Statue', estimatedDate: '1528 CE', foundAt: 'Sacred Centre near Krishna Temple', currentHome: 'In-situ Hampi Archaeological Zone', significance: 'A 6.7-meter seated monolith of the man-lion avatar beneath the seven-hooded serpent Adisesha.', material: 'Granite Monolith' },
      { name: 'Carved Bas-Relief of Court Dancers & Foreign Emissaries', estimatedDate: '15th Century CE', foundAt: 'Mahanavami Dibba platform', currentHome: 'Kamalapura Museum', significance: 'Depicts Persian horse merchants, Chinese traders, and court dancers celebrating the autumn Dussehra festival.', material: 'Schist & Granite Relief' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'November to February is the most pleasant winter season. Sunrise from Matanga Hill or Hemakuta Hill is unforgettable.',
      openingHours: 'Monuments open daily 06:00 – 18:00. Electric eco-carts shuttle visitors from outer parking to the Vittala complex.',
      admissionInsight: 'A single ASI ticket covers Vittala Temple, Zenana Enclosure (Lotus Mahal), and the archaeological museum at Kamalapura.',
      dressCodeAndEtiquette: 'Comfortable cotton clothing, sun hat, and walking shoes for granite boulder trails. Virupaksha is an active temple; remove shoes at the entrance.',
      mustSeeSightsOnSite: ['The Vittala Temple & Stone Chariot', 'Virupaksha Temple (active since 7th C. CE)', 'Lotus Mahal and Royal Elephant Stables', 'Mahanavami Dibba terrace and stepped tank Pushkarani'],
      travelTip: 'Rent a bicycle or electric scooter to explore the expansive ruins spread across the Tungabhadra riverbanks.',
      conservationRule: 'Strictly prohibited to touch or tap the musical stone pillars (cameras and guards monitor the mandapa).',
      climateNote: 'Granite boulders absorb heat rapidly by midday. Carry at least 2 liters of water.'
    },
    audioTour: {
      title: 'City of Victory: The Musical Stone and Royal Bazaars of Vijayanagara',
      duration: '4 min 35 sec',
      transcript: 'You are standing in the wide courtyard of the Vittala Temple before the legendary Stone Chariot. Look out toward the horizon where hundreds of ancient ochre granite boulders balance precariously on hilltops under the Deccan sky. Five hundred years ago, you would have smelled sandalwood incense drifting from the hundred-pillar hall, and heard the distant chanting of court poets. Tap into the memory of this sacred stone: in the open bazaars outside this gateway, international merchants from Venice, Portugal, and Persia bought and sold diamonds by the pound. Here, granite was sculpted as if it were soft sandalwood.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['granite-chariot', 'musical-pillars', 'tungabhadra-hydrology', 'monumental-mandapas', 'bazaar-streetscapes', 'imperial-dynasty']
  },
  {
    id: 'brihadeeswarar-temple-thanjavur',
    name: 'Brihadeeswarar Temple (The Big Temple)',
    ancientName: 'Rajarajeswaram / Peruvudaiyar Kovil',
    location: {
      city: 'Thanjavur, Tamil Nadu',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 10.7828, lng: 79.1318 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '1010 CE (Consecrated 25th Regnal Year)',
    civilization: 'Imperial Chola Empire (Emperor Rajaraja Chola I)',
    heritageStatus: 'UNESCO World Heritage (Great Living Chola Temples)',
    heroImage: '/src/assets/images/brihadeeswarar_temple_thanjavur_1792382539257.jpg',
    tagline: 'The architectural summit of the Chola Empire, crowned with an 80-ton single granite capstone atop a 66-meter Vimana tower.',
    summary: 'Built in just 7 years by Emperor Rajaraja Chola I using 130,000 tons of granite in a delta completely devoid of stone quarries, the Brihadeeswarar Temple represents the zenith of Dravidian temple architecture and imperial maritime power.',
    reconstruction: {
      ancientTitle: 'The Gilded Vimana of Rajaraja Chola (1010 CE)',
      ancientDescription: 'The 66-meter stone Vimana was crowned with a gold-leafed Kalasam pot, while the outer walls were adorned with over 400 devadasis (sacred temple dancers), musicians, and royal brass lamps illuminating Chola fresco murals.',
      modernTitle: 'The Great Living Chola Temple',
      modernDescription: 'Maintained as an active living temple for over 1,000 uninterrupted years, the golden granite Vimana continues daily puja rituals, its courtyard filled with evening classical Carnatic music and Bharatanatyam dance.',
      keyChanges: [
        'Outer fortified moat and ramparts added during the 16th-century Nayaka and Maratha periods',
        'Subterranean 11th-century Chola frescoes rediscovered behind 17th-century Nayaka over-paintings in 1931',
        'Massive monolithic Nandi (sacred bull) pavilion consolidated and protected under ASI care',
        'Surrounding earthen ramp (used to roll the 80-ton capstone to the peak) dismantled following completion in 1010'
      ]
    },
    deepHistory: {
      originNarrative: 'In 1003 CE, following military and naval victories that established Chola supremacy across the Indian Ocean and the Bay of Bengal (the "Chola Lake"), Rajaraja Chola I resolved to construct a temple of unprecedented monumental scale dedicated to Lord Shiva. Master architect Kunjara Mallan Raja Rama Perunthachan engineered the interlocking stone geometry.',
      architecturalMarvel: 'The temple Vimana rises 66 meters (216 feet) across 16 tiers with breathtaking geometric taper. Its apex is crowned by the Kumbam—an 80-ton single octagonal granite block. Because there were no stone quarries within 60 km of Thanjavur, 130,000 tons of granite were floated on wooden rafts down the Kaveri River. Legends and engineering analysis indicate a 6-kilometer gently inclined earthen ramp was constructed to haul the monolithic capstone to the summit using elephants and rollers.',
      declineOrPreservation: 'Unlike many ancient monuments that fell into ruin, the Brihadeeswarar Temple was never abandoned. Successive dynasties—the Pandyas, Vijayanagara governors, Thanjavur Nayakas, and Thanjavur Marathas (Serfoji II)—added shrines and preserved the core sanctuary. In 1987, UNESCO inscribed it as the centerpiece of the Great Living Chola Temples.',
      culturalSignificance: 'The definitive masterpiece of South Indian Dravidian architecture, combining colossal structural physics, stone acoustics, and monumental epigraphy inscribed with the names of all 400 temple staff and donors.'
    },
    keyEventsTimeline: [
      { year: '1003 CE', title: 'Construction Initiated', description: 'Rajaraja Chola I lays the foundation stones after triumphant naval campaigns in Sri Lanka.', eraTag: 'Chola Golden Age' },
      { year: '1010 CE', title: 'Consecration (Kumbhabhishekam)', description: 'The golden Kalasam is hoisted to the Vimana apex on the 275th day of the emperor’s 25th regnal year.', eraTag: 'Grand Consecration' },
      { year: '1025 CE', title: 'Rajendra Chola’s Armada', description: 'Chola naval fleet conquers Srivijaya (Sumatra/Malaya), bringing maritime tribute to Thanjavur.', eraTag: 'Maritime Empire' },
      { year: '1931 CE', title: 'Chola Frescoes Discovered', description: 'Archaeologist S.K. Govindaswami unearths exquisite 1,000-year-old murals in the circumambulatory corridor.', eraTag: 'Artistic Rediscovery' },
      { year: '2010 CE', title: 'Millennium Celebration (1000 Years)', description: 'India celebrates the 1,000th anniversary with 1,000 Bharatanatyam dancers performing simultaneously in the courtyard.', eraTag: 'Millennial Jubilee' }
    ],
    excavatedArtifacts: [
      { name: 'Imperial Chola Bronze Nataraja (Cosmic Dancer Shiva)', estimatedDate: 'c. 1010 CE', foundAt: 'Temple Treasure Vault', currentHome: 'Thanjavur Art Gallery (Royal Palace)', significance: 'Masterpiece of lost-wax cire-perdue bronze sculpture showing Shiva dancing inside a ring of cosmic flames.', material: 'Panchaloha (Five-Metal Bronze)' },
      { name: 'Thanjavur Royal Epigraphic Inscription Wall', estimatedDate: '1010 CE', foundAt: 'Vimana plinth base', currentHome: 'In-situ Temple Plinth', significance: 'Thousands of lines in ancient Tamil script cataloguing every gift, ruby jewel, land endowment, and worker salary.', material: 'Carved Granite Bedrock' },
      { name: 'Monolithic Granite Nandi', estimatedDate: '16th Century (replacing Chola original)', foundAt: 'Central courtyard pavilion', currentHome: 'In-situ Central Axis', significance: 'Carved from a single stone block, weighing 25 tons, measuring 3.7m high and 6m long.', material: 'Monolithic Black Granite' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Winter months from November to February offer mild tropical weather; visit at 06:30 for peaceful morning puja or 17:30 for evening courtyard illumination.',
      openingHours: 'Open daily 06:00 – 12:30 and 16:00 – 20:30. Free admission to the temple grounds.',
      admissionInsight: 'Shoe-storage stalls available outside the Maratha gopuram. Photography is permitted in the courtyard but prohibited inside the inner sanctum.',
      dressCodeAndEtiquette: 'Strict traditional dress code: Shoulders and knees must be covered (dhoti, pants, or traditional robes). Footwear must be deposited outside.',
      mustSeeSightsOnSite: ['The 66-meter Vimana tower and 80-ton apex stone', 'The monolithic Nandi pavilion', 'The subterranean Chola fresco gallery', 'The Subrahmanya Temple with intricate Nayaka-era stone filigree'],
      travelTip: 'Walk the courtyard at sunset when the granite stones reflect warm amber light and Carnatic flute music echoes across the pavilions.',
      conservationRule: 'Strictly prohibited to deface stone walls or step over sacred stone thresholds.',
      climateNote: 'Granite stone paving absorbs afternoon sun; wear socks to walk comfortably during sunny hours.'
    },
    audioTour: {
      title: 'The Granite Tower of the Cholas: Rajaraja’s Architectural Miracle',
      duration: '4 min 40 sec',
      transcript: 'You are standing inside the monumental stone courtyard of the Brihadeeswarar Temple. Look up into the cloudless sky at the great Vimana tower soaring sixty-six meters above you. Look at the very top: that single rounded stone block weighs eighty tons. Think about what this required a thousand years ago: there were no cranes, no steam engines, and no granite quarries for forty miles around. Chola engineers floated a mountain down the Kaveri River, and rolled that colossal stone up a four-mile earthen ramp using teams of royal elephants. For a thousand years without a single pause, incense has burned in this sanctum, carrying the devotion of twenty generations into the sky.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['monolithic-granite-apex', 'soaring-vimana', 'dravidian-monumental', 'acoustic-courtyards', 'imperial-chola', 'fresco-murals']
  },
  {
    id: 'qutb-minar-iron-pillar-delhi',
    name: 'Qutb Minar & The Rust-Resistant Iron Pillar',
    ancientName: 'Mehrauli Complex / Kirti Stambha',
    location: {
      city: 'Mehrauli, New Delhi',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 28.5244, lng: 77.1855 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '1192 CE (Minar) & 4th Century CE (Gupta Iron Pillar)',
    civilization: 'Delhi Sultanate (Mamluk Dynasty) & Gupta Empire',
    heritageStatus: 'UNESCO World Heritage (1993)',
    heroImage: '/src/assets/images/qutb_minar_iron_pillar_delhi_1792382538407.jpg',
    tagline: 'The world’s tallest brick minaret standing beside a 1,600-year-old metallurgical miracle that defies corrosion.',
    summary: 'Standing 72.5 meters tall, the Qutb Minar was commenced by Qutb-ud-din Aibak in 1192 CE. In the adjacent courtyard stands the mysterious Iron Pillar of Chandragupta II (c. 400 CE), forged with high-phosphorus crucible iron that has stood exposed to monsoon rains for 1,600 years without rusting.',
    reconstruction: {
      ancientTitle: 'The Imperial Minaret & Quwwat-ul-Islam Mosque (1200 CE)',
      ancientDescription: 'The fluted red sandstone minaret towered over the capital, adorned with gilded verses from the Quran and Arabic kufic calligraphy, while the central courtyard of the mosque was surrounded by twenty-seven carved stone colonnades.',
      modernTitle: 'Preserved Mehrauli Archaeological Park',
      modernDescription: 'The sandstone tower retains its distinctive five-tiered fluted profile and projecting stalactite corbelled balconies, while the 6-ton Gupta Iron Pillar stands protected behind a protective perimeter railing.',
      keyChanges: [
        'Top two marble-faced storeys rebuilt by Sultan Feroz Shah Tughlaq in 1368 after lightning damage',
        'Major R. Smith added a cupola in 1828 (Smith’s Folly), later removed to the surrounding lawns in 1848',
        'Interior spiral staircase (379 steps) closed to public entry following a tragic 1981 stampede',
        'Iron pillar surrounded by a protective railing in 1997 to prevent wear from tourists hugging the column for good luck'
      ]
    },
    deepHistory: {
      originNarrative: 'The Qutb complex documents the dramatic transition of Delhi’s political history. Following the defeat of Prithviraj Chauhan at the Battle of Tarain in 1192 CE, Qutb-ud-din Aibak founded the Mamluk (Slave) Dynasty and initiated the minaret as a victory tower and minaret for the adjacent Quwwat-ul-Islam mosque. In the center of the mosque courtyard stands an even older monument: the 7-meter Iron Pillar erected during the reign of Chandragupta II Vikramaditya of the Gupta Empire (c. 400 CE).',
      architecturalMarvel: 'The Qutb Minar has a base diameter of 14.3 meters narrowing to 2.7 meters at the top. The first three storeys are constructed of fluted red and buff sandstone; the top two storeys are faced with white marble and sandstone. Beside it, the Iron Pillar represents an ancient metallurgical marvel: weighing over 6,000 kg, it was forged by forge-welding lumps of wrought iron. Modern metallurgists (Dr. R. Balasubramaniam, IIT Kanpur) proved that high phosphorus and slag inclusions formed an amorphous passive layer of "misawite" iron oxyhydroxide that shields the metal from atmospheric oxygen and moisture.',
      declineOrPreservation: 'Repaired by Feroz Shah Tughlaq in 1368 and Sikandar Lodi in 1503 following lightning strikes. Lord Curzon oversaw extensive conservation in the early 20th century. Today, it stands as one of India’s most visited monuments and a UNESCO World Heritage site.',
      culturalSignificance: 'The premier monument of early Indo-Islamic architecture, illustrating the dialogue between Islamic geometry and ancient Indian metallurgical science.'
    },
    keyEventsTimeline: [
      { year: 'c. 400 CE', title: 'Gupta Iron Pillar Forged', description: 'King Chandragupta II Vikramaditya erects the iron standard of Vishnu atop a hill in central India.', eraTag: 'Gupta Golden Age' },
      { year: '1192 CE', title: 'Qutb Minar Begun', description: 'Qutb-ud-din Aibak begins construction of the first storey following the establishment of the Delhi Sultanate.', eraTag: 'Mamluk Dynasty' },
      { year: '1220 CE', title: 'Iltutmish Adds Three Storeys', description: 'Sultan Iltutmish completes storeys 2, 3, and 4, creating the iconic tapering fluted silhouette.', eraTag: 'Sultanate Expansion' },
      { year: '1368 CE', title: 'Tughlaq Marble Reconstruction', description: 'Feroz Shah Tughlaq repairs lightning damage by adding two top storeys faced with white marble.', eraTag: 'Tughlaq Restoration' },
      { year: '1993 CE', title: 'UNESCO Inscription', description: 'Inscribed as a World Heritage site alongside the Alai Minar and Alai Darwaza gateway.', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Sanskrit Inscription on the Iron Pillar', estimatedDate: 'c. 400 CE', foundAt: 'Iron Pillar shaft', currentHome: 'In-situ Mehrauli', significance: 'Six-line Brahmi script poem praising King Chandra’s conquests across the Seven Rivers of the Indus.', material: 'Chiseled Wrought Iron' },
      { name: 'Alai Darwaza Red Sandstone Screen', estimatedDate: '1311 CE', foundAt: 'Southern gateway of Qutb complex', currentHome: 'In-situ Mehrauli', significance: 'First building in India to employ true Islamic pointed arches, horseshoe arches, and geometric jaali screens.', material: 'Red Sandstone & White Marble' },
      { name: 'Tomb of Iltutmish Intricate Mihrab', estimatedDate: '1235 CE', foundAt: 'Northwest of Qutb Minar', currentHome: 'In-situ Mehrauli', significance: 'Intricately carved sandstone cenotaph chamber featuring squinch arches that supported an early dome.', material: 'Carved Red Sandstone' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Winter (October to March) offers cool sunny afternoons; visit in early morning to avoid tour bus queues.',
      openingHours: 'Open daily sunrise to sunset (06:00 – 18:00). Illuminated after sunset for evening architectural photography.',
      admissionInsight: 'Metro Station "Qutab Minar" on the Yellow Line provides direct access. Online e-tickets reduce security waiting time.',
      dressCodeAndEtiquette: 'Comfortable footwear for exploring the extensive Mehrauli archaeological park. Drones and tripods require special ASI permits.',
      mustSeeSightsOnSite: ['The 72.5-meter Qutb Minar tower', 'The rustless Iron Pillar of Delhi', 'Alai Darwaza gateway built by Alauddin Khalji', 'The unfinished Alai Minar (designed to be twice as tall)'],
      travelTip: 'Walk into the adjacent Mehrauli Archaeological Park to discover Jamali Kamali mosque and Rajon ki Baoli stepwell.',
      conservationRule: 'Do not cross protective perimeter barriers around the Iron Pillar or climb historic stone plinths.',
      climateNote: 'Delhi summers (May to June) are scorching (44°C+). Carry water and visit before 10:00 AM in summer.'
    },
    audioTour: {
      title: 'The Tower of Sandstone and the Pillar of Iron: Delhi’s Ancient Metallurgy',
      duration: '4 min 15 sec',
      transcript: 'You are standing in the ancient capital of Delhi, looking up at the world’s tallest brick minaret. Run your eyes up the red sandstone flutes: ninety-five meters of intricate Arabic calligraphy and stalactite balconies that have survived lightning strikes and earthquakes for over eight hundred years. Now turn toward the dark column standing in the center of the courtyard: this pillar of solid iron was forged sixteen hundred years ago during the Gupta dynasty. For sixteen centuries of monsoon rains and desert winds, it has stood without rusting. Modern metallurgists discovered that ancient Indian blacksmiths created a protective film of phosphorus that keeps the iron as sound today as when King Chandragupta ruled.',
      soundscapeType: 'desert_canyon'
    },
    architecturalThemes: ['fluted-sandstone-minaret', 'rustless-iron-metallurgy', 'indo-islamic-syncretism', 'epigraphic-calligraphy', 'gupta-metallurgy', 'corbelled-arches']
  },
  {
    id: 'amer-fort-jaipur',
    name: 'Amer Fort & The Palace of Mirrors',
    ancientName: 'Amber Durg / Ambikeshwar',
    location: {
      city: 'Amer, Jaipur, Rajasthan',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 26.9855, lng: 75.8513 }
    },
    eraCategory: 'Early Modern & Renaissance (1500 - 1850 CE)',
    timePeriod: '1592 – 1727 CE',
    civilization: 'Kachwaha Rajput Dynasty (Raja Man Singh I)',
    heritageStatus: 'UNESCO World Heritage (Hill Forts of Rajasthan)',
    heroImage: '/src/assets/images/amer_fort_jaipur_rajasthan_1792382539243.jpg',
    tagline: 'The dramatic hilltop royal fortress of Rajasthan, renowned for the starry Sheesh Mahal and lake-reflected sandstone ramparts.',
    summary: 'Perched on the rugged Aravalli hills overlooking Maota Lake, Amer Fort is a supreme example of Rajput architecture. It features four successive courtyards, subterranean water harvesting channels, and the Sheesh Mahal (Mirror Palace) where thousands of convex Belgian glass mirrors illuminate a single candle flame.',
    reconstruction: {
      ancientTitle: 'The Royal Court of Raja Man Singh I (1620 CE)',
      ancientDescription: 'The courtyards were guarded by Rajput cavalry in mail armor, silk curtains billowed in the Diwan-i-Aam, and fragrant rosewater fountains cooled the subterranean summer apartments through hollow sandstone air vents.',
      modernTitle: 'The Regal Sandstone Citadel',
      modernDescription: 'The majestic yellow and pink sandstone palace stands magnificently preserved, connected by secret mountain tunnels to the higher Jaigarh Fort where the world’s largest cannon on wheels (Jaivana) sits.',
      keyChanges: [
        'Electric lighting replaced thousands of oil and candle wicks in the Sheesh Mahal',
        'Underground escape tunnel linking Amer Fort to hilltop Jaigarh Fort reopened for visitor exploration',
        'Traditional elephant rides up the Sun Gate (Suraj Pol) strictly regulated for animal welfare standards',
        'Kesar Kyari (Saffron Garden) in Maota Lake restored with geometric star parterres'
      ]
    },
    deepHistory: {
      originNarrative: 'Originally founded by the Meena tribe and consecrated to the goddess Amba (Durga), the fortress was rebuilt on a grand imperial scale in 1592 by Raja Man Singh I, commander-in-chief of Emperor Akbar’s imperial armies. Successive rulers—Mirza Raja Jai Singh and Sawai Jai Singh II—expanded the palace before relocating the capital to the planned city of Jaipur in 1727.',
      architecturalMarvel: 'Amer Fort is constructed of red sandstone and white marble. The Sheesh Mahal (Hall of Mirrors) was engineered with convex glass mirrors imported from Belgium and set into plaster floral arabesques: when a single candle is lit in the center of the dark hall, the convex mirrors multiply the flame into a celestial galaxy of glittering stars. The fort utilizes natural cooling through subterranean water conduits and carved stone jaali screens that catch breezes from Maota Lake.',
      declineOrPreservation: 'When Sawai Jai Singh II built Jaipur in 1727, the royal residence moved to the City Palace, but Amer remained the ceremonial and spiritual capital housing the revered Shila Devi temple. In 2013, UNESCO inscribed Amer as one of the six Hill Forts of Rajasthan.',
      culturalSignificance: 'The quintessential symbol of Rajput royal chivalry, courtly luxury, and harmonious fusion of Hindu and Mughal artistic aesthetics.'
    },
    keyEventsTimeline: [
      { year: '1592 CE', title: 'Fort Rebuilding Commenced', description: 'Raja Man Singh I initiates construction of the modern palace atop earlier Meena fortress ruins.', eraTag: 'Kachwaha Dynasty' },
      { year: '1623 CE', title: 'Jai Singh I Adds Sheesh Mahal', description: 'Mirza Raja Jai Singh constructs the Mirror Palace and the Diwan-i-Khas private audience pavilion.', eraTag: 'Architectural Zenith' },
      { year: '1727 CE', title: 'Capital Moves to Jaipur', description: 'Sawai Jai Singh II establishes Jaipur down in the plains; Amer remains sacred ceremonial ancestral fort.', eraTag: 'Jaipur Founding' },
      { year: '2013 CE', title: 'UNESCO Hill Forts Inscription', description: 'Inscribed on the UNESCO World Heritage List as part of the serial nomination of Hill Forts of Rajasthan.', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Shila Devi Sacred Black Stone Idol', estimatedDate: 'c. 1604 CE', foundAt: 'Jessore, Bengal', currentHome: 'Shila Devi Temple, Amer Fort', significance: 'Sacred black stone deity of Kali brought by Raja Man Singh I from eastern Bengal following royal campaigns.', material: 'Carved Black Schist' },
      { name: 'Rajput Damascened Katar Dagger & Royal Shield', estimatedDate: '17th Century CE', foundAt: 'Amer Fort Armoury', currentHome: 'Jaipur City Palace Museum', significance: 'Armor decorated with pure gold koftgari wire inlay and tiger-hunting iconography.', material: 'Wootz Steel & Gold Inlay' },
      { name: 'Kesar Kyari Geometric Water Fountain Basin', estimatedDate: 'c. 1630 CE', foundAt: 'Maota Lake garden island', currentHome: 'In-situ Maota Lake', significance: 'Multi-lobed star reservoir engineered to circulate scented lake water through royal saffron flowerbeds.', material: 'Carved Yellow Sandstone' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'Winter (October to March) is the ideal season. Arrive at 08:00 AM to see the morning sun illuminate the yellow sandstone ramparts.',
      openingHours: 'Open daily 08:00 – 17:30. Evening sound and light show operates in English (19:30) and Hindi (20:30).',
      admissionInsight: 'Jaipur Composite Ticket includes Amer Fort, Hawa Mahal, Jantar Mantar, Nahargarh, and Albert Hall Museum.',
      dressCodeAndEtiquette: 'Comfortable walking shoes are essential for steep stone ramps and cobblestones. Shila Devi temple requires shoe removal.',
      mustSeeSightsOnSite: ['The Sheesh Mahal (Palace of Mirrors)', 'Diwan-i-Aam with 27 red sandstone elephant pillars', 'Sukh Niwas summer pavilion with indoor water cascade', 'The secret tunnel linking Amer to Jaigarh Fort'],
      travelTip: 'Walk the high watchtower ramparts at sunset for a panorama of the surrounding Aravalli mountain defensive walls.',
      conservationRule: 'Strictly prohibited to touch the mirror glass tiles in Sheesh Mahal (monitored by security).',
      climateNote: 'Summer temperatures in Rajasthan can exceed 43°C (110°F). Visit early in the morning.'
    },
    audioTour: {
      title: 'Mirrors and Mountain Ramparts: The Rajput Splendour of Amer',
      duration: '4 min 20 sec',
      transcript: 'You are standing upon the Sun Gate terrace of Amer Fort, looking down upon the golden waters of Maota Lake. Behind you, the yellow sandstone ramparts rise tier upon tier up the crags of the Aravalli Mountains. Walk into the Hall of Mirrors: notice how thousands of tiny convex glass tiles have been embedded into floral plaster arabesques. In ancient royal evenings, when silk drapes were drawn and a single candle was lit, those curved mirrors multiplied that single flame into an infinite canopy of stars. Here, Rajput warriors married battlefield endurance to the highest refinements of courtly poetry and architecture.',
      soundscapeType: 'palace_fountains'
    },
    architecturalThemes: ['rajput-hill-fortress', 'sheesh-mahal-mirrors', 'lake-reflection-bastions', 'diwan-i-khas', 'jaali-latticework', 'aravali-ramparts']
  },
  {
    id: 'sanchi-stupa-bhopal',
    name: 'The Great Stupa at Sanchi',
    ancientName: 'Kakanaya / Chetiyagiri',
    location: {
      city: 'Sanchi, Raisen District, Madhya Pradesh',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 23.4793, lng: 77.7397 }
    },
    eraCategory: 'Classical Antiquity (500 BCE - 500 CE)',
    timePeriod: '3rd Century BCE – 1st Century CE',
    civilization: 'Mauryan Empire (Emperor Ashoka) & Satavahana Dynasty',
    heritageStatus: 'UNESCO World Heritage (1989)',
    heroImage: '/src/assets/images/sanchi_stupa_great_torana_1792382940306.jpg',
    tagline: 'The oldest stone structure in India, crowned by the Great Hemispherical Dome and the carved stone Torana gateways.',
    summary: 'Commissioned by Emperor Ashoka in the 3rd century BCE over the sacred relics of Gautama Buddha, the Great Stupa of Sanchi features four world-famous ornamental stone gateways (toranas) carved with unprecedented narrative bas-reliefs illustrating the Jataka tales.',
    reconstruction: {
      ancientTitle: 'The Polished Ashokan Reliquary (250 BCE)',
      ancientDescription: 'Originally a brick hemisphere half its current size, sheltered by a polished stone umbrella (chhatra) and encircled by a wooden railing before being doubled in size and encased in dressed sandstone blocks under the Shungas.',
      modernTitle: 'Preserved World Buddhist Sanctuary',
      modernDescription: 'Rescued from dense jungle overgrowth in 1818 by British General Taylor, Sanchi stands as the most complete surviving early Buddhist monastic complex in South Asia, restored under Sir John Marshall.',
      keyChanges: [
        'Enlarged to twice its original volume during the 2nd century BCE with solid stone casing',
        'Four monumental sandstone toranas added by Satavahana guilds in the 1st century BCE',
        'Looting of relic caskets by amateur treasure hunters in 1822 repaired by Marshall in 1912',
        'Surrounding monastery ruins (Stupas 2 and 3, Temple 17) stabilized for visitors'
      ]
    },
    deepHistory: {
      originNarrative: 'Emperor Ashoka selected the hill of Sanchi because his beloved empress Devi was the daughter of a merchant from nearby Vidisha. Ashoka redistributed the relics of the Buddha into 84,000 stupas across his empire, placing a portion inside this central hemispherical mound to anchor Buddhist missionary activities.',
      architecturalMarvel: 'The stupa represents the cosmic mountain (Mount Meru) and Buddhist cosmology. The solid dome (anda) sits on a low circular terrace (medhi) designed for clockwise circumambulation (pradakshina). The four ceremonial Torana gateways face the four cardinal directions; their sandstone crossbeams are carved so intricately that inscriptions record they were sculpted by the royal ivory carvers of Vidisha using precision goldsmith chisels.',
      declineOrPreservation: 'As Buddhism declined in mainland India by the 13th century, Sanchi was swallowed by teak forests and forgotten, shielding it from destruction during medieval conflicts. In 1818, British officer Henry Taylor rediscovered the site. Archeologist Sir John Marshall conducted scientific conservation between 1912 and 1919, establishing the Sanchi Archaeological Museum.',
      culturalSignificance: 'The foundational benchmark of Indian stone architecture, inspiring Buddhist monumental art across Sri Lanka, China, Japan, and Southeast Asia.'
    },
    keyEventsTimeline: [
      { year: 'c. 250 BCE', title: 'Ashokan Brick Stupa Founded', description: 'Emperor Ashoka erects the original brick dome and Ashoka Pillar with edicts.', eraTag: 'Mauryan Empire' },
      { year: 'c. 150 BCE', title: 'Stone Encasing under Shungas', description: 'The dome is doubled in size and encased with dressed yellow sandstone blocks.', eraTag: 'Shunga Expansion' },
      { year: 'c. 50 BCE', title: 'Torana Gateways Sculpted', description: 'Satavahana artisans and ivory carvers sculpt the four ornamental Torana gateways.', eraTag: 'Satavahana Zenith' },
      { year: '1818 CE', title: 'Rediscovery by General Taylor', description: 'British officer General Taylor documents the forgotten hill stupas in the dense jungle.', eraTag: 'Rediscovery' },
      { year: '1919 CE', title: 'John Marshall Conservation', description: 'Director-General of ASI completes modern scientific restoration and publishes landmark monograph.', eraTag: 'ASI Conservation' },
      { year: '1989 CE', title: 'UNESCO Inscription', description: 'Inscribed on the UNESCO World Heritage List for outstanding universal cultural value.', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Sanchi Ashoka Pillar Lion Capital Fragment', estimatedDate: 'c. 250 BCE', foundAt: 'South Gate of Great Stupa', currentHome: 'Sanchi Archaeological Museum', significance: 'Mirror-polished Chunar sandstone capital with four back-to-back lions and Ashokan wheel.', material: 'Polished Chunar Sandstone' },
      { name: 'East Torana Shalabhanjika Yakshi Bracket', estimatedDate: '1st Century BCE', foundAt: 'Eastern Torana Gate', currentHome: 'In-situ Sanchi East Gate', significance: 'World-famous sculpture of a celestial maiden grasping a flowering sal tree branch, demonstrating early mastery of dynamic three-dimensional female sculpture.', material: 'Carved Sandstone' },
      { name: 'Steatite Relic Caskets of Sariputra and Mahamoggallana', estimatedDate: '2nd Century BCE', foundAt: 'Stupa No. 3 interior chamber', currentHome: 'Chetiyagiri Vihara, Sanchi', significance: 'Sacred relic bone fragments of the two primary disciples of Gautama Buddha.', material: 'Turned Steatite & Crystal' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'October to March offers mild tropical sun; visit early morning at 07:00 when sunrise illuminates the East Torana.',
      openingHours: 'Open daily sunrise to sunset (06:30 – 18:30).',
      admissionInsight: 'ASI e-ticket grants access to all three stupas, ancient monasteries, and the on-site archaeological museum.',
      dressCodeAndEtiquette: 'Remove shoes when ascending to the upper circumambulatory terrace. Always walk clockwise around the stupa dome.',
      mustSeeSightsOnSite: ['Great Stupa 1 and its four carved Toranas', 'Stupa 3 (Relics of Sariputra)', 'Temple 17 (Earliest surviving flat-roofed Gupta temple in India)', 'The Ashoka Pillar stump and inscription'],
      travelTip: 'Hire an official ASI licensed guide at the entrance gate to decode the visual comic-strip Jataka narratives carved into the stone architraves.',
      conservationRule: 'Do not touch or lean against the carved sandstone bas-reliefs; cameras and security guards monitor all four gateways.',
      climateNote: 'Summer temperatures in Madhya Pradesh reach 42°C. Carry head coverings and water.'
    },
    audioTour: {
      title: 'The Stone Wheel of Dharma: Ashoka’s Great Stupa at Sanchi',
      duration: '4 min 30 sec',
      transcript: 'You are standing before the Eastern Torana of the Great Stupa of Sanchi. Step closer to the stone gateway: look at the swirling elephants, celestial maidens, and wheels of law carved into this pale yellow sandstone. Over two thousand years ago, Emperor Ashoka stood on this very hillside, mourning the hundreds of thousands who fell in the Kalinga war. Here, he chose to renounce the sword and embrace the Dharma. Look at the hemispherical dome behind the gate: it is solid stone, built without a single hollow chamber inside except for the sacred reliquary of the Buddha at its heart. As you circumambulate clockwise along this ancient stone pathway, you follow the footsteps of monks and pilgrim emperors who have walked this circle for seventy-five generations.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['buddhist-stupa', 'ashokan-edicts', 'torana-gateways', 'ivory-carver-stonecraft', 'classical-antiquity', 'circumambulatory-terrace']
  },
  {
    id: 'ajanta-caves-aurangabad',
    name: 'Ajanta Caves & The Ancient Buddhist Frescoes',
    ancientName: 'Ajintha Leni',
    location: {
      city: 'Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 20.5519, lng: 75.7033 }
    },
    eraCategory: 'Classical Antiquity (500 BCE - 500 CE)',
    timePeriod: '2nd Century BCE – 5th Century CE (Zenith: 460 – 480 CE)',
    civilization: 'Satavahana Dynasty & Vakataka Empire (Emperor Harishena)',
    heritageStatus: 'UNESCO World Heritage (1983)',
    heroImage: '/src/assets/images/ajanta_caves_rock_cut_1792382954748.jpg',
    tagline: 'The world’s supreme sanctuary of classical Buddhist rock-cut monasteries and radiant tempera fresco murals.',
    summary: 'Carved into the sheer horseshoe-shaped volcanic cliff overlooking the Waghur River gorge, the 30 rock-cut caves of Ajanta contain the greatest surviving masterpieces of classical Asian painting and sculpture, including the serene Bodhisattva Padmapani.',
    reconstruction: {
      ancientTitle: 'The Gilded Monastic University (480 CE)',
      ancientDescription: 'Hundreds of Buddhist monks and visiting Chinese scholars lived in illuminated rock-cut viharas, reading Sanskrit manuscripts by oil lamps reflecting off brilliant lapis lazuli and malachite painted murals.',
      modernTitle: 'Preserved Rock-Cut Gallery',
      modernDescription: 'Protected inside the natural volcanic horseshoe gorge, the thirty caves are illuminated with specialized fiber-optic museum lighting to preserve delicate ancient vegetable and mineral pigments.',
      keyChanges: [
        'Natural mud-and-cowdung tempera plaster stabilized by ASI and UNESCO chemical conservators',
        'Modern wooden viewing boardwalks prevent footfall vibrations and heat from visitors',
        'Special cool LED illumination installed to prevent ultraviolet pigment degradation',
        'Cave 19 and Cave 26 rock-cut chaitya stupas cleared of jungle sediment'
      ]
    },
    deepHistory: {
      originNarrative: 'Ajanta was constructed in two distinct phases: the earliest Hinayana caves were chiseled during the Satavahana era (2nd century BCE), while the monumental Mahayana caves with breathtaking murals were commissioned under Emperor Harishena of the Vakataka dynasty between 460 and 480 CE. Prime minister Varahadeva and royal feudatories funded royal master painters to adorn every square meter of wall and ceiling.',
      architecturalMarvel: 'The thirty caves are chiseled horizontally into the vertical Deccan trap basalt cliff. Caves 1, 2, 16, and 17 feature tempera frescoes painted on a ground of clay, cow dung, and rice husks covered with a thin wash of lime. Artists used lapis lazuli imported from Badakhshan (Afghanistan), ochre from local rocks, and lampblack to paint the Padmapani and Vajrapani—paintings whose three-dimensional shading and emotional depth anticipated Renaissance sfumato by a millennium.',
      declineOrPreservation: 'Following the sudden death of Emperor Harishena in 477 CE, artistic patronage abruptly ended. The monastic community dispersed by the 7th century, and the jungle swallowed the cliff until April 28, 1819, when British cavalry officer John Smith, tracking a tiger across the Waghur ravine, spotted the horseshoe arch of Cave 10.',
      culturalSignificance: 'Widely recognized as the font of all classical Asian Buddhist art, influencing the Dunhuang Mogao Caves in China, Sigiriya in Sri Lanka, and Horyu-ji in Japan.'
    },
    keyEventsTimeline: [
      { year: 'c. 150 BCE', title: 'First Hinayana Excavations', description: 'Satavahana patrons excavate Cave 9 and Cave 10 chaitya halls for Theravada Buddhist worship.', eraTag: 'Satavahana Phase' },
      { year: '462 CE', title: 'Vakataka Golden Age Begins', description: 'Emperor Harishena and court nobles initiate the second phase of magnificent viharas and murals.', eraTag: 'Vakataka Empire' },
      { year: '478 CE', title: 'Sudden Cessation of Work', description: 'Death of Harishena leads to political upheaval; artists leave murals unfinished in mid-brushstroke.', eraTag: 'Epoch End' },
      { year: '630 CE', title: 'Xuanzang Documents Ajanta', description: 'Chinese Buddhist pilgrim Xuanzang records the fame of the secluded mountain monastery.', eraTag: 'Chinese Chronicles' },
      { year: '1819 CE', title: 'John Smith Rediscovery', description: 'British officer John Smith discovers Cave 10 while tiger hunting and scratches his name on a pillar.', eraTag: 'Modern Discovery' },
      { year: '1983 CE', title: 'UNESCO Inscription', description: 'Inscribed as India’s first UNESCO World Heritage site for its epochal paintings and sculpture.', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Bodhisattva Padmapani Fresco Mural', estimatedDate: 'c. 475 CE', foundAt: 'Cave 1 Entrance Antechamber', currentHome: 'In-situ Cave 1, Ajanta', significance: 'The supreme icon of Asian painting: the compassionate Bodhisattva holding a blue lotus with delicate lowered eyes and pearled crown.', material: 'Tempera Fresco (Lapis Lazuli & Ochre)' },
      { name: 'Colossal Mahaparinirvana of Buddha (7-Meter Reclining Buddha)', estimatedDate: 'c. 480 CE', foundAt: 'Cave 26 Left Aisle', currentHome: 'In-situ Cave 26, Ajanta', significance: 'A 7-meter-long monolithic rock sculpture depicting the Buddha entering final Nirvana, surrounded by weeping disciples below and rejoicing devas above.', material: 'Monolithic Basalt' },
      { name: 'Princess at Her Toilette / The Dying Princess Fresco', estimatedDate: 'c. 470 CE', foundAt: 'Cave 16 Wall', currentHome: 'In-situ Cave 16, Ajanta', significance: 'Celebrated by art historians worldwide for its dramatic pathos, fluid bodily postures, and masterly brushwork.', material: 'Tempera on Clay Plaster' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'November to February is cool and pleasant; monsoon (July to September) transforms the Waghur gorge into a dramatic valley of cascading waterfalls.',
      openingHours: 'Open daily 09:00 – 17:00. Closed every Monday.',
      admissionInsight: 'Eco-friendly green buses ferry visitors from the T-junction amenities center to the cave entrance (4 km).',
      dressCodeAndEtiquette: 'Remove shoes before entering painted cave interiors. Flash photography is strictly forbidden to protect organic pigments.',
      mustSeeSightsOnSite: ['Cave 1 (Bodhisattva Padmapani & Vajrapani)', 'Cave 2 (Intricate painted ceiling mandalas)', 'Cave 19 (Stunning chaitya facade and rock stupa)', 'Cave 26 (Colossal Reclining Buddha)', 'The panoramic viewpoint across the gorge where John Smith stood in 1819'],
      travelTip: 'Walk up to the British Viewpoint at the opposite rim of the canyon for the iconic postcard view of the entire 30-cave horseshoe curve.',
      conservationRule: 'Strict prohibition on flash photography, touching walls, and carrying food inside the cave chambers.',
      climateNote: 'Carry a personal small flashlight as interior lighting is kept intentionally dim for pigment preservation.'
    },
    audioTour: {
      title: 'Whispers in the Volcanic Ravine: The Immortal Murals of Ajanta',
      duration: '4 min 45 sec',
      transcript: 'Step out of the blinding Maharashtra sunshine and into the cool silence of Cave 1. As your eyes adjust to the dim light, look up at the rock wall to your left. There, emerging from the stone, is the Bodhisattva Padmapani. Look at the curve of his body, the gentle tilt of his head, and the blue lotus flower held effortlessly between his fingers. Fifteen hundred years ago, a master painter mixed crushed lapis lazuli carried from the high mountains of Afghanistan with organic vegetable resins to paint those eyes. When you look into them, you are not looking at a decorative wall; you are gazing into the profound spiritual compassion of the Golden Age of India. Outside, empires rose and crumbled; inside this basalt sanctuary, that serene gaze has never wavered.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['rock-cut-viharas', 'fresco-tempera-painting', 'chaitya-stupas', 'lapis-lazuli-pigments', 'vakataka-dynasty', 'volcanic-gorge']
  },
  {
    id: 'konark-sun-temple-odisha',
    name: 'Konark Sun Temple (The Black Pagoda)',
    ancientName: 'Arka Kshetra / Surya Deula',
    location: {
      city: 'Konark, Puri District, Odisha',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 19.8876, lng: 86.0945 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '13th Century CE (c. 1250 CE)',
    civilization: 'Eastern Ganga Dynasty (King Narasimhadeva I)',
    heritageStatus: 'UNESCO World Heritage (1984)',
    heroImage: '/src/assets/images/konark_sun_temple_wheel_1792382972606.jpg',
    tagline: 'The colossal celestial chariot of the Sun God, carved with 24 intricate stone sundial wheels accurate to the minute.',
    summary: 'Built on the Bay of Bengal coastline by King Narasimhadeva I, the Konark Sun Temple is designed as a colossal stone chariot with 24 monumental wheels drawn by seven galloping horses, celebrating Surya, the Solar Deity.',
    reconstruction: {
      ancientTitle: 'The 70-Meter Sea-Facing Shikhara (1250 CE)',
      ancientDescription: 'The original soaring 70-meter main deul sanctum spire rose above the coastline, capped with a magnetic iron lodestone that European mariners claimed drew Portuguese sailing ships toward the shore.',
      modernTitle: 'The Colossal Jagamohana & Chariot Base',
      modernDescription: 'While the main spire collapsed in the 17th century, the massive 39-meter Jagamohana (assembly hall) and the 24 precision sundial chariot wheels stand as one of humanity’s greatest architectural triumphs.',
      keyChanges: [
        'Main 70m sanctum tower collapsed in antiquity; assembly hall (Jagamohana) filled with sand in 1903 to stabilize its masonry',
        '24 colossal stone chariot wheels fully conserved and exposed around the 4-meter high carved platform',
        'Chlorite stone Surya sculptures preserved in the exterior niches',
        'Extensive landscaped gardens established by ASI to shield the khondalite sandstone from coastal salt winds'
      ]
    },
    deepHistory: {
      originNarrative: 'Commissioned by King Narasimhadeva I of the Eastern Ganga Dynasty around 1250 CE to celebrate his military victories over the Turko-Afghan rulers of Bengal. Twelve hundred master sculptors under chief architect Bisu Maharana worked for twelve years, funded by twelve years of the kingdom’s imperial revenues.',
      architecturalMarvel: 'The entire temple is conceived as a monumental cosmological sundial. The 24 carved wheels represent the 24 fortnights (pakshas) of the solar year, while the eight primary spokes in each wheel represent the eight praharas (3-hour divisions) of the day. By observing where the shadow of the central axle hub falls across the inner and outer carved bead rings, visitors can determine the exact local solar time within a minute.',
      declineOrPreservation: 'Heavy monsoon cyclones and the subsidence of the sandy coastal foundation caused the soaring main tower to weaken and collapse by the 16th–17th centuries. In 1903, British Lieutenant-Governor Sir John Woodburn ordered the Jagamohana interior to be filled with sand and sealed with stone to prevent total collapse. In 1984, UNESCO inscribed Konark on the World Heritage List.',
      culturalSignificance: 'The zenith of Kalinga architectural geometry, stone astronomy, and erotic temple sculpture (mithuna panels) celebrating the cosmic vitality of the universe.'
    },
    keyEventsTimeline: [
      { year: '1250 CE', title: 'Consecration under Narasimhadeva I', description: 'Chief architect Bisu Maharana completes the Sun Temple on the shores of the Chandrabhaga River.', eraTag: 'Eastern Ganga Dynasty' },
      { year: '1568 CE', title: 'Kalapahad Raid & Damage', description: 'General Kalapahad invades Odisha; damage inflicted to religious finials and surrounding shrines.', eraTag: 'Sultanate Wars' },
      { year: '1626 CE', title: 'Aruna Stambha Moved to Puri', description: 'The monolithic 16-sided chlorite sun pillar is moved to the entrance of the Jagannath Temple in Puri.', eraTag: 'Puri Translation' },
      { year: '1903 CE', title: 'Jagamohana Sand-Filling Conservation', description: 'Sir John Woodburn orders the interior packed with sand to permanently save the hall from collapse.', eraTag: 'British Conservation' },
      { year: '1984 CE', title: 'UNESCO Inscription', description: 'Inscribed as a World Heritage site recognizing its unparalleled sculptural and architectural genius.', eraTag: 'World Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Chlorite Stone Surya (Rising Sun Deity)', estimatedDate: 'c. 1250 CE', foundAt: 'Southern niche of Sun Temple', currentHome: 'In-situ South Niche, Konark', significance: 'Carved from fine-grained greenish chlorite, showing Surya in high boots standing on a chariot driven by Aruna with seven horses below.', material: 'Polished Green Chlorite' },
      { name: 'Colossal War Elephant & Gajasimha Statues', estimatedDate: '13th Century CE', foundAt: 'Northern entrance stairway', currentHome: 'In-situ Temple Courtyard', significance: 'Monumental stone elephant crushing a vanquished warrior, symbolizing royal victory and imperial Eastern Ganga power.', material: 'Khondalite Stone Monolith' },
      { name: 'Martial Cymbal Player (Alasa Kanya)', estimatedDate: 'c. 1250 CE', foundAt: 'Upper roof terrace of Jagamohana', currentHome: 'National Museum, New Delhi', significance: 'Sensuous life-sized celestial musician playing brass cymbals on the stepped pyramidal roof tiers.', material: 'High-Relief Sandstone' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'October to March offers breezy coastal temperatures; attend the annual Konark Dance Festival in early December held against the illuminated temple backdrop.',
      openingHours: 'Open daily sunrise to sunset (06:00 – 19:00). High-tech light and sound show in evenings (19:00 & 20:00).',
      admissionInsight: 'Combined ASI e-ticket includes the Konark Sun Temple and the adjacent Archaeological Interpretation Centre.',
      dressCodeAndEtiquette: 'Comfortable footwear; walking shoes for extensive stone courtyards. Hats and sunscreen recommended for sunny coastal days.',
      mustSeeSightsOnSite: ['The 24 carved stone sundial wheels', 'The Natya Mandapa (Hall of Dance) with hundreds of sculpted classical dancers', 'The three chlorite stone Surya statues aligned to sunrise and sunset', 'The monolithic Gajasimha guardian statues'],
      travelTip: 'Visit at dawn (06:00 AM) to experience the first rays of the sun touching the eastern entrance stairs just as King Narasimhadeva planned eight centuries ago.',
      conservationRule: 'Do not climb onto the stone wheel rims or plinths; protective metal railings demarcate the walking circuit.',
      climateNote: 'Coastal humidity can be high. Drink coconut water from local stalls outside the main gate.'
    },
    audioTour: {
      title: 'Chariot of the Sun: Astronomical Wheels and Cosmic Time at Konark',
      duration: '4 min 35 sec',
      transcript: 'You are standing beside the famous southern chariot wheel of the Konark Sun Temple. Look closely at the carved spokes: each one is embellished with medallions showing gods, court dancers, and celestial musicians. But this is not merely art; it is an astronomical instrument of breathtaking precision. Look at where the shadow of the central hub falls: by reading the carved beads between the outer spokes, ancient priests could determine the exact minute of the day. Imagine twelve hundred stone sculptors working for twelve uninterrupted years on the edge of the Bay of Bengal, using iron beams to hoist a seventy-meter stone spire into the salt air. Here, in the golden light of Odisha, stone was taught to measure the passage of eternity.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['sundial-chariot-wheels', 'kalinga-deul-architecture', 'chlorite-surya-statues', 'bay-of-bengal-coastal', 'eastern-ganga-dynasty', 'dance-mandapas']
  },
  {
    id: 'golden-temple-amritsar',
    name: 'Harmandir Sahib (The Golden Temple)',
    ancientName: 'Sri Darbar Sahib / Amrit Sarovar',
    location: {
      city: 'Amritsar, Punjab',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 31.6200, lng: 74.8765 }
    },
    eraCategory: 'Early Modern & Renaissance (1500 - 1850 CE)',
    timePeriod: '1581 – 1604 CE (Gold foil applied 1830 CE)',
    civilization: 'Sikh Gurus & Sikh Empire (Maharaja Ranjit Singh)',
    heritageStatus: 'National Sacred Monument of India · Global Spiritual Center',
    heroImage: '/src/assets/images/golden_temple_amritsar_1792382991097.jpg',
    tagline: 'The gilded spiritual heart of Sikhism, set within the sacred Pool of Nectar with four doors open to all humanity.',
    summary: 'Founded by Guru Ram Das and inaugurated by Guru Arjan with the installation of the Adi Granth in 1604, Harmandir Sahib features a gold-plated central sanctum set in the sacred Amrit Sarovar lake, symbolizing universal brotherhood, equality, and 24/7 free communal kitchen (Langar).',
    reconstruction: {
      ancientTitle: 'The Sacred Island Sanctuary of Guru Arjan (1604 CE)',
      ancientDescription: 'Constructed on a low plinth with four open doorways facing the four cardinal directions to welcome people of every caste, race, and creed, accessed by a single marble causeway over the holy sarovar.',
      modernTitle: 'The Gilded Crown of Maharaja Ranjit Singh',
      modernDescription: 'Clad in 500 kilograms of pure 24-karat gold leaf by Maharaja Ranjit Singh in 1830, the multi-tier sanctum glows across the water, flanked by the white marble Akal Takht and the historic Clock Tower plaza.',
      keyChanges: [
        '500 kg of pure gold foil applied to the copper panels of the upper sanctum under Maharaja Ranjit Singh (1830)',
        'Extensive pietra dura (parchin kari) marble inlay floral art added to lower sanctum walls',
        'Akal Takht rebuilt following 1984 historical events with pristine white marble',
        'World’s largest community kitchen (Guru Ram Das Langar) modernized to serve 100,000 free hot meals daily'
      ]
    },
    deepHistory: {
      originNarrative: 'Guru Ram Das, the fourth Sikh Guru, excavated the sacred pool (Amrit Sarovar—Pool of the Nectar of Immortality) around 1577 on land granted by Emperor Akbar. His successor, Guru Arjan, designed the temple on a low elevation so that devotees must step downward in humility to enter, and invited Sufi Muslim saint Hazrat Mian Mir of Lahore to lay the foundation stone in 1589, demonstrating radical interfaith fellowship.',
      architecturalMarvel: 'Harmandir Sahib blends Indo-Islamic architecture with distinctive Sikh artistic motifs: fluted bulbous domes, curved bangaldar eaves, and delicate jharokha balconies. The sanctum is two storeys high, topped by a gilded dome representing an inverted lotus. Inside, the walls are adorned with gold filigree and embossed copper repoussé celebrating botanical patterns, while continuous 24-hour Gurbani kirtan devotional hymns resonate across the waters.',
      declineOrPreservation: 'Destroyed several times by Afghan invader Ahmad Shah Abdali during the 18th century, the Sikh misls and Khalsa army rebuilt the temple from the bed of the holy lake each time. Under the secular rule of Maharaja Ranjit Singh, "The Lion of Punjab," the temple received royal gold-plating and marble embellishments. It is administered today by the Shiromani Gurdwara Parbandhak Committee (SGPC).',
      culturalSignificance: 'The supreme spiritual epicenter of Sikhism and one of humanity’s most visited pilgrimage sites, celebrated worldwide for the radical egalitarian institution of Langar where billionaires and beggars sit shoulder-to-shoulder on the floor to share a free meal.'
    },
    keyEventsTimeline: [
      { year: '1577 CE', title: 'Excavation of Amrit Sarovar', description: 'Guru Ram Das founds the town of Ramdaspur and begins excavation of the holy pool.', eraTag: 'Sikh Guru Era' },
      { year: '1589 CE', title: 'Foundation Stone by Mian Mir', description: 'Sufi saint Hazrat Mian Mir lays the cornerstone at Guru Arjan’s invitation.', eraTag: 'Interfaith Unity' },
      { year: '1604 CE', title: 'Adi Granth Installed', description: 'Guru Arjan installs the sacred Sikh scripture, appointing Baba Buddha as the first head Granthi.', eraTag: 'Scriptural Inauguration' },
      { year: '1830 CE', title: 'Maharaja Ranjit Singh Gold Inlay', description: 'Maharaja Ranjit Singh donates 500 kg of gold to plate the sanctum, creating the "Golden Temple".', eraTag: 'Sikh Empire' },
      { year: 'Present', title: 'Langar World Record of Seva', description: 'Serving over 100,000 free freshly cooked meals 365 days a year powered entirely by volunteers.', eraTag: 'Living Living Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Original 18th-Century Gilded Copper Inscription Plaque', estimatedDate: '1830 CE', foundAt: 'Above entrance of central sanctum', currentHome: 'In-situ Harmandir Sahib Sanctum', significance: 'Gold inscription recording Maharaja Ranjit Singh’s humble inscription stating he is a mere humble servant of the Guru.', material: 'Embossed Gold-Plated Copper' },
      { name: 'Sikh Khalsa Historic Wootz Steel Weapons & Armour', estimatedDate: '17th–18th Century CE', foundAt: 'Toshakhana (Royal Treasury)', currentHome: 'Central Sikh Museum, Clock Tower', significance: 'Chakrams, talwars, and personal battle axes belonging to Guru Gobind Singh and Sikh generals.', material: 'Damascened Wootz Crucible Steel' },
      { name: 'Illuminated Guru Granth Sahib Historical Manuscripts', estimatedDate: '17th Century CE', foundAt: 'Sikh Reference Library collections', currentHome: 'Central Sikh Museum, Amritsar', significance: 'Hand-illuminated calligraphic scriptures featuring gold leaf borders and Gurmukhi script.', material: 'Parchment with Natural Pigments' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'October to March offers pleasant crisp weather; visit at 04:00 AM for the Palki Sahib ceremonial procession or 20:00 for magical night illuminations.',
      openingHours: 'Open 24 hours a day, 365 days a year. The sanctum doors never close.',
      admissionInsight: 'Free entry for all human beings regardless of nationality, race, or religion. Free cloakroom for luggage and shoes.',
      dressCodeAndEtiquette: 'Heads must be covered at all times (scarves provided free at entrance). Shoes and socks must be deposited; wash feet in the shallow running water channels before stepping onto the marble parikrama. No alcohol, tobacco, or meat allowed.',
      mustSeeSightsOnSite: ['The central gilded Harmandir Sahib sanctum', 'The sacred Amrit Sarovar water circumambulation path', 'Akal Takht (Seat of Temporal Authority)', 'The Guru Ram Das Langar Hall (experience the communal meal and volunteer seva)', 'Central Sikh Museum'],
      travelTip: 'Participate in the communal Langar meal: sit cross-legged in the vast dining hall and taste the hot dal and roti prepared by selfless volunteers.',
      conservationRule: 'Silence and reverence in the inner sanctum; swimming in the holy sarovar restricted to designated male and female bathing ghats.',
      climateNote: 'Marble flooring is heated with burlap runners in cold winter mornings and cooled with water sprays in summer.'
    },
    audioTour: {
      title: 'The Golden Lotus upon Holy Waters: Harmandir Sahib',
      duration: '4 min 50 sec',
      transcript: 'You are stepping down the white marble steps into the wide courtyard of Harmandir Sahib. Take off your shoes and feel the cool marble beneath your feet. Listen: floating across the blue surface of the Amrit Sarovar is the live chanting of Gurbani kirtan, unbroken for four hundred years. Look across the causeway at the golden sanctum: notice that unlike medieval European cathedrals that rose like steep fortresses, this shrine was deliberately built at the lowest elevation of the land, surrounded by four open doors facing north, south, east, and west. In a world fractured by division, this temple proclaims that every human being—regardless of religion, caste, wealth, or origin—is equally welcome in the court of the divine. Smell the cardamom and ghee from the Langar hall nearby: here, one hundred thousand souls are fed every single day with love, dignity, and grace.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['gilded-copper-dome', 'amrit-sarovar-lake', 'four-open-doorways', 'langar-community-kitchen', 'parchin-kari-marble', 'sikh-empire']
  },
  {
    id: 'kedarnath-temple-uttarakhand',
    name: 'Kedarnath Temple (Himalayan Jyotirlinga)',
    ancientName: 'Kedara Khanda / Kedareshwar',
    location: {
      city: 'Rudraprayag District, Uttarakhand',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 30.7352, lng: 79.0669 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '8th Century CE (Adi Shankaracharya on Mahabharata Origins)',
    civilization: 'Katyuri Dynasty & Adi Shankaracharya Restoration',
    heritageStatus: 'Highest Jyotirlinga of Lord Shiva · Char Dham Pilgrimage',
    heroImage: '/src/assets/images/kedarnath_himalaya_temple_1792383781830.jpg',
    tagline: 'Perched at 3,583 meters amidst glacial Himalayan peaks, engineered with interlocking stone ashlar blocks that defy avalanches.',
    summary: 'Standing near the Mandakini river source and Chorabari Glacier at 11,755 feet, Kedarnath is the highest of the 12 Jyotirlingas. Built of massive interlocking grey granite slabs bound without mortar, the temple miraculously survived 400 years buried under Little Ice Age glaciers and the catastrophic 2013 flash floods.',
    reconstruction: {
      ancientTitle: 'The Glacial Ashlar Citadel (8th Century CE)',
      ancientDescription: 'Constructed by master masons using colossal dressed granite slabs interlocking with iron dowels, facing Mount Kedar Dome, while pilgrim ascetics journeyed on foot through high alpine passes carrying birch-bark scriptures.',
      modernTitle: 'Restored Himalayan Sanctuary',
      modernDescription: 'Following the 2013 glacier debris flood, a massive protective three-tier curved stone barrier (reinforced by the Geological Survey of India) was built behind the temple, and the Samadhi of Adi Shankaracharya was reconstructed with a subterranean meditative cave.',
      keyChanges: [
        'Massive protective curved boulder barrier engineered behind the sanctum following the 2013 glacial flash flood',
        'Adi Shankaracharya underground Samadhi memorial and statue inaugurated in 2021',
        'Traditional pedestrian and mule pilgrimage path rebuilt along the western flank of the Mandakini valley',
        'Winter seat rituals transferred semi-annually to Omkareshwar Temple at Ukhimath during heavy snowfall'
      ]
    },
    deepHistory: {
      originNarrative: 'According to the Mahabharata and Skanda Purana, the Pandavas sought redemption from Lord Shiva after the Kurukshetra War. Shiva eluded them in the form of a celestial bull; when Bhima recognized him, the bull dove into the earth, with the hump remaining at Kedarnath, arms at Tungnath, face at Rudranath, navel at Madhyamaheshwar, and hair at Kalpeshwar (the sacred Panch Kedar). In the 8th century CE, philosopher Adi Shankaracharya revived the Himalayan pilgrimage circuit and attained Mahasamadhi behind the sanctum.',
      architecturalMarvel: 'The temple is built on an elevated stone plinth (6 feet high) of massive, precision-dressed grey granite blocks. Masons used interlocking mortise-and-tenon joints with molten iron clamps rather than cement mortar. During seismic events or glacial avalanches, the stone blocks vibrate slightly to absorb tectonic energy without shattering. Geologists from Wadia Institute confirmed the temple was buried under ice for over 400 years between 1300 and 1700 CE without structural collapse.',
      declineOrPreservation: 'Maintained for centuries by Rawal chief priests belonging to the Veerashaiva Lingayat tradition of Karnataka. Monitored by the Shri Badrinath-Kedarnath Temple Committee (BKTC) and conserved with scientific guidance from the Archaeological Survey of India.',
      culturalSignificance: 'The ultimate sacred summit of Shaivite pilgrimage, representing unwavering spiritual austerity amidst the awe-inspiring grandeur of the Himalayas.'
    },
    keyEventsTimeline: [
      { year: 'Antiquity', title: 'Pandava Consecration', description: 'Pandava brothers construct the first stone altar over the bull’s hump after the Kurukshetra War.', eraTag: 'Mahabharata Era' },
      { year: 'c. 820 CE', title: 'Adi Shankaracharya Revival', description: 'Adi Shankaracharya consecrates the stone temple structure and enters Mahasamadhi.', eraTag: 'Advaita Renaissance' },
      { year: '1300–1700 CE', title: 'The 400-Year Glacial Burial', description: 'Little Ice Age blankets the temple completely beneath glacial ice and moraine; structure emerges undamaged.', eraTag: 'Little Ice Age' },
      { year: '2013 CE', title: 'Survival of the Great Flood', description: 'A massive boulder (Bheem Shila) lodges behind the temple, diverting glacial floodwaters and saving the sanctum.', eraTag: 'Miracle of Bheem Shila' },
      { year: '2021 CE', title: 'Reconstructed Shankaracharya Samadhi', description: 'New subterranean meditation pavilion and 12-foot chlorite stone statue of Shankaracharya unveiled.', eraTag: 'Modern Restoration' }
    ],
    excavatedArtifacts: [
      { name: 'Triangular Monolithic Rock Lingam (Sadashiva Hump)', estimatedDate: 'Prehistoric / 8th Century CE', foundAt: 'Garbhagriha interior', currentHome: 'In-situ Sanctum, Kedarnath', significance: 'The natural triangular bedrock manifestation of Shiva venerated without chisel alteration.', material: 'Natural Granite Bedrock' },
      { name: 'Ancient Katyuri Inscribed Brass Temple Bells', estimatedDate: '11th Century CE', foundAt: 'Mandapa ceiling rafters', currentHome: 'In-situ Mandapa Hall', significance: 'Cast bronze bells dedicated by Garhwal and Kumaon kings ringing deep resonant tones.', material: 'Cast Bell Metal' },
      { name: 'Adi Shankaracharya Staff Relic Depiction', estimatedDate: 'c. 820 CE', foundAt: 'Behind central sanctum', currentHome: 'Shankaracharya Samadhi Memorial', significance: 'Commemorates the Advaita Vedanta master who united India’s four corners through monastic pithas.', material: 'Carved Black Chlorite' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'May to June and September to October. Temple closes on Bhai Dooj (November) for winter and reopens on Akshaya Tritiya (April/May).',
      openingHours: '04:00 – 21:00 daily (Closed for cleaning 15:00 – 17:00).',
      admissionInsight: 'Free entry for darshan. Mandatory biometric registration via Uttarakhand Tourism portal. Helicopter shuttle tickets available from Guptkashi, Phata, and Sersi.',
      dressCodeAndEtiquette: 'Warm heavy thermal woolens and down jackets mandatory; temperatures drop below freezing at night. Remove footwear outside the stone mandapa.',
      mustSeeSightsOnSite: ['The Garbhagriha natural rock lingam', 'Bheem Shila (the massive boulder that saved the temple in 2013)', 'Adi Shankaracharya Samadhi behind the shrine', 'Bhairavnath Temple perched on the adjacent ridge with views of Kedar Dome', 'Chorabari (Gandhi Sarovar) glacier lake trail'],
      travelTip: 'Start the 16 km trek from Gaurikund before 06:00 AM to acclimatize gradually; pony, palanquin, and helicopter options are available.',
      conservationRule: 'Strict prohibition on plastic, littering, and photography inside the inner sanctum.',
      climateNote: 'High-altitude sickness (AMS) is possible above 3,000m. Drink plenty of water and carry portable oxygen canisters.'
    },
    audioTour: {
      title: 'Voice of the Glacial Peak: The Eternal Stone of Kedarnath',
      duration: '4 min 50 sec',
      transcript: 'You are standing upon the stone flagstones of Kedarnath at nearly twelve thousand feet above sea level. Feel the icy wind blowing down from the glaciers of Mount Kedar Dome. Look up at this temple: its granite slabs were carved and interlocking twelve hundred years ago. Think about what this stone has witnessed: for four centuries during the Little Ice Age, this entire temple was buried under glacial ice. When the ice retreated, the stone emerged untouched. In 2013, when mountain rivers carried boulders the size of houses down this valley, a colossal rock came to rest just meters behind this sanctum, splitting the floodwaters in two. Touch this granite: in the silence of the high Himalayas, you are touching the unbroken endurance of faith that has outlasted glaciers, earthquakes, and time itself.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['himalayan-hill-temple', 'interlocking-granite-ashlar', 'highest-jyotirlinga', 'panch-kedar-pilgrimage', 'glacial-terrain', 'katyuri-architecture']
  },
  {
    id: 'kashi-vishwanath-varanasi',
    name: 'Kashi Vishwanath & The Sacred Ghats of Varanasi',
    ancientName: 'Avimukta Kshetra / Anandavan / Benares',
    location: {
      city: 'Varanasi, Uttar Pradesh',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 25.3109, lng: 83.0107 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: 'Continuous 3,000 Years (Temple rebuilt 1780 CE by Ahilyabai Holkar)',
    civilization: 'Ancient Kashi Kingdom, Maratha Empire & Modern India',
    heritageStatus: 'Supreme Spiritual Capital of India · National Sacred Corridor',
    heroImage: '/src/assets/images/kashi_vishwanath_ghats_1792383798214.jpg',
    tagline: 'The eternal spiritual city of Lord Shiva along the sacred Ganges, where humanity has prayed uninterrupted for three millennia.',
    summary: 'Described by Mark Twain as "older than history, older than tradition, older even than legend", Kashi (Varanasi) is the spiritual epicenter of Hinduism. The Kashi Vishwanath Jyotirlinga, rebuilt in 1780 by Queen Ahilyabai Holkar and topped with a gold spire by Maharaja Ranjit Singh, connects directly to the ancient stone bathing ghats along the sacred crescent curve of the Ganga.',
    reconstruction: {
      ancientTitle: 'The Classical City of Light (Kashi 500 BCE)',
      ancientDescription: 'Hundreds of sandstone ashrams, Sanskrit gurukuls, and philosophical debates along the pristine green waters of the Ganges where Gautama Buddha, Adi Shankara, and Mahavira walked the riverbank stone steps.',
      modernTitle: 'The Grand Kashi Vishwanath Corridor (2021)',
      modernDescription: 'A state-of-the-art 50,000-square-meter pedestrian marble corridor directly linking the sacred sanctum to Manikarnika and Lalita Ghats, clearing dense encroaching buildings while preserving 40 ancient heritage sub-shrines.',
      keyChanges: [
        'Kashi Vishwanath Corridor inaugurated in 2021 providing unobstructed direct access from the Ganges riverfront',
        'Gold plating of the 15.5m spire with 1 ton of pure gold by Maharaja Ranjit Singh preserved and cleaned',
        'Restoration of 84 stone bathing ghats along the 7-kilometer crescent riverfront',
        'Heritage sound & light shows and eco-friendly CNG pilgrim boats introduced along the river'
      ]
    },
    deepHistory: {
      originNarrative: 'In Hindu cosmology, Kashi is the eternal city standing on the trident of Lord Shiva, never resting on the earth. It was here that Shiva manifested as the infinite pillar of cosmic light (Jyotirlinga) that pierced through the heavens. Adi Shankaracharya composed his famous Kashi Panchakam here, and saint-poet Goswami Tulsidas composed the Ramcharitmanas along Assi Ghat.',
      architecturalMarvel: 'The central temple is built in the traditional Nagara style with an inner sanctum housing the smooth black basalt lingam set in a silver reservoir. In 1835, Maharaja Ranjit Singh of Punjab donated 1,000 kg of pure gold to plate the twin spires. Along the riverfront, 84 monumental stone ghats (including Dashashwamedh, Manikarnika, and Harishchandra) function as giant civil engineering retaining walls protecting the city’s high clay bluffs from the turbulent monsoon floodwaters of the Ganges.',
      declineOrPreservation: 'Destroyed and rebuilt multiple times across medieval history (by Qutb-ud-din Aibak, the Delhi Sultanate, and Mughal Emperor Aurangzeb in 1669). In 1780, Queen Ahilyabai Holkar of Malwa (Indore) rebuilt the present stone temple adjacent to the site. In 2021, the government completed the transformative Kashi Vishwanath Corridor.',
      culturalSignificance: 'The preeminent spiritual center of Indian civilization: it is believed that anyone who breathes their last in Kashi attains immediate Moksha (spiritual liberation).'
    },
    keyEventsTimeline: [
      { year: 'c. 1000 BCE', title: 'Antiquity of Kashi', description: 'Varanasi flourishes as an international trading metropolis for muslin textiles, perfumes, and philosophy.', eraTag: 'Vedic Epoch' },
      { year: '528 BCE', title: 'Buddha’s Sarnath Sermon', description: 'Gautama Buddha crosses the Ganges at Kashi to deliver his first sermon at nearby Sarnath.', eraTag: 'Buddhist Origins' },
      { year: '8th Century CE', title: 'Adi Shankara in Kashi', description: 'Adi Shankaracharya debates leading scholars of Vedanta and composes the Kashi Panchakam.', eraTag: 'Classical Advaita' },
      { year: '1780 CE', title: 'Ahilyabai Holkar Reconstruction', description: 'Queen Ahilyabai Holkar of Indore constructs the historic present stone temple complex.', eraTag: 'Maratha Revival' },
      { year: '1835 CE', title: 'Maharaja Ranjit Singh Gold Spires', description: 'The Lion of Punjab donates one ton of pure gold to gild the temple shikharas.', eraTag: 'Sikh Empire Patronage' },
      { year: '2021 CE', title: 'Kashi Vishwanath Corridor', description: 'New 50,000 sq m marble plaza links the temple directly to the riverfront ghats.', eraTag: 'Modern Renaissance' }
    ],
    excavatedArtifacts: [
      { name: 'Silver Chhatra of Kashi Vishwanath', estimatedDate: '18th Century CE', foundAt: 'Central sanctum canopy', currentHome: 'In-situ Temple Garbhagriha', significance: 'Intricately embossed silver umbrella suspended over the Jyotirlinga during royal pujas.', material: 'Embossed Silver' },
      { name: 'Ganga Aarti Brass Deepam Lamps (108 Wicks)', estimatedDate: 'Traditional Heritage', foundAt: 'Dashashwamedh Ghat', currentHome: 'Ganga Seva Nidhi Archive', significance: 'Multi-tier tiered brass lamps weighing 5 kg used in the daily sunset Ganga Aarti ceremony.', material: 'Cast Brass' },
      { name: 'Tulsidas Handwritten Ramcharitmanas Manuscripts', estimatedDate: 'c. 1574 CE', foundAt: 'Sankat Mochan & Assi Ghat collections', currentHome: 'Tulsi Ghat Archive, Varanasi', significance: 'The original Awadhi vernacular poetic composition of the Ramayana written on handmade paper.', material: 'Handmade Rag Paper with Lampblack Ink' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'October to March offers cool sunny weather; attend Dev Deepawali (Karthik Purnima) when all 84 ghats are illuminated with one million earthen clay lamps.',
      openingHours: '03:00 – 23:00 daily. Mangala Aarti at 03:00; Sandhya Aarti at 19:00.',
      admissionInsight: 'Free general darshan via the Corridor. Special morning Mangala Aarti tickets must be booked online in advance.',
      dressCodeAndEtiquette: 'Traditional modest attire required for inner sanctum entry. Cell phones, belts, and leather items must be deposited in electronic lockers.',
      mustSeeSightsOnSite: ['The gilded Kashi Vishwanath sanctum', 'Morning boat ride along the 84 ghats at sunrise', 'The evening Ganga Aarti ceremony at Dashashwamedh Ghat', 'Manikarnika Ghat (the ancient burning ghat where fires have burned continuously for millennia)', 'Annapurna Devi temple and Kal Bhairav Temple (the Kotwal of Kashi)'],
      travelTip: 'Hire a traditional wooden rowboat at Assi Ghat at 05:30 AM to watch the sun rise over the Ganges while prayer bells ring across the stone ghats.',
      conservationRule: 'Strict prohibition on plastic, soap, or non-biodegradable offerings into the holy river.',
      climateNote: 'Summer temperatures in May and June can exceed 44°C. Winter mornings are misty with pleasant 14°C afternoons.'
    },
    audioTour: {
      title: 'City of Light: The River of Life and Liberation in Kashi',
      duration: '4 min 45 sec',
      transcript: 'You are floating in a wooden boat upon the sacred waters of the Ganges at dawn. Look toward the western shore: rise after rise of honey-colored sandstone ghats, ancient palaces, and gold-tipped temple towers glow in the morning light. Listen: across the water drift the rhythmic clanging of temple bells, Sanskrit mantras, and the splash of pilgrims offering morning water to the rising sun. For three thousand unbroken years, human beings have gathered on these very steps to pray, to meditate, to celebrate birth, and to release their ashes into this river. Mark Twain wrote that Kashi is older than history itself. As the scent of sandalwood and river mist fills the air, you are witnessing the living heartbeat of humanity’s oldest continuously inhabited spiritual capital.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['kashi-jyotirlinga', 'sacred-ghats-retaining-walls', 'gilded-shikhara', 'ganges-river-corridor', 'maratha-ahilyabai-revival', 'nagara-architecture']
  },
  {
    id: 'mahakaleshwar-ujjain',
    name: 'Mahakaleshwar Temple & Sacred Ujjain',
    ancientName: 'Avanti / Ujjayini / Mahakalavana',
    location: {
      city: 'Ujjain, Madhya Pradesh',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 23.1827, lng: 75.7682 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: 'Ancient Avanti (Rebuilt 1734 CE by Maratha General Ranoji Shinde)',
    civilization: 'Avanti Mahajanapada, Paramara Dynasty & Maratha Scindias',
    heritageStatus: 'Only South-Facing (Dakshinmukhi) Jyotirlinga · Kumbh Mela Host',
    heroImage: '/src/assets/images/ujjain_mahakal_temple_1792383814470.jpg',
    tagline: 'The supreme Lord of Time and Death, home to the sacred pre-dawn Bhasma Aarti and the ancient astronomical Prime Meridian of India.',
    summary: 'Located on the banks of the sacred Shipra River in the ancient kingdom of Avanti, Mahakaleshwar is unique among the 12 Jyotirlingas for its Dakshinmukhi (south-facing) swayambhu lingam. Ujjain was the Greenwich of ancient Indian astronomy where Varahamihira calculated planetary motions and Emperor Vikramaditya established the Vikrama Samvat calendar.',
    reconstruction: {
      ancientTitle: 'The Classical Meridian Capital of Avanti (400 CE)',
      ancientDescription: 'The astronomical capital of India with water clocks and shadow gnomons, celebrated by poet Kalidasa in Meghaduta, with towering multi-tier wooden and sandstone temples overlooking the Shipra riverbanks.',
      modernTitle: 'The Mahakal Lok Corridor (2022)',
      modernDescription: 'A sprawling 900-meter cultural corridor decorated with 108 intricately sculpted sandstone pillars depicting Shiva’s Ananda Tandava dance, artificial lakes (Rudra Sagar), and restored bathing ghats.',
      keyChanges: [
        'Mahakal Lok mega-corridor constructed in 2022 expanding the pilgrim area eightfold around Rudra Sagar lake',
        'Pre-dawn Bhasma Aarti modernized with controlled cow-dung ash (kanda bhasma) to protect the porous stone lingam',
        'Subterranean sanctum (Garbhagriha) protected with automated silver railing systems for crowd safety',
        'Ram Ghat along the Shipra River revived for the quadriennial Simhastha Kumbh Mela'
      ]
    },
    deepHistory: {
      originNarrative: 'Ujjain (ancient Ujjayini) was one of the premier 16 Mahajanapadas and the capital of legendary King Vikramaditya. Sacred texts identify Mahakaleshwar as the ruler of Kaal (both Time and Death). The temple is three-tiered: Mahakaleshwar on the subterranean lowest level, Omkareshwar on the middle level, and Nagchandreshwar on the upper level (opened to the public only once a year on Nag Panchami).',
      architecturalMarvel: 'The temple showcases a distinctive blend of Bhumija, Maratha, and Chalukya architectural styles. Its shikhara rises majestically above the subterranean sanctum. The sanctum lingam faces south—a direction associated with Yama (death), signifying that Shiva alone transcends and conquers mortality. Ancient Indian astronomers chose Ujjain as the Prime Meridian (zero degrees longitude) and the intersection of the Tropic of Cancer, leading Sawai Jai Singh II to build the Jantar Mantar (Vedh Shala) observatory here in 1725.',
      declineOrPreservation: 'Destroyed in 1234 CE by Sultan Iltutmish of Delhi, the lingam was concealed in the nearby Kotiteertha Kunda. In the 18th century, Maratha general Ranoji Shinde (founder of the Scindia dynasty of Gwalior) meticulously rebuilt the temple in 1734. Administered today by the Shri Mahakaleshwar Temple Management Committee.',
      culturalSignificance: 'One of the seven sacred Moksha-giving cities (Sapta Puri) of India and host of the grand Simhastha Kumbh Mela celebrated every twelve years on the banks of the Shipra River.'
    },
    keyEventsTimeline: [
      { year: 'c. 600 BCE', title: 'Avanti Mahajanapada Capital', description: 'Ujjayini flourishes as the trading capital connecting north Indian kingdoms to coastal ports.', eraTag: 'Mahajanapada Era' },
      { year: 'c. 57 BCE', title: 'Vikramaditya Era Begins', description: 'Emperor Vikramaditya repels Saka invaders and founds the Vikrama Samvat calendar.', eraTag: 'Vikramaditya Era' },
      { year: '505 CE', title: 'Varahamihira Astronomy', description: 'Royal astronomer Varahamihira completes the Pancha-Siddhantika at the Ujjain observatory.', eraTag: 'Astronomical Prime Meridian' },
      { year: '1734 CE', title: 'Ranoji Shinde Rebuilds Temple', description: 'Maratha ruler Ranoji Scindia reconstructs the temple complex after medieval destruction.', eraTag: 'Maratha Restoration' },
      { year: '2022 CE', title: 'Shri Mahakal Lok Inauguration', description: 'Massive 900-meter corridor opened featuring 108 mural pillars and Rudra Sagar lake.', eraTag: 'Modern Heritage' }
    ],
    excavatedArtifacts: [
      { name: 'Swayambhu Dakshinmukhi Jyotirlinga', estimatedDate: 'Immemorial Antiquity', foundAt: 'Subterranean sanctum', currentHome: 'In-situ Sanctum, Mahakaleshwar', significance: 'The only south-facing Jyotirlinga on Earth, self-manifested from bedrock.', material: 'Porous Sacred Basalt' },
      { name: 'Koti Tirtha Kunda Stone Inscriptions', estimatedDate: '11th Century CE (Paramara Period)', foundAt: 'Temple stepped tank', currentHome: 'In-situ Temple Complex', significance: 'Sanskrit inscriptions documenting Paramara king donations and rituals of the sacred water tank.', material: 'Engraved Sandstone' },
      { name: 'Jantar Mantar Samrat Yantra Sundial', estimatedDate: '1725 CE', foundAt: 'Vedh Shala Observatory, Ujjain', currentHome: 'In-situ Vedh Shala, Ujjain', significance: 'Gigantic precision stone sundial measuring local solar time and stellar declination.', material: 'Plastered Red Sandstone' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'October to March offers pleasant weather; attend Maha Shivratri (February/March) or the Simhastha Kumbh Mela.',
      openingHours: '04:00 – 23:00 daily. Bhasma Aarti operates 04:00 – 06:00 (advance booking required).',
      admissionInsight: 'General darshan is free. Special online tickets required for Garbhagriha Bhasma Aarti access with strict traditional dress codes.',
      dressCodeAndEtiquette: 'For Garbhagriha Bhasma Aarti: Men must wear unstitched cotton/silk dhotis and dhotis with angavastram (no stitched garments); women must wear traditional sarees. Western clothes prohibited in the inner sanctum.',
      mustSeeSightsOnSite: ['The subterranean Jyotirlinga sanctum', 'The pre-dawn Bhasma Aarti ceremony', 'The 900m Shri Mahakal Lok Corridor with 108 mural pillars', 'Kal Bhairav Temple (famous for sacred liquor offerings)', 'Harsiddhi Temple (Shakti Peeth where Sati’s elbow fell)', 'Ram Ghat on the Shipra River'],
      travelTip: 'Book the Bhasma Aarti online at least 30 to 45 days in advance on the official Mahakal website as capacity is strictly limited.',
      conservationRule: 'Strict prohibition on footwear, leather belts, and mobile cameras inside the Garbhagriha.',
      climateNote: 'Summer temperatures in Madhya Pradesh can touch 42°C in May. Winter mornings are pleasantly brisk.'
    },
    audioTour: {
      title: 'Lord of Time and Death: The Ancient Meridian of Mahakal',
      duration: '4 min 40 sec',
      transcript: 'You are stepping into the deep stone sanctum of Mahakaleshwar in the predawn hours before sunrise. In the dim glow of brass oil lamps, listen to the thunderous beating of the damaru and the deep blowing of conch shells. Here, in the subterranean silence, sits the only south-facing Jyotirlinga in all of India. For thousands of years, priests have performed the Bhasma Aarti at four in the morning, applying sacred ash to the lingam. Look at that stone: this city was the Prime Meridian of the ancient world. Here, where the Tropic of Cancer crosses the sacred Shipra River, ancient mathematicians calculated the movements of the planets and declared that time itself is sacred. In Mahakal, you do not fear time; you stand before the stillness at the very heart of the cosmos.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['dakshinmukhi-jyotirlinga', 'bhasma-aarti-ritual', 'astronomical-prime-meridian', 'mahakal-lok-corridor', 'shipra-river-ghats', 'maratha-scindia-revival']
  },
  {
    id: 'kamakhya-temple-assam',
    name: 'Kamakhya Temple: Supreme Shakti Peeth',
    ancientName: 'Kamarupa / Nilachal Hill',
    location: {
      city: 'Guwahati, Assam',
      country: 'India',
      region: 'Asia',
      coordinates: { lat: 26.1664, lng: 91.7054 }
    },
    eraCategory: 'Medieval & Golden Ages (500 - 1500 CE)',
    timePeriod: '8th – 17th Century CE (Rebuilt 1565 CE by King Nara Narayana)',
    civilization: 'Kamarupa Dynasty, Koch Kingdom & Ahom Dynasty',
    heritageStatus: 'Prime Maha Shakti Peeth · Tantric Spiritual Center',
    heroImage: '/src/assets/images/kamakhya_shakti_peeth_1792383830165.jpg',
    tagline: 'Perched atop the lush Nilachal Hill, the prime Mahapitha of Goddess Sati celebrating the primordial creative power of feminine nature.',
    summary: 'Standing on the forested Nilachal Hill overlooking the mighty Brahmaputra River, Kamakhya is the most revered of all 51 Shakti Peethas. Rebuilt in 1565 by Koch King Nara Narayana, the temple features the unique hybrid "Nilachal style" architecture—a cruciform base supporting a ribbed beehive-shaped dome. Inside the dark subterranean cave sanctum, there is no sculpted idol; instead, devotees worship a natural rock fissure fed by an underground perennial spring.',
    reconstruction: {
      ancientTitle: 'The Classical Tantric Citadel of Kamarupa (8th Century CE)',
      ancientDescription: 'A multi-tier stone temple complex surrounded by sacred forest groves and tantric yoga caves, visited by adepts seeking mastery of the Ten Mahavidyas (Goddesses of Transcendent Wisdom).',
      modernTitle: 'The Gilded Beehive Nilachal Sanctuary',
      modernDescription: 'The red-stoned beehive shikhara adorned with terracotta panels of dancing deities, flanked by the shrines of the Ten Mahavidyas (Kali, Tara, Shodashi, Bhuvaneshwari, Bhairavi, Chhinnamasta, Dhumavati, Bagalamukhi, Matangi, and Kamala).',
      keyChanges: [
        'Stone temple demolished in 1553 by general Kalapahad, then rebuilt in 1565 with the innovative brick-and-stone Nilachal dome',
        'Upper roof panels gilded with pure gold leaf donated by devotees and regional monarchs',
        'Traditional rock-cut pedestrian stairways flanked by modern funicular rail for elderly pilgrims',
        'Ambubachi Mela festival infrastructure upgraded to accommodate over 500,000 annual attendees'
      ]
    },
    deepHistory: {
      originNarrative: 'According to the Kalika Purana and Devi Bhagavata, when Lord Shiva carried the charred body of Goddess Sati in his grief-stricken cosmic Tandava dance, Lord Vishnu released his Sudarshana Chakra to dismember the body into 51 pieces that fell across the subcontinent. The Yoni (creative womb) of Sati fell on Nilachal Hill, turning the hillock blue (Nila Parvat) and establishing Kamakhya as the supreme Mahapitha of maternal cosmic energy.',
      architecturalMarvel: 'The temple is the prototype of the indigenous "Nilachal style" of Assamese architecture: a combination of traditional Nagara curvilinear profile with a ribbed hemispherical dome resembling an inverted beehive or Buddhist stupa. The sanctum (Garbhagriha) is located twenty steps down inside a dark, natural subterranean rock cave. Within this cave is an oblong natural depression in the living bedrock measuring twenty centimeters wide, through which an underground freshwater mountain spring flows constantly.',
      declineOrPreservation: 'Destroyed during medieval raids in the 16th century, it was resurrected by King Nara Narayana and his brother Chilarai of the Koch Dynasty in 1565. Later, the great Ahom Dynasty kings (Rudra Singha and Pramatta Singha) patronized the temple, adding subsidiary shrines for the Ten Mahavidyas. It is managed today by the Kamakhya Bordeuri Samaj.',
      culturalSignificance: 'The undisputed center of Tantric Shakta philosophy, celebrating the sacred biological rhythm of nature during the annual Ambubachi Mela when Mother Earth’s fertility is venerated.'
    },
    keyEventsTimeline: [
      { year: 'Antiquity', title: 'Shakti Peeth Inception', description: 'According to Puranic scripture, Sati’s womb falls on Nilachal Hill following Vishnu’s Sudarshana Chakra.', eraTag: 'Puranic Genesis' },
      { year: '8th–10th C. CE', title: 'Kamarupa Dynasty Stone Temples', description: 'Early stone basements and ornate sculptural plinths carved by Kamarupa kings.', eraTag: 'Kamarupa Epoch' },
      { year: '1565 CE', title: 'Koch King Nara Narayana Rebuilding', description: 'King Nara Narayana and general Chilarai rebuild the temple with the iconic Nilachal beehive dome.', eraTag: 'Koch Renaissance' },
      { year: '1696–1714 CE', title: 'Ahom Dynasty Patronage', description: 'Ahom King Rudra Singha expands the complex and establishes royal grants for daily worship.', eraTag: 'Ahom Imperial Era' },
      { year: 'Present', title: 'Ambubachi Mela Global Gathering', description: 'Largest annual festival of Eastern India celebrating the natural regeneration of the Earth.', eraTag: 'Living Living Tantra' }
    ],
    excavatedArtifacts: [
      { name: 'Natural Bedrock Spring (Yoni Mudra)', estimatedDate: 'Natural Geological Formation', foundAt: 'Subterranean Garbhagriha cave', currentHome: 'In-situ Cave Sanctum, Kamakhya', significance: 'The natural stone fissure and perennial spring venerated as the cosmic womb of the Goddess.', material: 'Natural Rock Bedrock with Spring Water' },
      { name: 'Koch Royal Terracotta Bas-Relief Panels', estimatedDate: '1565 CE', foundAt: 'Outer sanctum wall niches', currentHome: 'In-situ Temple Walls', significance: 'Portraits of King Nara Narayana and general Chilarai with depictions of classical dancers and musicians.', material: 'Kiln-Fired Terracotta' },
      { name: 'Ahom Royal Copper Plate Endowment Grants', estimatedDate: '17th Century CE', foundAt: 'Temple treasury archives', currentHome: 'Assam State Museum, Guwahati', significance: 'Historical inscriptions in Assamese and Sanskrit granting lands, elephant divisions, and temple upkeep.', material: 'Engraved Heavy Copper Plate' }
    ],
    visitorGuide: {
      bestTimeToVisit: 'October to March offers cool pleasant hill weather; attend the world-famous Ambubachi Mela in late June (monsoon season).',
      openingHours: '05:30 – 13:00 and 14:30 – 17:30 daily. Temple doors close during the three days of Ambubachi in June.',
      admissionInsight: 'General queue is free but wait times can be several hours. VIP defense/online defense passes available via Kamakhya Devalaya portal.',
      dressCodeAndEtiquette: 'Traditional modest clothing required (sarees, salwar suits, dhotis or pants). Footwear must be deposited outside the temple gate.',
      mustSeeSightsOnSite: ['The subterranean natural spring cave sanctum', 'The Ten Mahavidya temples surrounding Nilachal Hill', 'Bhubaneswari Temple at the mountain summit with panoramic views of the Brahmaputra River', 'The sacred Saubhagya Kunda stepped pond'],
      travelTip: 'Walk to the hilltop Bhubaneswari Temple at sunset for an unforgettable panorama of the golden Brahmaputra River winding through the green Assam valley.',
      conservationRule: 'Photography strictly prohibited inside the cave sanctum; maintain silence on the subterranean stone steps.',
      climateNote: 'Monsoon season (June–August) brings heavy tropical rains and lush green vegetation across Nilachal Hill.'
    },
    audioTour: {
      title: 'The Primordial Mother on Blue Hill: The Living Spring of Kamakhya',
      duration: '4 min 40 sec',
      transcript: 'You are walking up the stone path through the tropical bamboo groves of Nilachal Hill in Assam. Below you, the vast, silvery Brahmaputra River stretches toward the horizon. Walk through the red stone gateway and descend twenty steps into the cool subterranean darkness of the cave. Notice something extraordinary: there is no marble statue here, no gold-faced idol. In the center of this cave, lit only by small mustard-oil lamps, is a fissure in the natural bedrock through which a natural mountain spring flows with crystal-clear water. For thousands of years, long before temples had walls or domes, human beings came to this cave to venerate the sacred creative power that brings all life, all forests, and all generations into being. In Kamakhya, nature and divinity are one and the same.',
      soundscapeType: 'sacred_bells'
    },
    architecturalThemes: ['nilachal-beehive-dome', 'prime-shakti-peeth', 'natural-spring-cave', 'tantric-mahavidyas', 'assam-koch-ahom-dynasty', 'brahmaputra-hill-sanctuary']
  }
];

export const HISTORICAL_ERAS: Era[] = [
  'All Eras',
  'Bronze & Ancient (Pre-500 BCE)',
  'Classical Antiquity (500 BCE - 500 CE)',
  'Medieval & Golden Ages (500 - 1500 CE)',
  'Early Modern & Renaissance (1500 - 1850 CE)'
];

export const REGIONS: { id: string; label: string }[] = [
  { id: 'All Regions', label: 'All Continents' },
  { id: 'India', label: 'India (Bharat)' },
  { id: 'Europe', label: 'Europe' },
  { id: 'Middle East', label: 'Middle East' },
  { id: 'Asia', label: 'Rest of Asia' },
  { id: 'Americas', label: 'Americas' },
  { id: 'Africa', label: 'Africa' }
];

export const HISTORICAL_TRIVIA = [
  {
    id: 1,
    question: 'How did Roman engineers ensure that the Colosseum could be completely evacuated in under ten minutes?',
    options: [
      'Through 80 numbered arched exits called vomitoria with organized numbered seating tokens',
      'By using mechanical water slides built into the aqueduct system',
      'By only permitting Roman senators and nobles to attend events',
      'Through underground secret tunnels exclusively for the public'
    ],
    correctIndex: 0,
    explanation: 'The 80 ground-level arches (vomitoria) fed directly into annular corridors and staircases. Spectators held tesserae (clay shards with gate numbers), allowing 50,000 spectators to exit swiftly and smoothly.'
  },
  {
    id: 2,
    question: 'Why did the Nabataeans carve Al-Khazneh (The Treasury) in Petra from the top down instead of bottom up?',
    options: [
      'To prevent falling rubble from crushing the completed lower carvings and to use natural rock ledges as scaffolding',
      'Because their religious texts forbade standing on the ground while carving',
      'Because they lowered sculptors in leather baskets from mountain tops',
      'To capture the morning sunrise first before the valley filled with shadows'
    ],
    correctIndex: 0,
    explanation: 'By working from the top down into the living sandstone cliff, Nabataean stone sculptors could carve natural steps and working platforms in the bedrock, avoiding the need for colossal wooden scaffolding in a desert devoid of timber.'
  },
  {
    id: 3,
    question: 'What ingenious architectural feature protects Machu Picchu’s stone buildings from severe Andean earthquakes?',
    options: [
      'Dry-stone ashlar masonry where blocks "dance" during tremors and resettle back into place without mortar',
      'Deep underground volcanic spring cushions',
      'Elastic rubber joints harvested from Amazonian tree sap',
      'Steel anchoring cables forged by ancient Incan blacksmiths'
    ],
    correctIndex: 0,
    explanation: 'Incan master masons precision-shaped granite blocks without mortar. During earthquakes, the blocks shift and vibrate slightly with the seismic waves, then resettle into their original position without cracking.'
  },
  {
    id: 4,
    question: 'Why are the four outer minarets of the Taj Mahal deliberately tilted slightly outward by two degrees?',
    options: [
      'So that in the event of a catastrophic earthquake, they would collapse away from the central marble tomb',
      'Because the ground along the Yamuna river was shifting unevenly',
      'To align with the seasonal solstices of the summer sky',
      'It was a construction error by the Persian master architect'
    ],
    correctIndex: 0,
    explanation: 'Mughal architect Ustad Ahmad Lahori deliberately leaned each 40-meter minaret outward by two degrees, so that any seismic shockwave causing a tower to fall would direct the debris safely away from the sacred central dome.'
  },
  {
    id: 5,
    question: 'Why does Angkor Wat uniquely face West, unlike almost all other classical Khmer temples which face East?',
    options: [
      'It was dedicated to Vishnu whose cardinal direction is west, and served as King Suryavarman II’s royal funerary monument',
      'The architects ran out of stone on the eastern causeway',
      'To face the ancient capital of the Roman Empire',
      'To align with the annual monsoon winds of Southeast Asia'
    ],
    correctIndex: 0,
    explanation: 'In Hindu cosmology, west is the direction associated with the god Vishnu and the transition to the afterlife, confirming Suryavarman II planned the sanctuary as his personal cosmic tomb and portal to the heavens.'
  },
  {
    id: 6,
    question: 'How did Rashtrakuta masons sculpt the massive multi-storey Kailasa Temple at Ellora from a single mountain cliff?',
    options: [
      'They excavated 200,000 tons of solid basalt top-down from the mountain crest without scaffolding',
      'They assembled pre-cut basalt bricks carried from the Arabian Sea',
      'They used volcanic lava channels to melt the rock into shape',
      'They carved individual rooms separately and hoisted them together'
    ],
    correctIndex: 0,
    explanation: 'Rashtrakuta sculptors in the 8th century CE started from the mountain peak, cutting three vertical trenches into the Charanandri hills and carving towers, ceilings, and life-size elephants top-down, leaving zero margin for structural error.'
  },
  {
    id: 7,
    question: 'How did Chola engineers hoist the 80-ton monolithic granite capstone to the 66-meter summit of the Brihadeeswarar Temple in 1010 CE?',
    options: [
      'By constructing a 6-kilometer gently inclined earthen ramp using elephants and wooden rollers',
      'Using steam-powered pulley cranes designed by Arab traders',
      'By carving the capstone directly at the summit from an existing hill',
      'Using counterweighted bronze water towers'
    ],
    correctIndex: 0,
    explanation: 'Emperor Rajaraja Chola’s engineers built a 6-km earthen ramp starting from the village of Sarapallam, rolling the 80-ton single granite block up to the vimana apex using elephant teams and timber rollers.'
  },
  {
    id: 8,
    question: 'Why has the 1,600-year-old Gupta Iron Pillar of Delhi stood exposed to rain and sun without rusting?',
    options: [
      'Ancient Indian metallurgists forged it with high phosphorus content that formed a protective misawite layer',
      'It was coated in secret beeswax harvested from Himalayan hives',
      'It was cast in an underground airtight chamber',
      'It contains high amounts of modern stainless steel chromium'
    ],
    correctIndex: 0,
    explanation: 'Metallurgists from IIT Kanpur confirmed that ancient Indian smiths used charcoal that left high phosphorus in the iron, forming an amorphous protective passive film of misawite (iron oxyhydroxide) that permanently shields the metal from oxygen.'
  },
  {
    id: 9,
    question: 'What acoustic phenomenon makes the 56 granite pillars of the Vittala Temple at Hampi world famous?',
    options: [
      'Each slender column rings with distinct musical frequencies matching Indian instruments when tapped',
      'They echo the ocean waves from the Arabian Sea 300 miles away',
      'They amplify whispers across the courtyard using hidden hollow pipes',
      'They hum continuously during full moon nights due to wind pressure'
    ],
    correctIndex: 0,
    explanation: 'The Ranga Mandapa pillars at Hampi are carved from solid resonant granite. Light tapping on the clusters of secondary shafts emits precise musical notes imitating classical instruments like the mridangam, damaru, and ghatam.'
  },
  {
    id: 10,
    question: 'How did Harappan engineers at Dholavira maintain an oasis city in the arid salt flats of the Rann of Kutch 4,500 years ago?',
    options: [
      'Through a network of 16 interconnected stone-cut stepwell reservoirs storing 300,000 cubic meters of rainwater',
      'By desalinating Arabian Sea water using boiling pots',
      'By piping water through bronze aqueducts from the Himalayas',
      'By digging a 100-mile canal to the Ganges River'
    ],
    correctIndex: 0,
    explanation: 'Dholavira featured the world’s most sophisticated prehistoric water management system: dams built across two seasonal monsoon streams diverted water into 16 stone-cut interconnected reservoirs capable of sustaining the city through multi-year droughts.'
  }
];
