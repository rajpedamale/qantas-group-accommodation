# Overview
This is a Next.js-based hotel search application that fetches hotel data from an API, displays a list of hotels,
allows sorting, and shows details for each hotel.
The project follows best practices with TypeScript, Tailwind CSS, Jest for testing, and Next.js optimizations.

# Features
- Fetches hotels dynamically from an API.
- Sorting by price (Low-High, High-Low).
- Optimized image loading using next/image.
- Custom components for reusability (ImageComponent.tsx, PriceSection.tsx, etc.).
- Fully tested with Jest + React Testing Library (97%+ coverage).
- Handles API errors gracefully (returns empty array on failure).
- Styled with TailwindCSS for rapid development.
- Responsive design


# Installation & Setup
## Clone the Repository
```sh
git clone https://github.com/rajpedamale/qantas-group-accommodation.git
cd qantas-group-accommodation
```

## Install Dependencies
```sh
npm install
```

## Set Up Environment Variables
Create a .env.local file and add:

```ini
NEXT_PUBLIC_API_URL=http://localhost:3000
```
_(Modify this based on your API endpoint.)_

## Run the Development Server
```sh
npm run dev
```
Access the app at http://localhost:3000.

## Running Tests
To run Jest tests:
```sh
npm test
```
To check test coverage:

```sh
npm run test -- --coverage
```

# Approach
- Every component has a single responsibility
- Group the components together in the codebase where it makes sense
- Keep the tests next to source code, so it's immediately apparent if the code is missing tests
- Tests are discard-able. Re-create them whenever necessary. Especially, when doing the refactors
- I have added comments and commit messages along with my thought process.
  - During development, I would use conventional commits, so that we can use automated tools to generate release notes, versioning etc
- Tried to keep to small commits, with one feature/refactor per commit
  - couple to times I failed on this goal
- Always commit code in working state
  - Ensure all tests will pass
  - Do a quick sanity check on the browser as well
- I have tried to address accessibility with this code. There definitely is more scope for this
- I did test on the simulated mobile view as well.
  - There is a bug in this view, the dropdown shows up away from where you click
- There is a warning thrown during testing, that this code uses outdated JSX transform.
  - It looks like false warning.
  - For production deployments, I would spend more time figuring out the source of this warning.
- Only Jest+RTL is used for unit testing this codebase
  - I would like to use Playwright/Nightwatch for User Acceptance testing
- Image loading went through 3 rounds of implementation
  1. Simple `img` tag. Saw the following issues
     - Delayed loading of images
     - Layout shifts
  2. Client side loading with placeholder image.
     - Improved the experience by removing layout shifts
     - Refreshing the page was still taking time to load the images
  3. Server Side loading
     - Only the first page load has delayed loading of images
     - Subsequent loads are snappy
     - Images are consistent on every load
- Also added a hotel specific param to the image url to avoid the browser cache applying the same image to all hotels
  - Maybe this is not needed once the SSR implementation is committed

# Key Components
- API Fetch
  - Fetches hotel data from an API and handles errors gracefully.
- Main Hotel Listing
  - Renders the list of hotels and handles sorting.
- Optimized Image Loading
  - Uses next/image with a placeholder.

# Future Improvements
- Improve accessibility (a11y) – Add ARIA labels where necessary.
- Paginate results – Implement server-side pagination for large datasets.

# Contributing
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-branch`.
3. Commit changes: `git commit -m "Added new feature"`.
4. Push to GitHub: `git push origin feature-branch`.
5. Open a pull request!

# License
This project is licensed under the MIT License
