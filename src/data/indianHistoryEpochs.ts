export interface IndianHistoryEpoch {
  id: string;
  epochName: string;
  timeSpan: string;
  rulingDynasties: string[];
  keyRulers: string[];
  civilizationalBreakthroughs: string[];
  architecturalStyle: string;
  monumentHighlights: string[];
  narrativeOverview: string;
  philosophicalTraditions: string[];
  economicAndTradeRoutes: string;
  wikipediaUrl?: string;
}

export const INDIAN_HISTORY_EPOCHS: IndianHistoryEpoch[] = [
  {
    id: 'indus-valley',
    epochName: '1. Indus Valley (Harappan) Civilization',
    timeSpan: 'c. 3300 BCE – 1300 BCE (Mature: 2600 – 1900 BCE)',
    rulingDynasties: ['Proto-Civic Guilds & Merchant Councils (Indus Civilization)'],
    keyRulers: ['Egalitarian civic leaders & Priest-King class'],
    civilizationalBreakthroughs: [
      'World’s first standardized orthogonal grid town planning',
      'Underground covered terracotta sanitation and drainage networks',
      'Standardized binary and decimal weights and measurement system',
      'Lost-wax bronze metallurgy (The Dancing Girl of Mohenjo-Daro)',
      'Intercontinental maritime trade with Sumer and Mesopotamia (Meluhha)'
    ],
    architecturalStyle: 'Kiln-fired uniform mudbrick architecture, monumental public baths, and multi-reservoir hydraulic engineering.',
    monumentHighlights: [
      'Dholavira Stepwell Water Reservoirs (Kutch, Gujarat)',
      'The Great Bath and Granary of Mohenjo-Daro',
      'Lothal Tidal Dockyard & Bead Factory (Gujarat)'
    ],
    narrativeOverview: 'Spanning over 1 million square kilometers along the Indus and Sarasvati river basins, the Harappan civilization was the most expansive urban civilization of antiquity. Harappan cities like Dholavira and Lothal featured flood-resistant stone fortifications and massive interconnected rock-cut stepwells capable of storing 300,000 cubic meters of rainwater.',
    philosophicalTraditions: ['Pashupati proto-Shiva worship', 'Mother Goddess cults', 'Sacred tree (Peepal) and river veneration'],
    economicAndTradeRoutes: 'Maritime trade routes linking Lothal port to Bahrain, Dilmun, and the Persian Gulf with exports of carnelian beads, copper, and fine cotton textiles.'
  },
  {
    id: 'vedic-mahajanapadas',
    epochName: '2. Vedic Era & The 16 Mahajanapadas',
    timeSpan: 'c. 1500 BCE – 321 BCE',
    rulingDynasties: ['Kuru-Panchala', 'Haryanka', 'Shishunaga', 'Nanda Dynasty', 'Vajji Republic'],
    keyRulers: ['King Bimbisara', 'Ajatashatru', 'Mahapadma Nanda', 'Gautama Buddha', 'Vardhamana Mahavira'],
    civilizationalBreakthroughs: [
      'Composition of the Rigveda, Samaveda, Yajurveda, and Atharvaveda',
      'Formulation of Upanishadic non-dualist philosophy (Advaita & Vedanta)',
      'Birth of Buddhism (Four Noble Truths) and Jainism (Ahimsa / Non-violence)',
      'Panini’s Ashtadhyayi (formal generative grammar of Sanskrit)',
      'Development of early iron ploughshares and second urbanization along the Gangetic Plains'
    ],
    architecturalStyle: 'Wooden and mudbrick city fortifications with moat enclosures, early rock-cut ascetic shelters (Barabar caves).',
    monumentHighlights: [
      'Bodh Gaya Mahabodhi Temple site (Bihar)',
      'Cyclopean Wall of Rajgir (ancient Magadhan stone ramparts)',
      'Sarnath Deer Park (First Turning of the Wheel of Law)'
    ],
    narrativeOverview: 'This epoch witnessed the composition of humanity’s oldest philosophical texts and the crystallization of the sixteen Great Realms (Mahajanapadas) stretching from Gandhara to Anga. In Magadha, spiritual revolutions emerged as Gautama Buddha and Tirthankara Mahavira challenged orthodoxy, establishing monastic orders and non-violence as foundational civilizational virtues.',
    philosophicalTraditions: ['Vedanta and Upanishads', 'Buddhism', 'Jainism', 'Samkhya and Yoga philosophies'],
    economicAndTradeRoutes: 'The Uttarapatha (Great Northern Road) linking Taxila in the northwest to Pataliputra and Tamralipti in Bengal.'
  },
  {
    id: 'mauryan-empire',
    epochName: '3. The Mauryan Empire & The Edicts of Ashoka',
    timeSpan: '322 BCE – 185 BCE',
    rulingDynasties: ['Mauryan Imperial Dynasty'],
    keyRulers: ['Chandragupta Maurya', 'Chanakya (Kautilya)', 'Bindusara', 'Ashoka the Great'],
    civilizationalBreakthroughs: [
      'Chanakya’s Arthashastra (seminal treatise on statecraft, espionage, and economics)',
      'Unification of nearly the entire Indian subcontinent under a single centralized legal administration',
      'The Edicts of Ashoka: moral edicts in Prakrit, Greek, and Aramaic advocating animal rights, religious tolerance, and public hospitals',
      'Creation of the Lion Capital of Ashoka (now the National Emblem of India)',
      'Transmission of Buddhist philosophical missions to Sri Lanka, Greece, Egypt, and Southeast Asia'
    ],
    architecturalStyle: 'High-polish Mauryan stone carving, monolithic freestanding pillars, and toroidal brick stupas with stone balustrades (toranas).',
    monumentHighlights: [
      'The Great Stupa of Sanchi (Madhya Pradesh)',
      'Ashoka Pillar and Lion Capital at Sarnath',
      'Barabar Hill Rock-Cut Caves (Lomas Rishi Cave facade, Bihar)'
    ],
    narrativeOverview: 'Forged after Chandragupta Maurya repelled the armies of Alexander’s general Seleucus Nicator, the Mauryan Empire governed over 50 million people. Following the bloody Kalinga War in 261 BCE, Emperor Ashoka underwent a profound spiritual transformation, renouncing military conquest in favor of Dharma-vijaya (Conquest through Righteousness) and carving moral edicts into mountain cliffs across the subcontinent.',
    philosophicalTraditions: ['Ashoka’s Moral Dhamma', 'Theravada Buddhist Sanghas', 'Jaina Sallekhana traditions'],
    economicAndTradeRoutes: 'Pataliputra-Taxila royal highway, ocean trade to Alexandria and Sri Lanka via Barygaza (Bharuch).'
  },
  {
    id: 'classical-gupta',
    epochName: '4. The Classical Golden Age (Gupta, Satavahana & Vakataka)',
    timeSpan: 'c. 200 BCE – 600 CE (Gupta Zenith: 320 – 550 CE)',
    rulingDynasties: ['Gupta Empire', 'Satavahana Dynasty', 'Vakataka Dynasty', 'Western Kshatrapas'],
    keyRulers: ['Chandragupta I', 'Samudragupta (Napoleon of India)', 'Chandragupta II Vikramaditya', 'Harishena', 'Gautamiputra Satakarni'],
    civilizationalBreakthroughs: [
      'Aryabhata’s Aryabhatiya: invention of mathematical zero, decimal place-value, estimation of Pi (3.1416), and spherical rotating Earth theory',
      'Varahamihira’s astronomical treatises and Sushruta/Charaka medicinal compendiums',
      'Kalidasa’s Sanskrit literary masterpieces (Shakuntala, Meghaduta)',
      'Invention of rustless high-carbon wootz crucible steel (Delhi Iron Pillar)',
      'Nalanda University established (world’s premier residential university with 10,000 scholars)'
    ],
    architecturalStyle: 'Mastery of rock-cut Buddhist frescoes (Ajanta), freestanding structural Hindu stone temples (Dashavatara Temple, Deogarh), and Gupta stone sculpture.',
    monumentHighlights: [
      'Ajanta Caves Frescoes & Sculptures (Aurangabad, Maharashtra)',
      'The Rust-Resistant Iron Pillar of Delhi (Mehrauli)',
      'Nalanda Mahavihara Ruins (Bihar)',
      'Udayagiri Caves rock-cut Varaha avatar (Madhya Pradesh)'
    ],
    narrativeOverview: 'Regarded as India’s Classical Golden Age, this era saw unprecedented achievements in mathematics, metallurgy, sculpture, and philosophy. At Ajanta, monks and painters used vegetable pigments to create breathtaking frescoes that defined Asian art, while Aryabhata laid the foundations for trigonometry and heliocentric planetary science centuries before Europe.',
    philosophicalTraditions: ['Classical Hinduism (Puranic synthesis)', 'Mahayana Buddhism (Nagarjuna & Asanga)', 'Nalanda Buddhist logic'],
    economicAndTradeRoutes: 'The Roman-Indian spice and silk maritime route recorded in the Periplus of the Erythraean Sea, linking Muziris (Kerala) and Arikamedu to Rome.'
  },
  {
    id: 'medieval-southern-temples',
    epochName: '5. The Great Medieval Dynasties (Cholas, Rashtrakutas, Vijayanagara)',
    timeSpan: '600 CE – 1565 CE',
    rulingDynasties: ['Imperial Cholas', 'Rashtrakutas', 'Pallavas', 'Western Chalukyas', 'Vijayanagara Empire', 'Eastern Gangas', 'Chandelas'],
    keyRulers: ['Rajaraja Chola I', 'Rajendra Chola I', 'Krishna I (Rashtrakuta)', 'Krishnadevaraya (Vijayanagara)', 'Narasimhadeva I'],
    civilizationalBreakthroughs: [
      'Chola Maritime Armada: oceanic expeditions conquering Srivijaya (Indonesia/Malaysia) and controlling the Malacca Straits',
      'Kailasa Temple at Ellora: largest monolithic rock-cut monument in human history carved from a single basalt cliff top-down without scaffolding',
      'Chola lost-wax bronze casting: creation of the iconic Nataraja (Cosmic Dancer Shiva), hailed globally as a pinnacle of sacred sculpture',
      'Astronomical architecture: Konark Sun Temple designed as a celestial chariot with 24 sundial wheels precise to the minute',
      'Musical stone architecture: Vittala Temple at Hampi with stone pillars that ring musical notes when tapped'
    ],
    architecturalStyle: 'Dravidian Vimana towers, gopuram gateways, monolithic basalt excavation, and Nagara curvilinear temple spires.',
    monumentHighlights: [
      'Kailasa Temple, Cave 16 (Ellora, Maharashtra)',
      'Brihadeeswarar Temple (Thanjavur, Tamil Nadu)',
      'Hampi Vittala Complex & Stone Chariot (Karnataka)',
      'Konark Sun Temple (Odisha)',
      'Khajuraho Group of Temples (Madhya Pradesh)'
    ],
    narrativeOverview: 'This epoch generated some of humanity’s most breathtaking religious architecture. In Thanjavur, Rajaraja Chola hoisted an 80-ton single granite block atop a 66-meter stone Vimana tower using a 6-kilometer earthen ramp. In the Deccan, Rashtrakuta masons removed 200,000 tons of solid basalt to carve the entire multi-story Kailasa temple out of the mountain. In Hampi, the Vijayanagara Empire built an empire so affluent that foreign travellers described gemstones and pearls being sold by the measure in open street bazaars.',
    philosophicalTraditions: ['Bhakti Movement (Alvars, Nayanars, Ramanuja, Basaveshwara, Adi Shankara)', 'Dvaita and Advaita Vedanta'],
    economicAndTradeRoutes: 'Spice trade across the Indian Ocean from the ports of Nagapattinam, Calicut, and Mangalore to China, Arabia, and East Africa.'
  },
  {
    id: 'delhi-sultanate-rajputs',
    epochName: '6. Delhi Sultanate & Rajput Kingdoms',
    timeSpan: '1192 CE – 1526 CE',
    rulingDynasties: ['Mamluk (Slave) Dynasty', 'Khalji', 'Tughlaq', 'Lodhi', 'Mewar & Marwar Rajputs', 'Kachwahas of Amber'],
    keyRulers: ['Qutb-ud-din Aibak', 'Iltutmish', 'Raziya Sultana', 'Alauddin Khalji', 'Rana Sanga', 'Rana Kumbha'],
    civilizationalBreakthroughs: [
      'Birth of Indo-Islamic architectural syncretism: combining true arches and geometric arabesques with Hindu trabeated stone carvings',
      'The Great Wall of Kumbhalgarh: second-longest continuous defensive wall in the world (36 km)',
      'Amir Khusrau: father of Urdu literature, inventor of the sitar and tabla musical traditions',
      'Sophisticated stepwell hydrology: Rani ki Vav (Queen’s Stepwell in Gujarat) and Chand Baori',
      'Hill Forts of Rajasthan engineered into desert scarps with self-sufficient water storage'
    ],
    architecturalStyle: 'Indo-Saracenic arch and dome architecture, multi-tiered carved minarets, intricate stepped stepwells, and fortified Rajput mountain ramparts.',
    monumentHighlights: [
      'Qutb Minar Complex & Alai Darwaza (Delhi)',
      'Kumbhalgarh Fort & 36km Mountain Wall (Rajasthan)',
      'Rani ki Vav Stepwell (Patan, Gujarat)',
      'Chittorgarh Fort (Rajasthan)'
    ],
    narrativeOverview: 'The confluence of Central Asian Islamic engineering and indigenous Indian stonecraft created the distinctive Indo-Saracenic aesthetic. The Qutb Minar rose 72.5 meters in Delhi as a red sandstone triumph of epigraphic calligraphy and fluted balconies. Meanwhile, Rajput warrior clans built impregnable desert citadels at Chittorgarh and Kumbhalgarh that sustained multi-year sieges through ingenious rainwater collection.',
    philosophicalTraditions: ['Sufism (Nizamuddin Auliya, Khwaja Moinuddin Chishti)', 'Nirguna Bhakti (Kabir, Guru Nanak, Ravidas)'],
    economicAndTradeRoutes: 'Trans-Asian caravan routes connecting Delhi to Samarkand, Shiraz, and Venice via Cambay and Surat.'
  },
  {
    id: 'mughal-empire',
    epochName: '7. The Mughal Empire & The Imperial Golden Age',
    timeSpan: '1526 CE – 1757 CE',
    rulingDynasties: ['Mughal Empire'],
    keyRulers: ['Babur', 'Akbar the Great', 'Jahangir', 'Shah Jahan', 'Aurangzeb'],
    civilizationalBreakthroughs: [
      'Akbar’s policy of Sulh-i-Kul (Universal Peace) and Din-i-Ilahi interfaith debates at Ibadat Khana',
      'Creation of the Taj Mahal: widely hailed as the supreme masterpiece of Indo-Islamic symmetry and marble craftsmanship',
      'Mughal Miniature Painting workshops synthesizing Persian, Indian, and Renaissance European styles',
      'Manufacture of 25% of the world’s industrial GDP during the 17th century (cotton textiles, calico, spices, saltpetre)',
      'Amer Fort’s Sheesh Mahal: palace of mirrors reflecting candlelight into thousands of starry constellations'
    ],
    architecturalStyle: 'White Makrana marble inlaid with semi-precious stones (pietra dura), Charbagh quadrangle gardens, bulbous domes, and red sandstone imperial palaces.',
    monumentHighlights: [
      'The Taj Mahal (Agra, Uttar Pradesh)',
      'Amer Fort & Sheesh Mahal (Jaipur, Rajasthan)',
      'Fatehpur Sikri Imperial Capital & Buland Darwaza',
      'Red Fort & Jama Masjid (Old Delhi)'
    ],
    narrativeOverview: 'Reaching from the borders of Persia to the Bay of Bengal, the Mughal Empire oversaw an extraordinary cultural and economic flourishing. Emperor Akbar built the red sandstone capital of Fatehpur Sikri and married Rajput princesses to forge an inclusive imperial coalition. A generation later, Shah Jahan employed 20,000 artisans to build the Taj Mahal in Agra as an earthly mirror of celestial paradise.',
    philosophicalTraditions: ['Syncretic Bhakti-Sufi poetry (Tulsidas, Surdas, Mirabai, Dara Shikoh’s Sirr-i-Akbar)'],
    economicAndTradeRoutes: 'Surat maritime corridor to Western Europe and Southeast Asia; Indian hand-woven calicos and muslins clothed royalty across Europe.'
  },
  {
    id: 'maratha-sikh-independence',
    epochName: '8. The Maratha & Sikh Empires to National Independence',
    timeSpan: '1674 CE – 1947 CE',
    rulingDynasties: ['Maratha Confederacy (Chhatrapati Shivaji Maharaj & Peshwas)', 'Sikh Empire (Maharaja Ranjit Singh)', 'British Colonial Era & Freedom Struggle'],
    keyRulers: ['Chhatrapati Shivaji Maharaj', 'Peshwa Baji Rao I', 'Maharaja Ranjit Singh', 'Rani Lakshmibai of Jhansi', 'Netaji Subhash Chandra Bose', 'Mahatma Gandhi'],
    civilizationalBreakthroughs: [
      'Shivaji Maharaj’s Ganimi Kava (guerrilla mountain warfare tactics) and creation of the Maratha Navy (Father of Indian Navy)',
      'Equal religious rights, protection of women, and abolition of feudal forced labor under Shivaji’s Hindavi Swarajya',
      'Maharaja Ranjit Singh’s secular state, modernizing the Sikh Khalsa Army and gold-plating Harmandir Sahib (Golden Temple)',
      'The 1857 First War of Independence (Mangal Pandey, Rani Lakshmibai)',
      'Mahatma Gandhi’s Satyagraha (Non-Violent Resistance) that inspired civil rights movements worldwide'
    ],
    architecturalStyle: 'Impregnable basalt hill forts in the Western Ghats (Raigad, Pratapgad), gilded Sikh sacred architecture, and colonial Indo-Gothic structures.',
    monumentHighlights: [
      'Raigad Hill Fort (Capital of Chhatrapati Shivaji Maharaj, Maharashtra)',
      'Golden Temple (Harmandir Sahib, Amritsar, Punjab)',
      'Gateway of India & Chhatrapati Shivaji Maharaj Terminus (Mumbai)',
      'Sabarmati Ashram (Gujarat)'
    ],
    narrativeOverview: 'In 1674, Chhatrapati Shivaji Maharaj was crowned at Raigad Fort, establishing the Maratha Empire under the banner of Hindavi Swarajya (Self-Rule). With unyielding mastery of Western Ghats mountain citadels, the Marathas broke imperial dominance across central India. In Punjab, Maharaja Ranjit Singh established a powerful secular kingdom. By the 20th century, a mass freedom movement led by figures like Mahatma Gandhi, Subhash Chandra Bose, and Bhagat Singh dismantled colonial rule, leading to the birth of the world’s largest democracy in 1947.',
    philosophicalTraditions: ['Satyagraha & Ahimsa', 'Sikh Khalsa principles of Seva and Equality', 'Maharashtra Bhakti saints (Sant Tukaram, Ramdas)'],
    economicAndTradeRoutes: 'Modern port cities of Bombay, Calcutta, and Madras connecting India into global industrial shipping lanes.'
  }
];

export interface IndianHistoricalPlace {
  id: string;
  name: string;
  indigenousName: string;
  state: string;
  cityOrDistrict: string;
  region: 'North India' | 'South India' | 'Western India' | 'Eastern & Central India';
  epochId: string;
  epochLabel: string;
  timePeriod: string;
  dynastyOrPatron: string;
  architecturalCategory: 
    | 'Rock-Cut Sanctuary' 
    | 'Dravidian Temple' 
    | 'Nagara Temple' 
    | 'Hill Fortress' 
    | 'Mughal & Indo-Islamic' 
    | 'Stepwell & Water Engineering' 
    | 'Buddhist Stupa & Monastic University' 
    | 'Sacred Center'
    | 'Himalayan & Hill Station Temple'
    | 'Shakti Peeth'
    | 'Jyotirlinga & Mahatirth';
  sacredTradition?: 'Himalayan Hill Shrine' | 'Maha Shakti Peeth' | '12 Jyotirlingas' | 'Char Dham' | 'Panch Kedar' | 'Tantric Pitha';
  altitudeOrRiver?: string;
  unescoSite: boolean;
  summary: string;
  engineeringMarvel: string;
  touristGuide: {
    bestSeason: string;
    timings: string;
    mustSeeHighlight: string;
    travelTip: string;
  };
  linkedSiteId?: string;
  thumbnailBadge: string;
  wikipediaUrl?: string;
}

