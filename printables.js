/*
  Etsy printables cards for index.html (English) and ta.html (Tamil).
  To add or change a product, edit the list below. Nothing else needs to change.
  Prices are in US dollars, exactly as set in the Etsy Shop Manager.
  Images: first cover image of each Etsy listing (1080x810, 4:3).
*/
(function () {
  var grid = document.getElementById('printables-grid');
  if (!grid) return;
  var ta = document.documentElement.lang === 'ta';
  var IMG = 'https://i.etsystatic.com/68895189/r/il/';
  var items = [
    {
      id: '4609153324',
      img: 'ad80ba/8811490048/il_1080xN.8811490048_4d1g.jpg',
      title: 'Christmas Mega Bundle',
      price: '10.99',
      en: '5 printable packs, 146 pages: games, activities, bingo, gift tags and Santa letters. Save 37% compared with buying them separately.',
      ta: '5 printable packs, 146 பக்கங்கள்: games, activities, bingo, gift tags, Santa letters. தனித்தனியாக வாங்குவதைவிட 37% சேமிப்பு.'
    },
    {
      id: '4607899455',
      img: '7cd9c8/8811476594/il_1080xN.8811476594_coxs.jpg',
      title: 'Christmas Activity Bundle for Kids Ages 4-8',
      price: '3.49',
      en: '28 pages of coloring pages, mazes and word search for ages 4-8.',
      ta: '4-8 வயதுக்கான 28 பக்கங்கள்: coloring pages, mazes, word search.'
    },
    {
      id: '4609100782',
      img: 'be2133/8811487440/il_1080xN.8811487440_8ua0.jpg',
      title: 'Family Christmas Party Games',
      price: '4.79',
      en: '30 printable games for kids, teens and adults, with answer keys.',
      ta: 'குழந்தைகள், பெரியவர்கள் அனைவருக்குமான 30 printable விளையாட்டுகள்.'
    },
    {
      id: '4609832752',
      img: 'ca8e2f/8859293885/il_1080xN.8859293885_mded.jpg',
      title: 'Christmas Morning Scavenger Hunt',
      price: '2.99',
      en: '12 rhyming clue cards, a start card, a final surprise card and a parent guide, for kids ages 4-8.',
      ta: '4-8 வயதுக்கு: 12 rhyming clue cards, start card, final surprise card, பெற்றோர் வழிகாட்டி.'
    },
    {
      id: '4608376520',
      img: '53d400/8859301083/il_1080xN.8859301083_9swx.jpg',
      title: 'Christmas Picture Bingo for Kids',
      price: '2.99',
      en: '40 full-color pages: 30 bingo cards, 24 calling cards, a caller\'s checklist and markers.',
      ta: '40 முழு வண்ணப் பக்கங்கள்: 30 bingo cards, 24 calling cards, caller checklist, markers.'
    },
    {
      id: '4611626940',
      img: '70f853/8859427275/il_1080xN.8859427275_9rgz.jpg',
      title: 'Christmas Math and Literacy Worksheets',
      price: '3.49',
      en: '30 no-prep worksheets (39 pages) for Kindergarten and 1st Grade, ages 4-7, with a friendly fox, bear and bunny.',
      ta: 'Kindergarten, 1st Grade (4-7 வயது) குழந்தைகளுக்கான 30 no-prep worksheets (39 பக்கங்கள்).'
    },
    {
      id: '4609147819',
      img: 'ab82d3/8859870885/il_1080xN.8859870885_4akz.jpg',
      title: 'Christmas Advent Activity Cards',
      price: '3.99',
      en: '72 countdown cards in 3 sets: family fun, kindness and classroom.',
      ta: '3 தொகுப்புகளில் 72 countdown cards: குடும்பம், அன்பு, வகுப்பறை.'
    },
    {
      id: '4609383986',
      img: '6d5255/8859333199/il_1080xN.8859333199_hmby.jpg',
      title: 'Christmas Eve Box Kit',
      price: '4.49',
      en: 'Box labels, North Pole tags, reindeer food toppers, Santa key and bedtime story.',
      ta: 'Box labels, North Pole tags, reindeer food toppers, Santa key, உறக்கக் கதை.'
    },
    {
      id: '4609376159',
      img: 'd4920d/8859335531/il_1080xN.8859335531_isla.jpg',
      title: 'Christmas Elf Letters &amp; Notes',
      price: '5.49',
      en: 'Arrival letter, 24 daily elf notes, report card, passport and goodbye letter.',
      ta: 'Arrival letter, 24 தினசரி elf notes, report card, passport, goodbye letter.'
    },
    {
      id: '4608411950',
      img: '234fc6/8859306817/il_1080xN.8859306817_pxqu.jpg',
      title: 'Letter to Santa &amp; Nice List Kit',
      price: '3.49',
      en: 'Santa letters, a reply from Santa, Nice List certificate and more.',
      ta: 'Santa-க்கு கடிதம், Santa-வின் பதில், Nice List சான்றிதழ் மற்றும் பல.'
    },
    {
      id: '4608389708',
      img: '01157f/8811482530/il_1080xN.8811482530_96db.jpg',
      title: 'Printable Christmas Gift Tags',
      price: '2.79',
      en: '72 colorful tags and labels in 12 pages: To/From, From Santa, teacher tags and color-your-own.',
      ta: '12 பக்கங்களில் 72 வண்ண tags, labels: To/From, From Santa, ஆசிரியர் tags, color-your-own.'
    }
  ];
  var dl = ta ? 'உடனடி download' : 'instant download';
  var btn = ta ? 'Etsy-ல் பார்க்கவும் →' : 'View on Etsy →';
  grid.innerHTML = items.map(function (p) {
    return '<article class="card">' +
      '<img src="' + IMG + p.img + '" width="1080" height="810" alt="' + p.title + ' cover" loading="lazy" ' +
      'style="width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;border-radius:12px;margin-bottom:14px">' +
      '<h3>' + p.title + '</h3>' +
      '<p>' + (ta ? p.ta : p.en) + '</p>' +
      '<p style="font-weight:700;color:var(--brand-dark);font-size:1.1rem;margin:8px 0 12px">$' + p.price +
      ' <span style="font-size:0.8rem;font-weight:500;color:var(--muted)">' + dl + '</span></p>' +
      '<a class="btn btn-primary" href="https://www.etsy.com/listing/' + p.id + '" target="_blank" rel="noopener noreferrer">' + btn + '</a>' +
      '</article>';
  }).join('');
})();
