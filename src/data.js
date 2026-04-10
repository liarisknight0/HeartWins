/* ───── Data constants for the Heartwins site ───── */

export const products = [
  { id: 1, name: 'Dark Chocolate Bars',     category: 'Dark',     weight: '100g', price: '₹199', flavor: 'Rich Dark Cocoa',                img: '/images/dark-chocolate-bars.jpg',  ingredients: 'Premium dark couverture, cocoa butter, vanilla extract' },
  { id: 2, name: 'Assorted Truffle Box',     category: 'Gifting',  weight: '250g', price: '₹499', flavor: 'Mixed Flavors Assortment',       img: '/images/boxed-assortment.jpg',     ingredients: 'Dark, milk, white truffles, assorted fillings, foil-wrapped' },
  { id: 3, name: 'White Chocolate Fudge',    category: 'White',    weight: '200g', price: '₹349', flavor: 'Tutti Frutti & Cream',            img: '/images/assorted-chocolates.jpg',  ingredients: 'White chocolate, candied fruit pieces, cream, vanilla' },
  { id: 4, name: 'Chocolate Bouquet',        category: 'Gifting',  weight: '300g', price: '₹799', flavor: 'Luxury Gift Arrangement',         img: '/images/chocolate-bouquet.jpg',    ingredients: 'Heartwins chocolate bars, decorative wrapping, ribbon' },
  { id: 5, name: 'Rose Truffle Cups',        category: 'Milk',     weight: '120g', price: '₹299', flavor: 'Rose & Strawberry Cream',         img: '/images/assorted-chocolates.jpg',  ingredients: 'Milk chocolate, rose extract, strawberry cream filling' },
  { id: 6, name: 'Festive Gift Box',         category: 'Seasonal', weight: '500g', price: '₹999', flavor: 'Republic Day Special',             img: '/images/boxed-assortment.jpg',     ingredients: 'Curated festive assortment, premium foil wrapping' },
  { id: 7, name: 'Heart Pattern Bar',        category: 'Dark',     weight: '80g',  price: '₹179', flavor: 'Intense Dark with Hearts',        img: '/images/dark-chocolate-bars.jpg',  ingredients: 'Dark chocolate 65%, cocoa butter, heart-shaped mold' },
  { id: 8, name: 'Celebration Hamper',       category: 'Gifting',  weight: '750g', price: '₹1499',flavor: 'Grand Assorted Collection',       img: '/images/boxed-assortment.jpg',     ingredients: 'Mixed truffles, bars, bonbons — perfect for celebrations' },
  { id: 9, name: 'Silver Foil Bonbons',      category: 'Milk',     weight: '150g', price: '₹349', flavor: 'Classic Milk Chocolate',           img: '/images/assorted-chocolates.jpg',  ingredients: 'Milk chocolate, hazelnut praline, silver foil wrapping' },
  { id: 10,name: 'Puzzle Bar Collection',    category: 'Dark',     weight: '100g', price: '₹229', flavor: 'Fun Shaped Dark Bars',             img: '/images/dark-chocolate-bars.jpg',  ingredients: 'Dark chocolate, unique puzzle & wave mold designs' },
];

export const categories = ['All', 'Dark', 'Milk', 'White', 'Gifting', 'Seasonal'];

export const craftStages = [
  { num: '01', title: 'Bean Selection',  desc: 'We source the finest quality cacao and ingredients to ensure every chocolate is exceptional.' },
  { num: '02', title: 'Roasting',        desc: 'Careful roasting at precise temperatures unlocks each ingredient\'s unique flavor profile.' },
  { num: '03', title: 'Grinding',        desc: 'Ground to perfection to achieve a silky-smooth, melt-on-your-tongue texture.' },
  { num: '04', title: 'Tempering',       desc: 'Hand-tempered to get that satisfying snap and glossy finish on every bar.' },
  { num: '05', title: 'Molding',         desc: 'Poured into custom molds — hearts, puzzles, waves — and set with care.' },
  { num: '06', title: 'Packaging',       desc: 'Wrapped in branded Heartwins packaging — ready to be gifted or savored.' },
];

export const occasions = [
  { name: 'Birthday',     icon: '🎂', gradient: 'from-rose-gold/40 to-blush/30' },
  { name: 'Anniversary',  icon: '💝', gradient: 'from-blush/40 to-cream/30' },
  { name: 'Diwali',       icon: '🪔', gradient: 'from-rose-gold/50 to-choco-brown/20' },
  { name: "Valentine's",  icon: '💐', gradient: 'from-blush/50 to-rose-gold/30' },
  { name: 'Corporate',    icon: '🤝', gradient: 'from-choco-brown/30 to-cream/20' },
];

export const teamMembers = [
  { name: 'Heartwins Team',  role: 'Founder & Head Chocolatier',  img: 'https://picsum.photos/seed/team1/300/300', funFact: 'Started crafting chocolates from a home kitchen!' },
  { name: 'Creative Lead',   role: 'Design & Packaging',          img: 'https://picsum.photos/seed/team2/300/300', funFact: 'Designs every box and label by hand.' },
  { name: 'Flavor Expert',   role: 'Head of Flavors',             img: 'https://picsum.photos/seed/team3/300/300', funFact: 'Experiments with 50+ flavor combinations every month.' },
  { name: 'Production Lead', role: 'Production & Quality',        img: 'https://picsum.photos/seed/team4/300/300', funFact: 'Can temper chocolate blindfolded!' },
];

export const testimonials = [
  { name: 'Kavya R.',     city: 'Deoghar',    stars: 5, text: 'The dark chocolate bars are absolutely divine! Best chocolates in Jharkhand.' },
  { name: 'Aditya S.',    city: 'Ranchi',     stars: 5, text: 'Ordered the gift box for Republic Day. Everyone loved it — best gift I ever gave.' },
  { name: 'Sneha M.',     city: 'Patna',      stars: 5, text: 'Heartwins understands chocolate. The white fudge with tutti frutti is amazing.' },
  { name: 'Rahul T.',     city: 'Deoghar',    stars: 4, text: 'Smooth, rich, and beautifully packaged. My wife loved the anniversary bouquet!' },
  { name: 'Neha P.',      city: 'Kolkata',    stars: 5, text: 'I keep coming back to the truffle cups. It\'s dangerously addictive.' },
  { name: 'Varun K.',     city: 'Dhanbad',    stars: 5, text: 'Corporate gifting sorted for life! Professional, delicious, and always on time.' },
  { name: 'Ishaan D.',    city: 'Jamshedpur', stars: 5, text: 'Every bar tells a story. You can taste the craftsmanship in every bite.' },
  { name: 'Anjali G.',    city: 'Bokaro',     stars: 4, text: 'The chocolate bouquet was a hit at the party. Will order again!' },
];

export const milestones = [
  { year: '2022', title: 'The First Batch',   desc: 'Heartwins makes the first 50 bars in a home kitchen in Deoghar.' },
  { year: '2023', title: 'Going Online',       desc: 'Heartwins starts taking orders online and shipping across Jharkhand.' },
  { year: '2024', title: 'Growing Love',       desc: 'Expanding to celebrations — bouquets, hampers, and festive specials.' },
  { year: '2025', title: 'Hearts Won!',        desc: 'Hundreds of happy customers and counting across India.' },
];

export const contactInfo = {
  phone: ['9296874223', '8809041530', '7563960488'],
  address: 'Bompass Town, Deoghar, Jharkhand 814112',
  tagline: 'One Bite for Someone Special',
};
