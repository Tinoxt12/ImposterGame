module.exports = [
"[project]/src/lib/wordBank.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "pickDecoy",
    ()=>pickDecoy,
    "pickWord",
    ()=>pickWord,
    "randomWordForMode",
    ()=>randomWordForMode
]);
const categories = [
    'Toxic Love',
    'Party Drama',
    'Online Chaos',
    'Awkward Adulting',
    'Flex Culture',
    'Conspiracy Fuel'
];
const words = [
    {
        term: 'gaslighting',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'sneaky link',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'rebound',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'fake alpha male',
        category: 'Toxic Relationships',
        difficulty: 'Hard'
    },
    {
        term: 'mommy issues',
        category: 'Toxic Relationships',
        difficulty: 'Hard'
    },
    {
        term: 'situationship',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'emotional damage',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'red flag',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'ghosting',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'love bomber',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'breadcrumbing',
        category: 'Toxic Relationships',
        difficulty: 'Hard'
    },
    {
        term: 'mixed signals',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'slow fade',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'commitment phobe',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'text drama',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'snap streak',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'gaslight tweet',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'brand deal',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'clout chaser',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'influencer apology',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'crypto bro',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'cancel culture',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'thirst trap',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'fake humblebrag',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'troll farm',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'algorithm addiction',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'sponsored selfie',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'fake follower',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'influencer feud',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'viral chaos',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'meme lord',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'DM sliding',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'subscription flex',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'branded hustle',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'cancel late-night',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'terrible tattoo',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'drunk text',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'blackout night',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'bar fight',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'late night confession',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'club VIP list',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'fake VIP',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'afterparty crash',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'karaoke meltdown',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'unpaid bottle service',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'shot roulette',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'VIP con',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'shady promoter',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'last call regret',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'house party chaos',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'spilled drink',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'fake ID',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'party pass',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'roommate debt',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'side hustle burnout',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'wedding RSVP mess',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'landlord drama',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'student loan shame',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'unpaid overtime',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'corporate ladder',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'toxic office romance',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'bad date',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'midlife crisis',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'impromptu therapy',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'burnout spiral',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'caffeine dependency',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'terrible manager',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'privacy breach',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'gym addiction',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'fake therapist',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'alpha energy',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'manipulative smile',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'fake apology',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'power move',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'control freak',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'silent treatment',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'fake concern',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'loyalty test',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'pity party',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'reputation hack',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'pushy wingman',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'influencer drip',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'black card flex',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'Illuminati theory',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'reptile overlord',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'chemtrail paranoia',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'flat earth party',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: '9/11 conspiracy',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'controlled demolition',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'deep state',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'globalist cabal',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'shadow network',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'secret society',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'moon landing denial',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'media blackout',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'cult meetup',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'alien tourist',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'zodiac cult',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'secret handshake',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'invisible elite',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'sugar daddy',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'subtweet drama',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'fake follower',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'spicy DM',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'doomscrolling',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'rage bait',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'manifesting',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'therapy speak',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'main character syndrome',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'emotionally unavailable',
        category: 'Toxic Relationships',
        difficulty: 'Hard'
    },
    {
        term: 'micro cheating',
        category: 'Toxic Relationships',
        difficulty: 'Hard'
    },
    {
        term: 'toxic positivity',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'soft launch',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'love bombing',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'bad breakup post',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'fake couple content',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'quiet luxury humblebrag',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'main char energy',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'clout bait',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'ghost kitchen',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'party gatekeeper',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'drama sandwich',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'trending apology',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'credit score flex',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'reputation audit',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'pickup artist',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'manosphere',
        category: 'Online Chaos',
        difficulty: 'Hard'
    },
    {
        term: 'no chill',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'hidden trust fund',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'ghost notification',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'open marriage vibe',
        category: 'Toxic Relationships',
        difficulty: 'Hard'
    },
    {
        term: 'party sabotage',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'fake honest truth',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'cold read',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'data broker',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'online persona',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'drunk DM confession',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'sneak peek betrayal',
        category: 'Toxic Relationships',
        difficulty: 'Medium'
    },
    {
        term: 'bottle service flex',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'competitive therapy',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'self-care grind',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'black mirror moment',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'emotional labor',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'clout chaser',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'terrible tattoo',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'drunk text',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'blackout night',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'bar fight',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'late night confession',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'club VIP list',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'fake VIP',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'afterparty crash',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'karaoke meltdown',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'unpaid bottle service',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'shot roulette',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'VIP con',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'shady promoter',
        category: 'Nightlife & Drama',
        difficulty: 'Hard'
    },
    {
        term: 'last call regret',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'house party chaos',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'spilled drink',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'fake ID',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'party pass',
        category: 'Nightlife & Drama',
        difficulty: 'Easy'
    },
    {
        term: 'roommate debt',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'side hustle burnout',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'wedding RSVP mess',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'landlord drama',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'student loan shame',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'unpaid overtime',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'corporate ladder',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'toxic office romance',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'bad date',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'midlife crisis',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'impromptu therapy',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'burnout spiral',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'caffeine dependency',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'terrible manager',
        category: 'Awkward Adulthood',
        difficulty: 'Medium'
    },
    {
        term: 'privacy breach',
        category: 'Awkward Adulthood',
        difficulty: 'Hard'
    },
    {
        term: 'gym addiction',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'fake therapist',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'alpha energy',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'manipulative smile',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'fake apology',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'power move',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'control freak',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'silent treatment',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'fake concern',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'loyalty test',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'pity party',
        category: 'Ego Flex',
        difficulty: 'Easy'
    },
    {
        term: 'reputation hack',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'pushy wingman',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'influencer drip',
        category: 'Ego Flex',
        difficulty: 'Medium'
    },
    {
        term: 'black card flex',
        category: 'Ego Flex',
        difficulty: 'Hard'
    },
    {
        term: 'Illuminati theory',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'reptile overlord',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'chemtrail paranoia',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'flat earth party',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: '9/11 conspiracy',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'controlled demolition',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'deep state',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'globalist cabal',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'shadow network',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'secret society',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'moon landing denial',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'media blackout',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'cult meetup',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'alien tourist',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'zodiac cult',
        category: 'Conspiracy Vibes',
        difficulty: 'Medium'
    },
    {
        term: 'secret handshake',
        category: 'Conspiracy Vibes',
        difficulty: 'Easy'
    },
    {
        term: 'invisible elite',
        category: 'Conspiracy Vibes',
        difficulty: 'Hard'
    },
    {
        term: 'sugar daddy',
        category: 'Toxic Relationships',
        difficulty: 'Easy'
    },
    {
        term: 'fake follower',
        category: 'Online Chaos',
        difficulty: 'Medium'
    },
    {
        term: 'spicy DM',
        category: 'Online Chaos',
        difficulty: 'Easy'
    },
    {
        term: 'late fee drama',
        category: 'Awkward Adulthood',
        difficulty: 'Easy'
    },
    {
        term: 'burn notice',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'club crush',
        category: 'Nightlife & Drama',
        difficulty: 'Medium'
    },
    {
        term: 'social sabotage',
        category: 'Ego Flex',
        difficulty: 'Hard'
    }
];
const RECENT_KEY = 'imposter_recent_words';
const MAX_RECENT = 16;
function loadRecent() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function saveRecent(words) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function chooseRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function pickWord(category) {
    const recent = loadRecent();
    const pool = words.filter((word)=>word.category === category);
    const fresh = pool.filter((word)=>!recent.includes(word.term));
    const choice = chooseRandom(fresh.length ? fresh : pool);
    saveRecent([
        ...recent.filter((term)=>term !== choice.term),
        choice.term
    ]);
    return choice.term;
}
function pickDecoy(original, category) {
    const pool = words.filter((word)=>word.category === category && word.term !== original);
    if (!pool.length) {
        const fallback = words.filter((word)=>word.term !== original);
        return chooseRandom(fallback).term;
    }
    return chooseRandom(pool).term;
}
function randomWordForMode(category, mode) {
    if (mode === 'Classic') return {
        word: pickWord(category),
        decoy: null
    };
    if (mode === 'After Dark') {
        const word = pickWord(category);
        const decoy = pickCloserDecoy(word, category, difficulty);
        return {
            word,
            decoy
        };
    }
    if (mode === 'Chaos Mode') {
        const word = pickWord(category);
        return {
            word,
            decoy: Math.random() < 0.55 ? pickDecoy(word, category, difficulty) : null
        };
    }
    if (mode === 'Cabal Mode') {
        const word = pickWord(category);
        return {
            word,
            decoy: null
        };
    }
    if (mode === 'Toxic Internet Mode') {
        const word = pickWord(category);
        return {
            word,
            decoy: pickDecoy(word, 'Online Chaos', difficulty)
        };
    }
    const word = pickWord(category);
    return {
        word,
        decoy: null
    };
}
function pickCloserDecoy(original, category) {
    const pool = words.filter((word)=>word.category === category && word.term !== original);
    if (!pool.length) return pickDecoy(original, category, difficulty);
    const sorted = pool.sort((a, b)=>a.term.length - b.term.length);
    const sameLength = sorted.filter((entry)=>Math.abs(entry.term.length - original.length) <= 6);
    return chooseRandom(sameLength.length ? sameLength : pool).term;
}
}),
"[project]/src/components/Setup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Setup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@10.12.6_react_e221bb87de55025e796fdbd7dc64890c/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wordBank.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Setup({ players, setPlayers, mode, setMode, onStart }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.max(3, Math.min(8, players.length || 4)));
    const [names, setNames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (players.length) return players;
        return Array.from({
            length: count
        }, (_, i)=>`Player ${i + 1}`);
    });
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"][0]);
    const [starterPreview, setStarterPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setNames((prev)=>{
            const next = prev.slice(0, count);
            while(next.length < count)next.push(`Player ${next.length + 1}`);
            return next;
        });
    }, [
        count
    ]);
    // sound helper
    function clickSound() {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'sine';
            o.frequency.value = 520;
            g.gain.value = 0.04;
            o.connect(g);
            g.connect(ctx.destination);
            o.start();
            setTimeout(()=>{
                o.stop();
                ctx.close();
            }, 120);
        } catch (e) {}
    }
    function vibrate() {
        if (navigator.vibrate) navigator.vibrate(40);
    }
    function updateCount(delta) {
        const n = Math.max(3, Math.min(8, count + delta));
        setCount(n);
        clickSound();
        vibrate();
    }
    function setNameAt(i, v) {
        setNames((prev)=>{
            const copy = [
                ...prev
            ];
            copy[i] = v;
            return copy;
        });
    }
    function randomizeStarter() {
        clickSound();
        vibrate();
        const idx = Math.floor(Math.random() * names.length);
        const starter = names[idx];
        setStarterPreview(starter);
        return starter;
    }
    function start() {
        if (names.length < 3) return alert('Require 3–8 players');
        const assigned = {};
        const impIndex = Math.floor(Math.random() * names.length);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["randomWordForMode"])(category, mode);
        names.forEach((p, i)=>{
            const role = i === impIndex ? 'imposter' : 'civilian';
            assigned[p] = {
                role,
                word: role === 'civilian' ? result.word : result.decoy
            };
        });
        const starter = randomizeStarter();
        setPlayers(names);
        clickSound();
        vibrate();
        onStart(assigned, starter);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 8
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: "Player Count"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-semibold",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>updateCount(-1),
                                className: "w-16 h-16 rounded-full bg-white/5 text-xl",
                                children: "−"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>updateCount(1),
                                className: "w-16 h-16 rounded-full bg-white/5 text-xl",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Setup.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: "Names"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 space-y-2",
                        children: names.slice(0, count).map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: n,
                                onChange: (e)=>setNameAt(i, e.target.value),
                                className: "w-full p-3 rounded bg-black/10"
                            }, i, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Setup.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: "Category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wordBank$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCategory(cat);
                                    clickSound();
                                    vibrate();
                                },
                                className: `p-3 rounded text-left ${category === cat ? 'bg-neon text-black' : 'bg-white/5'}`,
                                children: cat
                            }, cat, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Setup.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: "Mode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-2",
                        children: [
                            'Classic',
                            'After Dark',
                            'Chaos Mode',
                            'Cabal Mode',
                            'Toxic Internet Mode'
                        ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMode(m);
                                    clickSound();
                                    vibrate();
                                },
                                className: `p-3 rounded text-left ${mode === m ? 'bg-neon text-black' : 'bg-white/5'}`,
                                children: m
                            }, m, false, {
                                fileName: "[project]/src/components/Setup.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Setup.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: start,
                        className: "w-full p-4 rounded bg-neon text-black text-lg",
                        children: "Start Game"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>randomizeStarter(),
                        className: "w-full p-3 rounded bg-white/5",
                        children: "Randomize Starting Player"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    starterPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: [
                            "Preview: ",
                            starterPreview
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Setup.tsx",
                        lineNumber: 137,
                        columnNumber: 27
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Setup.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Setup.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@10.12.6_react_e221bb87de55025e796fdbd7dc64890c/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Reveal({ players, roles, startingPlayer, onComplete }) {
    // compute order starting from startingPlayer if provided
    const startIndex = startingPlayer ? players.findIndex((p)=>p === startingPlayer) : 0;
    const order = startIndex && startIndex > 0 ? [
        ...players.slice(startIndex),
        ...players.slice(0, startIndex)
    ] : players;
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    function reveal() {
        setSeen({
            ...seen,
            [index]: true
        });
    }
    function next() {
        if (index + 1 >= players.length) return onComplete();
        setIndex((i)=>i + 1);
    }
    const name = order[index];
    const data = roles[name];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-400",
                children: "Pass the phone to"
            }, void 0, false, {
                fileName: "[project]/src/components/Reveal.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded bg-black/20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/Reveal.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    !seen[index] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-sm text-gray-400",
                                children: "Tap to reveal your role"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: reveal,
                                className: "mt-4 w-full p-3 bg-neon text-black rounded",
                                children: "Reveal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400",
                                children: "Role"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl neon",
                                children: data.role
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400 mt-2",
                                children: "Secret"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 rounded bg-black/10",
                                children: data.word ?? '—'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-xs text-gray-400",
                                children: "Hide screen and pass phone"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: next,
                                className: "mt-2 w-full p-3 bg-white/5 rounded",
                                children: "Done"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Reveal.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Reveal.tsx",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Reveal.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/DiscussionStart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DiscussionStart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@10.12.6_react_e221bb87de55025e796fdbd7dc64890c/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const DEFAULT_SECONDS = 10;
function DiscussionStart({ onContinue }) {
    const [musicOn, setMusicOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_SECONDS);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const oscRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>countdown / DEFAULT_SECONDS * 100, [
        countdown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (musicOn) {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.value = 110;
                gain.gain.value = 0.02;
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                audioRef.current = ctx;
                gainRef.current = gain;
                oscRef.current = osc;
            } catch (error) {
                console.warn('Audio unavailable', error);
            }
        }
        return ()=>{
            if (oscRef.current) oscRef.current.stop();
            if (audioRef.current) audioRef.current.close();
            oscRef.current = null;
            gainRef.current = null;
            audioRef.current = null;
        };
    }, [
        musicOn
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!musicOn) return;
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(()=>{
            setCountdown((current)=>{
                if (current <= 1) {
                    if (intervalRef.current) window.clearInterval(intervalRef.current);
                    return 0;
                }
                return current - 1;
            });
        }, 1000);
        return ()=>{
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [
        musicOn
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-950 via-black to-indigo-950 p-6 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(138,43,226,0.35),_transparent_40%)] opacity-60 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/DiscussionStart.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-10 top-8 h-24 rounded-full bg-white/5 blur-2xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/DiscussionStart.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-400 uppercase tracking-[0.35em]",
                                children: "Prepare for discussion"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscussionStart.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-4xl font-black neon",
                                children: "DISCUSSION STARTS NOW"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscussionStart.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscussionStart.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-white/10 bg-black/20 p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-sm text-gray-300 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Countdown"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DiscussionStart.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            countdown,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DiscussionStart.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DiscussionStart.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-3 rounded-full bg-white/10 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-neon transition-all duration-500",
                                    style: {
                                        width: `${progress}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscussionStart.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscussionStart.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscussionStart.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-white/10 bg-black/10 p-4 space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-300",
                                            children: "Suspense Music"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscussionStart.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: "Use if you want tension."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DiscussionStart.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DiscussionStart.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMusicOn((on)=>!on),
                                    className: `px-4 py-2 rounded-full ${musicOn ? 'bg-neon text-black' : 'bg-white/5 text-white'}`,
                                    children: musicOn ? 'On' : 'Off'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DiscussionStart.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/DiscussionStart.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DiscussionStart.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-sm text-gray-300",
                                children: "This is the moment the app steps back. Now your group takes over with the drama."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscussionStart.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (intervalRef.current) window.clearInterval(intervalRef.current);
                                    onContinue();
                                },
                                className: "w-full rounded-2xl bg-neon py-4 text-lg font-semibold text-black shadow-xl shadow-neon/20",
                                children: "Start Discussion"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DiscussionStart.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DiscussionStart.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DiscussionStart.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DiscussionStart.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Results.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Results
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@10.12.6_react_e221bb87de55025e796fdbd7dc64890c/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Results({ roles, onNext }) {
    const imp = Object.entries(roles).find(([_, v])=>v.role === 'imposter')?.[0] ?? 'Unknown';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$10$2e$12$2e$6_react_e221bb87de55025e796fdbd7dc64890c$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "space-y-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-gray-400",
                children: "In-person play: discuss and vote"
            }, void 0, false, {
                fileName: "[project]/src/components/Results.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 rounded bg-black/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: "Tap to reveal who was the Imposter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Results.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg neon font-semibold",
                            children: imp
                        }, void 0, false, {
                            fileName: "[project]/src/components/Results.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Results.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Results.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onNext,
                    className: "w-full p-3 rounded bg-neon text-black",
                    children: "Next Round"
                }, void 0, false, {
                    fileName: "[project]/src/components/Results.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Results.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Results.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.6_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Setup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Setup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiscussionStart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DiscussionStart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Results$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Results.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Page() {
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('classic');
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('setup');
    const [round, setRound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [roles, setRoles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [startingPlayer, setStartingPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass p-4 rounded-2xl shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold neon mb-4",
                children: "Imposter"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            phase === 'setup' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Setup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                players: players,
                setPlayers: setPlayers,
                mode: mode,
                setMode: setMode,
                onStart: (assigned, starter)=>{
                    setRoles(assigned);
                    setStartingPlayer(starter);
                    setPhase('reveal');
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            phase === 'reveal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                players: players,
                roles: roles,
                startingPlayer: startingPlayer,
                onComplete: ()=>setPhase('discussion')
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            phase === 'discussion' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DiscussionStart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onContinue: ()=>setPhase('results')
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this),
            phase === 'results' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$6_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0_$5f$react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Results$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                roles: roles,
                onNext: ()=>{
                    setRound((r)=>r + 1);
                    setPhase('setup');
                    setPlayers([]);
                    setRoles({});
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_0vvwhkt._.js.map