# Contributing

Thank you for helping improve this choir practice website! This project is intended as a simple open source reference for Filipino mass song practice websites. Your contributions are welcome.

## How to contribute

1. Fork the repository.
2. Create a branch for your change:
   - `git checkout -b fix-song-order`
3. Make your edits in a clean, readable way.
4. Commit with a clear message:
   - `git commit -m "Update lyrics and add new song card"`
5. Push your branch and open a pull request.

## What you can contribute

- Bug fixes in `index.html`, `style.css`, or the site layout
- Better instructions or examples in `README.md`
- New song cards, improved navigation, and accessibility fixes
- Better audio guidance or a more polished mobile experience

## Notes for contributors

- `index.html` is the main website page.
- `style.css` contains the page styling.
- `audio/` holds instrumental audio files.
- `lyrics/` is available for storing optional lyric files or references.
- Keep filenames simple and lowercase.
- When adding or removing songs, update both the song card and the matching navigation link.

## Preview your changes locally

1. Open `index.html` in a browser to check layout and audio.
2. Verify any new YouTube embeds use the correct video ID.
3. Confirm lyrics are inside the `<pre>` block and display correctly.

## Using this repo as a reference

If you want to use this project as a template for your own choir practice website:

- Fork or clone this repository.
- Rename the repository to match your choir or church.
- Update `index.html` with your own song titles, video IDs, audio files, and lyrics.
- Keep `README.md` as the setup reference for your own contributors.
- Replace the `CODEOWNERS` placeholder with your GitHub username if you want review ownership.

## Code style

- Use 2 spaces for indentation.
- Keep HTML simple and semantic.
- Use descriptive section titles and clear song headings.
- Keep any added audio file names consistent with the `audio/` folder references.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
