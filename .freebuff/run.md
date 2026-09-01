# Run Instructions for Skilline Website

## Reproducing from a Fresh Checkout

This is a static HTML page with no build step required. No dependency installation is needed.

1. Ensure you have Python 3.x installed.
2. Navigate to the project root directory.

## Running the Dev Server

Start a local HTTP server using Python:

```bash
# From the project root directory:
python -m http.server 8080
```

The site will be available at `http://localhost:8080`.

## Notes

- This is a static site using Tailwind CSS (via CDN) and Alpine.js (via CDN)
- No Node.js, npm, or build tools are required
- The server can be stopped with Ctrl+C or by closing the terminal
