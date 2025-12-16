# Eventure Front End Component Library

A comprehensive React component library for building event management applications.

## Quick Start

```bash
npm install
npm run dev
```

Navigate to `http://localhost:5173` to view the component documentation.

**Best Practices**

- Bookmark the component documentation at `http://localhost:5173`
- Practice reading component source code in `src/components/`
- Start planning which components are needed for the eventure application
- Review prop patterns and common usage examples

### Troubleshooting Common Issues

**If Components Don't Display:**

- Check that `npm run dev` is running
- Verify component imports are correct
- Ensure props are passed correctly

**If Props Don't Work:**

- Check component file for exact prop names
- Verify data types (string, boolean, function, array)
- Ensure required props are provided

**If Styling Looks Wrong:**

- Check if className prop is being passed correctly
- Verify SCSS files are imported
- Look for modifier classes (e.g., `button--primary`)

### Key Takeaways

1. **Components are functions** that accept props and return JSX
2. **Props customize behavior** - they're like function parameters
3. **Some components manage their own state**, others rely on parent state
4. **Pattern recognition** helps you understand new components quickly
5. **Composition** allows building complex UIs from simple components
6. **This library prioritizes simplicity** - no complex configurations needed

### Additional Notes

This component library follows React best practices and includes:

- Semantic HTML structure with proper accessibility
- Consistent SCSS styling patterns
- Flexible prop-based customization
- Simple, readable component code
- No TypeScript or complex build configurations

The components are designed to work together seamlessly, making it easier for beginners to create professional-looking applications without starting from scratch.
