# MacFolio Components

This document provides detailed documentation for all components in the MacFolio application.

## 📋 Component Overview

MacFolio uses a component-based architecture with React functional components, custom hooks, and higher-order components.

## 🧩 Core Components

### App Component

**File**: `src/App.jsx`
**Purpose**: Root component that orchestrates the entire application

```jsx
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />
      {/* Window Components */}
      <Image />
      <Resume />
      <Text />
      <Contact />
      <Finder />
      <Photos />
      <Safari />
      <Terminal />
    </main>
  );
};
```

**Features**:
- Renders all main UI components
- Manages global layout structure
- GSAP plugin registration

### Navbar Component

**File**: `src/components/Navbar.jsx`
**Purpose**: Top navigation bar with menu items and system controls

```jsx
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/icons/apple.svg" alt="Apple" />
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => handleNavClick(link)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        {navIcons.map((icon) => (
          <img key={icon.id} src={icon.img} alt="" />
        ))}
      </div>
    </nav>
  );
};
```

**Features**:
- Apple menu simulation
- Navigation links to main sections
- System status icons (WiFi, search, user, mode)

### Welcome Component

**File**: `src/components/Welcome.jsx`
**Purpose**: Landing screen with user introduction

```jsx
const Welcome = () => {
  return (
    <section id="welcome">
      <div className="welcome-content">
        <h1>Welcome to MacFolio</h1>
        <p>Explore my portfolio in macOS style</p>
        <div className="welcome-actions">
          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
```

**Features**:
- Animated welcome message
- Call-to-action buttons
- Smooth transitions to main interface

### Dock Component

**File**: `src/components/Dock.jsx`
**Purpose**: macOS-style dock with animated icons

```jsx
const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  useGSAP(() => {
    const animateIcons = (mouseX) => {
      icons.forEach((icon) => {
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };
  }, []);

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <button
            key={id}
            className="dock-icon"
            onClick={() => toggleApp({ id, canOpen })}
          >
            <img src={`/images/${icon}`} alt={name} />
          </button>
        ))}
      </div>
    </section>
  );
};
```

**Features**:
- Magnetic hover animations
- Window toggle functionality
- Tooltip integration
- Disabled state handling

### Home Component

**File**: `src/components/Home.jsx`
**Purpose**: Desktop area displaying project folders

```jsx
const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
```

**Features**:
- Draggable project folders
- Finder window integration
- Position-based layout
- Click-to-open functionality

### WindowControls Component

**File**: `src/components/WindowControls.jsx`
**Purpose**: Window management controls (minimize, maximize, close)

```jsx
const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div className="window-controls">
      <button
        className="control close"
        onClick={() => closeWindow(target)}
        aria-label="Close window"
      >
        <X size={12} />
      </button>
      <button
        className="control minimize"
        aria-label="Minimize window"
      >
        <Minus size={12} />
      </button>
      <button
        className="control maximize"
        aria-label="Maximize window"
      >
        <Square size={10} />
      </button>
    </div>
  );
};
```

**Features**:
- macOS-style traffic light controls
- Close, minimize, maximize functions
- Accessibility labels
- Icon integration

## 🪟 Window Components

### Finder Window

**File**: `src/windows/Finder.jsx`
**Purpose**: File browser window with sidebar navigation

```jsx
const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (['fig', 'url'].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            {renderList('Favorites', Object.values(locations))}
            {renderList('Projects', locations.work.children)}
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
```

**Features**:
- Sidebar navigation
- File/folder browsing
- Search functionality
- Context menu support
- Multiple file type handling

### Safari Window

**File**: `src/windows/Safari.jsx`
**Purpose**: Web browser window for articles and external links

```jsx
const Safari = () => {
  const { windows } = useWindowStore();
  const safariData = windows.safari?.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <div className="safari-controls">
          <button className="back">←</button>
          <button className="forward">→</button>
          <button className="refresh">↻</button>
        </div>
        <input
          type="text"
          value={safariData?.url || ""}
          readOnly
          className="address-bar"
        />
      </div>

      <div className="safari-content">
        {safariData ? (
          <iframe
            src={safariData.url}
            title={safariData.title}
            className="w-full h-full"
          />
        ) : (
          <div className="default-view">
            <h2>Articles & Resources</h2>
            <div className="blog-posts">
              {blogPosts.map((post) => (
                <article key={post.id}>
                  <img src={post.image} alt={post.title} />
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
                  <a href={post.link} target="_blank" rel="noopener">
                    Read More
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
```

