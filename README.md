# Society of Indian Grandparents (SIG)

A community website for Indian elderly people in Toronto, providing resources, events, and FAQs to help navigate life in a new country and build community connections.

## Features

- 🌐 Bilingual support (English/Hindi)
- 📱 Fully responsive design
- 🎨 Indian-inspired color palette
- ♿ Large, readable fonts for accessibility
- 📅 Events calendar
- 📚 Resource directory
- ❓ FAQ section with accordion

## Deploying to GitHub Pages

1. Create a new repository on GitHub named `indiangrandparents.com`

2. Initialize git in this folder and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/indiangrandparents.com.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"

4. Configure your custom domain:
   - In the same Pages settings, enter `indiangrandparents.com` in the "Custom domain" field
   - Click "Save"
   - In your domain registrar (where you bought the domain), add these DNS records:
     - Type: A, Name: @, Value: 185.199.108.153
     - Type: A, Name: @, Value: 185.199.109.153
     - Type: A, Name: @, Value: 185.199.110.153
     - Type: A, Name: @, Value: 185.199.111.153
     - Type: CNAME, Name: www, Value: YOUR-USERNAME.github.io

5. Wait 10-20 minutes for DNS to propagate, then your site will be live!

## Customizing Content

- Edit `index.html` to update text, add more events, resources, or FAQs
- Modify `styles.css` to change colors, fonts, or layout
- Update `script.js` to add new interactive features

## Adding More Languages

To add additional languages, update the HTML elements with new `data-` attributes and modify the language toggle in `script.js`.

## Local Development

Simply open `index.html` in your web browser to preview the site locally.
