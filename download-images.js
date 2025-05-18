const https = require('https');
const fs = require('fs');
const path = require('path');

// Weather background images to download
const images = [
  {
    url: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=1200&q=80',
    filename: 'clear.jpg',
    description: 'Clear sky background'
  },
  {
    url: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80',
    filename: 'cloudy.jpg',
    description: 'Cloudy sky background'
  },
  {
    url: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1200&q=80',
    filename: 'rainy.jpg',
    description: 'Rainy weather background'
  },
  {
    url: 'https://images.unsplash.com/photo-1547754980-3df97fed72a8?w=1200&q=80',
    filename: 'snow.jpg',
    description: 'Snowy weather background'
  },
  {
    url: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1200&q=80',
    filename: 'thunder.jpg',
    description: 'Thunderstorm background'
  },
  {
    url: 'https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?w=1200&q=80',
    filename: 'mist.jpg',
    description: 'Misty weather background'
  },
  {
    url: 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=1200&q=80',
    filename: 'default.jpg',
    description: 'Default weather background'
  }
];

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download images
images.forEach(image => {
  const filePath = path.join(imagesDir, image.filename);
  const file = fs.createWriteStream(filePath);
  
  console.log(`Downloading ${image.description} from ${image.url}`);
  
  https.get(image.url, response => {
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${image.filename}`);
    });
  }).on('error', err => {
    fs.unlink(filePath, () => {}); // Delete the file if there's an error
    console.error(`Error downloading ${image.filename}: ${err.message}`);
  });
});
