const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 22, 2023",
    title:
      "Einführung in die Objektorientierte Programmierung",
    image: "/images/blog4.png",
    link: "informatikblog8.wordpress.com/2023/12/22/einfuhrung-in-die-objektorientierte-programmierung/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Node.js", "PostgreSQL"],
  },
  {
    category: "Desktop",
    items: ["PySide6", "PyQt", "Electron"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "py2app"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Sharkofwitch",
  },
  {
    id: 2,
    text: "Photography",
    icon: "/icons/camera.svg",
    bg: "#4bcb63",
    link: "https://szark.org/",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#ff866b",
    link: "https://www.instagram.com/szark_org/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/szark",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Retro Notebook",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "RetroNotebook Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Retro Notebook is a nostalgic, feature-rich application bringing back the aesthetics of vintage computing.",
            "It combines a custom interpreter for code execution with minigames, animations, and retro UI design.",
            "Features include CodeGrid (a logic puzzle game), Tetris, notebook cells for code and markdown, and a custom DSL interpreter.",
            "Built with PySide6 for macOS with CRT effects, scanlines, glitch animations, and immersive retro styling.",
          ],
        },
        {
          id: 2,
          name: "RetroNotebook.app",
          icon: "/images/retro.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Sharkofwitch/retro-notebook",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "retro-notebook.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Photography Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Portfolio Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A sleek, Next.js-powered photography portfolio with Apple-inspired design and seamless photo management.",
            "Features dynamic photo galleries, secure admin panel, dark mode, and Nextcloud integration for robust photo storage.",
            "Showcases digital and analog photography with smooth animations, glass effects, and optimized Core Web Vitals.",
            "Built with Next.js, Tailwind CSS, Framer Motion, and Prisma for a modern, performant experience.",
          ],
        },
        {
          id: 2,
          name: "szark.org",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://szark.org",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Repository.md",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Sharkofwitch/portfolio",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Synapz",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Synapz Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-30 left-10",
          description: [
            "Synapz is a peer-to-peer chat application enabling real-time communication across multiple chatrooms.",
            "Users can join chatrooms, send messages, manage online status (online, busy, offline), and view chatroom members.",
            "Built with Java using socket programming and multi-threading for scalable server-client architecture.",
            "Features user authentication, chatroom management, status updates, and real-time message broadcasting.",
          ],
        },
        {
          id: 2,
          name: "Synapz.java",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Sharkofwitch/Synapz",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "photo-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/jakob.jpg",
    },
    {
      id: 2,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/jakob-2.jpg",
    },
    {
      id: 3,
      name: "chess-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/jakob-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/jakob-3.jpg",
      description: [
        "Hey! I'm a full-stack developer passionate about creating immersive digital experiences—from retro-inspired desktop apps to modern web projects.",
        "I work across Python, JavaScript, React, and Java, building everything from custom interpreters and desktop applications to photography portfolios and real-time chat systems.",
        "I'm drawn to thoughtful design, performance optimization, and projects that blend creativity with technical depth—whether that's nostalgic retro UIs or seamless photo galleries.",
        "When I'm not coding, you'll find me behind the camera capturing moments through my lens, exploring the intersection of art and technology.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };