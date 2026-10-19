/**
 * Utility for Wikipedia reference links across historical epochs and monument dossiers.
 * Ensures clean target="_blank" destination links with canonical article mapping and reliable fallbacks.
 */

export const WIKIPEDIA_SITE_URLS: Record<string, string> = {
  // Global & Indian Wonders in HISTORICAL_SITES
  'colosseum-rome': 'https://en.wikipedia.org/wiki/Colosseum',
  'petra-jordan': 'https://en.wikipedia.org/wiki/Petra',
  'machu-picchu': 'https://en.wikipedia.org/wiki/Machu_Picchu',
  'great-pyramid-giza': 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza',
  'taj-mahal': 'https://en.wikipedia.org/wiki/Taj_Mahal',
  'parthenon-athens': 'https://en.wikipedia.org/wiki/Parthenon',
  'angkor-wat': 'https://en.wikipedia.org/wiki/Angkor_Wat',
  'chichen-itza': 'https://en.wikipedia.org/wiki/Chichen_Itza',
  'hagia-sophia': 'https://en.wikipedia.org/wiki/Hagia_Sophia',
  'great-wall-china': 'https://en.wikipedia.org/wiki/Great_Wall_of_China',
  'alhambra-granada': 'https://en.wikipedia.org/wiki/Alhambra',
  'timbuktu-sankore': 'https://en.wikipedia.org/wiki/Sankore_Madrasah',
  'kedarnath-temple-uttarakhand': 'https://en.wikipedia.org/wiki/Kedarnath_Temple',
  'kashi-vishwanath-varanasi': 'https://en.wikipedia.org/wiki/Kashi_Vishwanath_Temple',
  'mahakaleshwar-ujjain': 'https://en.wikipedia.org/wiki/Mahakaleshwar_Jyotirlinga',
  'kamakhya-temple-guwahati': 'https://en.wikipedia.org/wiki/Kamakhya_Temple',

  // Indian Historical & Sacred Sites
  'dholavira-kutch': 'https://en.wikipedia.org/wiki/Dholavira',
  'lothal-dockyard': 'https://en.wikipedia.org/wiki/Lothal',
  'mahabodhi-temple-bodh-gaya': 'https://en.wikipedia.org/wiki/Mahabodhi_Temple',
  'nalanda-university-ruins': 'https://en.wikipedia.org/wiki/Nalanda_mahavihara',
  'sanchi-stupa-bhopal': 'https://en.wikipedia.org/wiki/Sanchi',
  'ajanta-caves-aurangabad': 'https://en.wikipedia.org/wiki/Ajanta_Caves',
  'elephanta-caves-mumbai': 'https://en.wikipedia.org/wiki/Elephanta_Caves',
  'ellora-kailash-temple': 'https://en.wikipedia.org/wiki/Kailash_Temple,_Ellora',
  'brihadisvara-temple-thanjavur': 'https://en.wikipedia.org/wiki/Brihadisvara_Temple',
  'hoysaleswara-temple-halebidu': 'https://en.wikipedia.org/wiki/Hoysaleswara_Temple',
  'meenakshi-temple-madurai': 'https://en.wikipedia.org/wiki/Meenakshi_Temple',
  'konark-sun-temple-odisha': 'https://en.wikipedia.org/wiki/Konark_Sun_Temple',
  'khajuraho-monuments-mp': 'https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments',
  'qutb-minar-delhi': 'https://en.wikipedia.org/wiki/Qutb_Minar',
  'hampi-vijayanagara-karnataka': 'https://en.wikipedia.org/wiki/Hampi',
  'fatehpur-sikri-agra': 'https://en.wikipedia.org/wiki/Fatehpur_Sikri',
  'red-fort-delhi': 'https://en.wikipedia.org/wiki/Red_Fort',
  'raigad-fort-maharashtra': 'https://en.wikipedia.org/wiki/Raigad_Fort',
  'golden-temple-amritsar': 'https://en.wikipedia.org/wiki/Golden_Temple',
  'ranakpur-jain-temple-rajasthan': 'https://en.wikipedia.org/wiki/Ranakpur_Jain_temple',
  'tungnath-highest-shiva-temple': 'https://en.wikipedia.org/wiki/Tungnath',
  'badrinath-temple-chamoli': 'https://en.wikipedia.org/wiki/Badrinath_Temple',
  'amarnath-cave-shrine-kashmir': 'https://en.wikipedia.org/wiki/Amarnath_Temple',
  'vaishno-devi-katra': 'https://en.wikipedia.org/wiki/Vaishno_Devi',
  'jwala-ji-shakti-peeth': 'https://en.wikipedia.org/wiki/Jwalamukhi',
  'ambaji-temple-gujarat': 'https://en.wikipedia.org/wiki/Ambaji',
  'kalighat-temple-kolkata': 'https://en.wikipedia.org/wiki/Kalighat_Kali_Temple',
  'somnath-temple-gujarat': 'https://en.wikipedia.org/wiki/Somnath_temple',
  'kashi-vishwanath-jyotirlinga': 'https://en.wikipedia.org/wiki/Kashi_Vishwanath_Temple',
  'dilwara-temples-mount-abu': 'https://en.wikipedia.org/wiki/Dilwara_Temples',
  'gomateshwara-shravanabelagola': 'https://en.wikipedia.org/wiki/Gommateshwara_statue',
  'shore-temple-mamallapuram': 'https://en.wikipedia.org/wiki/Shore_Temple',
  'golconda-fort-hyderabad': 'https://en.wikipedia.org/wiki/Golconda_Fort',
  'chittorgarh-fort-rajasthan': 'https://en.wikipedia.org/wiki/Chittor_Fort'
};

