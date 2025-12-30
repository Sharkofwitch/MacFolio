# Contributing to MacFolio

Thank you for your interest in contributing to MacFolio! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Basic knowledge of React, Vite, and modern web development

### Development Setup
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/Mac-Portfolio.git
   cd Mac-Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📋 Development Workflow

### Branch Naming Convention
- `feature/` - New features
- `bugfix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `chore/` - Maintenance tasks

Example: `git checkout -b feature/add-new-window-type`

### Commit Message Format
We follow conventional commits:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

Example:
```
feat(components): add new WindowControls component

- Add minimize, maximize, and close buttons
- Implement window state management
- Add keyboard shortcuts support
```

## 🏗️ Architecture Guidelines

### Component Structure
- Use functional components with hooks
- Follow the single responsibility principle
- Keep components small and focused
- Use TypeScript for type safety (future enhancement)

### State Management
- Use Zustand stores for global state
- Prefer local state for component-specific data
- Use Immer for immutable state updates

### Styling
- Use Tailwind CSS utility classes
- Follow BEM-like naming conventions
- Maintain consistent spacing and colors
- Ensure responsive design

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Testing Guidelines
- Write tests for new features
- Test both happy path and error scenarios
- Include integration tests for complex interactions
- Maintain test coverage above 80%

## 🎨 Design Guidelines

### macOS Design Principles
- Follow macOS Human Interface Guidelines
- Maintain consistent spacing and typography
- Use appropriate animations and transitions
- Ensure accessibility compliance

### Color Palette
- Primary: macOS system colors
- Accent: Custom brand colors
- Semantic: Success, warning, error states

## 📝 Code Style

### ESLint Configuration
The project uses ESLint with React-specific rules. Run linting:
```bash
npm run lint
```

### Code Formatting
- Use consistent indentation (2 spaces)
- Follow React naming conventions
- Use descriptive variable and function names
- Add JSDoc comments for complex functions

## 🔄 Pull Request Process

1. **Create a Branch**: Create a feature branch from `main`
2. **Make Changes**: Implement your changes with tests
3. **Run Checks**: Ensure all tests pass and linting is clean
4. **Update Documentation**: Update README and docs if needed
5. **Create PR**: Open a pull request with a clear description
6. **Code Review**: Address review feedback
7. **Merge**: Squash and merge after approval

### PR Template
Please use the following template for pull requests:

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots of UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Tests pass
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🐛 Reporting Issues

### Bug Reports
When reporting bugs, please include:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS information
- Screenshots or videos

### Feature Requests
For feature requests, please provide:
- Clear description of the feature
- Use case and benefits
- Mockups or examples if applicable

## 📚 Documentation

### Updating Documentation
- Keep README.md up to date
- Update component documentation
- Add JSDoc comments for new functions
- Update architecture diagrams when needed

### Documentation Structure
- `README.md` - Main project overview
- `ARCHITECTURE.md` - Technical architecture details
- `COMPONENTS.md` - Component documentation
- `CONTRIBUTING.md` - This file

## 🤝 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Provide constructive feedback
- Help newcomers learn
- Maintain professional communication

### Enforcement
Violations of the code of conduct may result in:
- Warning
- Temporary ban
- Permanent ban from the project

## 📞 Getting Help

If you need help:
- Check existing issues and documentation
- Ask questions in discussions
- Contact maintainers directly

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Changelog
- Project acknowledgments

Thank you for contributing to MacFolio! 🎉