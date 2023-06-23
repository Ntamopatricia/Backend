// Select the database to use.
use('ReactBackendProject');

// Insert a few documents into the PortfolioData collection.
// db.getCollection('projects').insertMany(
//     [
//         {
          
//             image: 'https://live.staticflickr.com/65535/52996408644_165e4d32c8_z.jpg',
//             title: 'Interview Situation',
//             github: 'https://github.com',
//             demo: 'https://www.flickr.com/photos/198662907@N08/52996408644/in/dateposted/',
//         },
//         {
       
//             image: 'https://live.staticflickr.com/65535/52996731628_85d1da35c4_z.jpg',
//             title: 'Formal Handshake',
//             github: 'https://github.com',
//             demo: 'https://www.flickr.com/photos/198662907@N08/52996731628/in/dateposted/',
//         },
//         {
//             image: 'https://live.staticflickr.com/65535/52996631905_23e24702be.jpg',
//             title: 'Little Steps',
//             github: 'https://github.com',
//             demo: 'https://www.flickr.com/photos/198662907@N08/52996631905/in/dateposted/',
//         },
//         {
        
//             image: 'https://live.staticflickr.com/65535/52995662472_e7eba6084d.jpg',
//             title: 'Content Writing',
//             github: 'https://github.com',
//             demo: 'https://www.flickr.com/photos/198662907@N08/52996715388/in/dateposted/',
//         },
//         {
     
//             image: 'https://live.staticflickr.com/65535/52996266786_3d43734deb_w.jpg',
//             title: 'Qualified Steps',
//             github: 'https://github.com',
//             demo: 'https://www.flickr.com/photos/198662907@N08/52996266786/in/dateposted/',
//         },
//         {
       
//             image: 'https://live.staticflickr.com/65535/52995661987_caa01d94d8_z.jpg',
//             title: 'Office Meeting',
//             github: 'https://github.com',
//             demo: 'https://www.flickr.com/photos/198662907@N08/52995661987/in/dateposted/',
//         },
//     ]
// );

// Insert a few documents into the PortfolioData collection.
db.getCollection('testimonials').insertMany(
 [
        {
          avatar: 'https://live.staticflickr.com/65535/52996249731_1a30ebafda_w.jpg',
          name: 'Elma Jackson',
          review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!"
        },
        
        {
          avatar: 'https://live.staticflickr.com/65535/52996715548_348979e104_w.jpg',
          name: 'Avery Simpson',
          review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!"
        },
        {
          avatar: 'https://live.staticflickr.com/65535/52996615115_99e3697cfe_w.jpg',
          name: 'Nathaniel Blanco',
          review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!"
        },
        {
          avatar: 'https://live.staticflickr.com/65535/52996391654_cb00386082_w.jpg',
          name: 'Cody Lynch',
          review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!"
        },
      
      
      ]
);
