// 100+ mock jobs for search/filter/pagination UI
const mockJobs = [
  // Web Development
  {
    id: 1,
    job_title: "Frontend React Developer",
    category: "Web Development",
    min_price: 500,
    max_price: 1200,
    deadline: "2024-07-15T00:00:00.000Z",
    description: "Build a responsive React web app for our startup.",
    buyer: {
      email: "client1@example.com",
      name: "Alice Smith",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  },
  {
    id: 2,
    job_title: "Full Stack Developer Needed",
    category: "Web Development",
    min_price: 800,
    max_price: 2000,
    deadline: "2024-07-20T00:00:00.000Z",
    description: "Develop a MERN stack application for e-commerce.",
    buyer: {
      email: "client2@example.com",
      name: "Bob Johnson",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  },
  // ... (repeat and randomize for 34 more Web Dev jobs)

  // Graphics Design
  {
    id: 36,
    job_title: "Logo Designer for Tech Startup",
    category: "Graphics Design",
    min_price: 150,
    max_price: 400,
    deadline: "2024-07-10T00:00:00.000Z",
    description: "Create a modern logo for a new SaaS company.",
    buyer: {
      email: "client36@example.com",
      name: "Carol Lee",
      photo: "https://randomuser.me/api/portraits/women/36.jpg",
    },
  },
  {
    id: 37,
    job_title: "UI/UX Designer for Mobile App",
    category: "Graphics Design",
    min_price: 600,
    max_price: 1500,
    deadline: "2024-07-18T00:00:00.000Z",
    description: "Design user-friendly interfaces for a fintech app.",
    buyer: {
      email: "client37@example.com",
      name: "David Kim",
      photo: "https://randomuser.me/api/portraits/men/37.jpg",
    },
  },
  // ... (repeat and randomize for 32 more Graphics Design jobs)

  // Digital Marketing
  {
    id: 69,
    job_title: "SEO Specialist Needed",
    category: "Digital Marketing",
    min_price: 300,
    max_price: 900,
    deadline: "2024-07-12T00:00:00.000Z",
    description: "Optimize our website for search engines and improve ranking.",
    buyer: {
      email: "client69@example.com",
      name: "Eve Turner",
      photo: "https://randomuser.me/api/portraits/women/69.jpg",
    },
  },
  {
    id: 70,
    job_title: "Social Media Manager",
    category: "Digital Marketing",
    min_price: 400,
    max_price: 1000,
    deadline: "2024-07-22T00:00:00.000Z",
    description: "Manage and grow our social media presence across platforms.",
    buyer: {
      email: "client70@example.com",
      name: "Frank Miller",
      photo: "https://randomuser.me/api/portraits/men/70.jpg",
    },
  },
  // ... (repeat and randomize for 32 more Digital Marketing jobs)
];

// Generate more jobs to reach 100+
for (let i = 3; i <= 35; i++) {
  mockJobs.push({
    id: i,
    job_title: `Web Developer #${i}`,
    category: "Web Development",
    min_price: 400 + i * 10,
    max_price: 1000 + i * 15,
    deadline: `2024-07-${10 + (i % 20)}T00:00:00.000Z`,
    description: `Develop a custom website for client #${i}.`,
    buyer: {
      email: `client${i}@example.com`,
      name: `User ${i}`,
      photo: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    },
  });
}
for (let i = 38; i <= 69; i++) {
  mockJobs.push({
    id: i,
    job_title: `Graphic Designer #${i}`,
    category: "Graphics Design",
    min_price: 100 + i * 5,
    max_price: 500 + i * 10,
    deadline: `2024-07-${5 + (i % 20)}T00:00:00.000Z`,
    description: `Design graphics for project #${i}.`,
    buyer: {
      email: `client${i}@example.com`,
      name: `Designer ${i}`,
      photo: `https://randomuser.me/api/portraits/women/${i}.jpg`,
    },
  });
}
for (let i = 71; i <= 104; i++) {
  mockJobs.push({
    id: i,
    job_title: `Digital Marketer #${i}`,
    category: "Digital Marketing",
    min_price: 200 + i * 7,
    max_price: 800 + i * 12,
    deadline: `2024-07-${8 + (i % 20)}T00:00:00.000Z`,
    description: `Run digital marketing campaign for client #${i}.`,
    buyer: {
      email: `client${i}@example.com`,
      name: `Marketer ${i}`,
      photo: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    },
  });
}

export default mockJobs;
