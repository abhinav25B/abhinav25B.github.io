# Changelog

## [2026-08-26] - 26 Aug 2026 Changes

### Added
- **Skills**: Added official logo cards for **Google Antigravity** (`src/png/google-antigravity.png`) and **Codex** (`src/png/codex-logo.png`) to the Tech Stack grid.
- **Resume**: Added latest 2026 resume (`src/pdf/Abhinav_B_2026_Resume.pdf`).

### Changed
- **Experience Alignment**: Audited and updated total experience duration to **5+ years** across all pages, SEO metadata (`description`, `og:description`, `twitter:description`), hero intro paragraph (`#info-para`), and About Me section narrative.
- **Hero Capabilities**: Added FBDI data conversions (`Financials, SCM, BIP reports, FBDI data conversions, and custom integrations`) in the hero summary.
- **Oracle Project Card**: Standardized the Oracle card into a unified project box layout with small icon badge (`faviconforProject`) and complete resume-based description covering end-to-end data migration (OSSI).
- **Accenture & Infosys Cards**: Removed client company preview logos (Metco and Cummins) and replaced rigid fixed height sizing with clean, content-fitted dynamic heights and responsive padding.
- **Resume Button**: Updated `openURL()` download trigger to point to `src/pdf/Abhinav_B_2026_Resume.pdf`.
- **Footer Quote**: Synchronized Dwight Schrute quote (*"I'm ready to face any challenge that might be foolish enough to face me."*).

## [v1_2026] - 2026-01-28

### Added
- **Oracle Project Card**: Added a new project entry for role "Senior Cloud Consultant" at HID Global (Oracle).
- **Responsive CSS**: Created `oracle-overrides.css` to handle complex responsive layouts for the Oracle project card.
- **Assets**: Added cropped Oracle logo (`src/png/oracle_cropped_text.png`) for cleaner branding integration.

### Changed
- **Oracle Card Layout**:
    - **Desktop**: Implemented a horizontal layout: `[Title] - [@] - [Logo]`.
    - **Mobile**: Implemented a centered vertical stack layout for better readability on small screens (<768px).
- **Typography**: Applied "Orbitron" font to the "@" symbol to match the Oracle brand aesthetic.
- **Footer**: Fixed layout issues where the quote and author were not wrapping correctly on smaller devices.

### Fixed
- **Project Grid**: Restored missing `project-box-wrapper` div that was breaking the grid alignment for project cards.
- **Logo Display**: Removed the red bar from the Oracle logo image to focus purely on the brand text/symbol usage.

### Fixed (Hotfix)
- **Resume Button**: Corrected the file path in `openURL()` function to point to the newly uploaded `Abhinav_B_2025_Resume.pdf`, resolving the broken "Resume" button issue.
- **Back-to-Top Button**: Adjusted the mobile positioning (`bottom: 60px`) to prevent overlap with footer copyright text.