**Features**:
- Browser-like interface
- Blog post display
- External link navigation
- Address bar simulation

### Photos Window

**File**: `src/windows/Photos.jsx`
**Purpose**: Photo gallery window with album organization

```jsx
const Photos = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Photos</h2>
      </div>

      <div className="photos-content">
        {!selectedAlbum ? (
          <div className="albums-grid">
            {photosLinks.map((album) => (
              <div
                key={album.id}
                className="album-card"
                onClick={() => setSelectedAlbum(album)}
              >
                <img src={album.icon} alt={album.title} />
                <h3>{album.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="album-view">
            <button
              className="back-button"
              onClick={() => setSelectedAlbum(null)}
            >
              ← Back to Albums
            </button>
            <div className="photos-grid">
              {gallery.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.img}
                  alt={`Gallery ${photo.id}`}
                  onClick={() => openImageViewer(photo)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
```

**Features**:
- Album-based organization
- Grid layout display
- Image viewer integration
- Navigation between albums

### Contact Window

**File**: `src/windows/Contact.jsx`
**Purpose**: Contact form and social media links

```jsx
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="social-links">
          <h3>Connect with me</h3>
          <div className="social-grid">
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ backgroundColor: social.bg }}
              >
                <img src={social.icon} alt={social.text} />
                <span>{social.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
```

**Features**:
- Contact form with validation
- Social media integration
- Responsive design
- Form state management

### Terminal Window

**File**: `src/windows/Terminal.jsx`
**Purpose**: Skills display in terminal interface

```jsx
const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([
    'Welcome to MacFolio Terminal',
    'Type "help" for available commands',
    '',
  ]);

  const executeCommand = (command) => {
    const newHistory = [...commandHistory, `> ${command}`];

    switch (command.toLowerCase()) {
      case 'help':
        newHistory.push(
          'Available commands:',
          '  skills - Show technical skills',
          '  experience - Show work experience',
          '  contact - Show contact information',
          '  clear - Clear terminal',
          '  help - Show this help message',
          ''
        );
        break;

      case 'skills':
        newHistory.push(
          'Technical Skills:',
          '  Frontend: React, Next.js, TypeScript, Tailwind CSS',
          '  Backend: Node.js, Express, NestJS, PostgreSQL',
          '  Tools: Git, Docker, AWS, Vercel',
          ''
        );
        break;

      case 'experience':
        newHistory.push(
          'Work Experience:',
          '  Frontend Developer - Current',
          '  Full Stack Developer - Previous',
          '  UI/UX Developer - Previous',
          ''
        );
        break;

      case 'contact':
        newHistory.push(
          'Contact Information:',
          '  Email: jakob@example.com',
          '  LinkedIn: /in/jakob',
          '  GitHub: @jakob',
          ''
        );
        break;

      case 'clear':
        return ['Terminal cleared', ''];

      default:
        newHistory.push(`Command not found: ${command}`, '');
    }

    return newHistory;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const result = executeCommand(currentCommand);
      setCommandHistory(result);
      setCurrentCommand('');
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Terminal - Skills</h2>
      </div>

      <div className="terminal-content">
        <div className="terminal-output">
          {commandHistory.map((line, index) => (
            <div key={index} className="terminal-line">
              {line}
            </div>
          ))}
        </div>

        <div className="terminal-input">
          <span className="prompt">&gt;</span>
          <input
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            className="command-input"
          />
        </div>
      </div>
    </>
  );
};
```

**Features**:
- Command-line interface simulation
- Interactive command execution
- Skills display through commands
- Terminal-like styling

### Resume Window

**File**: `src/windows/Resume.jsx`
**Purpose**: PDF resume viewer

