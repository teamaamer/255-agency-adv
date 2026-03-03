# Create PNG Version of 255 White Logo

## Option 1: Online Converter (Easiest)

1. Go to https://cloudconvert.com/svg-to-png
2. Upload `/public/255-logo-white.svg`
3. Set dimensions to 200x200px (or higher for better quality)
4. Convert and download
5. Save as `255-logo-white.png` in the `/public` folder

## Option 2: Using ImageMagick (Command Line)

If you have ImageMagick installed:

```bash
cd /Users/hamza/Downloads/255Agency-main\ 2/public
convert -background none -density 300 255-logo-white.svg -resize 200x200 255-logo-white.png
```

## Option 3: Using Inkscape (Command Line)

If you have Inkscape installed:

```bash
cd /Users/hamza/Downloads/255Agency-main\ 2/public
inkscape 255-logo-white.svg --export-type=png --export-filename=255-logo-white.png --export-width=200
```

## Option 4: Using a Design Tool

1. Open `255-logo-white.svg` in Figma, Adobe Illustrator, or Sketch
2. Export as PNG at 2x or 3x resolution
3. Save as `255-logo-white.png` in the `/public` folder

## Recommended Settings

- **Width:** 200-400px (for email use)
- **Background:** Transparent
- **Format:** PNG with transparency
- **Quality:** High (for crisp display in emails)

After creating the PNG, the email templates will automatically use it.
