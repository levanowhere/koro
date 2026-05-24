# ✝ Filipino Mass Song Practice Website

A simple, beautiful, mobile-friendly website to help your choir practice before each mass. It shows YouTube tutorial videos, plays instrumental audio files, and displays song lyrics — all in a heavenly colour theme.

---

## 📁 Folder Structure

```
your-repo/
├── index.html          ← The main website (edit this each mass)
├── audio/              ← Put all your .mp3 / .m4a files here
│   ├── entrance-song.mp3
│   ├── kyrie.mp3
│   └── ...
└── README.md           ← This file
```

---

## 🚀 How to Host on GitHub Pages (First Time Setup)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up (free).

### Step 2 — Create a New Repository
1. Click the **＋** button (top right) → **New repository**
2. Name it: `filipino-mass` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload Your Files
1. In your new repository, click **Add file → Upload files**
2. Drag and drop `index.html` and the `audio/` folder
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **Pages** (left sidebar)
3. Under **Source**, choose **Deploy from a branch**
4. Branch: `main` · Folder: `/ (root)`
5. Click **Save**
6. Wait ~1 minute, then your site is live at:
   `https://YOUR-USERNAME.github.io/filipino-mass/`

---

## ✏️ How to Edit the Website for Each Mass

### Change the Mass Title & Date
Open `index.html` and find these two lines (around line 175–178):

```html
<h1>Filipino Mass</h1>
<p class="subtitle">31 May 2026 &nbsp;·&nbsp; Song Practice Guide</p>
```

Change the date to match your next mass, e.g. `14 June 2026`.

---

### Change a YouTube Video
Each song card has a comment above the `<iframe>` tag showing the current video ID:

```html
<!-- YouTube video ID: 4B0nxsYk1N4 -->
<iframe src="https://www.youtube.com/embed/4B0nxsYk1N4" ...>
```

To change the video:
1. Go to the YouTube video you want
2. Copy the ID from the URL — it's the part after `v=` or after `youtu.be/`
   - Example: `https://youtu.be/ABC123xyz` → ID is `ABC123xyz`
3. Replace the old ID in **both** the comment and the `src=""` attribute

---

### Add an Audio File (Instrumental)
1. Put your `.mp3` or `.m4a` file in the `audio/` folder
2. In `index.html`, find the song's audio section. It looks like:

```html
<div class="audio-placeholder">
  <span class="upload-icon">🎼</span>
  Add instrumental file ...
  <code>&lt;audio controls src="audio/entrance-song.mp3"&gt;&lt;/audio&gt;</code>
</div>
```

3. **Replace the entire `<div class="audio-placeholder">...</div>` block** with:

```html
<audio controls src="audio/your-filename.mp3"></audio>
```

Make sure the filename matches exactly (including uppercase/lowercase).

---

### Edit Lyrics
Find the song's lyrics section:

```html
<pre>
[Paste lyrics for Song 1 here]
...
</pre>
```

Delete the placeholder text and type (or paste) the real lyrics inside the `<pre>` tags.  
Line breaks in the file = line breaks on screen. Keep it simple.

---

### Change a Song Title or Role Label
Each song card header looks like:

```html
<span class="song-title">Entrance Song</span>
<span class="song-role">Entrance</span>
```

Just change the text between the tags.

---

### Update the Navigation Bar
The nav links are near the top of `index.html`:

```html
<li><a href="#song-1">1. Entrance</a></li>
```

Change the link text to match your song name. The `href="#song-1"` must match the `id="song-1"` on the card — don't change those numbers unless you know what you're doing.

---

## ➕ How to Add a New Song

1. Copy an entire `<article class="song-card" ...>...</article>` block
2. Paste it after the last song card
3. Change:
   - `id="song-11"` (use the next number)
   - `animation-delay` (add 0.05 to the previous one)
   - Song number, title, role
   - YouTube video ID
   - Audio file reference
   - Lyrics
4. Add a matching nav link: `<li><a href="#song-11">11. New Song</a></li>`

---

## ❌ How to Delete a Song

1. Find the `<article class="song-card" id="song-X">` block
2. Delete everything from that `<article>` opening tag to its closing `</article>` tag
3. Delete the corresponding `<li>` from the navigation bar

---

## 💾 How to Save Changes (After Editing on GitHub.com)

If you edit directly on GitHub:
1. After editing, scroll down and click **Commit changes**
2. Your site will update automatically within ~1 minute

If you edit locally on your computer:
1. Make your edits in any text editor (Notepad, VS Code, etc.)
2. Go to your GitHub repository → **Add file → Upload files**
3. Upload the changed `index.html` (it will overwrite the old one)
4. Click **Commit changes**

---

## 🎵 Supported Audio Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| MP3    | `.mp3`    | Best for web, most compatible |
| M4A    | `.m4a`    | Good quality, works on most browsers |
| WAV    | `.wav`    | High quality but large files |
| OGG    | `.ogg`    | Good for Firefox |

**Tip:** Keep audio files under 20 MB each so the page loads quickly. If your files are larger, convert them to MP3 using a free tool like [CloudConvert](https://cloudconvert.com).

---

## 🔗 Quick Reference

| Task | Where |
|------|-------|
| Change date/title | Line ~175 in `index.html` |
| Change YouTube video | Find `<!-- YouTube video ID: ... -->`, change the ID |
| Add audio file | Replace `<div class="audio-placeholder">` with `<audio controls src="...">` |
| Edit lyrics | Find `<pre>` tag inside the song card |
| Add a song | Copy an `<article>` block, update IDs and content |
| Delete a song | Delete the `<article>` block + its `<li>` in the nav |
| Change nav label | Find `<li><a href="#song-X">` near top of file |

---

*Made with love for the Filipino Mass Community ✝*