export const ALL_INDIAN_HISTORICAL_PLACES: IndianHistoricalPlace[] = [
  // 1. INDUS VALLEY & BRONZE AGE
  {
    id: 'dholavira-kutch',
    name: 'Dholavira: Harappan Metropolis',
    indigenousName: 'Kotada Timba',
    state: 'Gujarat',
    cityOrDistrict: 'Khadir Bet, Kutch',
    region: 'Western India',
    epochId: 'indus-valley',
    epochLabel: 'Indus Valley Civilization',
    timePeriod: 'c. 3000 BCE – 1500 BCE',
    dynastyOrPatron: 'Harappan Merchant Guilds & Civic Councils',
    architecturalCategory: 'Stepwell & Water Engineering',
    unescoSite: true,
    summary: 'One of the five largest Harappan cities in the world, fortified in stone with a citadel, middle town, lower town, and a grand ceremonial stadium.',
    engineeringMarvel: 'Revolutionary hydraulic network with 16 interconnected reservoirs carved into sandstone bedrock capable of storing 300,000 m³ of rainwater.',
    touristGuide: {
      bestSeason: 'November to February during the Rann of Kutch festival season.',
      timings: '06:00 – 18:00 daily.',
      mustSeeHighlight: 'The world’s oldest giant 10-symbol signboard inscription and rock-cut stepwell reservoir.',
      travelTip: 'Combine with the White Rann of Kutch; stay in Dhordo or Dholavira village tents.'
    },
    thumbnailBadge: 'Ancient Hydro-Engineering'
  },
  {
    id: 'lothal-dockyard',
    name: 'Lothal Ancient Maritime Port',
    indigenousName: 'Lothal (Mound of the Dead)',
    state: 'Gujarat',
    cityOrDistrict: 'Bhal Region, Ahmedabad District',
    region: 'Western India',
    epochId: 'indus-valley',
    epochLabel: 'Indus Valley Civilization',
    timePeriod: 'c. 2400 BCE – 1900 BCE',
    dynastyOrPatron: 'Indus Valley Maritime Guilds',
    architecturalCategory: 'Stepwell & Water Engineering',
    unescoSite: false,
    summary: 'The world’s earliest known tidal dockyard, equipped with basin sluice gates connecting to the Sabarmati River and the Arabian Sea.',
    engineeringMarvel: 'Tidal dock basin (214m × 36m) engineered with kiln-fired bricks to prevent siltation and maintain water levels for seafaring dhows.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '10:00 – 17:00 (Closed Fridays).',
      mustSeeHighlight: 'The brick tidal dockyard, bead factory workshops, and the ASI on-site archaeological museum.',
      travelTip: 'Located 80 km from Ahmedabad, making it an easy day excursion.'
    },
    thumbnailBadge: 'World’s Oldest Tidal Dock'
  },

  // 2. VEDIC, BUDDHIST & MAHAJANAPADAS
  {
    id: 'mahabodhi-temple-bodh-gaya',
    name: 'Mahabodhi Temple Complex',
    indigenousName: 'Mahabodhi Mahavihara',
    state: 'Bihar',
    cityOrDistrict: 'Bodh Gaya, Gaya District',
    region: 'Eastern & Central India',
    epochId: 'vedic-mahajanapadas',
    epochLabel: 'Vedic & Mahajanapadas',
    timePeriod: '3rd Century BCE (Ashoka) & 5th Century CE (Gupta)',
    dynastyOrPatron: 'Emperor Ashoka & Gupta Empire',
    architecturalCategory: 'Buddhist Stupa & Monastic University',
    unescoSite: true,
    summary: 'The supreme holiest pilgrimage site in Buddhism marking the exact location where Prince Siddhartha Gautama attained Supreme Enlightenment (Buddhahood).',
    engineeringMarvel: 'One of the earliest full-brick structural temples in India, soaring 55 meters with classic pyramidal shikhara.',
    touristGuide: {
      bestSeason: 'October to March when Buddhist monks from Tibet, Thailand, Japan, and Sri Lanka gather.',
      timings: '05:00 – 21:00 daily.',
      mustSeeHighlight: 'The sacred Bodhi Tree (Ficus religiosa) and the polished Ashokan Diamond Throne (Vajrasana).',
      travelTip: 'Join the quiet dawn meditation beneath the Bodhi tree at 05:30 AM.'
    },
    thumbnailBadge: 'Seat of Enlightenment'
  },
  {
    id: 'nalanda-university-ruins',
    name: 'Nalanda Mahavihara (Ancient University)',
    indigenousName: 'Nalanda Mahavihara',
    state: 'Bihar',
    cityOrDistrict: 'Nalanda District',
    region: 'Eastern & Central India',
    epochId: 'vedic-mahajanapadas',
    epochLabel: 'Vedic & Mahajanapadas',
    timePeriod: '5th Century CE – 1200 CE',
    dynastyOrPatron: 'Gupta Empire (Kumaragupta I) & King Harshavardhana',
    architecturalCategory: 'Buddhist Stupa & Monastic University',
    unescoSite: true,
    summary: 'The ancient world’s premier residential university, housing 10,000 international scholars and 2,000 professors across philosophy, astronomy, logic, and medicine.',
    engineeringMarvel: 'Massive multi-tier red brick monastic dormitories with individual student cells, lecture amphitheatres, and deep underground drainage.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '09:00 – 17:00 daily.',
      mustSeeHighlight: 'Stupa No. 3 (Sariputra Stupa) with carved Buddha stucco niches, and the ancient classroom lecture halls.',
      travelTip: 'Visit the nearby Xuanzang Memorial Hall dedicated to the famous 7th-century Chinese pilgrim scholar.'
    },
    thumbnailBadge: 'Ancient World Academy'
  },
  {
    id: 'cyclopean-wall-rajgir',
    name: 'Cyclopean Wall & Griddhakuta of Rajgir',
    indigenousName: 'Rajagriha (City of Kings)',
    state: 'Bihar',
    cityOrDistrict: 'Rajgir, Nalanda',
    region: 'Eastern & Central India',
    epochId: 'vedic-mahajanapadas',
    epochLabel: 'Vedic & Mahajanapadas',
    timePeriod: '6th Century BCE (c. 500 BCE)',
    dynastyOrPatron: 'Haryanka Dynasty (King Bimbisara & Ajatashatru)',
    architecturalCategory: 'Hill Fortress',
    unescoSite: false,
    summary: 'Ancient Magadha capital fortified by a 40-kilometer stone rampart of raw undressed boulders encircling five rocky hills.',
    engineeringMarvel: 'Built without mortar using massive interlocking limestone boulders, surviving intact for over 2,500 years.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: 'Sunrise to sunset.',
      mustSeeHighlight: 'Bimbisara’s Jail, Vulture Peak (Griddhakuta where Buddha preached the Lotus Sutra), and the aerial ropeway to Vishwa Shanti Stupa.',
      travelTip: 'Take the scenic chairlift up Ratnagiri Hill for panoramas of the ancient Magadhan valley.'
    },
    thumbnailBadge: 'Magadha Capital Ramparts'
  },
  {
    id: 'sarnath-dhamek-stupa',
    name: 'Sarnath Deer Park & Dhamek Stupa',
    indigenousName: 'Isipatana / Mrigadava',
    state: 'Uttar Pradesh',
    cityOrDistrict: 'Sarnath, Varanasi',
    region: 'North India',
    epochId: 'vedic-mahajanapadas',
    epochLabel: 'Vedic & Mahajanapadas',
    timePeriod: '500 CE (On Ashokan 249 BCE Base)',
    dynastyOrPatron: 'Emperor Ashoka & Gupta Empire',
    architecturalCategory: 'Buddhist Stupa & Monastic University',
    unescoSite: false,
    summary: 'The holy site where Gautama Buddha delivered his first sermon (Dhammacakkappavattana Sutta—Setting the Wheel of Dharma in Motion).',
    engineeringMarvel: 'The 43.6-meter cylindrical solid stone and brick stupa, carved with delicate Gupta floral swags, geese, and geometric friezes.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '06:00 – 18:00 daily.',
      mustSeeHighlight: 'The original 3rd-century BCE Ashokan Lion Capital (the National Emblem of India) housed in the Sarnath Museum.',
      travelTip: 'Located just 10 km from Varanasi ghats; visit in the late afternoon before the evening Ganga Aarti.'
    },
    thumbnailBadge: 'First Sermon of Buddha'
  },

  // 3. MAURYAN & CLASSICAL GUPTA
  {
    id: 'sanchi-stupa-bhopal',
    name: 'The Great Stupa at Sanchi',
    indigenousName: 'Kakanaya / Chetiyagiri',
    state: 'Madhya Pradesh',
    cityOrDistrict: 'Sanchi, Raisen',
    region: 'Eastern & Central India',
    epochId: 'mauryan-empire',
    epochLabel: 'The Mauryan Empire',
    timePeriod: '3rd Century BCE – 1st Century CE',
    dynastyOrPatron: 'Emperor Ashoka & Satavahana Dynasty',
    architecturalCategory: 'Buddhist Stupa & Monastic University',
    unescoSite: true,
    summary: 'The oldest stone structure in India, featuring four world-renowned sandstone Torana gateways with Jataka narrative bas-reliefs.',
    engineeringMarvel: 'Solid stone dome symbolizing Mount Meru, carved by royal ivory guilds with precision goldsmith techniques.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '06:30 – 18:30 daily.',
      mustSeeHighlight: 'The East Torana Yakshi bracket, Stupa 3, and Temple 17 (earliest flat-roofed Gupta shrine).',
      travelTip: 'Listen to the full audio tour and view the 3D accession dossier in our collection.'
    },
    linkedSiteId: 'sanchi-stupa-bhopal',
    thumbnailBadge: 'Oldest Stone Structure'
  },
  {
    id: 'ajanta-caves-aurangabad',
    name: 'Ajanta Caves & Buddhist Murals',
    indigenousName: 'Ajintha Leni',
    state: 'Maharashtra',
    cityOrDistrict: 'Chhatrapati Sambhajinagar',
    region: 'Western India',
    epochId: 'classical-gupta',
    epochLabel: 'Classical Golden Age',
    timePeriod: '2nd Century BCE – 5th Century CE',
    dynastyOrPatron: 'Satavahanas & Vakataka Emperor Harishena',
    architecturalCategory: 'Rock-Cut Sanctuary',
    unescoSite: true,
    summary: 'Thirty rock-cut caves carved into a sheer volcanic canyon, preserving the world’s greatest Buddhist tempera frescoes including Bodhisattva Padmapani.',
    engineeringMarvel: 'Chiseled horizontally out of sheer Deccan basalt cliffs with fiber-optic pigment protection.',
    touristGuide: {
      bestSeason: 'November to March, or monsoon (July–Sept) for waterfalls.',
      timings: '09:00 – 17:00 (Closed Mondays).',
      mustSeeHighlight: 'Cave 1 (Padmapani & Vajrapani), Cave 19 Chaitya, and Cave 26 Reclining Buddha.',
      travelTip: 'Examine the full audio guide and detailed museum dossier available in our app.'
    },
    linkedSiteId: 'ajanta-caves-aurangabad',
    thumbnailBadge: 'Immortal Fresco Masterpieces'
  },
  {
    id: 'elephanta-caves-mumbai',
    name: 'Elephanta Island Rock-Cut Caves',
    indigenousName: 'Gharapuri (City of Caves)',
    state: 'Maharashtra',
    cityOrDistrict: 'Mumbai Harbour',
    region: 'Western India',
    epochId: 'classical-gupta',
    epochLabel: 'Classical Golden Age',
    timePeriod: '5th – 6th Century CE',
    dynastyOrPatron: 'Konkan Mauryas & Kalachuris',
    architecturalCategory: 'Rock-Cut Sanctuary',
    unescoSite: true,
    summary: 'A labyrinth of rock-cut cave temples on an island in Mumbai Harbour, famous for the colossal 6-meter Sadashiva (Trimurti) monolith.',
    engineeringMarvel: 'Monolithic basalt excavation demonstrating mastery of shadow, spatial light, and colossal high-relief Shaivite iconography.',
    touristGuide: {
      bestSeason: 'November to March.',
      timings: '09:00 – 17:30 (Closed Mondays).',
      mustSeeHighlight: 'The 20-foot three-faced Trimurti bust representing Shiva as Creator (Vamadeva), Preserver (Tatpurusha), and Destroyer (Aghora).',
      travelTip: 'Take the scenic 1-hour ferry ride from the Gateway of India in Mumbai.'
    },
    thumbnailBadge: 'Monolithic Trimurti'
  },

  // 4. MEDIEVAL SOUTHERN DYNASTIES (CHOLAS, RASHTRAKUTAS, VIJAYANAGARA)
  {
    id: 'ellora-kailasa-temple',
    name: 'Kailasa Temple at Ellora Caves',
    indigenousName: 'Cave 16 / Manikeshwar',
    state: 'Maharashtra',
    cityOrDistrict: 'Chhatrapati Sambhajinagar',
    region: 'Western India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '8th Century CE (c. 756 – 773 CE)',
    dynastyOrPatron: 'Rashtrakuta Dynasty (King Krishna I)',
    architecturalCategory: 'Rock-Cut Sanctuary',
    unescoSite: true,
    summary: 'The largest monolithic rock-cut monument on Earth: 200,000 tons of solid basalt excavated top-down without scaffolding.',
    engineeringMarvel: 'Twice the footprint of Athens’ Parthenon, sculpted top-down from living mountain bedrock with zero margin for error.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '06:00 – 18:00 (Closed Tuesdays).',
      mustSeeHighlight: 'Cave 16 Kailasa, twin monolithic victory pillars, and life-size stone elephant plinths.',
      travelTip: 'View our full interactive 3D reconstruction and procedural audio soundscape.'
    },
    linkedSiteId: 'ellora-kailasa-temple',
    thumbnailBadge: 'World’s Largest Monolith'
  },
  {
    id: 'brihadeeswarar-temple-thanjavur',
    name: 'Brihadeeswarar Temple (The Big Temple)',
    indigenousName: 'Peruvudaiyar Kovil / Rajarajeswaram',
    state: 'Tamil Nadu',
    cityOrDistrict: 'Thanjavur',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '1010 CE',
    dynastyOrPatron: 'Imperial Chola Empire (Emperor Rajaraja Chola I)',
    architecturalCategory: 'Dravidian Temple',
    unescoSite: true,
    summary: 'The pinnacle of Chola imperial Dravidian architecture, crowned with an 80-ton single granite block atop a 66-meter Vimana tower.',
    engineeringMarvel: 'Constructed using 130,000 tons of granite in a river delta with no stone quarries; 6 km earthen ramp used to hoist the capstone.',
    touristGuide: {
      bestSeason: 'November to February.',
      timings: '06:00 – 12:30 and 16:00 – 20:30 daily.',
      mustSeeHighlight: 'The 66m granite Vimana, monolithic 25-ton Nandi bull, and 1,000-year-old Chola fresco murals.',
      travelTip: 'Walk the courtyard at sunset when warm amber stone glows and evening Carnatic music echoes.'
    },
    linkedSiteId: 'brihadeeswarar-temple-thanjavur',
    thumbnailBadge: '80-Ton Granite Capstone'
  },
  {
    id: 'mahabalipuram-shore-temple',
    name: 'Group of Monuments at Mahabalipuram',
    indigenousName: 'Mamallapuram',
    state: 'Tamil Nadu',
    cityOrDistrict: 'Chengalpattu District',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '7th – 8th Century CE',
    dynastyOrPatron: 'Pallava Dynasty (Narasimhavarman I & Rajasimha)',
    architecturalCategory: 'Dravidian Temple',
    unescoSite: true,
    summary: 'Historic maritime port of the Pallavas renowned for sea-facing monolithic temples, Pancha Rathas, and the colossal rock relief "Descent of the Ganges".',
    engineeringMarvel: 'Open-air bas-relief carved on two colossal 27m × 9m pink granite boulders with natural rainwater cleft representing the holy river Ganges.',
    touristGuide: {
      bestSeason: 'November to February.',
      timings: '06:00 – 18:00 daily.',
      mustSeeHighlight: 'Shore Temple overlooking the Bay of Bengal, Pancha Rathas (monolithic stone chariots), and Krishna’s Butter Ball.',
      travelTip: 'Just 55 km south of Chennai along the scenic East Coast Road (ECR).'
    },
    thumbnailBadge: 'Pallava Coastal Wonders'
  },
  {
    id: 'hampi-vittala-temple',
    name: 'Hampi & Vittala Temple Complex',
    indigenousName: 'Vijayanagara (City of Victory)',
    state: 'Karnataka',
    cityOrDistrict: 'Vijayanagara District',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '14th – 16th Century CE',
    dynastyOrPatron: 'Vijayanagara Empire (Emperor Krishnadevaraya)',
    architecturalCategory: 'Dravidian Temple',
    unescoSite: true,
    summary: 'The golden granite metropolis along the Tungabhadra River, world-famous for the iconic Stone Chariot and the 56 SaReGaMa musical stone pillars.',
    engineeringMarvel: 'Granite pillars engineered to emit distinct acoustic musical frequencies corresponding to classical percussion and wind instruments.',
    touristGuide: {
      bestSeason: 'November to February.',
      timings: '06:00 – 18:00 daily.',
      mustSeeHighlight: 'Vittala Temple Stone Chariot, Virupaksha Temple, Lotus Mahal, and sunset from Matanga Hill.',
      travelTip: 'Rent a bicycle to explore over 1,600 monuments spread across 41 square kilometers.'
    },
    linkedSiteId: 'hampi-vittala-temple',
    thumbnailBadge: 'Musical Stone & Chariot'
  },
  {
    id: 'badami-pattadakal-temples',
    name: 'Badami Cave Temples & Pattadakal',
    indigenousName: 'Vatapi',
    state: 'Karnataka',
    cityOrDistrict: 'Bagalkot District',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '6th – 8th Century CE',
    dynastyOrPatron: 'Early Chalukya Dynasty (Pulakeshin I & II)',
    architecturalCategory: 'Rock-Cut Sanctuary',
    unescoSite: true,
    summary: 'The cradle of temple architecture where the northern Nagara and southern Dravidian styles fused into the celebrated Vesara school beside Agastya Lake.',
    engineeringMarvel: 'Four tiered rock-cut cave temples chiseled into red sandstone cliffs with eighteen-armed dancing Nataraja reliefs.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '06:00 – 18:00 daily.',
      mustSeeHighlight: 'Cave 1 (Dancing Shiva), Cave 3 (Vishnu on Ananta), and Pattadakal Virupaksha Temple.',
      travelTip: 'Combine Badami, Aihole, and Pattadakal in a two-day architectural circuit.'
    },
    thumbnailBadge: 'Cradle of Temple Styles'
  },
  {
    id: 'hoysala-belur-halebidu',
    name: 'Sacred Ensembles of the Hoysalas',
    indigenousName: 'Dwarasamudra & Velapuri',
    state: 'Karnataka',
    cityOrDistrict: 'Hassan District',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '12th – 13th Century CE',
    dynastyOrPatron: 'Hoysala Empire (King Vishnuvardhana)',
    architecturalCategory: 'Dravidian Temple',
    unescoSite: true,
    summary: 'Stellate (star-shaped) chloritic schist temples adorned with lace-like stone filigree, where no two sculpted figures are identical across miles of friezes.',
    engineeringMarvel: 'Precision interlocking chlorite soapstone carved with microscopic jewelry and floral detail, signed by master sculptors Mallitamma and Dasoja.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '07:30 – 17:30 daily.',
      mustSeeHighlight: 'Chennakeshava Temple Belur (Madanika dancers) and Hoysaleswara Temple Halebidu (Garuda pillars).',
      travelTip: 'Hire an ASI guide to point out the signed sculptor inscriptions on individual panels.'
    },
    thumbnailBadge: 'Lace-Like Soapstone Filigree'
  },
  {
    id: 'meenakshi-temple-madurai',
    name: 'Meenakshi Sundareswarar Temple',
    indigenousName: 'Madurai Meenakshi Amman Kovil',
    state: 'Tamil Nadu',
    cityOrDistrict: 'Madurai',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '6th Century BCE Origins (Current Form: 1623 – 1659 CE)',
    dynastyOrPatron: 'Pandya Dynasty & Madurai Nayakas (Thirumalai Nayak)',
    architecturalCategory: 'Dravidian Temple',
    unescoSite: false,
    summary: 'The historic heart of Tamil culture with 14 soaring polychrome gopurams (up to 52m high) and the famous Hall of a Thousand Pillars.',
    engineeringMarvel: 'Geometric temple city complex with 33,000 carved stone sculptures and musical stone pillars in the outer corridors.',
    touristGuide: {
      bestSeason: 'October to March; attend Chithirai Festival in April/May.',
      timings: '05:00 – 12:30 and 16:00 – 21:30 daily.',
      mustSeeHighlight: 'The southern 52m gopuram, Thousand Pillar Hall, and the Golden Lotus Tank (Potramarai Kulam).',
      travelTip: 'Witness the nightly ceremonial procession carrying Lord Sundareswarar’s idol to Meenakshi’s shrine at 21:00.'
    },
    thumbnailBadge: '14 Soaring Polychrome Gopurams'
  },

  // 5. MEDIEVAL CENTRAL & EASTERN MARVELS
  {
    id: 'konark-sun-temple-odisha',
    name: 'Konark Sun Temple (Black Pagoda)',
    indigenousName: 'Arka Kshetra / Surya Deula',
    state: 'Odisha',
    cityOrDistrict: 'Konark, Puri',
    region: 'Eastern & Central India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: 'c. 1250 CE',
    dynastyOrPatron: 'Eastern Ganga Dynasty (King Narasimhadeva I)',
    architecturalCategory: 'Nagara Temple',
    unescoSite: true,
    summary: 'Conceived as a colossal celestial stone chariot with 24 precision sundial wheels drawn by seven galloping horses.',
    engineeringMarvel: 'Accurate to the minute: shadow of central axle hub on wheel spokes indicates precise local solar time.',
    touristGuide: {
      bestSeason: 'October to March; Konark Dance Festival in December.',
      timings: '06:00 – 19:00 daily.',
      mustSeeHighlight: 'The 24 carved stone sundial wheels and chlorite stone Surya statues.',
      travelTip: 'Explore our full audio tour and detailed architectural dossier in the app.'
    },
    linkedSiteId: 'konark-sun-temple-odisha',
    thumbnailBadge: 'Astronomical Sun Chariot'
  },
  {
    id: 'khajuraho-temples',
    name: 'Khajuraho Group of Temples',
    indigenousName: 'Kharjuravahaka',
    state: 'Madhya Pradesh',
    cityOrDistrict: 'Khajuraho, Chhatarpur',
    region: 'Eastern & Central India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Great Medieval Dynasties',
    timePeriod: '950 – 1050 CE',
    dynastyOrPatron: 'Chandela Dynasty (Raja Dhanga & Yashovarman)',
    architecturalCategory: 'Nagara Temple',
    unescoSite: true,
    summary: 'The ultimate masterpiece of Nagara temple architecture, renowned for curvilinear shikharas replicating Himalayan mountain ranges and celebrated sculptures.',
    engineeringMarvel: 'Built without mortar using sandstone mortise-and-tenon joints, crowned by the soaring 31-meter spire of Kandariya Mahadeva.',
    touristGuide: {
      bestSeason: 'October to March; Khajuraho Classical Dance Festival in February.',
      timings: 'Sunrise to sunset daily.',
      mustSeeHighlight: 'Kandariya Mahadeva Temple, Lakshmana Temple, and the colossal monolithic Varaha boar.',
      travelTip: 'Rent an audio guide at the Western Group ticket counter.'
    },
    thumbnailBadge: 'Nagara Temple Summit'
  },
  {
    id: 'rani-ki-vav-patan',
    name: 'Rani ki Vav (The Queen’s Stepwell)',
    indigenousName: 'Rani ki Vav',
    state: 'Gujarat',
    cityOrDistrict: 'Patan',
    region: 'Western India',
    epochId: 'delhi-sultanate-rajputs',
    epochLabel: 'Delhi Sultanate & Rajputs',
    timePeriod: '11th Century CE (c. 1063 CE)',
    dynastyOrPatron: 'Chaulukya / Solanki Dynasty (Queen Udayamati for King Bhima I)',
    architecturalCategory: 'Stepwell & Water Engineering',
    unescoSite: true,
    summary: 'An inverted subterranean temple dedicated to the sacred purity of water, descending seven storeys into the earth with over 500 major sculptures.',
    engineeringMarvel: 'Inverted temple architecture engineered to withstand soil hydrostatic pressure while cooling subterranean chambers by 10°C.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '08:00 – 18:00 daily.',
      mustSeeHighlight: 'The Sheshashayi Vishnu sculpture at the 4th level and the ten avatars of Vishnu chiseled into sandstone pillared pavilions.',
      travelTip: 'Featured on the reverse of the Indian 100 Rupee banknote.'
    },
    thumbnailBadge: 'Subterranean Stepwell Temple'
  },
  {
    id: 'modhera-sun-temple',
    name: 'Modhera Sun Temple & Surya Kund',
    indigenousName: 'Surya Mandir Modhera',
    state: 'Gujarat',
    cityOrDistrict: 'Mehsana District',
    region: 'Western India',
    epochId: 'delhi-sultanate-rajputs',
    epochLabel: 'Delhi Sultanate & Rajputs',
    timePeriod: '1026 CE',
    dynastyOrPatron: 'Solanki Dynasty (King Bhimdev I)',
    architecturalCategory: 'Nagara Temple',
    unescoSite: false,
    summary: 'Engineered so that during the spring and autumn equinoxes, the first ray of the rising sun falls directly onto the golden jewel crown of Surya.',
    engineeringMarvel: 'The colossal Ramakund stepped tank featuring 108 miniature shrines carved into its geometric stair risers.',
    touristGuide: {
      bestSeason: 'October to March; attend Modhera Dance Festival in January.',
      timings: '07:00 – 18:00 daily; 3D projection light show at 18:30.',
      mustSeeHighlight: 'The 52 intricately carved pillars of the Sabha Mandapa representing the 52 weeks of the year.',
      travelTip: 'Located 35 km from Patan, ideal to visit together with Rani ki Vav.'
    },
    thumbnailBadge: 'Equinox Solar Alignment'
  },

  // 6. DELHI SULTANATE & RAJPUT FORTS
  {
    id: 'qutb-minar-iron-pillar-delhi',
    name: 'Qutb Minar & Rustless Iron Pillar',
    indigenousName: 'Mehrauli Complex',
    state: 'Delhi',
    cityOrDistrict: 'Mehrauli, New Delhi',
    region: 'North India',
    epochId: 'delhi-sultanate-rajputs',
    epochLabel: 'Delhi Sultanate & Rajputs',
    timePeriod: '1192 CE (Minar) & 400 CE (Gupta Iron Pillar)',
    dynastyOrPatron: 'Delhi Sultanate (Mamluk Dynasty) & Gupta Empire',
    architecturalCategory: 'Mughal & Indo-Islamic',
    unescoSite: true,
    summary: 'The world’s tallest brick minaret (72.5m) beside a 1,600-year-old high-phosphorus iron pillar that has never rusted.',
    engineeringMarvel: 'Passive misawite iron-oxyhydroxide film created by ancient Gupta metallurgists shields the iron column from corrosion.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '06:00 – 18:00 daily (Illuminated at night).',
      mustSeeHighlight: 'The fluted red sandstone minaret, Alai Darwaza arch, and the ancient Gupta Iron Pillar.',
      travelTip: 'View our full interactive audio tour and museum dossier in the app.'
    },
    linkedSiteId: 'qutb-minar-iron-pillar-delhi',
    thumbnailBadge: 'Defiance in Iron & Sandstone'
  },
  {
    id: 'chittorgarh-fort',
    name: 'Chittorgarh Fort: The Citadel of Mewar',
    indigenousName: 'Chittor Durg',
    state: 'Rajasthan',
    cityOrDistrict: 'Chittorgarh',
    region: 'Western India',
    epochId: 'delhi-sultanate-rajputs',
    epochLabel: 'Delhi Sultanate & Rajputs',
    timePeriod: '7th Century CE Origins',
    dynastyOrPatron: 'Mewar Guhilas & Sisodia Rajputs (Rana Kumbha, Maharana Pratap)',
    architecturalCategory: 'Hill Fortress',
    unescoSite: true,
    summary: 'The largest fort in India spanning 700 acres atop a 180-meter plateau, immortalized for Rajput valor, siege endurance, and sacrifice.',
    engineeringMarvel: 'Ingenious water harvesting system: 84 historic reservoirs (kunds, stepwells, talabs) capable of storing 4 billion liters of water.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '09:00 – 17:30 daily.',
      mustSeeHighlight: 'Vijay Stambha (9-storey Tower of Victory), Kirti Stambha, Padmini’s Palace, and Gaumukh Reservoir.',
      travelTip: 'Hire a car or auto-rickshaw inside the fort as monuments are spaced across 7 km.'
    },
    thumbnailBadge: 'Largest Fort in India'
  },
  {
    id: 'kumbhalgarh-fort',
    name: 'Kumbhalgarh Fort & The Great Wall of India',
    indigenousName: 'Kumbhalmer',
    state: 'Rajasthan',
    cityOrDistrict: 'Rajsamand District',
    region: 'Western India',
    epochId: 'delhi-sultanate-rajputs',
    epochLabel: 'Delhi Sultanate & Rajputs',
    timePeriod: '15th Century CE (1443 – 1458 CE)',
    dynastyOrPatron: 'Rana Kumbha of Mewar',
    architecturalCategory: 'Hill Fortress',
    unescoSite: true,
    summary: 'Impregnable mountain citadel birthplace of Maharana Pratap, enclosed by a 36-kilometer continuous defensive stone wall—the second longest on Earth.',
    engineeringMarvel: 'The 36 km wall is wide enough for eight armed horsemen to ride abreast, punctuated by 360 ancient temples and seven fortified gateways.',
    touristGuide: {
      bestSeason: 'October to March; monsoon offers dramatic cloud mist.',
      timings: '09:00 – 18:00 daily; evening sound and light show at 19:00.',
      mustSeeHighlight: 'Badal Mahal (Palace of Clouds) at the mountain summit with 360-degree views of the Aravalli ranges.',
      travelTip: 'Located 85 km from Udaipur; combines easily with the marble Jain temples of Ranakpur.'
    },
    thumbnailBadge: '36km Great Wall of India'
  },
  {
    id: 'mehrangarh-fort-jodhpur',
    name: 'Mehrangarh Fort: The Citadel of the Sun',
    indigenousName: 'Mehrangarh Durg',
    state: 'Rajasthan',
    cityOrDistrict: 'Jodhpur',
    region: 'Western India',
    epochId: 'delhi-sultanate-rajputs',
    epochLabel: 'Delhi Sultanate & Rajputs',
    timePeriod: '1459 CE',
    dynastyOrPatron: 'Rathore Rajput Dynasty (Rao Jodha)',
    architecturalCategory: 'Hill Fortress',
    unescoSite: false,
    summary: 'Towering 122 meters above Jodhpur’s blue-painted city, with burnished red sandstone ramparts described by Rudyard Kipling as "the work of giants".',
    engineeringMarvel: 'Vertical battlements that appear to fuse organically with the volcanic rock cliff, equipped with cannons overlooking Thar Desert trade routes.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '09:00 – 17:00 daily.',
      mustSeeHighlight: 'Sheesh Mahal, Phool Mahal (Flower Palace), royal howdah elephant seat gallery, and flying fox zipline tours.',
      travelTip: 'Walk the ramparts at sunset to see why Jodhpur is called the "Blue City".'
    },
    thumbnailBadge: 'Sun City Mountain Citadel'
  },
  {
    id: 'amer-fort-jaipur',
    name: 'Amer Fort & Sheesh Mahal',
    indigenousName: 'Amber Durg',
    state: 'Rajasthan',
    cityOrDistrict: 'Amer, Jaipur',
    region: 'Western India',
    epochId: 'mughal-empire',
    epochLabel: 'The Mughal Empire',
    timePeriod: '1592 – 1727 CE',
    dynastyOrPatron: 'Kachwaha Rajputs (Raja Man Singh I & Jai Singh I)',
    architecturalCategory: 'Hill Fortress',
    unescoSite: true,
    summary: 'The dramatic sandstone and marble palace perched above Maota Lake, famous for the starry Sheesh Mahal and underground mountain tunnels.',
    engineeringMarvel: 'Convex mirror glass imported from Belgium set into floral plaster arabesques that multiply a single candle into a galaxy of stars.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '08:00 – 17:30 daily (Evening sound & light show).',
      mustSeeHighlight: 'Sheesh Mahal, Diwan-i-Aam elephant pillars, and the secret tunnel to Jaigarh Fort.',
      travelTip: 'Examine our full audio guide and interactive 3D dossier in the app.'
    },
    linkedSiteId: 'amer-fort-jaipur',
    thumbnailBadge: 'Palace of Mirrors'
  },

  // 7. MUGHAL IMPERIAL MARVELS
  {
    id: 'taj-mahal-agra',
    name: 'The Taj Mahal: Jewel of Muslim Art',
    indigenousName: 'Roza-e-Munavvara',
    state: 'Uttar Pradesh',
    cityOrDistrict: 'Agra',
    region: 'North India',
    epochId: 'mughal-empire',
    epochLabel: 'The Mughal Empire',
    timePeriod: '1631 – 1648 CE',
    dynastyOrPatron: 'Mughal Emperor Shah Jahan',
    architecturalCategory: 'Mughal & Indo-Islamic',
    unescoSite: true,
    summary: 'The supreme masterpiece of symmetrical white marble architecture, built by Shah Jahan in memory of Empress Mumtaz Mahal.',
    engineeringMarvel: 'Pietra dura inlay with 43 types of semi-precious gems and four 40m minarets tilted outward by 2 degrees for earthquake resilience.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: 'Sunrise to sunset (Closed Fridays). Full moon night viewing available.',
      mustSeeHighlight: 'Sunrise reflection from the Charbagh garden pool and the marble jaali screen around the cenotaphs.',
      travelTip: 'Visit our full audio tour and museum dossier in the app.'
    },
    linkedSiteId: 'taj-mahal-agra',
    thumbnailBadge: 'Wonder of the World'
  },
  {
    id: 'fatehpur-sikri-agra',
    name: 'Fatehpur Sikri & Buland Darwaza',
    indigenousName: 'Fatehabad (City of Victory)',
    state: 'Uttar Pradesh',
    cityOrDistrict: 'Fatehpur Sikri, Agra',
    region: 'North India',
    epochId: 'mughal-empire',
    epochLabel: 'The Mughal Empire',
    timePeriod: '1571 – 1585 CE',
    dynastyOrPatron: 'Mughal Emperor Akbar the Great',
    architecturalCategory: 'Mughal & Indo-Islamic',
    unescoSite: true,
    summary: 'Akbar’s utopian red sandstone planned imperial capital and the soaring 54-meter Buland Darwaza (Gate of Magnificence).',
    engineeringMarvel: 'The Diwan-i-Khas central carved sandstone pillar supporting a suspended throne platform connected by four aerial bridges.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: 'Sunrise to sunset daily.',
      mustSeeHighlight: 'Buland Darwaza, White marble Tomb of Salim Chishti, and Panch Mahal 5-storey open pavilion.',
      travelTip: 'Tie a red thread on the marble jaali screens of Salim Chishti’s tomb following century-old tradition.'
    },
    thumbnailBadge: 'Akbar’s Red Sandstone City'
  },
  {
    id: 'red-fort-delhi',
    name: 'The Red Fort (Lal Qila)',
    indigenousName: 'Qila-e-Mubarak',
    state: 'Delhi',
    cityOrDistrict: 'Old Delhi',
    region: 'North India',
    epochId: 'mughal-empire',
    epochLabel: 'The Mughal Empire',
    timePeriod: '1638 – 1648 CE',
    dynastyOrPatron: 'Mughal Emperor Shah Jahan',
    architecturalCategory: 'Mughal & Indo-Islamic',
    unescoSite: true,
    summary: 'The grand seat of Mughal imperial power for 200 years and the symbol of modern Indian sovereignty where the national flag is hoisted every Independence Day.',
    engineeringMarvel: 'Octagonal plan with 2.5 km of red sandstone ramparts cooled by the Nahr-i-Bihisht (Stream of Paradise) water channels.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '09:30 – 16:30 (Closed Mondays).',
      mustSeeHighlight: 'Lahori Gate, Diwan-i-Aam, Diwan-i-Khas ("If there is paradise on earth, it is this, it is this"), and Chhatta Chowk covered bazaar.',
      travelTip: 'Walk across Netaji Subhash Marg to visit Jama Masjid and the culinary lanes of Chandni Chowk.'
    },
    thumbnailBadge: 'Seat of Sovereign India'
  },
  {
    id: 'humayuns-tomb-delhi',
    name: 'Humayun’s Tomb & Charbagh Garden',
    indigenousName: 'Maqbara-e-Humayun',
    state: 'Delhi',
    cityOrDistrict: 'Nizamuddin East, New Delhi',
    region: 'North India',
    epochId: 'mughal-empire',
    epochLabel: 'The Mughal Empire',
    timePeriod: '1565 – 1572 CE',
    dynastyOrPatron: 'Empress Bega Begum & Architect Mirak Mirza Ghiyas',
    architecturalCategory: 'Mughal & Indo-Islamic',
    unescoSite: true,
    summary: 'The first grand garden-tomb on the Indian subcontinent, introducing the Persian double dome and Charbagh quadripartite geometry that inspired the Taj Mahal.',
    engineeringMarvel: 'First building in India to utilize a double-dome system with high white marble outer dome and proportioned inner brick dome.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: '06:00 – 18:00 daily.',
      mustSeeHighlight: 'The restored Charbagh geometric fountains, Isa Khan’s octagonal tomb, and the Sundar Nursery heritage park.',
      travelTip: 'Late afternoon offers magical golden lighting against the red sandstone facade.'
    },
    thumbnailBadge: 'Architectural Father of Taj'
  },

  // 8. MARATHA, SIKH & FREEDOM STRUGGLE
  {
    id: 'golden-temple-amritsar',
    name: 'Harmandir Sahib (The Golden Temple)',
    indigenousName: 'Sri Darbar Sahib',
    state: 'Punjab',
    cityOrDistrict: 'Amritsar',
    region: 'North India',
    epochId: 'maratha-sikh-independence',
    epochLabel: 'Maratha, Sikh & Independence',
    timePeriod: '1581 – 1604 CE (Gold Inlay 1830 CE)',
    dynastyOrPatron: 'Sikh Gurus & Maharaja Ranjit Singh',
    architecturalCategory: 'Sacred Center',
    unescoSite: false,
    summary: 'The gilded spiritual epicenter of Sikhism set within the Amrit Sarovar, famous for universal equality and the world’s largest free 24/7 community kitchen.',
    engineeringMarvel: 'Built at the lowest point of the terrain with four open doorways welcoming all humanity, clad in 500 kg of pure gold leaf.',
    touristGuide: {
      bestSeason: 'October to March.',
      timings: 'Open 24 hours daily, 365 days a year.',
      mustSeeHighlight: 'The gilded sanctum, continuous Gurbani kirtan, Guru Ram Das Langar Hall, and Akal Takht.',
      travelTip: 'Examine our full audio guide and detailed museum dossier in the app.'
    },
    linkedSiteId: 'golden-temple-amritsar',
    thumbnailBadge: 'Gold-Plated Universal Sanctuary'
  },
  {
    id: 'raigad-hill-fort',
    name: 'Raigad Hill Fort: Capital of Shivaji Maharaj',
    indigenousName: 'Raje Raigad / Gibralter of the East',
    state: 'Maharashtra',
    cityOrDistrict: 'Mahad, Raigad District',
    region: 'Western India',
    epochId: 'maratha-sikh-independence',
    epochLabel: 'Maratha, Sikh & Independence',
    timePeriod: '1674 CE (Coronation of Shivaji Maharaj)',
    dynastyOrPatron: 'Chhatrapati Shivaji Maharaj (Architect Hiroji Indulkar)',
    architecturalCategory: 'Hill Fortress',
    unescoSite: false,
    summary: 'The sovereign capital of the Maratha Empire where Shivaji Maharaj was crowned Chhatrapati in 1674 under the banner of Hindavi Swarajya.',
    engineeringMarvel: 'Perched on an isolated 820m basalt wedge in the Sahyadris accessible only by a single fortified path, with sheer 300m vertical drop-offs on three sides.',
    touristGuide: {
      bestSeason: 'Monsoon (July to September) for lush cloud cascades, or winter (October to February).',
      timings: '08:00 – 17:30 daily; aerial ropeway operates 08:30 – 17:00.',
      mustSeeHighlight: 'Takmak Tok execution cliff, royal coronation throne plinth (Raj Sabha), Hiroji Indulkar’s Jagdishwar Temple, and Shivaji Maharaj’s Samadhi.',
      travelTip: 'Take the modern passenger ropeway to reach the summit in 4 minutes, or hike the historic 1,737 stone steps.'
    },
    thumbnailBadge: 'Capital of Hindavi Swarajya'
  },
  {
    id: 'cellular-jail-port-blair',
    name: 'Cellular Jail (Kala Pani National Memorial)',
    indigenousName: 'Kala Pani (Black Water)',
    state: 'Andaman & Nicobar Islands',
    cityOrDistrict: 'Port Blair',
    region: 'South India',
    epochId: 'maratha-sikh-independence',
    epochLabel: 'Maratha, Sikh & Independence',
    timePeriod: '1896 – 1906 CE',
    dynastyOrPatron: 'British Colonial Prison & Indian National Memorial',
    architecturalCategory: 'Hill Fortress',
    unescoSite: false,
    summary: 'The historic colonial panopticon prison where India’s foremost freedom fighters were exiled, now a revered national memorial to the freedom struggle.',
    engineeringMarvel: 'Seven radiating three-storey wings centered on a watchtower with 693 solitary cells engineered to prevent any communication between inmates.',
    touristGuide: {
      bestSeason: 'October to May.',
      timings: '09:00 – 12:30 and 13:30 – 16:45 (Closed Mondays); Sound and Light Show in evening.',
      mustSeeHighlight: 'Veer Savarkar’s cell, the Martyrs’ gallows, and the moving evening sound and light narrative.',
      travelTip: 'Book the evening Sound and Light show in advance as seats fill quickly.'
    },
    thumbnailBadge: 'Monument to Freedom'
  },

  // 9. SACRED HILL STATION TEMPLES, SHAKTI PEETHAS, UJJAIN & KASHI JYOTIRLINGAS
  {
    id: 'kedarnath-temple-uttarakhand',
    name: 'Kedarnath Temple (Himalayan Jyotirlinga)',
    indigenousName: 'Kedara Khanda / Kedareshwar',
    state: 'Uttarakhand',
    cityOrDistrict: 'Rudraprayag District, Garhwal Himalayas',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Himalayan Sacred Heritage',
    timePeriod: '8th Century CE (Adi Shankaracharya Revival)',
    dynastyOrPatron: 'Pandavas & Katyuri Dynasty / Adi Shankaracharya',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: '12 Jyotirlingas',
    altitudeOrRiver: 'Altitude: 3,583m (11,755 ft) · Mandakini River',
    unescoSite: false,
    summary: 'The highest of the 12 Jyotirlingas nestled beneath snow-capped Himalayan peaks, engineered with interlocking granite slabs that withstood a 400-year glacial burial.',
    engineeringMarvel: 'Built without mortar using massive interlocking grey granite ashlar blocks and iron dowels, absorbing tectonic vibrations and glacial flash floods.',
    touristGuide: {
      bestSeason: 'May to June and September to October (Closed during winter).',
      timings: '04:00 – 21:00 daily (Closed for cleaning 15:00 – 17:00).',
      mustSeeHighlight: 'The swayambhu triangular rock lingam, Bheem Shila boulder, and Adi Shankaracharya’s subterranean Samadhi.',
      travelTip: 'Start early morning trek from Gaurikund or book the government helicopter shuttle from Guptkashi/Phata.'
    },
    linkedSiteId: 'kedarnath-temple-uttarakhand',
    thumbnailBadge: 'Highest Jyotirlinga (3,583m)'
  },
  {
    id: 'badrinath-temple-chamoli',
    name: 'Badrinath Temple: Himalayan Char Dham',
    indigenousName: 'Badrikashram / Badri Vishal',
    state: 'Uttarakhand',
    cityOrDistrict: 'Chamoli District, Garhwal Himalayas',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Himalayan Sacred Heritage',
    timePeriod: '9th Century CE Consecration',
    dynastyOrPatron: 'Adi Shankaracharya & Garhwal Kings',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: 'Char Dham',
    altitudeOrRiver: 'Altitude: 3,133m (10,279 ft) · Alaknanda River',
    unescoSite: false,
    summary: 'One of the four supreme Char Dham pilgrimage destinations of India, flanked by the Nar and Narayana mountain ranges along the glacial Alaknanda River.',
    engineeringMarvel: 'Vibrant painted arched stone facade with a gold-gilded roof, built adjacent to the natural thermal sulfur hot spring Tapt Kund.',
    touristGuide: {
      bestSeason: 'May to June and September to November (Reopens in spring).',
      timings: '04:30 – 21:00 daily.',
      mustSeeHighlight: 'Self-manifested black Saligram stone idol of Lord Badri Narayana and the hot sulfur waters of Tapt Kund (45°C) amidst sub-zero air.',
      travelTip: 'Visit Mana Village (3 km away), the last Indian village before the Tibet border, and the natural rock bridge Bheem Pul.'
    },
    thumbnailBadge: 'Char Dham (3,133m)'
  },
  {
    id: 'tungnath-temple-chopta',
    name: 'Tungnath Temple: Highest Shiva Temple on Earth',
    indigenousName: 'Tungnath (Lord of the Peaks)',
    state: 'Uttarakhand',
    cityOrDistrict: 'Chopta, Rudraprayag',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Himalayan Sacred Heritage',
    timePeriod: 'Over 1,000 Years Old',
    dynastyOrPatron: 'Pandavas (Panch Kedar Circuit)',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: 'Panch Kedar',
    altitudeOrRiver: 'Altitude: 3,680m (12,073 ft) · Chandrashila Peak',
    unescoSite: false,
    summary: 'The highest Shiva shrine in the entire world, perched at 12,073 feet among alpine meadows (bugyals) with 360-degree vistas of Nanda Devi, Trishul, and Chaukhamba peaks.',
    engineeringMarvel: 'Weather-beaten Nagara stone temple standing resilient against hurricane-force Himalayan blizzards and multi-meter snowpacks.',
    touristGuide: {
      bestSeason: 'April to November; Chopta is known as the "Mini Switzerland of Uttarakhand".',
      timings: '06:00 – 19:00 daily.',
      mustSeeHighlight: 'The 3.5 km rhododendron forest trek from Chopta, and the summit climb to Chandrashila Peak (4,000m).',
      travelTip: 'Catch the sunrise from Chandrashila peak to witness golden light hitting the greatest Himalayan giants.'
    },
    thumbnailBadge: 'Highest Shiva Temple (3,680m)'
  },
  {
    id: 'vaishno-devi-katra',
    name: 'Vaishno Devi Holy Cave Shrine',
    indigenousName: 'Maa Vaishno Devi / Trikuta Parvat',
    state: 'Jammu & Kashmir',
    cityOrDistrict: 'Katra, Reasi District',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Hill Shrines',
    timePeriod: 'Antiquity (Documented in Mahabharata)',
    dynastyOrPatron: 'Shriram Sharma & Maharaja Gulab Singh',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Altitude: 1,585m (5,200 ft) · Trikuta Mountains',
    unescoSite: false,
    summary: 'One of the most visited pilgrimage hill shrines in the world, located in a sacred 98-foot natural limestone cave on the triple-peaked Trikuta Mountain.',
    engineeringMarvel: 'A natural subterranean cave stream (Charan Ganga) bathing the three rock Pindies representing Mahakali, Mahalakshmi, and Mahasaraswati without human chiseling.',
    touristGuide: {
      bestSeason: 'Year-round; March to October is pleasant, Navratri festivals in March/October are auspicious.',
      timings: 'Open 24 hours daily.',
      mustSeeHighlight: 'The Holy Cave Bhawan, Ardhkuwari Cave, and the scenic ropeway up to the Bhairon Ghati Temple.',
      travelTip: 'The 12 km trek from Katra can be undertaken on foot, battery car (from Ardhkuwari), horse, or helicopter shuttle.'
    },
    thumbnailBadge: 'Trikuta Mountain Shrine'
  },
  {
    id: 'amarnath-cave-temple',
    name: 'Amarnath Cave Temple: Ice Lingam of the Himalayas',
    indigenousName: 'Amreshwar Mahadev',
    state: 'Jammu & Kashmir',
    cityOrDistrict: 'Anantnag District / Baltal',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Himalayan Sacred Heritage',
    timePeriod: 'Ancient Rigvedic & Puranic Heritage',
    dynastyOrPatron: 'Discovered by Shepherd Buta Malik (Documented in Rajatarangini)',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: 'Himalayan Hill Shrine',
    altitudeOrRiver: 'Altitude: 3,888m (12,756 ft) · Lidder Valley',
    unescoSite: false,
    summary: 'A colossal natural cave at 12,756 feet where water dripping through limestone cracks freezes naturally to form a towering ice stalagmite Shiva Lingam that waxes and wanes with the moon phases.',
    engineeringMarvel: 'Natural geological cryo-crystallization phenomenon forming a solid ice pillar inside a 40-meter wide gypsum cave surrounded by glaciers.',
    touristGuide: {
      bestSeason: 'July to August during the annual 45-day Shravan Amarnath Yatra.',
      timings: '06:00 – 18:00 daily during the pilgrimage window.',
      mustSeeHighlight: 'The sacred naturally formed Ice Lingam, Sheshnag Lake, and the Panchtarni glacier crossing.',
      travelTip: 'Requires advance biometric medical fitness registration and high-altitude mountain gear.'
    },
    thumbnailBadge: 'Ice Stalagmite Lingam (3,888m)'
  },
  {
    id: 'kashi-vishwanath-varanasi',
    name: 'Kashi Vishwanath & Sacred Ganga Ghats',
    indigenousName: 'Avimukta Kshetra / Varanasi',
    state: 'Uttar Pradesh',
    cityOrDistrict: 'Varanasi',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Jyotirlinga Capitals',
    timePeriod: 'Continuous 3,000 Years (Temple 1780 CE)',
    dynastyOrPatron: 'Queen Ahilyabai Holkar & Maharaja Ranjit Singh',
    architecturalCategory: 'Jyotirlinga & Mahatirth',
    sacredTradition: '12 Jyotirlingas',
    altitudeOrRiver: 'Sacred River Ganges (Ganga)',
    unescoSite: false,
    summary: 'The eternal spiritual capital of India, where Shiva manifested as the infinite pillar of cosmic light; features a 1-ton gold-plated spire and 84 stone river ghats.',
    engineeringMarvel: 'Direct marble corridor linking the sacred sanctum to the Ganges riverfront, preserving 40 ancient heritage sub-shrines.',
    touristGuide: {
      bestSeason: 'October to March; attend Dev Deepawali for 1 million illuminated river lamps.',
      timings: '03:00 – 23:00 daily.',
      mustSeeHighlight: 'Mangala Aarti, sunset Ganga Aarti at Dashashwamedh, and sunrise rowboat ride along Manikarnika Ghat.',
      travelTip: 'Examine our interactive 3D dossier and audio guide for Kashi.'
    },
    linkedSiteId: 'kashi-vishwanath-varanasi',
    thumbnailBadge: 'Eternal City of Light'
  },
  {
    id: 'mahakaleshwar-ujjain',
    name: 'Mahakaleshwar & Sacred Ujjain',
    indigenousName: 'Avanti / Mahakalavana / Ujjayini',
    state: 'Madhya Pradesh',
    cityOrDistrict: 'Ujjain',
    region: 'Western India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Jyotirlinga Capitals',
    timePeriod: 'Over 2,500 Years (Rebuilt 1734 CE)',
    dynastyOrPatron: 'Paramaras & Maratha General Ranoji Scindia',
    architecturalCategory: 'Jyotirlinga & Mahatirth',
    sacredTradition: '12 Jyotirlingas',
    altitudeOrRiver: 'Shipra River (Tropic of Cancer Intersection)',
    unescoSite: false,
    summary: 'The only south-facing (Dakshinmukhi) Jyotirlinga on Earth, ruler of Time and Death, host of the pre-dawn Bhasma Aarti and the ancient Prime Meridian of India.',
    engineeringMarvel: 'Three-tiered temple with subterranean swayambhu lingam and the 900-meter Mahakal Lok corridor of 108 sculpted pillars.',
    touristGuide: {
      bestSeason: 'October to March; Simhastha Kumbh Mela every 12 years.',
      timings: '04:00 – 23:00 daily (Bhasma Aarti 04:00 – 06:00).',
      mustSeeHighlight: 'Pre-dawn Bhasma Aarti, Kal Bhairav temple, Harsiddhi Shaktipeeth, and Ram Ghat.',
      travelTip: 'Advance online booking required for Bhasma Aarti via the official portal.'
    },
    linkedSiteId: 'mahakaleshwar-ujjain',
    thumbnailBadge: 'Dakshinmukhi Jyotirlinga'
  },
  {
    id: 'kamakhya-temple-assam',
    name: 'Kamakhya Temple: Supreme Shakti Peeth',
    indigenousName: 'Nilachal Parvat / Kamarupa',
    state: 'Assam',
    cityOrDistrict: 'Nilachal Hill, Guwahati',
    region: 'Eastern & Central India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Shakti Peethas',
    timePeriod: '8th – 16th Century CE (1565 CE Rebuild)',
    dynastyOrPatron: 'Koch King Nara Narayana & Ahom Kings',
    architecturalCategory: 'Shakti Peeth',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Nilachal Hill · Brahmaputra River',
    unescoSite: false,
    summary: 'The prime Mahapitha of the 51 Shakti Peethas where Sati’s womb fell, featuring the unique Nilachal beehive dome and a natural spring flowing through bedrock.',
    engineeringMarvel: 'Unique Assamese Nilachal architectural dome combining cruciform stone base with ribbed beehive brick vaulting over a subterranean spring cave.',
    touristGuide: {
      bestSeason: 'October to March, or late June for the famous Ambubachi Mela.',
      timings: '05:30 – 13:00 and 14:30 – 17:30 daily.',
      mustSeeHighlight: 'The subterranean natural spring cave sanctum, Ten Mahavidya shrines, and hilltop view of the Brahmaputra.',
      travelTip: 'View our full interactive audio tour and museum dossier in the app.'
    },
    linkedSiteId: 'kamakhya-temple-assam',
    thumbnailBadge: 'Prime Maha Shakti Peeth'
  },
  {
    id: 'jwala-ji-temple-kangra',
    name: 'Jwala Ji Temple: Eternal Blue Flame',
    indigenousName: 'Jwalamukhi / Kangra Pitha',
    state: 'Himachal Pradesh',
    cityOrDistrict: 'Kangra Valley',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Shakti Peethas',
    timePeriod: 'Antiquity (Rebuilt 1815 CE by Maharaja Ranjit Singh)',
    dynastyOrPatron: 'Katoch Rajputs & Maharaja Ranjit Singh',
    architecturalCategory: 'Shakti Peeth',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Shivalik Foothills · Beas River Basin',
    unescoSite: false,
    summary: 'The sacred Shakti Peeth where Sati’s tongue fell, famous for nine natural, perpetual blue flames that burn continuously through sandstone rock fissures without any fuel.',
    engineeringMarvel: 'Natural subterranean hydrocarbon gas fissure producing perpetual sacred flames that resisted Emperor Akbar’s attempts to extinguish them with iron plates and canal streams.',
    touristGuide: {
      bestSeason: 'September to April; Navratri festivals in April and October.',
      timings: '05:00 – 22:00 daily.',
      mustSeeHighlight: 'The nine eternal flames (representing Mahakali, Annapurna, Chandi, Hinglaj, Bindhyavasini, Mahalakshmi, Saraswati, Ambika, and Anjana Devi) and Maharaja Ranjit Singh’s gold dome.',
      travelTip: 'Located 30 km from Kangra town and 55 km from Dharamshala/McLeod Ganj.'
    },
    thumbnailBadge: 'Perpetual Sacred Flames'
  },
  {
    id: 'naina-devi-temple-bilaspur',
    name: 'Naina Devi Temple (Shivalik Hilltop)',
    indigenousName: 'Maa Naina Devi',
    state: 'Himachal Pradesh',
    cityOrDistrict: 'Bilaspur District, Shivalik Hills',
    region: 'North India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Hill Shrines',
    timePeriod: '8th Century CE Origins',
    dynastyOrPatron: 'Raja Bir Chand of Bilaspur',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Altitude: 1,219m (4,000 ft) · Overlooking Gobind Sagar Lake',
    unescoSite: false,
    summary: 'A scenic hill station Shakti Peeth perched at 4,000 feet atop a Shivalik ridge where Goddess Sati’s eyes fell, offering panoramic vistas of the emerald Gobind Sagar reservoir.',
    engineeringMarvel: 'Hilltop marble temple accessible by modern aerial ropeway (cable car) soaring over pine-forested valley ridges.',
    touristGuide: {
      bestSeason: 'Year-round; pleasant summer escape from Punjab plains.',
      timings: '04:00 – 22:00 daily.',
      mustSeeHighlight: 'The sacred peepal tree in the courtyard, twin stone eyes inside the sanctum, and the aerial ropeway ride.',
      travelTip: 'Combine with the sacred Sikh pilgrimage of Anandpur Sahib located just 20 km away.'
    },
    thumbnailBadge: 'Eyes of Sati (1,219m)'
  },
  {
    id: 'ambaji-temple-gabbar-hill',
    name: 'Ambaji Temple & Gabbar Hill Shakti Peeth',
    indigenousName: 'Arasuri Ambaji / Gabbar Parvat',
    state: 'Gujarat',
    cityOrDistrict: 'Banaskantha District, Aravalli Hills',
    region: 'Western India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Shakti Peethas',
    timePeriod: 'Antiquity (White Marble Shikhara 14th–20th Century)',
    dynastyOrPatron: 'Suryavanshi Rajputs & Jain Master Masons',
    architecturalCategory: 'Shakti Peeth',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Aravalli Mountain Ridge · Gabbar Hill',
    unescoSite: false,
    summary: 'The holy Shakti Peeth where the heart of Goddess Sati fell; uniquely, the temple has no idol, venerating the sacred golden Viso Yantra inscribed on white Makrana marble.',
    engineeringMarvel: 'Built with pure white Makrana marble by master Sompura temple architects, crowned with a 103-foot golden Kalash weighing 3 tons.',
    touristGuide: {
      bestSeason: 'October to March; Bhadrapad Purnima fair draws over 1.5 million walking pilgrims.',
      timings: '07:00 – 11:30, 12:30 – 16:30, and 18:30 – 21:00 daily.',
      mustSeeHighlight: 'The sacred golden Viso Yantra, the Akhand Jyot flame on Gabbar Hill, and the 999-step climb or ropeway to Gabbar top.',
      travelTip: 'Ride the Gabbar ropeway for expansive views of the ancient Aravalli mountain ranges.'
    },
    thumbnailBadge: 'Heart of Sati & Golden Yantra'
  },
  {
    id: 'kalighat-temple-kolkata',
    name: 'Kalighat Kali Temple: Sacred Bengal Peeth',
    indigenousName: 'Kalikshetra / Kalighat',
    state: 'West Bengal',
    cityOrDistrict: 'Kolkata',
    region: 'Eastern & Central India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Shakti Peethas',
    timePeriod: 'Ancient Roots (Present Temple 1809 CE)',
    dynastyOrPatron: 'Sabarna Roy Choudhury Family',
    architecturalCategory: 'Shakti Peeth',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Adi Ganga (Old Ganges Canal)',
    unescoSite: false,
    summary: 'One of the most famous Shakti Peethas where the four right toes of Goddess Sati fell; gave the city of Calcutta (Kolkata) its historic name.',
    engineeringMarvel: 'Traditional Bengal Chala roof architecture with sloping curvilinear cornices modeled after thatch huts, housing a unique three-eyed black stone Kali idol with a pure gold tongue.',
    touristGuide: {
      bestSeason: 'October to March; Kali Puja / Diwali in autumn is legendary.',
      timings: '05:00 – 14:00 and 17:00 – 22:30 daily.',
      mustSeeHighlight: 'The unique three-eyed black stone deity with extended gold tongue and the sacred Kundupukur pond.',
      travelTip: 'Take the Kolkata Metro to Kalighat station; beware of unauthorized touts around the temple lane.'
    },
    thumbnailBadge: 'Namesake of Kolkata'
  },
  {
    id: 'somnath-jyotirlinga-gujarat',
    name: 'Somnath Temple: The First Jyotirlinga',
    indigenousName: 'Prabhas Kshetra / Someshwar Mahadev',
    state: 'Gujarat',
    cityOrDistrict: 'Prabhas Patan, Veraval',
    region: 'Western India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Jyotirlinga Capitals',
    timePeriod: 'Ancient Antiquity (Rebuilt 1951 CE by Sardar Vallabhbhai Patel)',
    dynastyOrPatron: 'Chaulukyas & Sardar Vallabhbhai Patel',
    architecturalCategory: 'Jyotirlinga & Mahatirth',
    sacredTradition: '12 Jyotirlingas',
    altitudeOrRiver: 'Arabian Sea Shore (Triveni Sangam)',
    unescoSite: false,
    summary: 'The premier of all twelve Jyotirlingas, standing on the rugged shores of the Arabian Sea; historically rebuilt seven times, representing the indestructible spirit of Indian civilization.',
    engineeringMarvel: 'Features the ancient Ban Stambh (Arrow Pillar) marking that from this temple coordinates, there is zero landmass on a direct line to Antarctica.',
    touristGuide: {
      bestSeason: 'October to March; cool ocean breezes and winter skies.',
      timings: '06:00 – 22:00 daily; Aarti at 07:00, 12:00, and 19:00; Light and Sound show at 20:00.',
      mustSeeHighlight: 'The sea-facing Kailash Mahameru Prasad shikhara (155 feet high), the Ban Stambh, and sunset over the Arabian Sea waves crashing against temple ramparts.',
      travelTip: 'Attend the spectacular evening Sound and Light Show (Jay Somnath) voiced by Amitabh Bachchan.'
    },
    thumbnailBadge: 'First of the 12 Jyotirlingas'
  },
  {
    id: 'chamundeshwari-mysore',
    name: 'Chamundeshwari Temple (Chamundi Hills)',
    indigenousName: 'Chamundi Betta',
    state: 'Karnataka',
    cityOrDistrict: 'Mysore (Mysuru)',
    region: 'South India',
    epochId: 'medieval-southern-temples',
    epochLabel: 'Sacred Hill Shrines',
    timePeriod: '12th Century CE (Hoysala) & 17th Century (Wodeyars)',
    dynastyOrPatron: 'Hoysala Empire & Wodeyars of Mysore',
    architecturalCategory: 'Himalayan & Hill Station Temple',
    sacredTradition: 'Maha Shakti Peeth',
    altitudeOrRiver: 'Altitude: 1,000m (3,300 ft) · Chamundi Hills',
    unescoSite: false,
    summary: 'Perched 1,000 meters high atop Chamundi Hills overlooking the royal city of Mysore, dedicated to Goddess Chamundeshwari who vanquished the demon Mahishasura.',
    engineeringMarvel: 'A 1,000-step stone stairway carved into the granite hill with the celebrated 15-foot monolithic black granite Nandi bull halfway up.',
    touristGuide: {
      bestSeason: 'October to March; Mysore Dasara in September/October is world-famous.',
      timings: '07:30 – 14:00, 15:30 – 18:00, and 19:30 – 21:00 daily.',
      mustSeeHighlight: 'The 7-tier sculpted Dravidian gopuram, the giant colorful statue of Mahishasura, and the panoramic view of Mysore Palace from the summit viewpoint.',
      travelTip: 'Walk the historic 1,000 stone steps in the early morning for fitness and panoramic sunrise views over the city.'
    },
    thumbnailBadge: 'Guardian of Royal Mysore (1,000m)'
  }
];
