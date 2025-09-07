# Ravenous - Yelp Clone

**Developed by Brandon Gonzalez**

A React-based web application that mimics the core functionality of Yelp, allowing users to search for restaurants and view business information in a clean, modern interface.

## 🎯 Purpose

Ravenous is a restaurant discovery application designed to help users find and explore local dining options. The project demonstrates modern React development practices, responsive web design, and component-based architecture. It serves as a foundation for building a full-featured restaurant review and discovery platform.

## 🚀 Technologies Used

- **React** - Frontend JavaScript library for building user interfaces
- **CSS3** - Styling with modern features including Flexbox, Grid, and responsive design
- **JavaScript (ES6+)** - Modern JavaScript features including arrow functions, destructuring, and modules
- **HTML5** - Semantic markup structure
- **Node.js & npm** - Package management and development tools
- **Create React App** - Development environment and build tooling

## ✨ Features

### Current Features

- **🔍 Advanced Search Interface**
  - Search by business name/type
  - Location-based filtering
  - Sort options: Best Match, Highest Rated, Most Reviewed
  - Interactive sort selection with visual feedback

- **🏪 Business Display**
  - Grid layout of restaurant cards
  - Business images with hover effects
  - Comprehensive business information:
    - Name and category
    - Full address details
    - Star ratings
    - Review counts

- **📱 Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Touch-friendly interface elements
  - Optimized for both desktop and mobile experiences

- **🎨 Modern UI/UX**
  - Clean, professional design
  - Gradient backgrounds and smooth transitions
  - Hover effects and interactive elements
  - Consistent color scheme and typography

### Sample Data

The application currently displays sample restaurants including:
- MarginOtto Pizzeria (Italian cuisine)
- Burger King (Fast Food)
- Los Pollos Hermanos (Mexican cuisine)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Business.jsx          # Individual business card component
│   ├── Business.css          # Business card styling
│   ├── BusinessList.jsx      # Container for business cards
│   ├── BusinessList.css      # Business list layout
│   ├── SearchBar.jsx         # Search interface component
│   └── SearchBar.css         # Search bar styling
├── App.js                    # Main application component
├── App.css                   # Global application styles
├── index.js                  # Application entry point
└── index.css                 # Base styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd prod-ravenous
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🔮 Future Work

### Short-term Enhancements

- **🔌 API Integration**
  - Connect to Yelp Fusion API or similar service
  - Real-time business data fetching
  - Dynamic search results based on user input

- **📍 Geolocation Features**
  - Auto-detect user location
  - Distance-based sorting
  - Map integration for business locations

- **⭐ Enhanced Business Details**
  - Detailed business pages
  - Photo galleries
  - Operating hours and contact information
  - Price range indicators

### Medium-term Goals

- **👤 User Features**
  - User authentication and profiles
  - Favorite businesses functionality
  - Personal review submission
  - Rating system

- **🔍 Advanced Search**
  - Filter by cuisine type, price range, ratings
  - Advanced location search with autocomplete
  - Search history and saved searches

- **📱 Progressive Web App (PWA)**
  - Offline functionality
  - Push notifications for deals/updates
  - App-like mobile experience

### Long-term Vision

- **🤖 AI-Powered Recommendations**
  - Personalized restaurant suggestions
  - Machine learning-based preference analysis
  - Smart filtering based on user behavior

- **🌐 Social Features**
  - User reviews and photo sharing
  - Social media integration
  - Friend recommendations and activity feeds

- **💼 Business Dashboard**
  - Business owner portal
  - Analytics and insights
  - Menu management and updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Brandon Gonzalez**
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]

---

*Built with ❤️ using React*