```jsx
const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume</h2>
      </div>

      <div className="resume-content">
        <Document
          file="/resume.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="pdf-document"
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className="pdf-page"
          />
        </Document>

        <div className="pdf-controls">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>

          <span>
            Page {pageNumber} of {numPages}
          </span>

          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
          >
            Next
          </button>

          <div className="zoom-controls">
            <button onClick={() => setScale(Math.max(0.5, scale - 0.1))}>
              Zoom Out
            </button>
            <span>{Math.round(scale * 100)}%</span>
            <button onClick={() => setScale(Math.min(2, scale + 0.1))}>
              Zoom In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
```

**Features**:
- PDF rendering with React-PDF
- Page navigation
- Zoom controls
- Responsive display

### Text Window

**File**: `src/windows/Text.jsx`
**Purpose**: Text file viewer

```jsx
const Text = () => {
  const { windows } = useWindowStore();
  const textData = windows.txtfile?.data;

  if (!textData) {
    return (
      <>
        <div id="window-header">
          <WindowControls target="txtfile" />
          <h2>Text Viewer</h2>
        </div>
        <div className="text-content empty">
          <p>No text file selected</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{textData.name}</h2>
      </div>

      <div className="text-content">
        <div className="text-header">
          <h3>{textData.subtitle || textData.name}</h3>
          {textData.image && (
            <img src={textData.image} alt={textData.name} className="text-image" />
          )}
        </div>

        <div className="text-body">
          {textData.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};
```

**Features**:
- Rich text display
- Image integration
- Formatted content
- Dynamic data rendering

### Image Window

**File**: `src/windows/Image.jsx`
**Purpose**: Image viewer window

```jsx
const Image = () => {
  const { windows } = useWindowStore();
  const imageData = windows.imgfile?.data;

  if (!imageData) {
    return (
      <>
        <div id="window-header">
          <WindowControls target="imgfile" />
          <h2>Image Viewer</h2>
        </div>
        <div className="image-content empty">
          <p>No image selected</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{imageData.name}</h2>
      </div>

      <div className="image-content">
        <img
          src={imageData.imageUrl || imageData.href}
          alt={imageData.name}
          className="displayed-image"
        />
      </div>
    </>
  );
};
```

**Features**:
- Image display
- Full-size viewing
- Metadata display
- Zoom capabilities

## 🔧 Higher-Order Components

### WindowWrapper HOC

**File**: `src/hoc/WindowWrapper.jsx`
**Purpose**: Adds window behavior to components

```jsx
const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen = false, zIndex = 0 } = windows[windowKey] ?? {};
    const ref = useRef(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey)
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};
```

**Features**:
- Window opening/closing animations
- Draggable functionality
- Z-index management
- Focus handling

## 🎨 Styling Patterns

### CSS Classes Convention

#### Window Components
- `.window-header` - Window title bar
- `.window-controls` - Traffic light controls
- `.window-content` - Main content area

#### Layout Classes
- `.sidebar` - Left navigation panel
- `.content` - Main content area
- `.grid` - Grid layouts
- `.flex` - Flexbox layouts

#### Interactive Elements
- `.dock-icon` - Dock application icons
- `.folder` - Desktop folder icons
- `.active` - Active state indicators
- `.hover` - Hover state styles

## 🔄 Component Lifecycle

### Mounting
1. Component renders with initial props
2. WindowWrapper applies HOC behavior
3. GSAP animations initialize
4. Draggable instances created

### Updates
1. State changes trigger re-renders
2. GSAP animations respond to state changes
3. Z-index updates on focus
4. Position updates on drag

### Unmounting
1. GSAP animations cleanup
2. Draggable instances destroyed
3. Event listeners removed
4. Component unmounts

## 🚀 Performance Optimizations

### Memoization
- `React.memo` for expensive components
- `useMemo` for computed values
- `useCallback` for event handlers

### Lazy Loading
- Window components loaded on demand
- Image lazy loading with loading attribute
- Code splitting for large components

### Animation Performance
- GPU-accelerated transforms
- Reduced paint operations
- Optimized animation timelines

This comprehensive component documentation provides developers with the knowledge needed to understand, modify, and extend the MacFolio application components.