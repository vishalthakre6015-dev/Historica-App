import { HistoricalSite, RecommendedSite } from '../types/history';

/**
 * Calculates geographic distance (Haversine formula) in kilometers
 */
function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Calculate multi-dimensional similarity between two historical sites
 */
export function calculateSiteSimilarity(
  siteA: HistoricalSite,
  siteB: HistoricalSite
): { score: number; primaryReason: string; matchedAttributes: string[] } {
  if (siteA.id === siteB.id) {
    return { score: 100, primaryReason: 'Identical site', matchedAttributes: [] };
  }

  let score = 0;
  const matchedAttributes: string[] = [];
  const reasonParts: string[] = [];

  // 1. Era Match (Max 30 points)
  if (siteA.eraCategory === siteB.eraCategory) {
    score += 30;
    matchedAttributes.push(`Same Era: ${siteA.eraCategory}`);
    reasonParts.push(`Contemporary ${siteA.eraCategory}`);
  } else if (
    (siteA.eraCategory.includes('Classical') && siteB.eraCategory.includes('Ancient')) ||
    (siteA.eraCategory.includes('Ancient') && siteB.eraCategory.includes('Classical')) ||
    (siteA.eraCategory.includes('Medieval') && siteB.eraCategory.includes('Early Modern'))
  ) {
    score += 15;
    matchedAttributes.push('Adjacent Historical Period');
  }

  // 2. Geographic Region Match (Max 20 points)
  if (siteA.location.region === siteB.location.region) {
    score += 20;
    matchedAttributes.push(`Region: ${siteA.location.region}`);
    reasonParts.push(`Regional proximity in ${siteA.location.region}`);
  } else if (
    (siteA.location.region === 'Europe' && siteB.location.region === 'Middle East') ||
    (siteA.location.region === 'Middle East' && siteB.location.region === 'Europe')
  ) {
    // Mediterranean / Silk Road trade corridor connection
    score += 12;
    matchedAttributes.push('Mediterranean & Silk Road Corridor');
    reasonParts.push('Mediterranean trade routes connection');
  }

  // 3. Architectural & Engineering Themes Overlap (Max 35 points)
  const themesA = siteA.architecturalThemes || [];
  const themesB = siteB.architecturalThemes || [];

  if (themesA.length > 0 && themesB.length > 0) {
    const sharedThemes = themesA.filter(t => themesB.includes(t));
    if (sharedThemes.length > 0) {
      const themeRatio = sharedThemes.length / Math.min(themesA.length, themesB.length);
      const themePoints = Math.round(themeRatio * 35);
      score += themePoints;
      
      const humanThemes = sharedThemes.map(t => t.replace(/-/g, ' '));
      matchedAttributes.push(...humanThemes.map(t => `Shared feature: ${t}`));
      
      const readableTheme = humanThemes[0];
      reasonParts.push(`Shared architectural focus on ${readableTheme}`);
    }
  }

  // 4. Heritage Designation Alignment (Max 10 points)
  if (
    siteA.heritageStatus.includes('New 7 Wonders') &&
    siteB.heritageStatus.includes('New 7 Wonders')
  ) {
    score += 10;
    matchedAttributes.push('New Seven Wonders of the World');
  } else if (
    siteA.heritageStatus.includes('UNESCO') &&
    siteB.heritageStatus.includes('UNESCO')
  ) {
    score += 5;
    matchedAttributes.push('UNESCO World Heritage Monument');
  }

  // 5. Geographic Proximity Bonus (Max 5 points)
  const distKm = calculateDistanceKm(
    siteA.location.coordinates.lat,
    siteA.location.coordinates.lng,
    siteB.location.coordinates.lat,
    siteB.location.coordinates.lng
  );

  if (distKm < 2000) {
    score += 5;
    matchedAttributes.push(`Within ${Math.round(distKm)} km`);
  } else if (distKm < 4500) {
    score += 3;
  }

  // Clamp score between 15 and 98%
  const finalScore = Math.min(98, Math.max(18, score));

  // Build clean primary reason
  let primaryReason = '';
  if (reasonParts.length > 0) {
    primaryReason = reasonParts.slice(0, 2).join(' · ');
  } else if (matchedAttributes.length > 0) {
    primaryReason = matchedAttributes[0];
  } else {
    primaryReason = `Monumental stonework in ${siteB.location.country}`;
  }

  return {
    score: finalScore,
    primaryReason,
    matchedAttributes
  };
}

/**
 * Suggests similar sites to a currently viewed site
 */
export function getSimilarSites(
  currentSite: HistoricalSite,
  allSites: HistoricalSite[],
  limit: number = 3
): RecommendedSite[] {
  const candidates = allSites.filter(s => s.id !== currentSite.id);

  const scored = candidates.map(site => {
    const { score, primaryReason, matchedAttributes } = calculateSiteSimilarity(currentSite, site);
    return {
      site,
      similarityScore: score,
      primaryMatchReason: primaryReason,
      matchedAttributes
    };
  });

  scored.sort((a, b) => b.similarityScore - a.similarityScore);
  return scored.slice(0, limit);
}

/**
 * Suggests personalized historical sites based on user's saved/bookmarked history
 */
export function getPersonalizedRecommendations(
  bookmarkedSiteIds: string[],
  recentlyViewedSiteIds: string[],
  allSites: HistoricalSite[],
  limit: number = 4
): { recommendations: RecommendedSite[]; basisDescription: string } {
  // If user has no bookmarks or viewed sites, recommend top world gateway wonders
  const activeIds = bookmarkedSiteIds.length > 0 ? bookmarkedSiteIds : recentlyViewedSiteIds;

  if (activeIds.length === 0) {
    const defaults = allSites.slice(0, limit).map(site => ({
      site,
      similarityScore: 92,
      primaryMatchReason: 'Foundational Ancient Wonder',
      matchedAttributes: [site.eraCategory, site.civilization]
    }));
    return {
      recommendations: defaults,
      basisDescription: 'Curated gateway wonders of antiquity'
    };
  }

  // Find user's seed sites
  const seedSites = allSites.filter(s => activeIds.includes(s.id));
  const candidateSites = allSites.filter(s => !bookmarkedSiteIds.includes(s.id));

  // If user bookmarked all sites, allow viewing any site
  const pool = candidateSites.length > 0 ? candidateSites : allSites;

  // Aggregate user profile affinity:
  // For each candidate, compute average similarity against all seed sites
  const scored = pool.map(candidate => {
    let totalScore = 0;
    const reasons: string[] = [];
    const allMatched: string[] = [];

    seedSites.forEach(seed => {
      const result = calculateSiteSimilarity(seed, candidate);
      totalScore += result.score;
      if (result.score >= 50 && reasons.length < 2) {
        reasons.push(`Similar to ${seed.name.split(' ')[0]} (${result.primaryReason})`);
      }
      allMatched.push(...result.matchedAttributes);
    });

    const avgScore = Math.round(totalScore / seedSites.length);
    const uniqueMatched = Array.from(new Set(allMatched)).slice(0, 3);

    return {
      site: candidate,
      similarityScore: avgScore,
      primaryMatchReason: reasons[0] || `Aligned with your interest in ${candidate.civilization}`,
      matchedAttributes: uniqueMatched
    };
  });

  scored.sort((a, b) => b.similarityScore - a.similarityScore);

  const seedNames = seedSites.map(s => s.name.split(' ')[0]).slice(0, 2).join(' & ');
  const basisDescription = `Based on your interest in ${seedNames}`;

  return {
    recommendations: scored.slice(0, limit),
    basisDescription
  };
}