export const WIKIPEDIA_EPOCH_URLS: Record<string, string> = {
  'indus-valley': 'https://en.wikipedia.org/wiki/Indus_Valley_Civilisation',
  'vedic-mahajanapadas': 'https://en.wikipedia.org/wiki/Vedic_period',
  'mauryan-empire': 'https://en.wikipedia.org/wiki/Maurya_Empire',
  'classical-gupta': 'https://en.wikipedia.org/wiki/Gupta_Empire',
  'medieval-southern-temples': 'https://en.wikipedia.org/wiki/History_of_South_India',
  'delhi-sultanate-rajputs': 'https://en.wikipedia.org/wiki/Delhi_Sultanate',
  'mughal-empire': 'https://en.wikipedia.org/wiki/Mughal_Empire',
  'maratha-sikh-independence': 'https://en.wikipedia.org/wiki/Maratha_Empire'
};

/**
 * Returns canonical Wikipedia URL for any historical site / monument.
 */
export function getMonumentWikipediaUrl(site: { id?: string; name: string; wikipediaUrl?: string }): string {
  if (site.wikipediaUrl) return site.wikipediaUrl;
  if (site.id && WIKIPEDIA_SITE_URLS[site.id]) return WIKIPEDIA_SITE_URLS[site.id];
  
  // Format clean query string
  const cleanName = site.name
    .replace(/\(.*?\)/g, '')
    .replace(/:/g, '')
    .trim();
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanName.replace(/\s+/g, '_'))}`;
}

/**
 * Returns canonical Wikipedia URL for an Indian Historical Epoch.
 */
export function getEpochWikipediaUrl(epoch: { id?: string; epochName: string; wikipediaUrl?: string }): string {
  if (epoch.wikipediaUrl) return epoch.wikipediaUrl;
  if (epoch.id && WIKIPEDIA_EPOCH_URLS[epoch.id]) return WIKIPEDIA_EPOCH_URLS[epoch.id];

  const cleanName = epoch.epochName
    .replace(/^\d+\.\s*/, '')
    .replace(/\(.*?\)/g, '')
    .trim();
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanName.replace(/\s+/g, '_'))}`;
}

/**
 * Returns canonical Wikipedia URL for an Indian sacred place or monument.
 */
export function getSacredPlaceWikipediaUrl(place: { id?: string; name: string; wikipediaUrl?: string }): string {
  if (place.wikipediaUrl) return place.wikipediaUrl;
  if (place.id && WIKIPEDIA_SITE_URLS[place.id]) return WIKIPEDIA_SITE_URLS[place.id];

  const cleanName = place.name
    .replace(/\(.*?\)/g, '')
    .replace(/:/g, '')
    .trim();
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(cleanName.replace(/\s+/g, '_'))}`;
}
