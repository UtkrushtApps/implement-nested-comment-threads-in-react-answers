1. **Create the Theme Context:**
   - Create a `ThemeContext` using React Context API to share theme state and a toggle handler across the app.
   - Write a `ThemeProvider` which encapsulates logic for loading/saving user's theme from `localStorage`, provides a `toggleTheme` function, and updates theme instantly via context.
   - Provide a custom hook (`useTheme`) for components to access the context easily.

2. **Set Up Theme Styles with CSS Variables:**
   - In `index.css`, define CSS variables for color palette differences between light and dark themes: set variables (e.g., `--bg`, `--text`, `--card-bg`) inside `body[data-theme='light']` and `body[data-theme='dark']` selectors.
   - Make use of these variables for consistent styling across the dashboard.
   - Add transition effects for background and color changes.
   - Include accessible "visually hidden" styles for screen-reader text.

3. **Theme Toggle Button (Accessible):**
   - In the `Header` component, add a button that toggles the theme.
   - Use `role="switch"` and `aria-checked` to indicate current state and ARIA-label for accessible naming.
   - Make sure the toggle is reachable by keyboard tab, and indicates current theme visually (e.g., sun/moon emoji, high-contrast text for screen readers).

4. **Propagate the Theme Globally:**
   - Use React Context (`useTheme`) in all theme-aware components (e.g., `Header`, `Card`) to access current theme and update UI instantly on toggle.
   - Add and update a `data-theme` attribute on `body` inside `ThemeProvider`'s effect so CSS switches globally and instantly.

5. **Persist Theme Preference:**
   - In `ThemeProvider`, on theme change, update `localStorage` and the `body` attribute so user preference persists across reloads.
   - Check stored theme on load, fallback to system preference, then default to light theme.

6. **Use and Demonstrate Theme in Multiple Components:**
   - The `Card` component and the `Header` must both make use of theme context and change their styles accordingly.
   - Add at least two Card instances to demonstrate theme awareness.

7. **Tie it All Together in App:**
   - Wrap App content with `ThemeProvider` at the highest level.
   - Import CSS for global styles.
   - Render `Header` and a couple of `Card` instances to showcase theme propagation.

8. **Mount the App and Test:**
   - Ensure that toggling the theme with the button from the header updates styles immediately everywhere.
   - Ensure the preference is saved and restored across reloads.
   - Check the toggle button is accessible via keyboard and screen readers.
