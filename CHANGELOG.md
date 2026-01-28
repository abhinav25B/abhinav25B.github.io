# Changelog

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
