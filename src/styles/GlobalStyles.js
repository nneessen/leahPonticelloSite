import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Light Mode Colors */
  --color-brand-50: #E8F1FA; /* Light Blue - Backgrounds and light accents */
  --color-brand-100: #B9D4F4; /* Light Blue - Hover states and lighter accents */
  --color-brand-200: #8AB8EE; /* Soft Blue - Secondary buttons and active states */
  --color-brand-500: #2A7DDE; /* Medium Blue - Primary buttons and interactive elements */
  --color-brand-600: #246ABD; /* Bright Blue - For important components */
  --color-brand-700: #1F579C; /* Deep Blue - Headings and important text */
  --color-brand-800: #1A457A; /* Darker Blue - Emphasis and strong accents */
  --color-brand-900: #153458; /* Darkest Blue - For text or elements that need to stand out */

  --color-accent-50: #FFF4E5; /* Light Orange - Backgrounds and light accents */
  --color-accent-100: #FFE1B3; /* Light Orange - Hover states and lighter accents */
  --color-accent-200: #FFCE80; /* Soft Orange - Secondary buttons and active states */
  --color-accent-500: #F2994A; /* Medium Orange - Primary buttons and interactive elements */
  --color-accent-600: #DB7F27; /* Bright Orange - For important components */
  --color-accent-700: #B56520; /* Deep Orange - Headings and important text */
  --color-accent-800: #8E4C19; /* Darker Orange - Emphasis and strong accents */
  --color-accent-900: #663312; /* Darkest Orange - For text or elements that need to stand out */

  --color-background: #F8F9FA; /* Light Grey - Background */
  --color-text: #333333; /* Dark Grey - Text color */

  &, &.light-mode {
    --color-grey-0: #FFFFFF; /* White background */
    --color-grey-50: #F8F9FA;
    --color-grey-100: #EDF2F7;
    --color-grey-200: #E2E8F0;
    --color-grey-300: #CBD5E0;
    --color-grey-400: #A0AEC0;
    --color-grey-500: #718096;
    --color-grey-600: #4A5568;
    --color-grey-700: #2D3748;
    --color-grey-800: #1A202C;
    --color-grey-900: #171923;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 1.5rem 2.8rem rgba(0, 0, 0, 0.10);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    --shadow-xl: 0 3.2rem 4.8rem rgba(0, 0, 0, 0.16);
  }

  &.dark-mode {
    --color-grey-0: #121212; /* Very dark grey background */
    --color-grey-50: #1D1D1D;
    --color-grey-100: #242424;
    --color-grey-200: #2E2E2E;
    --color-grey-300: #383838;
    --color-grey-400: #424242;
    --color-grey-500: #545454;
    --color-grey-600: #757575;
    --color-grey-700: #AFAFAF;
    --color-grey-800: #D4D4D4;
    --color-grey-900: #E1E1E1;

    --color-blue-100: #1F3B73;
    --color-blue-700: #AFC7E7;
    --color-green-100: #2C7A3B;
    --color-green-700: #B2D8B6;
    --color-yellow-100: #7A510E;
    --color-yellow-700: #E6D1A3;
    --color-silver-100: #434343;
    --color-silver-700: #D4D4D4;
    --color-indigo-100: #272B4D;
    --color-indigo-700: #BFC3D7;

    --color-red-100: #990000;
    --color-red-700: #F4A0A0;
    --color-red-800: #B91C1C;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.5rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

.react-datepicker {
  font-size: 1rem; /* Adjust font size */
}

.react-datepicker__month-container {
  width: 230px; /* Adjust the width of the calendar */
}

.react-datepicker__header {
  background-color: #f0f0f0; /* Customize the header background */
}

.react-datepicker__day,
.react-datepicker__day-name,
.react-datepicker__time-name {
  width: 2.5rem; /* Adjust the size of the day cells */
  line-height: 2.5rem;
}

.react-datepicker__current-month,
.react-datepicker-time__header {
  font-size: 1.25rem; /* Adjust the font size of the current month text */
}

#account-nav a.active {
  color: var(--color-brand-50);
  background-color: var(--color-brand-900);
  font-weight: 700;
}

#account-nav a.pending {
  color: var(--color-grey-500);
  background-color: var(--color-grey-100);
}

`;

export default GlobalStyles;
